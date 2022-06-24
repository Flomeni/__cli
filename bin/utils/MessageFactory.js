"use strict";
var _a, _b, _c;
var _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliMessageFactory = void 0;
const { name: npm_package_name, version: npm_package_version, description: npm_package_description } = require('../../package.json');
class CliMessageFactory {
    static showHelloMessage() {
        console.log(`${this.npm_package_name}: ${this.npm_package_description} - ${this.npm_package_version}`);
    }
}
exports.CliMessageFactory = CliMessageFactory;
_d = CliMessageFactory;
CliMessageFactory.package = require('../../package.json');
CliMessageFactory.npm_package_name = (_a = _d.package.name) !== null && _a !== void 0 ? _a : 'CLI';
CliMessageFactory.npm_package_version = `Version ${(_b = _d.package.version) !== null && _b !== void 0 ? _b : '0.0.0'}`;
CliMessageFactory.npm_package_description = `${(_c = _d.package.description) !== null && _c !== void 0 ? _c : 'CLI'}`;
//# sourceMappingURL=MessageFactory.js.map