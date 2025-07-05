import { BlockContent } from "mdast";
import { Resp } from "../../../../api-doc-schema/resp.js";
import { Heading } from "../../../mdast/Heading.js";
import { CodeBlock } from "../../../mdast/CodeBlock.js";

export function RespDetail(resp: Resp): BlockContent[] {
    return [
        StatusCodeMsg(resp.httpStatusCode.toString(), 'dummy status msg'),
        CodeBlock('json', JSON.stringify(resp.body, null, 2)),
    ];
}

function StatusCodeMsg(statusCode: string, statusMsg: string) {
    return Heading(`${statusCode} ${statusMsg}`, 4);
}
