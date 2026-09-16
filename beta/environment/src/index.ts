export const config = {
	serviceName: "beta",
	region: "eu-west-1",
	logLevel: process.env["LOG_LEVEL"] ?? "info",
} as const;

export type BetaConfig = typeof config;
