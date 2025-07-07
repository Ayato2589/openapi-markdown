import { extractEndpoints } from "./endpoint.js";
export function generateApiDocSchema(apiDoc) {
    return {
        endpoints: extractEndpoints(apiDoc),
    };
}
