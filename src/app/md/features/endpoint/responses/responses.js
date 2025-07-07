import { Heading } from "../../../mdast/Heading.js";
import { RespDetail } from "./resp-detail.js";
export function Responses(responses) {
    return [
        ResponsesTitle(),
        ...responses.flatMap(RespDetail),
    ];
}
function ResponsesTitle() {
    return Heading('レスポンス', 3);
}
