import { OptionValueSource } from "commander";
import { OpenAPIV3 } from "openapi-types";
import { Endpoint } from "../endpoint";
import { Param } from "../param";

export function isPathParameter(parameter: OpenAPIV3.ParameterObject): boolean {
    return parameter.in === 'path';
}

export function isQueryParameter(parameter: OpenAPIV3.ParameterObject): boolean {
    return parameter.in === 'query';
}

export function resolveParamType(schema: OpenAPIV3.SchemaObject): Param['type'] {
    return schema.type === 'integer' || schema.type === 'number'
        ? 'int'
        : schema.format === 'date' || schema.format === 'date-time'
        ? 'date'
        : 'string';
}