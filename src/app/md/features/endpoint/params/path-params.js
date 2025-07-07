import { Heading } from "../../../mdast/Heading.js";
import { ParamsTable } from "./params-table.js";
export function PathParams(pathParams) {
    // パスパラメーターがない場合は何も出力しない
    if (pathParams.length === 0)
        return [];
    return [
        PathParamsTitle(),
        ParamsTable(pathParams),
    ];
}
function PathParamsTitle() {
    return Heading("パスパラメーター", 4);
}
