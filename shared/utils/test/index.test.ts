import { describe, expect, it } from "@jest/globals";
import { slugify, generateId } from "../src/index.js";

describe("slugify", () => {
	it("converts a string to a slug", () => {
		expect(slugify("Hello World")).toBe("hello-world");
	});

	it("removes special characters", () => {
		expect(slugify("foo@bar!baz")).toBe("foobarbaz");
	});
});

describe("generateId", () => {
	it("returns a UUID string", () => {
		const id = generateId();
		expect(id).toMatch(
			/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
		);
	});
});
