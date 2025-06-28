import { Heading } from "mdast";

type HeadingDepth = 1 | 2 | 3 | 4 | 5 | 6;

export function Heading(text: string, depth: HeadingDepth): Heading {
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