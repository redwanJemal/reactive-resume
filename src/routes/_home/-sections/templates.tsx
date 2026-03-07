import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { TemplateMetadata } from "@/dialogs/resume/template/data";
import { templates } from "@/dialogs/resume/template/data";

function TemplateCard({ metadata }: { metadata: TemplateMetadata }) {
	return (
		<motion.div
			className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 300, damping: 25 }}
		>
			<div className="aspect-page overflow-hidden bg-muted">
				<img
					src={metadata.imageUrl}
					alt={metadata.name}
					className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
				/>
			</div>

			<div className="flex items-center justify-between p-4">
				<h3 className="font-medium text-sm tracking-tight">{metadata.name}</h3>
				<Button
					asChild
					size="sm"
					variant="ghost"
					className="h-8 px-3 text-xs opacity-0 transition-opacity group-hover:opacity-100"
				>
					<Link to="/dashboard">
						<Trans>Use</Trans>
						<ArrowRightIcon className="ms-1 size-3" />
					</Link>
				</Button>
			</div>
		</motion.div>
	);
}

export function Templates() {
	const entries = Object.entries(templates);
	const [showAll, setShowAll] = useState(false);
	const displayed = showAll ? entries : entries.slice(0, 6);

	return (
		<section id="templates" className="bg-muted/30 py-16 md:py-24">
			<div className="container mx-auto px-4 lg:px-12">
				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
						<Trans>Professional Templates</Trans>
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
						<Trans>
							Choose from 14+ templates designed for Gulf job markets. Each includes fields for nationality, visa
							status, and more.
						</Trans>
					</p>
				</motion.div>

				<div className="grid grid-cols-1 xs:grid-cols-2 gap-6 md:grid-cols-3">
					{displayed.map(([key, metadata], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
						>
							<TemplateCard metadata={metadata} />
						</motion.div>
					))}
				</div>

				{!showAll && entries.length > 6 && (
					<motion.div
						className="mt-8 flex justify-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<Button variant="outline" size="lg" onClick={() => setShowAll(true)}>
							<Trans>View All {entries.length} Templates</Trans>
						</Button>
					</motion.div>
				)}
			</div>
		</section>
	);
}
