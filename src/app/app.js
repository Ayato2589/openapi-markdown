import fs from "fs/promises";
import { generateMd } from "./md/md.js";
import { generateApiDocSchema } from "./api-doc-schema/api-doc-schema.js";
import { loadOpenapi } from "./openapi/load-openapi.js";
export async function runApp(inputPath, outputPath) {
    // yamlを読み込む
    const apiDocV3 = await loadOpenapi(inputPath);
    // 中間スキーマに変換
    const apiDocSchema = generateApiDocSchema(apiDocV3);
    // マークダウンに変換
    const markdown = generateMd(apiDocSchema);
    // ファイルに書き込む
    fs.writeFile(outputPath, markdown, 'utf-8');
}
