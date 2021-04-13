/**
 * @fileoverview enforces no emails in comments or string literals
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
      description: "enforces no email in comments or string literals",
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
    const emailPattern = new RegExp(
      `\\b[a-z0-9._%\\+\\-—|]+@[a-z0-9.\\-—|]+\\.[a-z|]{2,6}\\b`
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
          if (emailPattern.test(comment.value)) {
            context.report({
              loc: utils.toForceLocation(comment.loc),
              message: "PII Violation: cannot use email address in a comment",
              type: "problem",
            });
          }
        }
      },
      Literal(node) {
        if (emailPattern.test(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use email address in a literal",
            type: "problem",
          });
        }
      },
      LiteralToken(node) {
        if (emailPattern.test(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use email address in a literal",
            type: "problem",
          });
        }
      },
    };
  },
};
