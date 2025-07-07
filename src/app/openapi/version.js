export function isOpenAPIV3(doc) {
    return ('openapi' in doc &&
        typeof doc.openapi === 'string' &&
        doc.openapi.startsWith('3.'));
}
