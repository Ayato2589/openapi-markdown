import { OpenAPI, OpenAPIV3 } from "openapi-types";

export function isOpenAPIV3(doc: OpenAPI.Document): doc is OpenAPIV3.Document {
    return (
        'openapi' in doc &&
        typeof doc.openapi === 'string' &&
        doc.openapi.startsWith('3.')
    );
}
