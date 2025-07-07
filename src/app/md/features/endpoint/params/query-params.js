import { Heading } from "../../../mdast/Heading.js";
import { ParamsTable } from "./params-table.js";
export function QueryParams(queryParams) {
    // クエリパラメーターがない場合は何も出力しない
    if (queryParams.length === 0)
        return [];
    return [
        QueryParamsTitle(),
        ParamsTable(queryParams),
    ];
}
function QueryParamsTitle() {
    return Heading("クエリパラメーター", 4);
}
