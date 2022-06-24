const { name: npm_package_name, version: npm_package_version, description: npm_package_description } = require('../../package.json');

export class CliMessageFactory {

    private readonly package: {name: string; version: string; description: string;} = require('../../package.json');

    private readonly npm_package_name = this.package.name ?? 'CLI';

    private readonly npm_package_version = `Version ${this.package.version ?? '0.0.0'}`;

    private readonly npm_package_description = `${this.package.description ?? 'CLI'}`;

    public showHelloMessage(): void {
        console.log(`${this.npm_package_name}: ${this.npm_package_description} - ${this.npm_package_version}`);
    }
}
