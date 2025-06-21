import { Root } from "mdast";

export type MdContent = {
    endpoints: string[];
};

export function generateMdTree(content: MdContent): Root {
    return {
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
                children: content.endpoints.map(endpoint => ({
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
    };
}
