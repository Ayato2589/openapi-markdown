import { BlockContent } from "mdast";
import { Resp } from "../../../../api-doc-schema/resp";
import { Heading } from "../../../mdast/Heading";
import { CodeBlock } from "../../../mdast/CodeBlock";

export function RespDetail(resp: Resp): BlockContent[] {
    return [
        StatusCodeMsg(resp.httpStatusCode.toString(), 'dummy status msg'),
        CodeBlock('json', JSON.stringify(resp.body, null, 2)),
    ];
}

function StatusCodeMsg(statusCode: string, statusMsg: string) {
    return Heading(`${statusCode} ${statusMsg}`, 4);
}
