import { OpenAPI } from "openapi-types";

export type ApiDocSchema = {
    endpoints: string[];
};

export function generateApiDocSchema(apiDoc: OpenAPI.Document): ApiDocSchema {
    const endpoints = Object.keys(apiDoc.paths || {});

    return {
        endpoints: endpoints,
    }
}