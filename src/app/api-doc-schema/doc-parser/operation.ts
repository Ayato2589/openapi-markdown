import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint";
import { extractPathParams, extractQueryParams } from "./parameters";
import { parseRequestBody } from "./request-body";
import { parseResponses } from "./responses";

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