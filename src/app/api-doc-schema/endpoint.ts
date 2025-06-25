import { OpenAPI } from "openapi-types";
import { parsePaths } from "./doc-parser/paths.js";

export type Endpoint = {
    path: string;
    httpMethod: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    // pathParameters: Parameter[];
    // queryParameters: Parameter[];
    // requestBody?: Model
    // response: Response[]
};

export function extractEndpoints(apiDoc: OpenAPI.Document): Endpoint[] {
    const paths = apiDoc.paths;
    if (!paths) return [];

    return parsePaths(paths);
}
