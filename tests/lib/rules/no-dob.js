/**
 * @fileoverview enforces no date of birth in comments or string literals
 * @author Shivam Dhruva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-dob"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-dob", rule, {
  valid: [
    {
      code: '// this is a plain string\nvar dob = "no dob here";',
    },
  ],

  invalid: [
    {
      code: '// my birthdate is 12-10-1992\nvar dob = "12-10-1992"',
      errors: [
        {
          message: "PII Violation: cannot use date of birth in a comment",
        },
        {
          message: "PII Violation: cannot use date of birth in a literal",
        },
      ],
    },
  ],
});
