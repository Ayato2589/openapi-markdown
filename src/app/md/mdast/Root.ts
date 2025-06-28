import { BlockContent, Root } from "mdast";

export function Root(children: BlockContent[]): Root {
    return {
        type: 'root',
        children,
    };
}