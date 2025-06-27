import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint.js";
import { isPathParameter } from "./utils.js";

export function extractPathParams(operation: OpenAPIV3.OperationObject): Endpoint['pathParams'] {
    const pathParams: Endpoint['pathParams'] = [];

    const parameters = operation.parameters ?? [];

    for (const parameter of parameters) {
        if (!isPathParameter(parameter)) continue;
    
        const schema = parameter.schema as OpenAPIV3.SchemaObject;

        const paramType: Endpoint['pathParams'][number]['type'] = (
            schema.type === 'integer' || schema.type === 'number'
                ? 'int'
                : schema.format === 'date' || schema.format === 'date-time'
                ? 'date'
                : 'string'
        );

        pathParams.push({
            name: parameter.name,
            type: paramType,
            required: parameter.required ?? true, // パスパラメータは普通は必須
            minLength: schema.minLength,
            maxLength: schema.maxLength,
            regExpPattern: schema.pattern,
            description: parameter.description,
            example: parameter.example ?? (schema.example as string | undefined),
        });
    }

  return pathParams;
}
