# eslint-plugin-simple-i18n-text [![Build Status](https://travis-ci.org/azu/eslint-plugin-simple-i18n-text.svg?branch=master)](https://travis-ci.org/azu/eslint-plugin-simple-i18n-text)

ESLint plugin for [simple-i18n-text](https://github.com/shatee/simple-i18n-text "simple-i18n-text").

## Install

Install with [npm](https://www.npmjs.com/):

    npm install eslint-plugin-simple-i18n-text

## Usage

Need to enable "jsx" to ESLint option

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

Add "simple-i18n-text" to your `.eslintrc`

```json
{
  "plugins": [
    "simple-i18n-text"
  ],
  "rules":{
    "simple-i18n-text/require-translation-ja": 
  }
}
```

## Rules

### [src/rules/no-raw-value.js](src/rules/no-raw-value.js)

Disallow to string literal in JSXElement.

**NG**:
```jsx
// NG
<p>NG</p>
```

**OK**:
```Jsx
<p>{"OK"}</p>
<p>{t("OK")}</p>
<p>{pt("OK")}</p>
```

### [src/rules/require-translation-ja.js](src/rules/require-translation-ja.js)

日本語のみを対象にした `no-raw-value` のルール。

Check raw string literal in JSXElement, but allow non-japanese characters.

**NG**:
```jsx
// NG
<p>日本語はダメ</p>
```

**OK**:
```Jsx
<p>OK</p>
<p>123</p>
<p>!?</p>
<p>▼</p>
<p>{"OK"}</p>
<p>{t("OK")}</p>
<p>{pt("OK")}</p>
```

## Changelog

See [Releases page](https://github.com/azu/eslint-plugin-simple-i18n-text/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/eslint-plugin-simple-i18n-text/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
