import { OpenAPI } from "openapi-types";

export type ApiDocModel = {
    endpoints: string[];
};

export function generateApiDocModel(apiDoc: OpenAPI.Document): ApiDocModel {
    const endpoints = Object.keys(apiDoc.paths || {});

    return {
        endpoints: endpoints,
    }
}