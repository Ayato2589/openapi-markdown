import { BlockContent } from "mdast";
import { Model } from "../../../api-doc-schema/model";
import { Heading } from "../../mdast/Heading";
import { CodeBlock } from "../../mdast/CodeBlock";

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