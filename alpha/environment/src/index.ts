export const config = {
	serviceName: "alpha",
	region: "eu-west-1",
	logLevel: process.env["LOG_LEVEL"] ?? "info",
} as const;

export type AlphaConfig = typeof config;
