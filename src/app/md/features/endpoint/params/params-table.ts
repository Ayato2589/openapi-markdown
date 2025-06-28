import { BlockContent } from "mdast";
import { Param } from "../../../../api-doc-schema/param.js";
import { Table } from "../../../mdast/Table.js";

export function ParamsTable(params: Param[]): BlockContent {
    return Table(
        ['パラメーター', '型', '制約', '説明', '例'],
        params.map(param => [
            param.name, // パラメーター
            param.type, // 型
            formatConstraints(param), // 制約
            param.description ?? '', // 説明
            param.example ?? '' // 例
        ]),
    );
}

function formatConstraints(param: Param): string {
    const constraints: string[] = [];

    if (param.required) constraints.push('必須');
    if (param.minLength) constraints.push(`min-length=${param.minLength}`);
    if (param.maxLength) constraints.push(`max-length=${param.maxLength}`);
    if (param.regExpPattern) constraints.push(`正規表現: ${param.regExpPattern}`);

    return constraints.join('<br>');
}