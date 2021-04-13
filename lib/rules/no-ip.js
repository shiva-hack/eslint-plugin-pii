/**
 * @fileoverview enforces no ip address in comments or string literals
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
      description: "enforces no ip address in comments or string literals",
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
    const ipV4Pattern = new RegExp(
      `\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b`
    );
    const ipV6Pattern = new RegExp(
      `\\b([\\d\\w]{4}|0)(\\:([\\d\\w]{4}|0)){7}\\b`
    );
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    const regexTests = [ipV4Pattern, ipV6Pattern];

    const performRegexTest = (value) =>
      regexTests.map((i) => i.test(value)).filter((i) => i === true).length > 0;

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // give me methods
      Program() {
        for (const comment of sourceCode.getAllComments()) {
          if (performRegexTest(comment.value)) {
            context.report({
              loc: utils.toForceLocation(comment.loc),
              message: "PII Violation: cannot use IP address in a comment",
              type: "problem",
            });
          }
        }
      },
      Literal(node) {
        if (performRegexTest(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use IP address in a literal",
            type: "problem",
          });
        }
      },
      LiteralToken(node) {
        if (performRegexTest(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use IP address in a literal",
            type: "problem",
          });
        }
      },
    };
  },
};
