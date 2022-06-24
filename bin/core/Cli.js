"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cli = void 0;
const CliMessageFactory_1 = require("../utils/CliMessageFactory");
const process_1 = require("process");
class Cli {
    constructor() {
        this.massageFactory = new CliMessageFactory_1.CliMessageFactory();
        this.args = process_1.argv.slice(2);
    }
    run() {
        if (!this.args.length) {
            return void this.massageFactory.showHelloMessage();
        }
    }
}
exports.Cli = Cli;
