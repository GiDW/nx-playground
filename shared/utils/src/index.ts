/** Converts text to a lowercase, hyphen-separated URL slug. */
export function slugify(input: string): string {
	return input
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

/** Returns a random UUID v4. */
export function generateId(): string {
	return crypto.randomUUID();
}

/** Uppercases the first character of the input. */
export function capitalize(input: string): string {
	return input.charAt(0).toUpperCase() + input.slice(1);
}
