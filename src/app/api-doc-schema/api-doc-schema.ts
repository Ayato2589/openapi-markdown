import { OpenAPI } from "openapi-types";
import { Endpoint, extractEndpoints } from "./endpoint.js";

export type ApiDocSchema = {
    endpoints: Endpoint[];
};

export function generateApiDocSchema(apiDoc: OpenAPI.Document): ApiDocSchema {
    return {
        endpoints: extractEndpoints(apiDoc),
    };
}
