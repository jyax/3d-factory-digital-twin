export class JSONApiResponse {
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
export class VoidApiResponse {
    constructor(headers, status, statusText) {
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static async fromResponse(raw) {
        return new VoidApiResponse(raw.headers, raw.status, raw.statusText);
    }
}
export class TextApiResponse {
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
//# sourceMappingURL=models.js.map