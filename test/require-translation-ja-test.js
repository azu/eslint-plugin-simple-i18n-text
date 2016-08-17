"use strict";
const RuleTester = require("eslint").RuleTester;
const tester = new RuleTester();
import rule from "../src/rules/require-translation-ja";
const parserOptions = {
    ecmaVersion: 6,
    ecmaFeatures: {
        jsx: true
    }
};
tester.run("require-translation-ja", rule, {
    valid: [
        {code: `<p>{"OK"}</p>`, parserOptions},
        {code: `<p>{t("OK")}</p>`, parserOptions},
        {code: `<p>{true}</p>`, parserOptions},
        {code: `<p key="ok"></p>`, parserOptions},
        {code: `const str = "OK"; <p>{ok}</p>`, parserOptions},
        {code: `<p>English is OK</p>`, parserOptions},
        {code: `<p>▼</p>`, parserOptions},
        {code: `<p>123</p>`, parserOptions},
    ],
    invalid: [
        {
            code: `<p>日本語</p>`,
            errors: [`"日本語"を t() または pt() で囲んでください。`],
            parserOptions
        },
        {
            code: `<a title="日本語">ng</a>`,
            errors: [`"日本語"を t() または pt() で囲んでください。`],
            parserOptions
        },
        {
            code: `
class DetailButton extends React.Component {
  render() {
    return <div className="DetailButton">
      <button>ボタン</button>
    </div>;
  }
}`,
            errors: [`"ボタン"を t() または pt() で囲んでください。`],
            parserOptions
        }
    ]
});
