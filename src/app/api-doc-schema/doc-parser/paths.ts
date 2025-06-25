import { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from "openapi-types";
import { Endpoint } from "../endpoint.js";
import { parsePathItem } from "./path-item.js";

export type Paths = OpenAPIV2.PathsObject | OpenAPIV3.PathsObject | OpenAPIV3_1.PathsObject;

export function parsePaths(paths: Paths): Endpoint[] {
    const endpoints: Endpoint[] = [];

    for (const [path, pathItem] of Object.entries(paths)) {
        endpoints.push(...parsePathItem(path, pathItem));
    }

    return endpoints;
}