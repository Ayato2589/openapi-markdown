import { BlockContent } from "mdast";
import { Resp } from "../../../../api-doc-schema/resp";
import { Heading } from "../../../mdast/Heading";
import { CodeBlock } from "../../../mdast/CodeBlock";
import { getReasonPhrase } from "http-status-codes";

export function RespDetail(resp: Resp): BlockContent[] {
    return [
        StatusCodeMsg(resp.httpStatusCode.toString()),
        CodeBlock('json', JSON.stringify(resp.body, null, 2)),
    ];
}

function StatusCodeMsg(statusCode: string) {
    const statusMsg = getReasonPhrase(statusCode);
    return Heading(`${statusCode} ${statusMsg}`, 4);
}
