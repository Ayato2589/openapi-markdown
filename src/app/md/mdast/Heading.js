export function Heading(text, depth) {
    return {
        type: 'heading',
        depth,
        children: [
            {
                type: 'text',
                value: text,
            },
        ],
    };
}
