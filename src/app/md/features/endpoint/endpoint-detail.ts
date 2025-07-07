import { BlockContent } from "mdast";
import { Endpoint } from "../../../api-doc-schema/endpoint";
import { HttpMethodAndPath } from "./method-path";
import { PathParams } from "./params/path-params";
import { QueryParams } from "./params/query-params";
import { ReqBody } from "./req-body";
import { Responses } from "./responses/responses";

export function EndpointDetail(endpoint: Endpoint): BlockContent[] {
    return [
        HttpMethodAndPath(endpoint.httpMethod, endpoint.path),
        ...PathParams(endpoint.pathParams),
        ...QueryParams(endpoint.queryParams),
        ...ReqBody(endpoint.reqBody),
        ...Responses(endpoint.responses),
    ];
}