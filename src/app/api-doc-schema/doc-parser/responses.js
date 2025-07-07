import { schemaToModel } from "./request-body.js";
export function parseResponses(responses) {
    if (!responses)
        return [];
    const result = [];
    for (const [statusCode, responseObj] of Object.entries(responses)) {
        const code = parseInt(statusCode, 10);
        if (isNaN(code))
            continue;
        if (!responseObj || "$ref" in responseObj)
            continue;
        const content = responseObj.content?.["application/json"];
        if (!content || !content.schema) {
            result.push({ httpStatusCode: code });
            continue;
        }
        const schema = content.schema;
        const bodyModel = schemaToModel(schema);
        result.push({
            httpStatusCode: code,
            body: bodyModel,
        });
    }
    return result;
}
