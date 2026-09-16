import { describe, expect, it } from "@jest/globals";
import { handler } from "../../src/handlers/process.js";

describe("process handler", () => {
	it("generates a unique id", () => {
		const result = handler({ payload: "test" });
		expect(result.id).toMatch(
			/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
		);
	});

	it("marks non-empty payloads as processed", () => {
		const result = handler({ payload: "data" });
		expect(result.processed).toBe(true);
	});

	it("marks empty payloads as not processed", () => {
		const result = handler({ payload: "" });
		expect(result.processed).toBe(false);
	});

	it("includes the service name", () => {
		const result = handler({ payload: "test" });
		expect(result.service).toBe("beta");
	});
});
