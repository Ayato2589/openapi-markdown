import { parseArgs } from "./cli/args";

function main() {
    const { inputPath, outputPath } = parseArgs();

    console.log(`inputPath: ${inputPath}`);
    console.log(`outputPath: ${outputPath}`);
}

main();