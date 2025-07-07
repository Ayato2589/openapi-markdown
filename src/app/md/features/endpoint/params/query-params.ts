import { BlockContent } from "mdast";
import { Heading } from "../../../mdast/Heading";
import { Param } from "../../../../api-doc-schema/param";
import { ParamsTable } from "./params-table";

export function QueryParams(queryParams: Param[]): BlockContent[] {
    // クエリパラメーターがない場合は何も出力しない
    if (queryParams.length === 0) return [];

    return [
        QueryParamsTitle(),
        ParamsTable(queryParams),
    ];
}

function QueryParamsTitle(): BlockContent {
    return Heading("クエリパラメーター", 4);
}
