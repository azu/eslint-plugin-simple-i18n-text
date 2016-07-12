"use strict";
module.exports = {
    rules: {
        "no-raw-value": require("./rules/no-raw-value"),
        "require-translation-ja": require("./rules/require-translation-ja-ja")
    },
    rulesConfig: {
        "simple-i18n-text/no-raw-value": "on",
        "simple-i18n-text/require-translation-ja": "on"
    }
};