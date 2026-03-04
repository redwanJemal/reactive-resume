import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { EnvelopeSimpleIcon, type IconProps, RocketIcon, SparkleIcon, UsersIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/style";

type FloatingIconProps = {
	icon: React.ElementType;
	className?: string;
	delay?: number;
};

const FloatingIcon = ({ icon: Icon, className, delay = 0 }: FloatingIconProps) => (
	<motion.div
		className={cn("absolute text-primary/20", className)}
		animate={{
			y: [0, -12, 0],
			rotate: [0, 5, -5, 0],
			scale: [1, 1.1, 1],
		}}
		transition={{
			duration: 4,
			repeat: Infinity,
			delay,
			ease: "easeInOut",
		}}
	>
		<Icon size={32} weight="duotone" />
	</motion.div>
);

type SparkleEffectProps = {
	className?: string;
};

const SparkleEffect = ({ className }: SparkleEffectProps) => (
	<motion.div
		className={cn("absolute", className)}
		animate={{
			scale: [0, 1, 0],
			opacity: [0, 1, 0],
			rotate: [0, 180],
		}}
		transition={{
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
		}}
	>
		<SparkleIcon size={16} weight="fill" className="text-amber-400" />
	</motion.div>
);

type FeatureCardProps = {
	icon: React.ElementType<IconProps>;
	title: string;
	description: string;
	delay: number;
};

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => (
	<motion.div
		className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/80"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5, delay }}
		whileHover={{ y: -4 }}
	>
		<motion.div
			aria-hidden="true"
			className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20"
			whileHover={{ rotate: [0, -10, 10, 0] }}
			transition={{ duration: 0.4 }}
		>
			<Icon size={24} weight="light" />
		</motion.div>
		<h3 className="font-semibold tracking-tight">{title}</h3>
		<p className="text-muted-foreground leading-relaxed">{description}</p>
	</motion.div>
);

export const DonationBanner = () => (
	<section className="relative overflow-hidden bg-linear-to-b from-background via-primary/2 to-background py-24">
		{/* Background decorative elements */}
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
			<FloatingIcon icon={EnvelopeSimpleIcon} className="top-[20%] left-[10%]" delay={0} />
			<FloatingIcon icon={SparkleIcon} className="top-[15%] right-[15%]" delay={0.5} />
			<FloatingIcon icon={UsersIcon} className="bottom-[25%] left-[8%]" delay={1} />
			<FloatingIcon icon={RocketIcon} className="right-[12%] bottom-[30%]" delay={1.5} />
			<FloatingIcon icon={EnvelopeSimpleIcon} className="top-[35%] right-[25%]" delay={2} />
			<FloatingIcon icon={SparkleIcon} className="bottom-[20%] left-[20%]" delay={2.5} />

			{/* Gradient Orbs */}
			<div className="absolute -inset-s-32 top-1/4 size-64 rounded-full bg-primary/5 blur-3xl" />
			<div className="absolute -inset-e-32 bottom-1/4 size-64 rounded-full bg-amber-500/5 blur-3xl" />
		</div>

		<div className="container relative px-8">
			{/* Header */}
			<motion.div
				className="flex flex-col items-center text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div aria-hidden="true" className="relative mb-6">
					<motion.div
						className="relative inline-flex items-center justify-center"
						animate={{
							scale: [1, 1.15, 1],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<EnvelopeSimpleIcon size={48} weight="fill" className="text-primary" />
					</motion.div>
					<SparkleEffect className="-inset-e-4 -top-2" />
					<SparkleEffect className="-inset-s-3 bottom-0" />
				</div>

				<motion.h2
					className="mb-6 font-semibold text-2xl tracking-tight md:text-4xl xl:text-5xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<Trans>Get Gulf Career Tips</Trans>
				</motion.h2>

				<motion.p
					className="max-w-3xl text-base text-muted-foreground leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Trans>
						Join our newsletter for resume tips, Gulf job market insights, and HireGulf updates. Stay ahead in your
						career journey across the Gulf region.
					</Trans>
				</motion.p>
			</motion.div>

			{/* Feature cards */}
			<div className="mx-auto my-12 grid max-w-5xl gap-8 sm:grid-cols-3">
				<FeatureCard
					icon={RocketIcon}
					title={t`Career Insights`}
					description={t`Get the latest tips on landing jobs in Saudi Arabia, UAE, Qatar, and across the Gulf region.`}
					delay={0.3}
				/>
				<FeatureCard
					icon={SparkleIcon}
					title={t`Resume Tips`}
					description={t`Learn how to craft resumes that stand out to Gulf employers, including formatting and content advice.`}
					delay={0.4}
				/>
				<FeatureCard
					icon={UsersIcon}
					title={t`Product Updates`}
					description={t`Be the first to know about new templates, AI features, and improvements to HireGulf.`}
					delay={0.5}
				/>
			</div>

			{/* CTA */}
			<motion.div
				className="flex flex-col items-center justify-center gap-4"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<Button asChild size="lg" className="h-11 gap-2 px-6">
					<a href="mailto:hello@hiregulf.com?subject=Subscribe to HireGulf Newsletter">
						<EnvelopeSimpleIcon aria-hidden="true" weight="fill" className="text-primary-foreground" />
						<Trans>Subscribe to Newsletter</Trans>
					</a>
				</Button>
			</motion.div>

			{/* Footer note */}
			<motion.p
				className="mt-8 text-center text-muted-foreground leading-relaxed"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.8 }}
			>
				<Trans>
					No spam, ever. Just useful career tips and product updates.
					<br />
					Unsubscribe anytime.
				</Trans>
			</motion.p>
		</div>
	</section>
);
