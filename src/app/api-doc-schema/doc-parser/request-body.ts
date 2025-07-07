import { OpenAPIV3 } from "openapi-types";
import { Model } from "../model";

export function parseRequestBody(requestBody: OpenAPIV3.RequestBodyObject | undefined): Model | undefined {
    if (!requestBody) return undefined;

    const content = requestBody.content?.["application/json"];
    if (!content || !content.schema) {
        return undefined;
    }

    const schema = content.schema as OpenAPIV3.SchemaObject;
    return schemaToModel(schema);
}

export function schemaToModel(schema: OpenAPIV3.SchemaObject, name?: string): Model {
    const model: Model = {
        name,
        type: schema.type,
        example: generateExample(schema),
    };

    if (schema.type === "object" && schema.properties) {
        model.children = [];
        for (const key in schema.properties) {
            const propSchema = schema.properties[key] as OpenAPIV3.SchemaObject;
            model.children.push(schemaToModel(propSchema, key));
        }
    } else if (schema.type === "array" && schema.items) {
        model.children = [schemaToModel(schema.items as OpenAPIV3.SchemaObject)];
    }

    return model;
}

function generateExample(schema: OpenAPIV3.SchemaObject): any {
    if (schema.example !== undefined) return schema.example;

    switch (schema.type) {
        case "string":
            if (schema.format === "date") return "2025-01-01";
            if (schema.format === "date-time") return "2025-01-01T00:00:00Z";
            if (schema.format === "email") return "user@example.com";
            if (schema.enum) return schema.enum[0];
            return "example string";

        case "number":
        case "integer":
            return 123;

        case "boolean":
            return true;

        case "array":
            if (schema.items) {
                return [generateExample(schema.items as OpenAPIV3.SchemaObject)];
            }
            return [];

        case "object":
            if (schema.properties) {
                const obj: Record<string, any> = {};
                for (const key in schema.properties) {
                    const prop = schema.properties[key] as OpenAPIV3.SchemaObject;
                    obj[key] = generateExample(prop);
                }
                return obj;
            }
            return {};

        default:
            return null;
    }
}
