/* Do not change, this code is generated from Golang structs */


export class RuleModel {
    id: number;
    name: string;
    value: string;
    serverId?: string;
    Server?: ServerModel;

    static createFrom(source: any = {}) {
        return new RuleModel(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.id = source["id"];
        this.name = source["name"];
        this.value = source["value"];
        this.serverId = source["serverId"];
        this.Server = this.convertValues(source["Server"], ServerModel);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}
export class ServerModel {
    id: string;
    ip: string;
    hn: string;
    pc: number;
    pm: number;
    gm: string;
    la: string;
    pa: boolean;
    vn: string;
    domain?: string;
    description?: string;
    banner?: string;
    userId?: string;
    active: boolean;
    updatedAt: Time;
    ru: RuleModel[];
    User?: UserModel;

    static createFrom(source: any = {}) {
        return new ServerModel(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.id = source["id"];
        this.ip = source["ip"];
        this.hn = source["hn"];
        this.pc = source["pc"];
        this.pm = source["pm"];
        this.gm = source["gm"];
        this.la = source["la"];
        this.pa = source["pa"];
        this.vn = source["vn"];
        this.domain = source["domain"];
        this.description = source["description"];
        this.banner = source["banner"];
        this.userId = source["userId"];
        this.active = source["active"];
        this.updatedAt = this.convertValues(source["updatedAt"], Time);
        this.ru = this.convertValues(source["ru"], RuleModel);
        this.User = this.convertValues(source["User"], UserModel);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}
export class DiscordModel {
    userId: string;
    accountId: string;
    username: string;
    email: string;
    user?: UserModel;

    static createFrom(source: any = {}) {
        return new DiscordModel(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.userId = source["userId"];
        this.accountId = source["accountId"];
        this.username = source["username"];
        this.email = source["email"];
        this.user = this.convertValues(source["user"], UserModel);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}
export class GitHubModel {
    userId: string;
    accountId: string;
    username: string;
    email: string;
    user?: UserModel;

    static createFrom(source: any = {}) {
        return new GitHubModel(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.userId = source["userId"];
        this.accountId = source["accountId"];
        this.username = source["username"];
        this.email = source["email"];
        this.user = this.convertValues(source["user"], UserModel);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}
export class Time {


    static createFrom(source: any = {}) {
        return new Time(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);

    }
}
export class UserModel {
    id: string;
    email: string;
    authMethod: string;
    name: string;
    admin: boolean;
    createdAt: Time;
    updatedAt: Time;
    github?: GitHubModel;
    discord?: DiscordModel;
    servers: ServerModel[];

    static createFrom(source: any = {}) {
        return new UserModel(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.id = source["id"];
        this.email = source["email"];
        this.authMethod = source["authMethod"];
        this.name = source["name"];
        this.admin = source["admin"];
        this.createdAt = this.convertValues(source["createdAt"], Time);
        this.updatedAt = this.convertValues(source["updatedAt"], Time);
        this.github = this.convertValues(source["github"], GitHubModel);
        this.discord = this.convertValues(source["discord"], DiscordModel);
        this.servers = this.convertValues(source["servers"], ServerModel);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}