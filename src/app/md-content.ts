import { OpenAPI } from "openapi-types";
import { MdContent } from "./md-tree";

export function extractMdContent(apiDoc: OpenAPI.Document): MdContent {
    const endpoints = Object.keys(apiDoc.paths || {});

    return {
        endpoints: endpoints,
    }
}