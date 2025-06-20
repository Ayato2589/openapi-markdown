import { loadOpenapi } from "./load-openapi";

export async function runApp(inputPath: string, outputPath: string) {
    const apiDoc = await loadOpenapi(inputPath);
    console.log(apiDoc);
}