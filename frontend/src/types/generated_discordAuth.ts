/* Do not change, this code is generated from Golang structs */


export class DiscordLink {
    url: string;

    static createFrom(source: any = {}) {
        return new DiscordLink(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.url = source["url"];
    }
}
export class DiscordCallback {
    state: string;
    code: string;

    static createFrom(source: any = {}) {
        return new DiscordCallback(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.state = source["state"];
        this.code = source["code"];
    }
}