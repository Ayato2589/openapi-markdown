import { Root } from "mdast";
import { ApiDocSchema } from "./api-doc-schema.js";
import { toMarkdown } from "mdast-util-to-markdown";

export function generateMd(apiDocSchema: ApiDocSchema): string {
    const tree: Root = {
        type: 'root',
        children: [
            {
                type: 'heading',
                depth: 1,
                children: [{ type: 'text', value: 'エンドポイント一覧' }],
            },
            {
                type: 'list',
                ordered: false,
                children: apiDocSchema.endpoints.map(endpoint => ({
                    type: 'listItem',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'inlineCode',
                                    value: endpoint.path,
                                },
                            ],
                        },
                    ],
                })),
            },
        ],
    };

    return toMarkdown(tree);
}
