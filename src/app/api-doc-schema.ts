import { OpenAPI } from "openapi-types";

// type Parameter = {
//     name: string;
//     type: 'int' | 'string' | 'date';
//     required?: boolean;
//     minLength?: number;
//     maxLength?: number;
//     regExpPattern?: string;
//     description?: string;
//     example?: string;
// };

// type Model = {
//     children: Model[];
// };

// type Response = {
//     httpStatusCode: number;
//     body?: Model;   
// }

type Endpoint = {
    path: string;
    // httpMethod: 'GET' | 'PUT' | 'PATCH' | 'DELETE';
    // pathParameters: Parameter[];
    // queryParameters: Parameter[];
    // requestBody?: Model
    // response: Response[]
};

export type ApiDocSchema = {
    endpoints: Endpoint[];
};

export function generateApiDocSchema(apiDoc: OpenAPI.Document): ApiDocSchema {
    const endpoints: Endpoint[] = Object.keys(apiDoc.paths || {}).map((path) => ({
        path,
    }));

    return { endpoints };
}