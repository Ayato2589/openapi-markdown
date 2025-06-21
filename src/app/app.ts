import { toMarkdown } from "mdast-util-to-markdown";
import { loadOpenapi } from "./load-openapi.js";
import fs from "fs/promises";
import { extractMdContent } from "./md-content.js";
import { generateMdTree } from "./md-tree.js";

export async function runApp(inputPath: string, outputPath: string) {
    // yamlを読み込む
    const apiDoc = await loadOpenapi(inputPath);

    // API情報を抽出
    const content = extractMdContent(apiDoc);

    // ツリー構造に変換
    const tree = generateMdTree(content);

    // マークダウンに変換
    const markdown = toMarkdown(tree);

    // ファイルに書き込む
    fs.writeFile(outputPath, markdown, 'utf-8');
}