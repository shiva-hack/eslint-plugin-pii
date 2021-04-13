"use strict";

module.exports = {
  plugins: ["pii"],
  rules: {
    "pii/no-email": "error",
    "pii/no-dob": "warn",
    "pii/no-ip": "error",
    "pii/no-phone-number": "error",
  },
};
