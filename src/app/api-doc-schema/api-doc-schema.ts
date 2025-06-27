import { OpenAPIV3 } from "openapi-types";
import { Endpoint, extractEndpoints } from "./endpoint.js";

export type ApiDocSchema = {
    endpoints: Endpoint[];
};

export function generateApiDocSchema(apiDoc: OpenAPIV3.Document): ApiDocSchema {
    return {
        endpoints: extractEndpoints(apiDoc),
    };
}
