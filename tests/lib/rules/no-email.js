/**
 * @fileoverview enforces no emails in comments or string literals
 * @author Shivam Dhruva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-email"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-email", rule, {
  valid: [
    {
      code: '// this is a plain string\nvar numb = "no email here";',
    },
  ],

  invalid: [
    {
      code: '// email@test.com\nvar test = "email@test.com";',
      errors: [
        {
          message: "PII Violation: cannot use email address in a comment",
        },
        {
          message: "PII Violation: cannot use email address in a literal",
        },
      ],
    },
  ],
});
