/**
 * @fileoverview enforces no date of birth in comments or string literals
 * @author Shivam Dhruva
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const utils = require("../internal/utils");
module.exports = {
  meta: {
    docs: {
      description: "enforces no date of birth in comments or string literals",
      category: "PII Compliance",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [],
    type: "problem",
  },

  create: function (context) {
    // variables should be defined here
    const sourceCode = context.getSourceCode();
    const dobPattern = new RegExp(
      `\\b(birth|birthdate|birthday|dob|born)\\W+(?:\\w+\\W+){0,5}?(?<REDACT>(\\d{4}|\\d{1,2})[\\/\\-]\\d{1,2}[\\/\\-](\\d{4}|\\d{1,2}))\\b`
    );
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // give me methods
      Program() {
        for (const comment of sourceCode.getAllComments()) {
          if (dobPattern.test(comment.value)) {
            context.report({
              loc: utils.toForceLocation(comment.loc),
              message: "PII Violation: cannot use date of birth in a comment",
              type: "problem",
            });
          }
        }
      },
      Literal(node) {
        if (dobPattern.test(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use date of birth in a literal",
            type: "problem",
          });
        }
      },
      LiteralToken(node) {
        if (dobPattern.test(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use date of birth in a literal",
            type: "problem",
          });
        }
      },
      VariableDeclarator(node) {
        if (!["Literal"].includes(node.init.type)) return;
        if (dobPattern.test(`${node.id.name} ${node.init.value}`)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use date of birth in a literal",
            type: "problem",
          });
        }
      },
    };
  },
};
