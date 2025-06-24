import { loadOpenapi } from "./load-openapi.js";
import fs from "fs/promises";
import { generateMd } from "./md/md.js";
import { generateApiDocSchema } from "./api-doc-schema/api-doc-schema.js";

export async function runApp(inputPath: string, outputPath: string) {
    // yamlを読み込む
    const apiDoc = await loadOpenapi(inputPath);

    // 中間スキーマに変換
    const apiDocSchema = generateApiDocSchema(apiDoc);

    // マークダウンに変換
    const markdown = generateMd(apiDocSchema);

    // ファイルに書き込む
    fs.writeFile(outputPath, markdown, 'utf-8');
}