import { loadOpenapi } from "./load-openapi.js";
import fs from "fs/promises";
import { generateApiDocModel } from "./api-doc-model.js";
import { generateMd } from "./md.js";

export async function runApp(inputPath: string, outputPath: string) {
    // yamlを読み込む
    const apiDoc = await loadOpenapi(inputPath);

    // 中間スキーマに変換
    const apiDocModel = generateApiDocModel(apiDoc);

    // マークダウンに変換
    const markdown = generateMd(apiDocModel);

    // ファイルに書き込む
    fs.writeFile(outputPath, markdown, 'utf-8');
}