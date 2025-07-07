import { HttpMethodAndPath } from "./method-path.js";
import { PathParams } from "./params/path-params.js";
import { QueryParams } from "./params/query-params.js";
import { ReqBody } from "./req-body.js";
import { Responses } from "./responses/responses.js";
export function EndpointDetail(endpoint) {
    return [
        HttpMethodAndPath(endpoint.httpMethod, endpoint.path),
        ...PathParams(endpoint.pathParams),
        ...QueryParams(endpoint.queryParams),
        ...ReqBody(endpoint.reqBody),
        ...Responses(endpoint.responses),
    ];
}
