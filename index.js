var express = require("express");
var app = express();
var path = require("path");

function Run() {
    app.listen(8080, () => {
        console.log("OutLine is Running on Port : " + 8080);
    });
}

function ReqModules() {
    require("./launcher/electron")(app, path);
}

Run(app);
ReqModules(app, path);