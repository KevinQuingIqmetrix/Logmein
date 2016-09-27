import * as express from "express";
import * as bodyParser from "body-parser";
import * as oauthServer from "oauth2-server";
const app = express();
export function run (domain: any) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    let oauth = oauthServer({
        model: domain,
        grants: ["password"],
        debug: true,
        passthroughErrors: true,
    } as oauthServer.Config);

    app.all("/oauth/token", oauth.grant());

    app.get("/", oauth.authorise(), (req, res) => {
        res.send("true");
    });

    app.use(oauth.errorHandler());

    app.listen(3000);
}