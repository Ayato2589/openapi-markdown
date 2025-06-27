import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint.js";
import { extractPathParams } from "./parameters.js";

export function parseOperation(path: string, httpMethod: Endpoint['httpMethod'], operation: OpenAPIV3.OperationObject): Endpoint {
    return {
        path,
        httpMethod,
        pathParams: extractPathParams(operation)
    };
}