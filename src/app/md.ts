import { OpenAPI } from 'openapi-types';

export function generateMarkdown(apiDoc: OpenAPI.Document): string {
    const lines: string[] = [
    `# ${apiDoc.info.title}`,
    '',
    `## Description`,
    apiDoc.info.description || '',
    '',
    `## Version`,
    apiDoc.info.version || '',
    ];

    const markdown = lines.join('\n');

    return markdown;
}
