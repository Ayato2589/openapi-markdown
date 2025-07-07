import { isPathParameter, isQueryParameter, resolveParamType } from "./utils.js";
export function extractPathParams(parameters) {
    if (!parameters)
        return [];
    const pathParams = [];
    for (const parameter of parameters) {
        if (!isPathParameter(parameter))
            continue;
        const schema = parameter.schema;
        pathParams.push({
            name: parameter.name,
            type: resolveParamType(schema),
            required: true, // パスパラメーターは常に必須
            description: parameter.description,
            example: parameter.example ?? schema.example,
        });
    }
    return pathParams;
}
export function extractQueryParams(parameters) {
    if (!parameters)
        return [];
    const queryParams = [];
    for (const parameter of parameters) {
        if (!isQueryParameter(parameter))
            continue;
        const schema = parameter.schema;
        queryParams.push({
            name: parameter.name,
            type: resolveParamType(schema),
            required: parameter.required ?? false,
            minLength: schema.minLength,
            maxLength: schema.maxLength,
            regExpPattern: schema.pattern,
            description: parameter.description,
            example: parameter.example ?? schema.example,
        });
    }
    return queryParams;
}
