import { BlockContent } from "mdast";
import { Model } from "../../../api-doc-schema/model.js";
import { Heading } from "../../mdast/Heading.js";
import { CodeBlock } from "../../mdast/CodeBlock.js";

export function ReqBody(model: Model | undefined): BlockContent[] {
    if (!model) return [];

    return [
        ReqBodyTitle(),
        CodeBlock('json', JSON.stringify(model.example, null, 2)),
    ];
}

function ReqBodyTitle(): BlockContent {
    return Heading('リクエストボディー', 4);
}