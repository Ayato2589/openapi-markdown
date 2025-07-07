import { BlockContent } from "mdast";
import { Endpoint } from "../../api-doc-schema/endpoint";
import { EndpointDetail } from "./endpoint/endpoint-detail";

export function EndpointList(endpoints: Endpoint[]): BlockContent[] {
    return endpoints.flatMap(EndpointDetail);
}
