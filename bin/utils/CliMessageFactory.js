"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliMessageFactory = void 0;
const { name: npm_package_name, version: npm_package_version, description: npm_package_description } = require('../../package.json');
class CliMessageFactory {
    constructor() {
        var _a, _b, _c;
        this.package = require('../../package.json');
        this.npm_package_name = (_a = this.package.name) !== null && _a !== void 0 ? _a : 'CLI';
        this.npm_package_version = `Version ${(_b = this.package.version) !== null && _b !== void 0 ? _b : '0.0.0'}`;
        this.npm_package_description = `${(_c = this.package.description) !== null && _c !== void 0 ? _c : 'CLI'}`;
    }
    showHelloMessage() {
        console.log(`${this.npm_package_name}: ${this.npm_package_description} - ${this.npm_package_version}`);
    }
}
exports.CliMessageFactory = CliMessageFactory;
