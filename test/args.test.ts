import { describe, expect, it } from "vitest";
import { Args, parseArgs } from "../src/cli/args";

type TestCase = {
    name: string;
    argv: string[];
    shouldThrow: boolean;
    expected: Args | null;
};

const dummyEnvArgs = ['dummyNode', 'dummyScript'];

describe('コマンドライン引数を正しく解析できるかをテスト', () => {
    const testCases: TestCase[] = [
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

    // テストケースを実行
    testCases.forEach(({ name, argv, expected, shouldThrow }) => {
        it(name, () => {
            if (shouldThrow) {
                expect(() => parseArgs(argv)).toThrow();
            } else {
                expect(parseArgs(argv)).toEqual(expected);
            }
        })
    })
})