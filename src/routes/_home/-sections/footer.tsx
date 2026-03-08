import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { BrandIcon } from "@/components/ui/brand-icon";
import { Copyright } from "@/components/ui/copyright";

type FooterLinkItem = {
	url: string;
	label: string;
	isRoute?: boolean;
};

type FooterLinkGroupProps = {
	title: string;
	links: FooterLinkItem[];
};

const getProductLinks = (): FooterLinkItem[] => [
	{ url: "/#templates", label: t`Templates` },
	{ url: "/#frequently-asked-questions", label: t`FAQ` },
	{ url: "/blog", label: t`Blog`, isRoute: true },
];

const getCompanyLinks = (): FooterLinkItem[] => [
	{ url: "mailto:hello@noorcv.com", label: t`Contact Us` },
	{ url: "/privacy", label: t`Privacy Policy`, isRoute: true },
	{ url: "/terms", label: t`Terms of Service`, isRoute: true },
];

export function Footer() {
	return (
		<footer id="footer" className="border-t bg-muted/20">
			<div className="container mx-auto px-4 py-12 lg:px-12">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand Column */}
					<div className="space-y-4 sm:col-span-2 lg:col-span-1">
						<BrandIcon variant="logo" className="h-10 w-auto" />
						<div className="space-y-2">
							<h2 className="font-bold text-lg tracking-tight">NoorCV</h2>
							<p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
								<Trans>
									A free AI-powered resume builder designed for expats and professionals in the Gulf region.
								</Trans>
							</p>
						</div>
					</div>

					<FooterLinkGroup title={t`Product`} links={getProductLinks()} />
					<FooterLinkGroup title={t`Company`} links={getCompanyLinks()} />

					<div className="space-y-4 sm:col-span-2 lg:col-span-1">
						<Copyright />
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
	return (
		<div className="space-y-4">
			<h2 className="font-medium text-muted-foreground text-sm tracking-tight">{title}</h2>
			<ul className="space-y-3">
				{links.map((link) => (
					<FooterLink key={link.url} url={link.url} label={link.label} isRoute={link.isRoute} />
				))}
			</ul>
		</div>
	);
}

function FooterLink({ url, label, isRoute }: FooterLinkItem) {
	const [isHovered, setIsHovered] = useState(false);
	const isExternal = url.startsWith("http") || url.startsWith("mailto:");

	return (
		<li className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			{isRoute ? (
				<Link to={url} className="relative inline-block text-sm transition-colors hover:text-foreground">
					{label}
					<motion.div
						aria-hidden="true"
						initial={{ width: 0, opacity: 0 }}
						animate={isHovered ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="pointer-events-none absolute inset-s-0 -bottom-0.5 h-px rounded bg-primary"
					/>
				</Link>
			) : (
				<a
					href={url}
					{...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
					className="relative inline-block text-sm transition-colors hover:text-foreground"
				>
					{label}
					{isExternal && <span className="sr-only"> ({t`opens in new tab`})</span>}
					<motion.div
						aria-hidden="true"
						initial={{ width: 0, opacity: 0 }}
						animate={isHovered ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="pointer-events-none absolute inset-s-0 -bottom-0.5 h-px rounded bg-primary"
					/>
				</a>
			)}
		</li>
	);
}
