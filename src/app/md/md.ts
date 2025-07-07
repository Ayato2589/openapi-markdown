import { toMarkdown } from "mdast-util-to-markdown";
import { gfmToMarkdown } from "mdast-util-gfm";
import { ApiDocSchema } from "../api-doc-schema/api-doc-schema";
import { Root } from "./mdast/Root";
import { EndpointList } from "./features/endpoints-list";

export function generateMd(apiDocSchema: ApiDocSchema): string {
    const tree = Root([
        ...EndpointList(apiDocSchema.endpoints),
    ]);

    return toMarkdown(tree, {
        extensions: [gfmToMarkdown()], // テーブル(表)を出力するためにGFM拡張が必要
    });
}
