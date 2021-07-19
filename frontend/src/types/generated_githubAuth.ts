/* Do not change, this code is generated from Golang structs */


export class GitHubLink {
    url: string;

    static createFrom(source: any = {}) {
        return new GitHubLink(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.url = source["url"];
    }
}
export class GitHubCallback {
    state: string;
    code: string;

    static createFrom(source: any = {}) {
        return new GitHubCallback(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.state = source["state"];
        this.code = source["code"];
    }
}