"use strict";
module.exports = {
    rules: {
        "no-raw-value": require("./rules/no-raw-value"),
        "require-translation": require("./rules/require-translation")
    },
    rulesConfig: {
        "simple-i18n-text/no-raw-value": "on",
        "simple-i18n-text/require-translation": "on"
    }
};