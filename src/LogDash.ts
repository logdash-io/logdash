import { Logger } from './logger/Logger.js';
import { BaseMetrics } from './metrics/BaseMetrics.js';
import { createMetrics } from './metrics/createMetrics.js';
import { createLogSync } from './sync/createLogSync.js';

type InitializationParams = {
	apiKey?: string;
};

type Instance = {
	logger: Logger;
	metrics: BaseMetrics;
};

export const createLogDash = (params?: InitializationParams): Instance => {
	const logSync = createLogSync(params?.apiKey);
	const metrics = createMetrics(params?.apiKey);

	return {
		// todo: make Logger params an object
		logger: new Logger(console.log, undefined, (level, message) => {
			logSync.send(message, level, new Date().toISOString());
		}),
		metrics,
	};
};
