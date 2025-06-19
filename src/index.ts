import { runApp } from "./app/app";
import { parseArgs } from "./cli/args";

function main(argv: string[]) {
    const { inputPath, outputPath } = parseArgs(argv);
    runApp(inputPath, outputPath);
}

main(process.argv);