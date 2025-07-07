import { OpenAPIV3 } from "openapi-types";
import { Resp } from "../resp";
import { schemaToModel } from "./request-body";

export function parseResponses(responses: OpenAPIV3.ResponsesObject | undefined): Resp[] {
    if (!responses) return [];

    const result: Resp[] = [];

    for (const [statusCode, responseObj] of Object.entries(responses)) {
        const code = parseInt(statusCode, 10);
        if (isNaN(code)) continue;

        if (!responseObj || "$ref" in responseObj) continue;

        const content = responseObj.content?.["application/json"];
        if (!content || !content.schema) {
            result.push({ httpStatusCode: code });
            continue;
        }

        const schema = content.schema as OpenAPIV3.SchemaObject;
        const bodyModel = schemaToModel(schema);

        result.push({
            httpStatusCode: code,
            body: bodyModel,
        });
    }

    return result;
}
