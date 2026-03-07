import z from "zod";

export const blogDto = {
	list: {
		output: z.array(
			z.object({
				id: z.string(),
				slug: z.string(),
				title: z.string(),
				excerpt: z.string(),
				category: z.string(),
				categoryLabel: z.string(),
				coverImage: z.string().nullable(),
				readTime: z.number(),
				isPublished: z.boolean(),
				createdAt: z.date(),
				updatedAt: z.date(),
			}),
		),
	},

	getById: {
		input: z.object({ id: z.string() }),
		output: z.object({
			id: z.string(),
			slug: z.string(),
			title: z.string(),
			excerpt: z.string(),
			category: z.string(),
			categoryLabel: z.string(),
			coverImage: z.string().nullable(),
			content: z.string(),
			readTime: z.number(),
			isPublished: z.boolean(),
			authorId: z.string(),
			createdAt: z.date(),
			updatedAt: z.date(),
		}),
	},

	create: {
		input: z.object({
			slug: z.string().min(1),
			title: z.string().min(1),
			excerpt: z.string().min(1),
			category: z.string().min(1),
			categoryLabel: z.string().min(1),
			coverImage: z.string().nullable().optional(),
			content: z.string().min(1),
			readTime: z.number().int().min(1),
			isPublished: z.boolean().default(false),
		}),
		output: z.string(),
	},

	update: {
		input: z.object({
			id: z.string(),
			slug: z.string().min(1).optional(),
			title: z.string().min(1).optional(),
			excerpt: z.string().min(1).optional(),
			category: z.string().min(1).optional(),
			categoryLabel: z.string().min(1).optional(),
			coverImage: z.string().nullable().optional(),
			content: z.string().min(1).optional(),
			readTime: z.number().int().min(1).optional(),
			isPublished: z.boolean().optional(),
		}),
		output: z.void(),
	},

	delete: {
		input: z.object({ id: z.string() }),
		output: z.void(),
	},

	listPublished: {
		input: z.object({ limit: z.number().int().min(1).max(50).optional() }).optional(),
		output: z.array(
			z.object({
				slug: z.string(),
				title: z.string(),
				excerpt: z.string(),
				category: z.string(),
				categoryLabel: z.string(),
				coverImage: z.string().nullable(),
				readTime: z.number(),
				createdAt: z.date(),
			}),
		),
	},

	getBySlug: {
		input: z.object({ slug: z.string() }),
		output: z.object({
			slug: z.string(),
			title: z.string(),
			excerpt: z.string(),
			category: z.string(),
			categoryLabel: z.string(),
			coverImage: z.string().nullable(),
			content: z.string(),
			readTime: z.number(),
			createdAt: z.date(),
		}),
	},

	isAdmin: {
		output: z.object({ isAdmin: z.boolean() }),
	},
};
