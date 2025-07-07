import { BlockContent } from "mdast";
import { Heading } from "../../mdast/Heading.js";

export function HttpMethodAndPath(httpMethod: string, path: string): BlockContent {
    return Heading(`${httpMethod} ${path}`, 1);
}