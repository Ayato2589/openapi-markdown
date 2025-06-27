import { Model } from "./model.js";

export type Response = {
    httpStatusCode: number;
    body?: Model;
}
