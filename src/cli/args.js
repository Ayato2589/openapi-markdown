import { Command } from "commander";
const INPUT_PATH_IDX = 0;
export function parseArgs(argv) {
    const program = new Command();
    program
        .argument('<inputPath>', 'YAML input file')
        .requiredOption('-o, --output <outputPath>', 'Output Markdown file')
        .parse(argv);
    return {
        inputPath: program.args[INPUT_PATH_IDX],
        outputPath: program.opts().output,
    };
}
