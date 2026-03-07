/**
 * Generate template preview screenshots using Puppeteer + Browserless.
 *
 * Usage:
 *   npx tsx src/scripts/generate-template-screenshots.ts [template1 template2 ...]
 *   npx tsx src/scripts/generate-template-screenshots.ts khaleeji
 *   npx tsx src/scripts/generate-template-screenshots.ts  # all templates
 */

import { join } from "node:path";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import puppeteer from "puppeteer-core";
import * as schema from "../integrations/drizzle/schema";
import type { ResumeData } from "../schema/resume/data";
import { sampleResumeData } from "../schema/resume/sample";

// Use Docker network IPs since ports aren't exposed to host
const DB_URL = process.env.DATABASE_URL || "postgresql://noorcv:9a21a8238a60e186dda30df972c318d4@10.0.13.2:5432/noorcv";
const APP_URL = process.env.APP_URL || "http://10.0.13.4:3000";
const WS_ENDPOINT = process.env.PRINTER_ENDPOINT || "ws://10.0.13.3:3000";
const TEMPLATES_TO_GENERATE = process.argv.slice(2);

function createGulfResumeData(template: string): ResumeData {
	const data = structuredClone(sampleResumeData);

	// Override basics with Gulf data
	data.basics.name = "Ahmed Al-Rashidi";
	data.basics.headline = "Senior Software Engineer | Full Stack Developer";
	data.basics.email = "ahmed.rashidi@email.com";
	data.basics.phone = "+971 50 123 4567";
	data.basics.location = "Dubai, UAE";
	data.basics.nationality = "Egyptian";
	data.basics.dateOfBirth = "15 March 1990";
	data.basics.maritalStatus = "Married";
	data.basics.visaStatus = "Employment Visa";
	data.basics.website = { url: "https://ahmedrashidi.dev", label: "ahmedrashidi.dev" };
	data.basics.customFields = [
		{
			id: "019bef5a-0477-77e0-968b-5d0e2ecb34e3",
			icon: "linkedin-logo",
			text: "linkedin.com/in/ahmedrashidi",
			link: "https://linkedin.com/in/ahmedrashidi",
		},
	];

	data.summary.content =
		"<p>Senior full-stack developer with 8+ years of experience building scalable web applications. Proven track record in fintech and enterprise solutions across the Middle East. Expertise in React, Node.js, TypeScript, and cloud architecture. Led cross-functional teams delivering products serving 500K+ users across the GCC region.</p>";

	data.sections.experience.items = [
		{
			id: "019bef5a-93e4-7746-ad39-44d8cec98ca4",
			hidden: false,
			company: "Emirates Digital Solutions",
			position: "Senior Software Engineer",
			location: "Dubai, UAE",
			period: "Jan 2022 - Present",
			website: { url: "", label: "" },
			description:
				"<ul><li><p>Lead developer on a fintech platform processing AED 50M+ monthly transactions across UAE and Saudi Arabia</p></li><li><p>Architected microservices infrastructure on AWS reducing deployment time by 60%</p></li><li><p>Mentored team of 5 junior developers, improving code quality metrics by 40%</p></li></ul>",
		},
		{
			id: "019bef5a-db0e-73c6-9b6e-4471703864f1",
			hidden: false,
			company: "Gulf Tech Innovations",
			position: "Full Stack Developer",
			location: "Abu Dhabi, UAE",
			period: "Mar 2019 - Dec 2021",
			website: { url: "", label: "" },
			description:
				"<ul><li><p>Built bilingual (Arabic/English) e-commerce platform serving 200K+ users</p></li><li><p>Implemented RTL-first responsive design system used across 3 products</p></li><li><p>Integrated local payment gateways including PayBy, PayTabs, and Apple Pay</p></li></ul>",
		},
	];

	data.sections.education.items = [
		{
			id: "019bef5a-93e4-7746-ad39-48455f6cef9e",
			hidden: false,
			school: "Cairo University",
			degree: "Bachelor of Science",
			area: "Computer Science",
			grade: "3.7 GPA",
			location: "Cairo, Egypt",
			period: "2008 - 2012",
			website: { url: "", label: "" },
			description: "",
		},
	];

	data.sections.skills.items = [
		{
			id: "s1",
			hidden: false,
			icon: "code",
			name: "Frontend",
			proficiency: "Expert",
			level: 5,
			keywords: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
		},
		{
			id: "s2",
			hidden: false,
			icon: "brackets-curly",
			name: "Backend",
			proficiency: "Expert",
			level: 5,
			keywords: ["Node.js", "Python", "PostgreSQL", "Redis"],
		},
		{
			id: "s3",
			hidden: false,
			icon: "cloud",
			name: "Cloud & DevOps",
			proficiency: "Advanced",
			level: 4,
			keywords: ["AWS", "Docker", "Kubernetes", "CI/CD"],
		},
	];

	data.sections.languages.items = [
		{ id: "l1", hidden: false, language: "Arabic", fluency: "Native", level: 5 },
		{ id: "l2", hidden: false, language: "English", fluency: "Fluent", level: 5 },
	];

	// Set template
	data.metadata.template = template as ResumeData["metadata"]["template"];

	return data;
}

