import { parseOperation } from "./operation.js";
export function parsePathItem(path, pathItem) {
    const endpoints = [];
    // method: HTTPメソッド(英小文字)
    // operation: レスポンス、リクエスト
    for (const [method, operation] of Object.entries(pathItem)) {
        endpoints.push(parseOperation(path, method.toUpperCase(), operation));
    }
    return endpoints;
}
