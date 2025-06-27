import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmToMarkdown } from "mdast-util-gfm";
import { ApiDocSchema } from "../api-doc-schema/api-doc-schema.js";
import { createEndpointList } from "./endpoints-list.js";

export function generateMd(apiDocSchema: ApiDocSchema): string {
    const tree: Root = {
        type: "root",
        children: [
            createEndpointList(apiDocSchema.endpoints),
        ],
    };

    return toMarkdown(tree, {
        extensions: [gfmToMarkdown()],
    });
}
