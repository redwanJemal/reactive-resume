import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import {
	CurrencyDollarIcon,
	FilesIcon,
	GlobeIcon,
	type Icon,
	LayoutIcon,
	LockSimpleIcon,
	PaletteIcon,
	ShieldCheckIcon,
	SparkleIcon,
	TranslateIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

type Feature = {
	icon: Icon;
	title: string;
	description: string;
};

const getFeatures = (): Feature[] => [
	{
		icon: CurrencyDollarIcon,
		title: t`Completely Free`,
		description: t`No premium tiers, no hidden costs. Build unlimited resumes and export to PDF — forever free.`,
	},
	{
		icon: GlobeIcon,
		title: t`Gulf-Optimized`,
		description: t`Nationality, visa status, DOB, marital status — all the fields Gulf employers expect, built in.`,
	},
	{
		icon: SparkleIcon,
		title: t`AI Writing Assistant`,
		description: t`Let AI improve your bullet points, write summaries, and tailor content for Gulf job markets.`,
	},
	{
		icon: TranslateIcon,
		title: t`Arabic & English`,
		description: t`Full RTL Arabic support. Create bilingual resumes in English and Arabic.`,
	},
	{
		icon: LayoutIcon,
		title: t`14+ Templates`,
		description: t`Professional designs including the Khaleeji template built specifically for Gulf applications.`,
	},
	{
		icon: PaletteIcon,
		title: t`Fully Customizable`,
		description: t`Any colors, fonts, spacing. Custom CSS support. Make every resume uniquely yours.`,
	},
	{
		icon: FilesIcon,
		title: t`Unlimited Resumes`,
		description: t`Create as many resumes as you need — one for each job, industry, or language. No limits.`,
	},
	{
		icon: ShieldCheckIcon,
		title: t`Privacy First`,
		description: t`Your data is never sold or shared. Full control to delete your account and data anytime.`,
	},
	{
		icon: LockSimpleIcon,
		title: t`Secure Sharing`,
		description: t`Share via public URL or protect with a password. You control who sees your resume.`,
	},
];

export function Features() {
	return (
		<section id="features" className="py-16 md:py-24">
			<div className="container mx-auto px-4 lg:px-12">
				<motion.div
					className="mb-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
						<Trans>Everything You Need</Trans>
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
						<Trans>Built for Gulf professionals, completely free. No compromises.</Trans>
					</p>
				</motion.div>

				<div className="mx-auto grid max-w-5xl gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
					{getFeatures().map((feature, index) => (
						<motion.div
							key={feature.title}
							className="group flex gap-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
						>
							<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary/15">
								<feature.icon size={24} weight="light" />
							</div>
							<div>
								<h3 className="mb-1 font-semibold text-sm tracking-tight">{feature.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
