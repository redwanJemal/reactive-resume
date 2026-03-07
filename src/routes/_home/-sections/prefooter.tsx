import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Prefooter() {
	return (
		<section id="prefooter" className="relative overflow-hidden py-20 md:py-28">
			{/* Background */}
			<div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-primary/8 via-primary/4 to-primary/8" />

			<div className="container relative mx-auto px-4 text-center lg:px-12">
				<motion.div
					className="mx-auto max-w-2xl space-y-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
						<Trans>Ready to Land Your Gulf Job?</Trans>
					</h2>

					<p className="text-muted-foreground leading-relaxed md:text-lg">
						<Trans>
							Join thousands of professionals who've built their careers in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain,
							and Oman with NoorCV.
						</Trans>
					</p>

					<div className="flex flex-wrap justify-center gap-3 pt-2">
						<Button asChild size="lg" className="group px-8">
							<Link to="/dashboard">
								<Trans>Build Your CV Free</Trans>
								<ArrowRightIcon
									aria-hidden="true"
									className="ms-1 size-4 transition-transform group-hover:translate-x-0.5"
								/>
							</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
