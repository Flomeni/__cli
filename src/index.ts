#!/usr/bin/env node
import { Cli } from "./core/Cli";
import { argv } from 'process';

new Cli().run(argv.slice(2));

