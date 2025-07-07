import { parsePaths } from "./doc-parser/paths.js";
export function extractEndpoints(apiDoc) {
    // paths: 各エンドポイントの詳細
    return parsePaths(apiDoc.paths);
}
