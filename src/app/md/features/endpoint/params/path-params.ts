import { BlockContent } from "mdast";
import { Heading } from "../../../mdast/Heading.js";
import { Param } from "../../../../api-doc-schema/param.js";
import { ParamsTable } from "./params-table.js";

export function PathParams(pathParams: Param[]): BlockContent[] {
    // パスパラメーターがない場合は何も出力しない
    if (pathParams.length === 0) return [];

    return [
        PathParamsTitle(),
        ParamsTable(pathParams),
    ];
}

function PathParamsTitle(): BlockContent {
    return Heading("パスパラメーター", 4);
}
