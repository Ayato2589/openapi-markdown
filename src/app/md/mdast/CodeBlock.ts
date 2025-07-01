import { BlockContent } from "mdast";

export function CodeBlock(lang: string, value: string): BlockContent {
    return {
        type: 'code',
        lang,
        value,
    };
}