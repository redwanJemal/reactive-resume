import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const highlights = () => [
	t`Gulf CV fields (nationality, visa, DOB)`,
	t`Arabic & English with RTL support`,
	t`AI-powered writing assistant`,
	t`14+ professional templates`,
];

export function Hero() {
	return (
		<section id="hero" className="relative min-h-svh w-svw overflow-hidden">
			{/* Background gradient */}
			<div aria-hidden="true" className="absolute inset-0 bg-linear-to-br from-primary/8 via-background to-primary/5" />
			<div
				aria-hidden="true"
				className="absolute inset-e-0 top-0 h-full w-1/2 bg-linear-to-l from-primary/6 to-transparent"
			/>

			<div className="container relative mx-auto flex min-h-svh flex-col items-center gap-12 px-4 py-24 lg:flex-row lg:gap-8 lg:px-12">
				{/* Left: Text content */}
				<div className="flex max-w-xl flex-1 flex-col items-center gap-y-8 text-center lg:items-start lg:text-start">
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-medium text-primary text-sm">
							<Trans>100% Free — No Credit Card</Trans>
						</span>
					</motion.div>

					<motion.h1
						className="font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<Trans>
							<span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">NoorCV</span>
							{" "}— Your Free AI Resume Builder
						</Trans>
					</motion.h1>

					<motion.p
						className="max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<Trans>
							NoorCV helps Gulf professionals and expats create polished, job-ready resumes. Our free online tool
							features AI-powered writing assistance, Gulf-specific CV fields (nationality, visa status, date of birth),
							bilingual Arabic & English support, and 14+ professional templates — designed for Saudi Arabia, UAE,
							Qatar, Kuwait, Bahrain & Oman.
						</Trans>
					</motion.p>

					{/* Highlights */}
					<motion.ul
						className="flex flex-col gap-3"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.45 }}
					>
						{highlights().map((item) => (
							<li key={item} className="flex items-center gap-2.5 text-sm">
								<CheckCircleIcon weight="fill" className="size-5 shrink-0 text-primary" />
								<span>{item}</span>
							</li>
						))}
					</motion.ul>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-wrap gap-3"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Button asChild size="lg" className="group px-8">
							<Link to="/dashboard">
								<Trans>Build Your CV Free</Trans>
								<ArrowRightIcon
									aria-hidden="true"
									className="ms-1 size-4 transition-transform group-hover:translate-x-0.5"
								/>
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline" className="px-8">
							<a href="#templates">
								<Trans>Browse Templates</Trans>
							</a>
						</Button>
					</motion.div>
				</div>

				{/* Right: Template preview collage */}
				<motion.div
					className="relative flex flex-1 items-center justify-center"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<div className="relative h-[420px] w-[340px] sm:h-[480px] sm:w-[380px] lg:h-[540px] lg:w-[420px]">
						{/* Back card */}
						<motion.div
							className="absolute -inset-s-4 top-8 h-[85%] w-[75%] rotate-[-6deg] overflow-hidden rounded-xl border bg-card shadow-lg"
							animate={{ y: [0, -6, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						>
							<img
								src="/templates/jpg/khaleeji.jpg"
								alt="Khaleeji template"
								className="size-full object-cover object-top"
								loading="eager"
							/>
						</motion.div>

						{/* Middle card */}
						<motion.div
							className="absolute inset-s-8 top-4 h-[85%] w-[75%] rotate-[3deg] overflow-hidden rounded-xl border bg-card shadow-xl"
							animate={{ y: [0, -8, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
						>
							<img
								src="/templates/jpg/azurill.jpg"
								alt="Azurill template"
								className="size-full object-cover object-top"
								loading="eager"
							/>
						</motion.div>

						{/* Front card */}
						<motion.div
							className="absolute inset-s-16 top-0 h-[85%] w-[75%] overflow-hidden rounded-xl border bg-card shadow-2xl"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
						>
							<img
								src="/templates/jpg/pikachu.jpg"
								alt="Pikachu template"
								className="size-full object-cover object-top"
								loading="eager"
							/>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
