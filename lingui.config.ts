import { defineConfig } from "@lingui/cli";

export default defineConfig({
	sourceLocale: "en-US",
	locales: ["ar-SA", "en-US"],
	fallbackLocales: {
		default: "en-US",
	},
	formatOptions: {
		lineNumbers: false,
	},
	catalogs: [
		{
			path: "<rootDir>/locales/{locale}",
			include: ["src"],
		},
	],
});
