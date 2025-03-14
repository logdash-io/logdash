import { Logger } from './Logger.js';
import chalk from 'chalk';
import pkgJson from '../../package.json';

export const internalLogger = new Logger(console.log, () =>
	chalk.magenta(`\n[LogDash@${pkgJson.version}]\n`),
);
