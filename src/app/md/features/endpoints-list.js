import { EndpointDetail } from "./endpoint/endpoint-detail.js";
export function EndpointList(endpoints) {
    return endpoints.flatMap(EndpointDetail);
}
