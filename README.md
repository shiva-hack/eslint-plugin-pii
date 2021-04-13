# eslint-plugin-pii

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Code Climate][climate-image]][climate-url] [![Tidelift][tidelift-image]][tidelift-url]

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

## Show some love

<a href="https://www.buymeacoffee.com/shivamdhruva" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;width: auto;" ></a>
