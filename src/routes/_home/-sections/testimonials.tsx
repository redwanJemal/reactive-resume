import { Trans } from "@lingui/react/macro";
import { StarIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

const testimonials = [
	"Great site. Love the interactive interface. You can tell it's designed by someone who wants to use it.",
	"Truly everything about the UX is so intuitive, fluid and lets you customize your CV how you want and so rapidly. I thank you so much.",
	"I appreciate your effort in making it free for everyone. By using this platform, I got a job in the government sector of Oman. Thank you!",
	"Your CV generator just saved my day! Thank you so much, great work!",
	"This could easily be a paid product. Very clean and useful. I've been trying to create a good resume for a decade and your tool has been incredibly helpful.",
	"Thank you for creating NoorCV. It is an amazing product. I love the design and how it simplifies the resume-making experience.",
];

export function Testimonials() {
	return (
		<section id="testimonials" className="bg-muted/30 py-16 md:py-24">
			<div className="container mx-auto px-4 lg:px-12">
				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
						<Trans>Loved by Gulf Professionals</Trans>
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
						<Trans>Join thousands of expats and professionals who've built their Gulf careers with NoorCV.</Trans>
					</p>
				</motion.div>

				<div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((text, index) => (
						<motion.div
							key={index}
							className="flex flex-col rounded-xl border bg-card p-6 shadow-sm"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.08 }}
						>
							<div className="mb-3 flex gap-0.5">
								{Array.from({ length: 5 }).map((_, i) => (
									<StarIcon key={i} weight="fill" className="size-4 text-amber-400" />
								))}
							</div>
							<p className="flex-1 text-muted-foreground text-sm leading-relaxed">"{text}"</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
