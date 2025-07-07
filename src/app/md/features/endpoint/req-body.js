import { Heading } from "../../mdast/Heading.js";
import { CodeBlock } from "../../mdast/CodeBlock.js";
export function ReqBody(model) {
    if (!model)
        return [];
    return [
        ReqBodyTitle(),
        CodeBlock('json', JSON.stringify(model.example, null, 2)),
    ];
}
function ReqBodyTitle() {
    return Heading('リクエストボディー', 4);
}
