import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { CaretRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/utils/style";

type FAQItemData = {
	question: string;
	answer: React.ReactNode;
};

const getFaqItems = (): FAQItemData[] => [
	{
		question: t`Is HireGulf really free?`,
		answer: t`Yes, 100% free. Create unlimited resumes, export to PDF, and share online. No hidden costs, no premium tier, no credit card required.`,
	},
	{
		question: t`What makes HireGulf different from other resume builders?`,
		answer: t`HireGulf is built specifically for the Gulf job market. Our templates include fields for nationality, visa status, date of birth, and marital status — details that Gulf employers expect. We support Arabic with full RTL layouts, and our AI is tuned for Gulf CV conventions.`,
	},
	{
		question: t`Does HireGulf support Arabic resumes?`,
		answer: t`Yes. HireGulf fully supports Arabic with right-to-left (RTL) layouts. You can create resumes entirely in Arabic, entirely in English, or bilingual resumes with both languages. The interface itself is available in Arabic and 50+ other languages.`,
	},
	{
		question: t`Which Gulf countries does HireGulf cover?`,
		answer: t`HireGulf is designed for all six GCC countries: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. Our templates and AI suggestions account for each country's CV norms and employer expectations.`,
	},
	{
		question: t`What Gulf-specific CV fields are included?`,
		answer: t`Our templates include nationality, visa status, date of birth, marital status, and a professional photo — all standard expectations for Gulf CVs. The Khaleeji template is specifically designed for Gulf applications.`,
	},
	{
		question: t`Can I export my resume to PDF?`,
		answer: t`Yes. Export to PDF with a single click. The PDF preserves all formatting, fonts, and layout perfectly. You can also share your resume via a unique public URL.`,
	},
	{
		question: t`How does the AI feature work?`,
		answer: t`Our AI can help you write professional summaries, improve bullet points, and tailor your resume content for Gulf employers. It understands Gulf job market conventions and can suggest region-appropriate language.`,
	},
	{
		question: t`Is my data secure?`,
		answer: t`Your data is stored securely and never shared with third parties. We don't sell your information or use it for advertising. You can delete your account and all associated data at any time.`,
	},
];

export function FAQ() {
	const faqItems = getFaqItems();

	return (
		<section
			id="frequently-asked-questions"
			className="flex flex-col gap-x-16 gap-y-6 p-4 md:p-8 lg:flex-row lg:gap-x-18 xl:py-16"
		>
			<motion.h2
				className={cn(
					"flex-1 font-semibold text-2xl tracking-tight md:text-4xl xl:text-5xl",
					"flex shrink-0 flex-wrap items-center gap-x-1.5 lg:flex-col lg:items-start",
				)}
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<Trans context="Every word needs to be wrapped in a tag">
					<span>Frequently</span>
					<span>Asked</span>
					<span>Questions</span>
				</Trans>
			</motion.h2>

			<motion.div
				className="max-w-2xl flex-2 lg:ml-auto 2xl:max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				<Accordion type="multiple">
					{faqItems.map((item, index) => (
						<FAQItemComponent key={item.question} item={item} index={index} />
					))}
				</Accordion>
			</motion.div>
		</section>
	);
}

type FAQItemComponentProps = {
	item: FAQItemData;
	index: number;
};

function FAQItemComponent({ item, index }: FAQItemComponentProps) {
	return (
		<motion.div
			className="last:border-b"
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.05 }}
		>
			<AccordionItem value={item.question} className="group border-t">
				<AccordionTrigger className="py-5">
					{item.question}
					<CaretRightIcon aria-hidden="true" className="shrink-0 transition-transform duration-200" />
				</AccordionTrigger>
				<AccordionContent className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
			</AccordionItem>
		</motion.div>
	);
}
