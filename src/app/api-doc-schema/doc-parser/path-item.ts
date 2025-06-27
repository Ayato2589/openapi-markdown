import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint.js";
import { parseOperation } from "./operation.js";

export function parsePathItem(path: string, pathItem: OpenAPIV3.PathItemObject): Endpoint[] {
    const endpoints: Endpoint[] = [];

    // method: HTTPメソッド(英小文字)
    // operation: レスポンス、リクエスト
    for (const [method, operation] of Object.entries(pathItem)) {
        endpoints.push(parseOperation(
            path,
            method.toUpperCase() as Endpoint['httpMethod'],
            operation as OpenAPIV3.OperationObject,
        ));
    }
    
    return endpoints;
}