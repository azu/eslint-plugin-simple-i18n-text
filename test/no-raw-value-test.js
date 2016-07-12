"use strict";
const RuleTester = require("eslint").RuleTester;
const tester = new RuleTester();
import rule from "../src/rules/no-raw-value";
const parserOptions = {
    ecmaVersion: 6,
    ecmaFeatures: {
        jsx: true
    }
};
tester.run("no-raw-value", rule, {
    valid: [
        {code: `<p>{"OK"}</p>`, parserOptions},
        {code: `<p>{t("OK")}</p>`, parserOptions},
        {code: `<p>{true}</p>`, parserOptions},
        {code: `<p key="ok"></p>`, parserOptions},
        {code: `const str = "OK"; <p>{ok}</p>`, parserOptions},
    ],
    invalid: [
        {
            code: `<p>NG</p>`,
            errors: ["The literal should be wrapped by `t()` or `pt()`."],
            parserOptions
        },
        {
            code: "<p>`NG`</p>",
            errors: ["The literal should be wrapped by `t()` or `pt()`."],
            parserOptions
        }, {
            code: `
class DetailButton extends React.Component {
  render() {
    return <div className="DetailButton">
      <button>detail button</button>
    </div>;
  }
}`,
            errors: ["The literal should be wrapped by `t()` or `pt()`."],
            parserOptions
        }
    ]
});
