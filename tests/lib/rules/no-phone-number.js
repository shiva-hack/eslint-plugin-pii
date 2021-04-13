/**
 * @fileoverview enforces no phone numbers in comments or string literals
 * @author Shivam Dhruva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-phone-number"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-phone-number", rule, {
  valid: [
    {
      code: '// this is a plain string\nvar numb = "no number here";',
    },
  ],

  invalid: [
    {
      code: '// +1-541-754-3010\nvar numb = "+1-541-754-3010";',
      errors: [
        {
          message: "PII Violation: cannot use phone number in a comment",
        },
        {
          message: "PII Violation: cannot use phone number in a literal",
        },
      ],
    },
    {
      code: '// (541) 754-3010\nvar numb = "(541) 754-3010";',
      errors: [
        {
          message: "PII Violation: cannot use phone number in a comment",
        },
        {
          message: "PII Violation: cannot use phone number in a literal",
        },
      ],
    },
    {
      code: '// 001-541-754-3010\nvar numb = "001-541-754-3010";',
      errors: [
        {
          message: "PII Violation: cannot use phone number in a comment",
        },
        {
          message: "PII Violation: cannot use phone number in a literal",
        },
      ],
    },
    {
      code: '// 1-541-754-3010\nvar numb = "1-541-754-3010";',
      errors: [
        {
          message: "PII Violation: cannot use phone number in a comment",
        },
        {
          message: "PII Violation: cannot use phone number in a literal",
        },
      ],
    },
    {
      code: '// +44 7911 123456\nvar numb = "+44 7911 123456";',
      errors: [
        {
          message: "PII Violation: cannot use phone number in a comment",
        },
        {
          message: "PII Violation: cannot use phone number in a literal",
        },
      ],
    },
  ],
});
