import { describe, expect, it } from "@jest/globals";
import { handler } from "../../src/handlers/greet.js";

describe("greet handler", () => {
	it("returns a greeting with the given name", () => {
		const result = handler({ name: "World" });
		expect(result.message).toBe("Hello, World!");
	});

	it("returns a slugified name", () => {
		const result = handler({ name: "John Doe" });
		expect(result.slug).toBe("john-doe");
	});

	it("includes the service name", () => {
		const result = handler({ name: "Test" });
		expect(result.service).toBe("alpha");
	});
});
