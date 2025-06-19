import { Command } from "commander";

const INPUT_PATH_IDX = 0;

export type Args = {
    inputPath: string, // e.g., "api.yaml"
    outputPath: string, // e.g., "api.md"
}

export function parseArgs(): Args {
    const program = new Command();

    program
        .argument("<inputPath>", "YAML input file")
        .requiredOption("-o, --output <outputPath>", "Output Markdown file")
        .parse(process.argv);

    return {
        inputPath: program.args[INPUT_PATH_IDX],
        outputPath: program.opts().output,
    };
}
