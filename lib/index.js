/**
 * @fileoverview PII linting rules for ESLint
 * @author Shivam Dhruva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
module.exports.configs = requireIndex(__dirname + "/configs");
