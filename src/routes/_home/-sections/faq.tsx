import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { CaretRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItemData = {
	question: string;
	answer: string;
};

const getFaqItems = (): FAQItemData[] => [
	{
		question: t`Is NoorCV really free?`,
		answer: t`Yes, 100% free. Create unlimited resumes, export to PDF, and share online. No hidden costs, no credit card required.`,
	},
	{
		question: t`Does NoorCV support Arabic?`,
		answer: t`Yes. NoorCV is available in both English and Arabic with full right-to-left (RTL) layouts. You can create resumes entirely in Arabic, entirely in English, or bilingual.`,
	},
	{
		question: t`Which Gulf countries does NoorCV cover?`,
		answer: t`NoorCV is designed for all six GCC countries: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.`,
	},
	{
		question: t`What Gulf-specific CV fields are included?`,
		answer: t`Nationality, visa status, date of birth, marital status, and a professional photo — all standard expectations for Gulf CVs.`,
	},
	{
		question: t`Can I export my resume to PDF?`,
		answer: t`Yes. Export to PDF with a single click. You can also share your resume via a unique public URL.`,
	},
	{
		question: t`How does the AI feature work?`,
		answer: t`Our AI helps you write professional summaries, improve bullet points, and tailor content for Gulf employers.`,
	},
	{
		question: t`Is my data secure?`,
		answer: t`Your data is stored securely and never shared with third parties. You can delete your account and all data at any time.`,
	},
];

export function FAQ() {
	const faqItems = getFaqItems();

	return (
		<section id="frequently-asked-questions" className="bg-muted/30 py-16 md:py-24">
			<div className="container mx-auto px-4 lg:px-12">
				<div className="mx-auto flex max-w-4xl flex-col gap-8 lg:flex-row lg:gap-16">
					<motion.div
						className="shrink-0 lg:w-64"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-bold text-3xl tracking-tight md:text-4xl">
							<Trans>FAQ</Trans>
						</h2>
						<p className="mt-2 text-muted-foreground text-sm leading-relaxed">
							<Trans>Common questions about NoorCV and building CVs for the Gulf.</Trans>
						</p>
					</motion.div>

					<motion.div
						className="flex-1"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<Accordion type="multiple">
							{faqItems.map((item, index) => (
								<motion.div
									key={item.question}
									className="last:border-b"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
								>
									<AccordionItem value={item.question} className="border-t">
										<AccordionTrigger className="py-5">
											{item.question}
											<CaretRightIcon aria-hidden="true" className="shrink-0 transition-transform duration-200" />
										</AccordionTrigger>
										<AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
											{item.answer}
										</AccordionContent>
									</AccordionItem>
								</motion.div>
							))}
						</Accordion>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
