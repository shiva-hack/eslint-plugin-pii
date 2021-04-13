/**
 * @fileoverview enforces no phone numbers in comments or string literals
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
      description: "enforces no phone numbers in comments or string literals",
      category: "PII Compliance",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    type: "problem",
  },

  create: function (context) {
    // variables should be defined here
    const sourceCode = context.getSourceCode();
    const francePhonePattern = new RegExp(
      `\\b([0O]?[1lI][1lI])?[3E][3E][0O]?[\\dOIlZEASB]{9}\\b`
    );
    const germanPhonePattern = new RegExp(
      `\\b[\\d\\w]\\d{2}[\\d\\w]{6}\\d[\\d\\w]\\b`
    );
    const ukPhonePattern = new RegExp(
      `(((\\+44)? ?(\\(0\\))? ?)|(0))( ?[0-9]{3,4}){3}`
    );
    const usPhonePattern = new RegExp(
      `\\b((\\+|\\b)[1l][\\-\\. ])?\\(?\\b[\\dOlZSB]{3,5}([\\-\\. ]|\\) ?)[\\dOlZSB]{3}[\\-\\. ][\\dOlZSB]{4}\\b`
    );

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    const regexTests = [
      francePhonePattern,
      germanPhonePattern,
      ukPhonePattern,
      usPhonePattern,
    ];

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
              message: "PII Violation: cannot use phone number in a comment",
              type: "problem",
            });
          }
        }
      },
      Literal(node) {
        if (performRegexTest(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use phone number in a literal",
            type: "problem",
          });
        }
      },
      LiteralToken(node) {
        if (performRegexTest(node.value)) {
          context.report({
            loc: utils.toForceLocation(node.loc),
            message: "PII Violation: cannot use phone number in a literal",
            type: "problem",
          });
        }
      },
    };
  },
};
