import { OpenAPIV3 } from "openapi-types";
import { isPathParameter, isQueryParameter, resolveParamType } from "./utils.js";
import { Param } from "../param.js";

export function extractPathParams(parameters: OpenAPIV3.ParameterObject[]): Param[] {
    if (!parameters) return [];

    const pathParams: Param[] = [];

    for (const parameter of parameters) {
        if (!isPathParameter(parameter)) continue;
    
        const schema = parameter.schema as OpenAPIV3.SchemaObject;

        pathParams.push({
            name: parameter.name,
            type: resolveParamType(schema),
            required: true, // パスパラメーターは常に必須
            description: parameter.description,
            example: parameter.example ?? (schema.example as string | undefined),
        });
    }

  return pathParams;
}

export function extractQueryParams(parameters: OpenAPIV3.ParameterObject[]): Param[] {
    if (!parameters) return [];

    const queryParams: Param[] = [];

    for (const parameter of parameters) {
        if (!isQueryParameter(parameter)) continue;

        const schema = parameter.schema as OpenAPIV3.SchemaObject;

        queryParams.push({
            name: parameter.name,
            type: resolveParamType(schema),
            required: parameter.required ?? false,
            minLength: schema.minLength,
            maxLength: schema.maxLength,
            regExpPattern: schema.pattern,
            description: parameter.description,
            example: parameter.example ?? (schema.example as string | undefined),
        });
    }

    return queryParams;
}
