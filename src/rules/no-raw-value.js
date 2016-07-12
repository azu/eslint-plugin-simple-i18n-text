"use strict";
const isStringLiteral = (node) => {
    return node.type === "Literal" && typeof node.value === "string";
};
module.exports = function(context) {
    const message = "The literal should be wrapped by `t()` or `pt()`.";
    return {
        JSXElement(node){
            if (!node.children) {
                return;
            }
            const children = node.children;
            children.filter(isStringLiteral).forEach(literal => {
                const value = literal.value;
                if (!value) {
                    return;
                }
                context.report({node: literal, message: message});
            });
        }
    }
};
