/**
 * Seed blog posts from static content into the database.
 *
 * Usage: npx tsx src/scripts/seed-blog.ts
 *
 * Requires DATABASE_URL env var and a user email to use as author.
 * Pass the author email as the first argument:
 *   npx tsx src/scripts/seed-blog.ts redjemal2@gmail.com
 */

import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { blogPosts } from "../content/blog";
import * as schema from "../integrations/drizzle/schema";

async function main() {
	const authorEmail = process.argv[2];
	if (!authorEmail) {
		console.error("Usage: npx tsx src/scripts/seed-blog.ts <author-email>");
		process.exit(1);
	}

	const databaseUrl = process.env.DATABASE_URL;
	if (!databaseUrl) {
		console.error("DATABASE_URL environment variable is required");
		process.exit(1);
	}

	const sql = postgres(databaseUrl);
	const db = drizzle(sql, { schema });

	// Find the author user
	const [author] = await db.select().from(schema.user).where(eq(schema.user.email, authorEmail)).limit(1);

	if (!author) {
		console.error(`User with email "${authorEmail}" not found`);
		await sql.end();
		process.exit(1);
	}

	console.log(`Seeding ${blogPosts.length} blog posts for user: ${author.name} (${author.email})`);

	for (const post of blogPosts) {
		// Check if slug already exists
		const [existing] = await db
			.select({ id: schema.blogPost.id })
			.from(schema.blogPost)
			.where(eq(schema.blogPost.slug, post.slug))
			.limit(1);

		if (existing) {
			console.log(`  Skipping "${post.title}" — slug already exists`);
			continue;
		}

		await db.insert(schema.blogPost).values({
			slug: post.slug,
			title: post.title,
			excerpt: post.excerpt,
			category: post.category,
			categoryLabel: post.categoryLabel,
			content: post.content,
			readTime: post.readTime,
			isPublished: true,
			authorId: author.id,
		});

		console.log(`  Inserted "${post.title}"`);
	}

	console.log("Done!");
	await sql.end();
}

main();
