class AccessToken {
    /**
     *
     */
    constructor(
        public expires: Date,
        public userId: string | number
    ) { }
}
class Client {
    /**
     *
     */
    constructor(
        public clientId: string,
        public redirectUri: string | null
    ) { }
}
class User {
    /**
     *
     */
    constructor(
        public username: string
    ) { }
}

export class Domain {
    getAccessToken(bearerToken: string, callback: (error: boolean | string, accessToken: AccessToken) => any) {
        callback(false, new AccessToken(new Date(), 1));
    };
    getClient(clientId: string, clientSecret: string, callback: (error: boolean | string, client: Client) => any) {
        callback(false, new Client(clientId, "localhost:3000"));
    };
    grantTypeAllowed(clientId: string, grantType: string, callback: (error: boolean | string, allowed: boolean) => any) {
        callback(false, true);
    };
    saveAccessToken(accessToken: string, clientId: string, expires: Date, user: User, callback: (error: boolean | string) => any) {
        callback(false);
    }

    getUser(username: string, password: string, callback: (error: boolean | string, user: User) => any) {
        callback(false, new User(username));
    }
};