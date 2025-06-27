import { InlineCode } from "mdast";

export function createHttpMethodAndPath(httpMethod: string, path: string): InlineCode {
    return {
        type: 'inlineCode',
        value: `${httpMethod} ${path}`,
    };
}