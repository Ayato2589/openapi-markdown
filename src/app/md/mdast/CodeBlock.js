export function CodeBlock(lang, value) {
    return {
        type: 'code',
        lang,
        value,
    };
}
