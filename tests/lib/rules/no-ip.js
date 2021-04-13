/**
 * @fileoverview enforces no ip address in comments or string literals
 * @author Shivam Dhruva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-ip"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-ip", rule, {
  valid: [
    {
      code: '// this is a plain string\nvar ip = "no ip here";',
    },
  ],

  invalid: [
    {
      code: '// 192.168.1.1\nvar ip = "127.0.0.1"',
      errors: [
        {
          message: "PII Violation: cannot use IP address in a comment",
        },
        {
          message: "PII Violation: cannot use IP address in a literal",
        },
      ],
    },
  ],
});
