import { BlockContent } from "mdast";
import { Endpoint } from "../../api-doc-schema/endpoint.js";
import { EndpointDetail } from "./endpoint/endpoint-detail.js";

export function EndpointList(endpoints: Endpoint[]): BlockContent[] {
    return endpoints.flatMap(EndpointDetail);
}
