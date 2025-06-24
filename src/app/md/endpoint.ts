import { ListItem } from "mdast";
import { Endpoint } from "../api-doc-schema/endpoint.js";

export function createEndpointListItem(endpoint: Endpoint): ListItem {
    return {
        type: 'listItem',
        children: [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'inlineCode',
                        value: `${endpoint.httpMethod} ${endpoint.path}`,
                    },
                ],
            },
        ],
    };
}