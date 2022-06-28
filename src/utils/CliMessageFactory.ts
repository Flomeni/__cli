import * as fs from 'fs';
import { PackageJSON } from './models/CliMessageFactory.models';

export class CliMessageFactory {
    private readonly pkg: PackageJSON = JSON.parse(fs.readFileSync(__dirname + '/../../package.json') as unknown as string);

    public showHelloMessageIfNoArgs(): void {
        const name = `${this.pkg.name ?? 'CLI'}`;
        const desc = `${this.pkg.description ?? 'CLI'}`;
        const version = `Version ${this.pkg.version ?? '0.0.0'}`;

        console.log(`${name}: ${desc} - ${version}`);
    }
}
