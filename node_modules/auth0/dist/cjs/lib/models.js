"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = void 0;
class JSONApiResponse {
    constructor(data, headers, status, statusText) {
        this.data = data;
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static async fromResponse(raw) {
        const value = (await raw.json());
        return new JSONApiResponse(value, raw.headers, raw.status, raw.statusText);
    }
}
exports.JSONApiResponse = JSONApiResponse;
class VoidApiResponse {
    constructor(headers, status, statusText) {
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static async fromResponse(raw) {
        return new VoidApiResponse(raw.headers, raw.status, raw.statusText);
    }
}
exports.VoidApiResponse = VoidApiResponse;
class TextApiResponse {
    constructor(data, headers, status, statusText) {
        this.data = data;
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static async fromResponse(raw) {
        const value = await raw.text();
        return new TextApiResponse(value, raw.headers, raw.status, raw.statusText);
    }
}
exports.TextApiResponse = TextApiResponse;
//# sourceMappingURL=models.js.map