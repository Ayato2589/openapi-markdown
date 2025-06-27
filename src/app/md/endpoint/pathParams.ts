import { Table, TableRow, TableCell } from "mdast";
import { Endpoint } from "../../api-doc-schema/endpoint.js";

export function createPathParams(pathParams: Endpoint['pathParams']): Table {
    return {
        type: "table",
        align: ["left", "left", "center", "left"],
        children: [
            createTableRow(["Name", "Type", "Required", "Description"]),
            ...pathParams.map(param =>
                createTableRow([
                    param.name,
                    param.type,
                    param.required ? "Yes" : "No",
                    param.description || "",
                ])
            ),
        ],
    };
}

function createTableRow(cells: string[]): TableRow {
    return {
        type: "tableRow",
        children: cells.map(createTableCell),
    };
}

function createTableCell(text: string): TableCell {
    return {
        type: "tableCell",
        children: [
            {
                type: "text",
                value: text,
            },
        ],
    };
}
