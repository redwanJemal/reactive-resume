import { Trans } from "@lingui/react/macro";
import { ArrowLeftIcon, ClockIcon } from "@phosphor-icons/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getBlogPost } from "@/content/blog";
import { Footer } from "../-sections/footer";

export const Route = createFileRoute("/_home/blog/$slug")({
	component: BlogPost,
	loader: ({ params }) => {
		const post = getBlogPost(params.slug);
		if (!post) throw notFound();
		return post;
	},
});

function BlogPost() {
	const post = Route.useLoaderData();

	return (
		<main className="pt-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-12">
				<article className="mx-auto max-w-3xl py-12 md:py-16">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<Link
							to="/blog"
							className="mb-8 inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground"
						>
							<ArrowLeftIcon className="size-4" />
							<Trans>Back to blog</Trans>
						</Link>

						<div className="mb-6 flex flex-wrap items-center gap-3">
							<span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
								{post.categoryLabel}
							</span>
							<time dateTime={post.date} className="text-muted-foreground text-sm">
								{new Date(post.date).toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
								})}
							</time>
							<span className="flex items-center gap-1 text-muted-foreground text-sm">
								<ClockIcon className="size-3.5" />
								{post.readTime} min read
							</span>
						</div>

						<h1 className="mb-8 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>
					</motion.div>

					<motion.div
						className="prose prose-neutral dark:prose-invert max-w-none [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-semibold [&_h3]:text-lg [&_li]:mb-2 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:ps-6 [&_ol]:text-muted-foreground [&_ol]:leading-relaxed [&_p]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_strong]:text-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:ps-6 [&_ul]:text-muted-foreground [&_ul]:leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{/* CTA */}
					<motion.div
						className="mt-16 rounded-xl border bg-card p-8 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="mb-3 font-semibold text-xl tracking-tight">
							<Trans>Ready to build your Gulf CV?</Trans>
						</h2>
						<p className="mb-6 text-muted-foreground">
							<Trans>
								Create a professional resume tailored for Gulf employers. Free, AI-powered, and designed for the region.
							</Trans>
						</p>
						<Link
							to="/dashboard"
							className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
						>
							<Trans>Get Started Free</Trans>
						</Link>
					</motion.div>
				</article>

				<Footer />
			</div>
		</main>
	);
}
