export function isPathParameter(parameter) {
    return parameter.in === 'path';
}
export function isQueryParameter(parameter) {
    return parameter.in === 'query';
}
export function resolveParamType(schema) {
    return schema.type === 'integer' || schema.type === 'number'
        ? 'int'
        : schema.format === 'date' || schema.format === 'date-time'
            ? 'date'
            : 'string';
}
