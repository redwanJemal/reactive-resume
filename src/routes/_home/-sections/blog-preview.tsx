import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon, ClockIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { orpc } from "@/integrations/orpc/client";

export function BlogPreview() {
	const { data: posts = [] } = useQuery(orpc.blog.listPublished.queryOptions({ input: { limit: 3 } }));

	if (posts.length === 0) return null;

	return (
		<section id="blog" className="py-16 md:py-24">
			<div className="container mx-auto px-4 lg:px-12">
				<motion.div
					className="mb-12 flex items-end justify-between gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div>
						<h2 className="mb-2 font-bold text-3xl tracking-tight md:text-4xl">
							<Trans>Gulf Career Guide</Trans>
						</h2>
						<p className="max-w-xl text-muted-foreground leading-relaxed">
							<Trans>Tips, guides, and insights for building your career in the Gulf.</Trans>
						</p>
					</div>

					<Link
						to="/blog"
						className="hidden items-center gap-1.5 font-medium text-primary text-sm transition-colors hover:text-primary/80 sm:flex"
					>
						<Trans>View all posts</Trans>
						<ArrowRightIcon className="size-4" />
					</Link>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{posts.map((post, index) => (
						<motion.div
							key={post.slug}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Link
								to="/blog/$slug"
								params={{ slug: post.slug }}
								className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
							>
								<span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
									{post.categoryLabel}
								</span>

								<h3 className="mb-2 font-semibold text-lg tracking-tight transition-colors group-hover:text-primary">
									{post.title}
								</h3>

								<p className="mb-4 line-clamp-3 flex-1 text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

								<div className="flex items-center gap-3 text-muted-foreground text-xs">
									<time dateTime={new Date(post.createdAt).toISOString()}>
										{new Date(post.createdAt).toLocaleDateString("en-US", {
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

				<Link
					to="/blog"
					className="mt-6 flex items-center justify-center gap-1.5 font-medium text-primary text-sm transition-colors hover:text-primary/80 sm:hidden"
				>
					<Trans>View all posts</Trans>
					<ArrowRightIcon className="size-4" />
				</Link>
			</div>
		</section>
	);
}
