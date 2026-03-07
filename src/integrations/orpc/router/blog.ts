import { ORPCError } from "@orpc/server";
import { desc, eq } from "drizzle-orm";
import { schema } from "@/integrations/drizzle";
import { db } from "@/integrations/drizzle/client";
import { env } from "@/utils/env";
import { adminProcedure, protectedProcedure, publicProcedure } from "../context";
import { blogDto } from "../dto/blog";

export const blogRouter = {
	list: adminProcedure.output(blogDto.list.output).handler(async () => {
		return await db
			.select({
				id: schema.blogPost.id,
				slug: schema.blogPost.slug,
				title: schema.blogPost.title,
				excerpt: schema.blogPost.excerpt,
				category: schema.blogPost.category,
				categoryLabel: schema.blogPost.categoryLabel,
				coverImage: schema.blogPost.coverImage,
				readTime: schema.blogPost.readTime,
				isPublished: schema.blogPost.isPublished,
				createdAt: schema.blogPost.createdAt,
				updatedAt: schema.blogPost.updatedAt,
			})
			.from(schema.blogPost)
			.orderBy(desc(schema.blogPost.createdAt));
	}),

	getById: adminProcedure
		.input(blogDto.getById.input)
		.output(blogDto.getById.output)
		.handler(async ({ input }) => {
			const [post] = await db.select().from(schema.blogPost).where(eq(schema.blogPost.id, input.id)).limit(1);

			if (!post) throw new ORPCError("NOT_FOUND", { message: "Blog post not found" });

			return post;
		}),

	create: adminProcedure
		.input(blogDto.create.input)
		.output(blogDto.create.output)
		.handler(async ({ context, input }) => {
			const [post] = await db
				.insert(schema.blogPost)
				.values({
					...input,
					coverImage: input.coverImage ?? null,
					authorId: context.user.id,
				})
				.returning({ id: schema.blogPost.id });

			return post.id;
		}),

	update: adminProcedure
		.input(blogDto.update.input)
		.output(blogDto.update.output)
		.handler(async ({ input }) => {
			const { id, ...data } = input;

			const result = await db.update(schema.blogPost).set(data).where(eq(schema.blogPost.id, id));

			if (result.rowCount === 0) {
				throw new ORPCError("NOT_FOUND", { message: "Blog post not found" });
			}
		}),

	delete: adminProcedure
		.input(blogDto.delete.input)
		.output(blogDto.delete.output)
		.handler(async ({ input }) => {
			const result = await db.delete(schema.blogPost).where(eq(schema.blogPost.id, input.id));

			if (result.rowCount === 0) {
				throw new ORPCError("NOT_FOUND", { message: "Blog post not found" });
			}
		}),

	listPublished: publicProcedure
		.input(blogDto.listPublished.input)
		.output(blogDto.listPublished.output)
		.handler(async ({ input }) => {
			const limit = input?.limit ?? 50;

			return await db
				.select({
					slug: schema.blogPost.slug,
					title: schema.blogPost.title,
					excerpt: schema.blogPost.excerpt,
					category: schema.blogPost.category,
					categoryLabel: schema.blogPost.categoryLabel,
					coverImage: schema.blogPost.coverImage,
					readTime: schema.blogPost.readTime,
					createdAt: schema.blogPost.createdAt,
				})
				.from(schema.blogPost)
				.where(eq(schema.blogPost.isPublished, true))
				.orderBy(desc(schema.blogPost.createdAt))
				.limit(limit);
		}),

	getBySlug: publicProcedure
		.input(blogDto.getBySlug.input)
		.output(blogDto.getBySlug.output)
		.handler(async ({ input }) => {
			const [post] = await db
				.select({
					slug: schema.blogPost.slug,
					title: schema.blogPost.title,
					excerpt: schema.blogPost.excerpt,
					category: schema.blogPost.category,
					categoryLabel: schema.blogPost.categoryLabel,
					coverImage: schema.blogPost.coverImage,
					content: schema.blogPost.content,
					readTime: schema.blogPost.readTime,
					createdAt: schema.blogPost.createdAt,
				})
				.from(schema.blogPost)
				.where(eq(schema.blogPost.slug, input.slug))
				.limit(1);

			if (!post || !post.slug) {
				throw new ORPCError("NOT_FOUND", { message: "Blog post not found" });
			}

			return post;
		}),

	isAdmin: protectedProcedure.output(blogDto.isAdmin.output).handler(async ({ context }) => {
		return { isAdmin: env.ADMIN_EMAILS.includes(context.user.email) };
	}),
};
