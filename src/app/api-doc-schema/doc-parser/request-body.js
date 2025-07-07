export function parseRequestBody(requestBody) {
    if (!requestBody)
        return undefined;
    const content = requestBody.content?.["application/json"];
    if (!content || !content.schema) {
        return undefined;
    }
    const schema = content.schema;
    return schemaToModel(schema);
}
export function schemaToModel(schema, name) {
    const model = {
        name,
        type: schema.type,
        example: generateExample(schema),
    };
    if (schema.type === "object" && schema.properties) {
        model.children = [];
        for (const key in schema.properties) {
            const propSchema = schema.properties[key];
            model.children.push(schemaToModel(propSchema, key));
        }
    }
    else if (schema.type === "array" && schema.items) {
        model.children = [schemaToModel(schema.items)];
    }
    return model;
}
function generateExample(schema) {
    if (schema.example !== undefined)
        return schema.example;
    switch (schema.type) {
        case "string":
            if (schema.format === "date")
                return "2025-01-01";
            if (schema.format === "date-time")
                return "2025-01-01T00:00:00Z";
            if (schema.format === "email")
                return "user@example.com";
            if (schema.enum)
                return schema.enum[0];
            return "example string";
        case "number":
        case "integer":
            return 123;
        case "boolean":
            return true;
        case "array":
            if (schema.items) {
                return [generateExample(schema.items)];
            }
            return [];
        case "object":
            if (schema.properties) {
                const obj = {};
                for (const key in schema.properties) {
                    const prop = schema.properties[key];
                    obj[key] = generateExample(prop);
                }
                return obj;
            }
            return {};
        default:
            return null;
    }
}
