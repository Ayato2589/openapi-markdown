import path from "path";
import { describe, expect, it } from "vitest";
import { loadOpenapi } from "../src/app/load-openapi";

type TestCase = {
    name: string;
    filePath: string;
    shouldThrow: boolean;
};

const testcases: TestCase[] = [
    {
        name: '正常系: 正しいパスを指定',
        filePath: path.resolve(__dirname, 'data/sample-petstore-api.yaml'),
        shouldThrow: false,
    },
    {
        name: '異常系: 存在しないパスを指定',
        filePath: path.resolve(__dirname, 'data/nonexistent.yaml'),
        shouldThrow: true,
    },
];

describe('OpenAPIドキュメントの読み込みをテスト', () => {
    testcases.forEach(({ name, filePath, shouldThrow }) => {
        it(name, async () => {
            if (shouldThrow) {
                await expect(loadOpenapi(filePath)).rejects.toThrow();
            } else {
                await expect(loadOpenapi(filePath)).resolves.not.toThrow();
            }
        });
    });
});
