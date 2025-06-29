import { runApp } from "./app/app.js";
import { parseArgs } from "./cli/args.js";

async function main(argv: string[]) {
    const { inputPath, outputPath } = parseArgs(argv);
    await runApp(inputPath, outputPath);
}

main(process.argv);