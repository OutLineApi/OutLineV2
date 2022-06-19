var express = require("express");
var app = express();
var path = require("path");
const settings = require("./Settings.json");
const logs = require("./utils/Logger");

class index {
    constructor() {
        this.app = express();
        this.settings = settings;
        this.logger = new logs();

        this.app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname + "/launcher/frontend/login.html"));
        });
    }

    Run() {
        this.app.listen(this.settings.PORT, () => {
            this.logger.Log.INFO("OutLine is Running on Port : " + settings.PORT);
        });
    }

    ReqModules() {
        require("./launcher/electron");
        require("./launcher/Start");
    }
}

let main;
main = new index();

main.Run();
main.ReqModules();