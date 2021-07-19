/* Do not change, this code is generated from Golang structs */


export class APIError {
    message?: string;
    suggested?: string;
    error?: string;

    static createFrom(source: any = {}) {
        return new APIError(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.message = source["message"];
        this.suggested = source["suggested"];
        this.error = source["error"];
    }
}