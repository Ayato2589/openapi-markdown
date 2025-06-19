import { parseArgs } from "./cli/parser";

function main() {
    const { inputPath, outputPath } = parseArgs();

    console.log(`inputPath: ${inputPath}`);
    console.log(`outputPath: ${outputPath}`);
}

main();