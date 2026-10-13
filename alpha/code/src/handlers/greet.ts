import { config } from "@platform-alpha/environment";
import { slugify } from "@gidw/shared-utils";

export interface GreetEvent {
	readonly name: string;
}

export interface GreetResponse {
	readonly message: string;
	readonly slug: string;
	readonly service: string;
}

/** Builds a greeting for the given name. */
export function handler(event: GreetEvent): GreetResponse {
	return {
		message: `Hello, ${event.name}!`,
		slug: slugify(event.name),
		service: config.serviceName,
	};
}
