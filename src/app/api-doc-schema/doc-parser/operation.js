import { extractPathParams, extractQueryParams } from "./parameters.js";
import { parseRequestBody } from "./request-body.js";
import { parseResponses } from "./responses.js";
export function parseOperation(path, httpMethod, operation) {
    return {
        path,
        httpMethod,
        pathParams: extractPathParams(operation.parameters),
        queryParams: extractQueryParams(operation.parameters),
        reqBody: parseRequestBody(operation.requestBody),
        responses: parseResponses(operation.responses),
    };
}
