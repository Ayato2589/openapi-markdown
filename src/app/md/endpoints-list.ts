import { List, ListItem } from "mdast";
import { Endpoint } from "../api-doc-schema/endpoint.js";
import { createEndpointListItem } from "./endpoint/endpoint.js";

export function createEndpointList(endpoints: Endpoint[]): List {
    const items: ListItem[] = endpoints.map(createEndpointListItem);

    return {
        type: 'list',
        ordered: false,
        children: items,
    };
}
