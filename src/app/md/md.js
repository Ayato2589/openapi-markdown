import { toMarkdown } from "mdast-util-to-markdown";
import { gfmToMarkdown } from "mdast-util-gfm";
import { Root } from "./mdast/Root.js";
import { EndpointList } from "./features/endpoints-list.js";
export function generateMd(apiDocSchema) {
    const tree = Root([
        ...EndpointList(apiDocSchema.endpoints),
    ]);
    return toMarkdown(tree, {
        extensions: [gfmToMarkdown()], // テーブル(表)を出力するためにGFM拡張が必要
    });
}
