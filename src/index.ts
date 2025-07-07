import { runApp } from "./app/app";
import { parseArgs } from "./cli/args";

async function main(argv: string[]) {
    const { inputPath, outputPath } = parseArgs(argv);
    await runApp(inputPath, outputPath);
}

main(process.argv);