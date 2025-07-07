import { BlockContent } from "mdast";
import { Resp } from "../../../../api-doc-schema/resp";
import { Heading } from "../../../mdast/Heading";
import { RespDetail } from "./resp-detail";

export function Responses(responses: Resp[]): BlockContent[] {
    return [
        ResponsesTitle(),
        ...responses.flatMap(RespDetail),
    ];
}

function ResponsesTitle(): BlockContent {
    return Heading('レスポンス', 3);
}