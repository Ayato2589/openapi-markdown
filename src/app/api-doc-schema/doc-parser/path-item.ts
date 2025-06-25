import { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from "openapi-types";
import { Endpoint } from "../endpoint.js";

type PathItem = OpenAPIV2.PathItemObject | OpenAPIV3.PathItemObject | OpenAPIV3_1.PathItemObject;

export function parsePathItem(path: string, pathItem: PathItem): Endpoint[] {
    const endpoints: Endpoint[] = [];

    for (const [method, operation] of Object.entries(pathItem)) {
        endpoints.push({
            path: path,
            httpMethod: method.toUpperCase() as Endpoint['httpMethod'],
        });
    }

    return endpoints;
}