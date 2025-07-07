import { BlockContent } from "mdast";
import { Resp } from "../../../../api-doc-schema/resp.js";
import { Heading } from "../../../mdast/Heading.js";
import { RespDetail } from "./resp-detail.js";

export function Responses(responses: Resp[]): BlockContent[] {
    return [
        ResponsesTitle(),
        ...responses.flatMap(RespDetail),
    ];
}

function ResponsesTitle(): BlockContent {
    return Heading('レスポンス', 3);
}