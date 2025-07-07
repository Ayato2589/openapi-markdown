import { Heading } from "../../mdast/Heading.js";
export function HttpMethodAndPath(httpMethod, path) {
    return Heading(`${httpMethod} ${path}`, 1);
}
