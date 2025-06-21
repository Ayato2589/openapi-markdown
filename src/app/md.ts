import { Root } from "mdast";
import { ApiDocModel } from "./api-doc-model.js";
import { toMarkdown } from "mdast-util-to-markdown";

export function generateMd(apiDocModel: ApiDocModel): string {
    // HACK: ツリーを分割した方が読みやすい
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
                children: apiDocModel.endpoints.map(endpoint => ({
                    type: 'listItem',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                { type: 'inlineCode', value: endpoint }
                            ],
                        },
                    ],
                })),
            },
        ],
    }

    return toMarkdown(tree);
}
