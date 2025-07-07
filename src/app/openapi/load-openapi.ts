import SwaggerParser from '@apidevtools/swagger-parser';
import type { OpenAPIV3 } from 'openapi-types';
import { isOpenAPIV3 } from './version';

export async function loadOpenapi(filePath: string): Promise<OpenAPIV3.Document> {
    try {
        const apiDoc = await SwaggerParser.validate(filePath);

        if (!isOpenAPIV3(apiDoc)) {
            throw new Error("OpenAPI v3 形式のファイルではありません。OpenAPI v3.x の仕様に従ったファイルを使用してください。");
        }

        return apiDoc;
    } catch (error) {
        throw new Error(`OpenAPIファイルの読み込みまたは検証に失敗しました: ${error}`);
    }
}
