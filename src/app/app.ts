import { loadOpenapi } from "./load-openapi";
import { generateMarkdown } from "./md";
import fs from "fs/promises";

export async function runApp(inputPath: string, outputPath: string) {
    const apiDoc = await loadOpenapi(inputPath);
    const markdown = generateMarkdown(apiDoc);
    fs.writeFile(outputPath, markdown, 'utf-8');
}