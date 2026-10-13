import { config } from "@platform-beta/environment";
import { generateId } from "@gidw/shared-utils";

export interface ProcessEvent {
	readonly payload: string;
}

export interface ProcessResult {
	readonly id: string;
	readonly processed: boolean;
	readonly service: string;
}

export function handler(event: ProcessEvent): ProcessResult {
	return {
		id: generateId(),
		processed: event.payload.length > 0,
		service: config.serviceName,
	};
}
