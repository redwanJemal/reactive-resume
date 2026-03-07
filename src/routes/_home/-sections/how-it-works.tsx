import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon, DownloadSimpleIcon, PencilSimpleLineIcon, UserPlusIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const getSteps = () => [
	{
		number: "01",
		icon: UserPlusIcon,
		title: t`Create Your Account`,
		description: t`Sign up for free with email or Google. No credit card required — ever.`,
	},
	{
		number: "02",
		icon: PencilSimpleLineIcon,
		title: t`Fill In Your Details`,
		description: t`Choose a template, add your info, and let AI polish your content for Gulf employers.`,
	},
	{
		number: "03",
		icon: DownloadSimpleIcon,
		title: t`Download & Apply`,
		description: t`Export to PDF or share via link. Your Gulf-ready CV is set to impress.`,
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="py-16 md:py-24">
			<div className="container mx-auto px-4 lg:px-12">
				<motion.div
					className="mb-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
						<Trans>How It Works</Trans>
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
						<Trans>Three simple steps to a professional Gulf CV. No fuss, no hidden fees.</Trans>
					</p>
				</motion.div>

				<div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-3 md:gap-4">
					{/* Connector line (desktop) */}
					<div
						aria-hidden="true"
						className="absolute inset-s-[20%] top-16 hidden h-px w-[60%] bg-linear-to-r from-primary/30 via-primary/50 to-primary/30 md:block"
					/>

					{getSteps().map((step, index) => (
						<motion.div
							key={step.number}
							className="relative flex flex-col items-center text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.15 }}
						>
							{/* Step circle */}
							<div className="relative mb-6">
								<div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors hover:bg-primary/15">
									<step.icon size={36} weight="light" />
								</div>
								<span className="absolute -inset-e-2 -top-2 flex size-7 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xs">
									{step.number}
								</span>
							</div>

							<h3 className="mb-2 font-semibold text-lg tracking-tight">{step.title}</h3>
							<p className="max-w-xs text-muted-foreground text-sm leading-relaxed">{step.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-12 flex justify-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<Button asChild size="lg" className="group px-8">
						<Link to="/dashboard">
							<Trans>Start Building Now</Trans>
							<ArrowRightIcon
								aria-hidden="true"
								className="ms-1 size-4 transition-transform group-hover:translate-x-0.5"
							/>
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
