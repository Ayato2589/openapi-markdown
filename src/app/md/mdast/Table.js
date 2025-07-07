export function Table(headers, rows) {
    return {
        type: 'table',
        children: [
            Row(headers),
            ...rows.map(Row),
        ],
    };
}
function Row(headers) {
    return {
        type: 'tableRow',
        children: headers.map(header => ({
            type: 'tableCell',
            children: [{ type: 'text', value: header }]
        })),
    };
}
