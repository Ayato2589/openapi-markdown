import { OpenAPI } from "openapi-types";

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

    let endpoints: Endpoint[] = [];

    for (const [path, pathItem] of Object.entries(paths)) {
        for (const [method, operation] of Object.entries(pathItem)) {
            endpoints.push({
                path: path,
                httpMethod: method.toUpperCase() as Endpoint['httpMethod'],
            });
        }
    }

    return endpoints;
}
