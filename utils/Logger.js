class logger {
    constructor() {}
    options = {
        "Reset": `\x1b[0m`,
        "Bright": `\x1b[1m`,
        "Green": `\x1b[32m`,
        "Blue": `\x1b[34m`,
        "Yellow": `\x1b[33m`,
        "Red": `\x1b[31m`,
        "Cyan": `\x1b[36m`,
        "INFO": "INFO -",
        "ERROR": "ERROR -",
        "WARNING": "WARNING -"
    }
    CurrentTime() {
        const current_time =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
        return `[${current_time}]`;
    }    
    Log = {
        INFO: message => console.log(`${this.options.Yellow}${this.CurrentTime()} ${this.options.Cyan}${this.options.INFO}`, this.options.Reset,message),
        ERROR: message => console.log(`${this.options.Yellow}${this.CurrentTime()} ${this.options.Bright}${this.options.Red}${this.options.ERROR}`, this.options.Reset, message),
        WARNING: message => console.log(`${this.options.Yellow}${this.CurrentTime()} ${this.options.Bright}${this.options.Yellow}${this.options.WARNING}`, this.options.Reset, message)
    }
}

module.exports = logger;