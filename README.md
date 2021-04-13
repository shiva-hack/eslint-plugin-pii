# eslint-plugin-pii

![npm](https://img.shields.io/npm/v/eslint-plugin-pii) ![GitHub last commit](https://img.shields.io/github/last-commit/shiva-hack/eslint-plugin-pii) ![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-pii/peer/eslint) ![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/eslint-plugin-pii?cacheSeconds=300) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/f77de857bbe7426ba4eebe33d307ef84)](https://www.codacy.com/gh/shiva-hack/eslint-plugin-pii/dashboard?utm_source=github.com&utm_medium=referral&utm_content=shiva-hack/eslint-plugin-pii&utm_campaign=Badge_Grade) [![GitHub issues](https://img.shields.io/github/issues/shiva-hack/eslint-plugin-pii?cacheSeconds=300)](https://github.com/shiva-hack/eslint-plugin-pii/issues) [![GitHub license](https://img.shields.io/github/license/shiva-hack/eslint-plugin-pii?cacheSeconds=300)](https://github.com/shiva-hack/eslint-plugin-pii/blob/main/LICENSE)

PII linting rules for ESLint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pii`:

```
$ npm install eslint-plugin-pii --save-dev
```

## Recommended Usage

Use the recommended rules by extending your configuration. This adds the plugin to the eslint config and enforces the recommended rules.

```json
{
  "extend": ["plugin:pii/recommended"]
}
```

## Custom Usage

Add `pii` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["pii"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "pii/no-email": "error",
    "pii/no-dob": "warn",
    "pii/no-ip": "error",
    "pii/no-phone-number": "error"
  }
}
```

## Supported Rules

- `pii/no-email` - enforces no email in comments or string literals
- `pii/no-dob` - enforces no birth date in comments or string literals
- `pii/no-ip` - enforces no IP address in comments or string literals
- `pii/no-phone-number` - enforces no phone numbers in comments or string literals

## References

- [General PII Regular Expression](https://support.milyli.com/docs/quickstarts/regex/general-pii-regex)

## Show some love

<a href="https://www.buymeacoffee.com/shivamdhruva" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