async function main() {
	const url = new URL(DB_URL);
	const pool = new pg.Pool({
		host: url.hostname,
		port: Number(url.port) || 5432,
		user: url.username,
		password: url.password,
		database: url.pathname.slice(1),
	});
	const db = drizzle(pool, { schema });

	const [author] = await db.select().from(schema.user).limit(1);
	if (!author) {
		console.error("No user found");
		await pool.end();
		process.exit(1);
	}
	console.log(`Using user: ${author.name} (${author.username})`);

	const allTemplates = [
		"azurill",
		"bronzor",
		"chikorita",
		"ditgar",
		"ditto",
		"gengar",
		"glalie",
		"kakuna",
		"khaleeji",
		"lapras",
		"leafish",
		"onyx",
		"pikachu",
		"rhyhorn",
	];

	const templatesToGenerate = TEMPLATES_TO_GENERATE.length > 0 ? TEMPLATES_TO_GENERATE : allTemplates;
	console.log(`Templates: ${templatesToGenerate.join(", ")}`);

	// Connect to Browserless
	const browser = await puppeteer.connect({
		browserWSEndpoint: WS_ENDPOINT,
		acceptInsecureCerts: true,
	});
	console.log("Connected to Browserless");

	for (const template of templatesToGenerate) {
		console.log(`\n--- ${template} ---`);

		const slug = `preview-${template}`;
		const resumeData = createGulfResumeData(template);

		// Upsert resume
		const [existing] = await db
			.select({ id: schema.resume.id })
			.from(schema.resume)
			.where(eq(schema.resume.slug, slug))
			.limit(1);

		if (existing) {
			await db.update(schema.resume).set({ data: resumeData, isPublic: true }).where(eq(schema.resume.id, existing.id));
			console.log(`  Updated resume`);
		} else {
			await db.insert(schema.resume).values({
				name: `Preview ${template}`,
				slug,
				isPublic: true,
				data: resumeData,
				userId: author.id,
			});
			console.log(`  Created resume`);
		}

		await new Promise((r) => setTimeout(r, 500));

		const page = await browser.newPage();
		await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

		const url = `${APP_URL}/${author.username}/${slug}`;
		console.log(`  Loading: ${url}`);

		try {
			await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
			await new Promise((r) => setTimeout(r, 3000));

			const pageEl = await page.$("[data-page]");
			const outputPath = join(process.cwd(), "public", "templates", "jpg", `${template}.jpg`);

			if (pageEl) {
				await pageEl.screenshot({ path: outputPath, type: "jpeg", quality: 90 });
			} else {
				await page.screenshot({ path: outputPath, type: "jpeg", quality: 90 });
			}
			console.log(`  Saved: ${outputPath}`);
		} catch (err: any) {
			console.error(`  Error: ${err.message}`);
		} finally {
			await page.close();
		}
	}

	await browser.disconnect();
	await pool.end();
	console.log("\nDone!");
}

main();
