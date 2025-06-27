import { ListItem } from "mdast";
import { Endpoint } from "../../api-doc-schema/endpoint.js";
import { createHttpMethodAndPath } from "./method-path.js";
import { createPathParams } from "./pathParams.js";

export function createEndpointListItem(endpoint: Endpoint): ListItem {
    return {
        type: 'listItem',
        children: [
            {
                type: 'paragraph',
                children: [
                    createHttpMethodAndPath(endpoint.httpMethod, endpoint.path),
                ],
            },
            createPathParams(endpoint.pathParams),
        ],
    };
}