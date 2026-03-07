/**
 * Generate template preview screenshots.
 * Usage: node src/scripts/generate-screenshots.mjs [template1 template2 ...]
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "../..");

const DB_HOST = "10.0.13.2";
const DB_PORT = 5432;
const DB_USER = "noorcv";
const DB_PASS = "9a21a8238a60e186dda30df972c318d4";
const DB_NAME = "noorcv";
const APP_URL = "http://10.0.13.4:3000";
const WS_ENDPOINT = "ws://10.0.13.3:3000?token=e8823a5253cb1e3b5a26a96902b0af83";

const TEMPLATES_TO_GENERATE = process.argv.slice(2);

const ALL_TEMPLATES = [
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

function createGulfResumeData(template) {
	return {
		picture: {
			hidden: false,
			url: "https://i.imgur.com/o4Jpt1p.jpeg",
			size: 100,
			rotation: 0,
			aspectRatio: 1,
			borderRadius: 0,
			borderColor: "rgba(0, 0, 0, 0.5)",
			borderWidth: 0,
			shadowColor: "rgba(0, 0, 0, 0.5)",
			shadowWidth: 0,
		},
		basics: {
			name: "Ahmed Al-Rashidi",
			headline: "Senior Software Engineer | Full Stack Developer",
			email: "ahmed.rashidi@email.com",
			phone: "+971 50 123 4567",
			location: "Dubai, UAE",
			nationality: "Egyptian",
			dateOfBirth: "15 March 1990",
			maritalStatus: "Married",
			visaStatus: "Employment Visa",
			website: { url: "https://ahmedrashidi.dev", label: "ahmedrashidi.dev" },
			customFields: [
				{
					id: "cf1",
					icon: "linkedin-logo",
					text: "linkedin.com/in/ahmedrashidi",
					link: "https://linkedin.com/in/ahmedrashidi",
				},
			],
		},
		summary: {
			title: "",
			columns: 1,
			hidden: false,
			content:
				"<p>Senior full-stack developer with 8+ years of experience building scalable web applications across the Middle East. Expert in React, Node.js, TypeScript, and cloud architecture. Led teams delivering products serving 500K+ users across the GCC region. Passionate about bilingual (Arabic/English) user experiences and fintech innovation.</p>",
		},
		sections: {
			profiles: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
					{
						id: "p1",
						hidden: false,
						icon: "linkedin-logo",
						network: "LinkedIn",
						username: "ahmedrashidi",
						website: { url: "https://linkedin.com/in/ahmedrashidi", label: "linkedin.com/in/ahmedrashidi" },
					},
					{
						id: "p2",
						hidden: false,
						icon: "github-logo",
						network: "GitHub",
						username: "ahmedrashidi",
						website: { url: "https://github.com/ahmedrashidi", label: "github.com/ahmedrashidi" },
					},
				],
			},
			experience: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
					{
						id: "e1",
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
						id: "e2",
						hidden: false,
						company: "Gulf Tech Innovations",
						position: "Full Stack Developer",
						location: "Abu Dhabi, UAE",
						period: "Mar 2019 - Dec 2021",
						website: { url: "", label: "" },
						description:
							"<ul><li><p>Built bilingual Arabic/English e-commerce platform serving 200K+ users</p></li><li><p>Implemented RTL-first responsive design system used across 3 products</p></li><li><p>Integrated local payment gateways including PayBy and PayTabs</p></li></ul>",
					},
				],
			},
			education: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
					{
						id: "ed1",
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
				],
			},
			projects: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
					{
						id: "pr1",
						hidden: false,
						options: { showLinkInTitle: false },
						name: "Gulf Pay SDK",
						period: "2023",
						website: { url: "", label: "" },
						description:
							"<p>Open-source SDK for integrating Gulf payment gateways. Supports PayTabs, PayBy, and Tap Payments. Used by 50+ developers across the GCC.</p>",
					},
				],
			},
			skills: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
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
				],
			},
			languages: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
					{ id: "l1", hidden: false, language: "Arabic", fluency: "Native", level: 5 },
					{ id: "l2", hidden: false, language: "English", fluency: "Fluent", level: 5 },
				],
			},
			interests: { title: "", columns: 1, hidden: false, items: [] },
			awards: { title: "", columns: 1, hidden: false, items: [] },
			certifications: {
				title: "",
				columns: 1,
				hidden: false,
				items: [
					{
						id: "c1",
						hidden: false,
						title: "AWS Solutions Architect",
						issuer: "Amazon Web Services",
						date: "2023",
						website: { url: "", label: "" },
						description: "",
					},
				],
			},
			publications: { title: "", columns: 1, hidden: false, items: [] },
			volunteer: { title: "", columns: 1, hidden: false, items: [] },
			references: { title: "", columns: 1, hidden: false, items: [] },
		},
		customSections: [],
		metadata: {
			template,
			layout: {
				sidebarWidth: 30,
				pages: [
					{
						fullWidth: false,
						main: ["summary", "experience", "education", "projects"],
						sidebar: ["profiles", "skills", "languages", "certifications"],
					},
				],
			},
			css: { enabled: false, value: "" },
			page: { gapX: 4, gapY: 8, marginX: 16, marginY: 14, format: "a4", locale: "en-US", hideIcons: false },
			design: {
				level: { icon: "acorn", type: "circle" },
				colors: { primary: "rgba(12, 35, 64, 1)", text: "rgba(0, 0, 0, 1)", background: "rgba(255, 255, 255, 1)" },
			},
			typography: {
				body: { fontFamily: "IBM Plex Serif", fontWeights: ["400", "600"], fontSize: 11, lineHeight: 1.5 },
				heading: { fontFamily: "Fira Sans Condensed", fontWeights: ["500"], fontSize: 18, lineHeight: 1.5 },
			},
			notes: "",
		},
	};
}

async function main() {
	const pool = new pg.Pool({ host: DB_HOST, port: DB_PORT, user: DB_USER, password: DB_PASS, database: DB_NAME });

	// Get first user
	const userResult = await pool.query('SELECT id, name, username FROM "user" LIMIT 1');
	if (userResult.rows.length === 0) {
		console.error("No user found");
		process.exit(1);
	}
	const author = userResult.rows[0];
	console.log(`User: ${author.name} (${author.username})`);

	const templates = TEMPLATES_TO_GENERATE.length > 0 ? TEMPLATES_TO_GENERATE : ALL_TEMPLATES;
	console.log(`Templates: ${templates.join(", ")}`);

	const browser = await puppeteer.connect({ browserWSEndpoint: WS_ENDPOINT, acceptInsecureCerts: true });
	console.log("Connected to Browserless");

	for (const template of templates) {
		console.log(`\n--- ${template} ---`);
		const slug = `preview-${template}`;
		const data = createGulfResumeData(template);

		// Upsert resume
		const existing = await pool.query("SELECT id FROM resume WHERE slug = $1 AND user_id = $2 LIMIT 1", [
			slug,
			author.id,
		]);
		if (existing.rows.length > 0) {
			await pool.query("UPDATE resume SET data = $1, is_public = true WHERE id = $2", [
				JSON.stringify(data),
				existing.rows[0].id,
			]);
			console.log("  Updated resume");
		} else {
			await pool.query(
				"INSERT INTO resume (id, name, slug, is_public, data, user_id) VALUES (gen_random_uuid(), $1, $2, true, $3, $4)",
				[`Preview ${template}`, slug, JSON.stringify(data), author.id],
			);
			console.log("  Created resume");
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
			const outputPath = join(PROJECT_ROOT, "public", "templates", "jpg", `${template}.jpg`);

			if (pageEl) {
				await pageEl.screenshot({ path: outputPath, type: "jpeg", quality: 90 });
			} else {
				await page.screenshot({ path: outputPath, type: "jpeg", quality: 90 });
			}
			console.log(`  Saved: ${outputPath}`);
		} catch (err) {
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
