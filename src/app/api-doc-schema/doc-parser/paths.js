import { parsePathItem } from "./path-item.js";
export function parsePaths(paths) {
    const endpoints = [];
    // path: エンドポイントのパス文字列 (例: "/pet/findByTag", "/users/{userId}")
    // pathItem: HTTPメソッド、パラメーター、レスポンスなど
    for (const [path, pathItem] of Object.entries(paths)) {
        endpoints.push(...parsePathItem(path, pathItem));
    }
    return endpoints;
}
