import { describe, expect, it } from "vitest";
import { parseArgs } from "../src/cli/args.js";
const dummyEnvArgs = ['dummyNode', 'dummyScript'];
const testCases = [
    {
        name: '正常系: inputと-oを指定',
        argv: [...dummyEnvArgs, 'api.yaml', '-o', 'api.md'],
        shouldThrow: false,
        expected: { inputPath: "api.yaml", outputPath: "api.md" },
    },
    {
        name: "異常系: 引数が空",
        argv: [...dummyEnvArgs],
        shouldThrow: true,
        expected: null,
    },
    {
        name: "異常系: -o がない",
        argv: [...dummyEnvArgs, "api.yaml"],
        shouldThrow: true,
        expected: null,
    },
    {
        name: "異常系: -o のあとに値がない",
        argv: [...dummyEnvArgs, "api.yaml", "-o"],
        shouldThrow: true,
        expected: null,
    }
];
describe('コマンドライン引数を正しく解析できるかをテスト', () => {
    testCases.forEach(({ name, argv, expected, shouldThrow }) => {
        it(name, () => {
            if (shouldThrow) {
                expect(() => parseArgs(argv)).toThrow();
            }
            else {
                expect(parseArgs(argv)).toEqual(expected);
            }
        });
    });
});
