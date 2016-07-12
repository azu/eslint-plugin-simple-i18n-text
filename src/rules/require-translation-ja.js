"use strict";
const isStringLiteral = (node) => {
    return node.type === "Literal" && typeof node.value === "string";
};
export const japaneseRegExp = /(?:[々〇〻\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF]|[ぁ-んァ-ヶ])/;
/**
 * 日本語のみを対象にした no-raw-value 
 * Check raw string literal in JSXElement, but allow non-japanese characters.
 */
module.exports = function(context) {
    return {
        JSXElement(node){
            if (!node.children) {
                return;
            }
            const children = node.children;
            children.filter(isStringLiteral).forEach(literal => {
                const value = literal.value.trim();
                if (!value || value.length === 0) {
                    return;
                }
                if (!japaneseRegExp.test(value)) {
                    return;
                }
                const message = `"${value}"を t() または pt() で囲んでください。`;
                context.report({node: literal, message: message});
            });
        }
    }
};
