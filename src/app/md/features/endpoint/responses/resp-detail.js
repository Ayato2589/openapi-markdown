import { Heading } from "../../../mdast/Heading.js";
import { CodeBlock } from "../../../mdast/CodeBlock.js";
export function RespDetail(resp) {
    return [
        StatusCodeMsg(resp.httpStatusCode.toString(), 'dummy status msg'),
        CodeBlock('json', JSON.stringify(resp.body, null, 2)),
    ];
}
function StatusCodeMsg(statusCode, statusMsg) {
    return Heading(`${statusCode} ${statusMsg}`, 4);
}
