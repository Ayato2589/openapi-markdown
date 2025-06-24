import { Content, Heading, List, ListItem, TopLevelContent } from "mdast";
import { Endpoint } from "../api-doc-schema/endpoint.js";
import { createEndpointListItem } from "./endpoint.js";

export function createEndpointList(endpoints: Endpoint[]): TopLevelContent[] {
    const items: ListItem[] = endpoints.map(createEndpointListItem);

    const list: List = {
        type: 'list',
        ordered: false,
        children: items,
    };

    return [
        createEndpointListTitle(),
        list,
    ];
}

function createEndpointListTitle(): Heading {
    return {
        type: 'heading',
        depth: 2,
        children: [{ type: 'text', value: 'エンドポイント一覧' }],
    };
}