import { Trans } from "@lingui/react/macro";
import { ClockIcon } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { type BlogCategory, blogPosts, categoryLabels } from "@/content/blog";
import { cn } from "@/utils/style";
import { Footer } from "../-sections/footer";

export const Route = createFileRoute("/_home/blog/")({
	component: BlogIndex,
});

function BlogIndex() {
	const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

	const filtered = activeCategory === "all" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

	const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

	return (
		<main className="pt-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-12">
				<div className="py-12 md:py-16">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<h1 className="font-bold text-3xl tracking-tight md:text-5xl">
							<Trans>Gulf Career Guide</Trans>
						</h1>
						<p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
							<Trans>
								Expert tips, practical guides, and insights to help you navigate the Gulf job market and advance your
								career.
							</Trans>
						</p>
					</motion.div>

					{/* Category filters */}
					<motion.div
						className="mt-8 flex flex-wrap gap-2"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<button
							type="button"
							onClick={() => setActiveCategory("all")}
							className={cn(
								"rounded-full px-4 py-1.5 font-medium text-sm transition-colors",
								activeCategory === "all"
									? "bg-primary text-primary-foreground"
									: "bg-secondary text-muted-foreground hover:text-foreground",
							)}
						>
							<Trans>All</Trans>
						</button>
						{(Object.entries(categoryLabels) as [BlogCategory, string][]).map(([key, label]) => (
							<button
								type="button"
								key={key}
								onClick={() => setActiveCategory(key)}
								className={cn(
									"rounded-full px-4 py-1.5 font-medium text-sm transition-colors",
									activeCategory === key
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-muted-foreground hover:text-foreground",
								)}
							>
								{label}
							</button>
						))}
					</motion.div>
				</div>

				{/* Posts grid */}
				<div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
					{sorted.map((post, index) => (
						<motion.div
							key={post.slug}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
						>
							<Link
								to="/blog/$slug"
								params={{ slug: post.slug }}
								className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
							>
								<span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
									{post.categoryLabel}
								</span>

								<h2 className="mb-2 font-semibold text-lg tracking-tight transition-colors group-hover:text-primary">
									{post.title}
								</h2>

								<p className="mb-4 line-clamp-3 flex-1 text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

								<div className="flex items-center gap-3 text-muted-foreground text-xs">
									<time dateTime={post.date}>
										{new Date(post.date).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</time>
									<span className="flex items-center gap-1">
										<ClockIcon className="size-3" />
										{post.readTime} min read
									</span>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				<Footer />
			</div>
		</main>
	);
}
