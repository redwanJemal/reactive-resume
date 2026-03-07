import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createFileRoute } from "@tanstack/react-router";
import { logger } from "@/utils/logger";
import { registerPrompts } from "./-helpers/prompts";
import { registerResources } from "./-helpers/resources";
import { registerTools } from "./-helpers/tools";

function createMcpServer() {
	const server = new McpServer({
		name: "noorcv",
		version: "1.0.0",
		title: "NoorCV",
		websiteUrl: "https://rxresu.me", // TODO: Update to NoorCV URL when available
		description:
			"NoorCV is a free and open-source resume builder. Use this MCP server to interact with your resume using an LLM of your choice.",
		icons: [
			{
				src: "https://rxresu.me/icon/light.svg", // TODO: Update to NoorCV icon URL when available
				mimeType: "image/svg+xml",
				theme: "light",
			},
			{
				src: "https://rxresu.me/icon/dark.svg", // TODO: Update to NoorCV icon URL when available
				mimeType: "image/svg+xml",
				theme: "dark",
			},
		],
	});

	registerResources(server);
	registerTools(server);
	registerPrompts(server);

	return server;
}

export const Route = createFileRoute("/mcp/")({
	server: {
		handlers: {
			ANY: async ({ request }) => {
				try {
					const apiKey = request.headers.get("x-api-key");
					if (!apiKey) throw new Error("Unauthorized");

					const server = createMcpServer();
					const transport = new WebStandardStreamableHTTPServerTransport({
						enableJsonResponse: true,
					});

					await server.connect(transport);

					return await transport.handleRequest(request);
				} catch (error) {
					logger.error("MCP request failed", {
						route: "/mcp",
						error,
					});

					return Response.json({
						id: null,
						jsonrpc: "2.0",
						error: {
							code: -32603,
							message: `Error handling request: ${error instanceof Error ? error.message : String(error)}`,
						},
					});
				}
			},
		},
	},
});
