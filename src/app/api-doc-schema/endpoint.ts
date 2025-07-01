import { OpenAPIV3 } from "openapi-types";
import { parsePaths } from "./doc-parser/paths.js";
import { Param } from "./param.js";
import { Model } from "./model.js";

export type Endpoint = {
    path: string;
    httpMethod: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    pathParams: Param[];
    queryParams: Param[];
    reqBody?: Model
    // resp: Response[]
};

export function extractEndpoints(apiDoc: OpenAPIV3.Document): Endpoint[] {
    // paths: 各エンドポイントの詳細
    return parsePaths(apiDoc.paths!);
}
