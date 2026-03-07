import { t } from "@lingui/core/macro";
import type { Icon } from "@phosphor-icons/react";
import { FileTextIcon, UsersIcon } from "@phosphor-icons/react";
import { useQueries } from "@tanstack/react-query";
import { motion } from "motion/react";
import { CountUp } from "@/components/animation/count-up";
import { orpc } from "@/integrations/orpc/client";

type Statistic = {
	id: string;
	label: string;
	value: number;
	icon: Icon;
};

const getStatistics = (userCount: number, resumeCount: number): Statistic[] => [
	{
		id: "users",
		label: t`Professionals`,
		value: userCount,
		icon: UsersIcon,
	},
	{
		id: "resumes",
		label: t`Resumes Created`,
		value: resumeCount,
		icon: FileTextIcon,
	},
];

export function Statistics() {
	const [userCountResult, resumeCountResult] = useQueries({
		queries: [orpc.statistics.user.getCount.queryOptions(), orpc.statistics.resume.getCount.queryOptions()],
	});

	if (!userCountResult.data || !resumeCountResult.data) return null;

	return (
		<section id="statistics" className="border-y bg-muted/20 py-16">
			<div className="container mx-auto px-4 lg:px-12">
				<div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-24">
					{getStatistics(userCountResult.data, resumeCountResult.data).map((statistic, index) => {
						const Icon = statistic.icon;
						return (
							<motion.div
								key={statistic.id}
								className="flex flex-col items-center gap-3"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.15 }}
							>
								<div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
									<Icon size={28} weight="light" />
								</div>
								<CountUp
									key={statistic.id}
									separator=","
									duration={0.8}
									to={statistic.value}
									className="font-bold text-4xl tracking-tight md:text-5xl"
								/>
								<p className="font-medium text-muted-foreground text-sm tracking-tight">{statistic.label}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
