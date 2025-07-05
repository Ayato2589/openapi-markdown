import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint.js";
import { extractPathParams, extractQueryParams } from "./parameters.js";
import { parseRequestBody } from "./request-body.js";
import { parseResponses } from "./responses.js";

export function parseOperation(path: string, httpMethod: Endpoint['httpMethod'], operation: OpenAPIV3.OperationObject): Endpoint {
    return {
        path,
        httpMethod,
        pathParams: extractPathParams(operation.parameters as OpenAPIV3.ParameterObject[]),
        queryParams: extractQueryParams(operation.parameters as OpenAPIV3.ParameterObject[]),
        reqBody: parseRequestBody(operation.requestBody as OpenAPIV3.RequestBodyObject),
        responses: parseResponses(operation.responses),
    };
}