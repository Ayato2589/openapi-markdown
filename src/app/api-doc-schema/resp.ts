import { Model } from "./model.js";

export type Resp = {
    httpStatusCode: number;
    body?: Model;
}
