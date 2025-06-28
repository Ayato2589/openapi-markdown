import { BlockContent, TableRow } from "mdast";

export function Table(headers: string[], rows: string[][]): BlockContent {
    return {
        type: 'table',
        children: [
            Row(headers),
            ...rows.map(Row),
        ],
    };
}

function Row(headers: string[]): TableRow {
    return {
        type: 'tableRow',
        children: headers.map(header => ({
            type: 'tableCell',
            children: [{ type: 'text', value: header}]
        })),
    };
}