const request = require("request");
const express = require("express");
const logs = require("../utils/Logger");
const Settings = require("../Settings.json");

class Start {
    constructor() {
        this.app = express();
        this.logger = new logs();
        this.settings = Settings;
    }

    GetUser(Details) {
        // TODO(PACKET): Finish 
    }

    CheckisValid(Valid) {
        // TODO(PACKET): Finish 
    }
}

let start;
start = new Start();

start.GetUser();
start.CheckisValid();