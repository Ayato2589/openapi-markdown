import SwaggerParser from '@apidevtools/swagger-parser';
import type { OpenAPI } from 'openapi-types';

export async function loadOpenapi(filePath: string): Promise<OpenAPI.Document> {
  try {
    const apiDoc = await SwaggerParser.validate(filePath);
    return apiDoc;
  } catch (error) {
    throw new Error(`OpenAPIファイルの読み込みまたは検証に失敗しました: ${error}`);
  }
}
