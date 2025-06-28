import { BlockContent } from "mdast";
import { Endpoint } from "../../../api-doc-schema/endpoint.js";
import { HttpMethodAndPath } from "./method-path.js";
import { PathParams } from "./params/path-params.js";
import { QueryParams } from "./params/query-params.js";

export function EndpointDetail(endpoint: Endpoint): BlockContent[] {
    return [
        HttpMethodAndPath(endpoint.httpMethod, endpoint.path),
        ...PathParams(endpoint.pathParams),
        ...QueryParams(endpoint.queryParams),
    ];
}