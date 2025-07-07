import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint";
import { parsePathItem } from "./path-item";

export function parsePaths(paths: OpenAPIV3.PathsObject): Endpoint[] {
    const endpoints: Endpoint[] = [];

    // path: エンドポイントのパス文字列 (例: "/pet/findByTag", "/users/{userId}")
    // pathItem: HTTPメソッド、パラメーター、レスポンスなど
    for (const [path, pathItem] of Object.entries(paths)) {
        endpoints.push(...parsePathItem(path, pathItem!));
    }

    return endpoints;
}