"use strict";
const isStringLiteral = (node) => {
    return node.type === "Literal" && typeof node.value === "string";
};
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
                const message = `"${value}" should be wrapped by t() or pt().`;
                context.report({node: literal, message: message});
            });
        }
    }
};
