import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import type { Icon } from "@phosphor-icons/react";
import { EnvelopeSimpleIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { BrandIcon } from "@/components/ui/brand-icon";
import { Button } from "@/components/ui/button";
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

type SocialLink = {
	url: string;
	label: string;
	icon: Icon;
};

const getProductLinks = (): FooterLinkItem[] => [
	{ url: "#templates", label: t`Templates` },
	{ url: "#frequently-asked-questions", label: t`FAQ` },
	{ url: "/blog", label: t`Blog`, isRoute: true },
];

const getCompanyLinks = (): FooterLinkItem[] => [
	{ url: "mailto:hello@hiregulf.com", label: t`Contact Us` },
	{ url: "/privacy", label: t`Privacy Policy` },
	{ url: "/terms", label: t`Terms of Service` },
];

const socialLinks: SocialLink[] = [
	{ url: "https://linkedin.com/company/hiregulf", label: "LinkedIn", icon: LinkedinLogoIcon },
	{ url: "https://x.com/hiregulf", label: "X (Twitter)", icon: XLogoIcon },
	{ url: "mailto:hello@hiregulf.com", label: "Email", icon: EnvelopeSimpleIcon },
];

export function Footer() {
	return (
		<motion.footer
			id="footer"
			className="p-4 pb-8 md:p-8 md:pb-12"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{/* Brand Column */}
				<div className="space-y-4 sm:col-span-2 lg:col-span-1">
					<BrandIcon variant="logo" className="size-10" />

					<div className="space-y-2">
						<h2 className="font-bold text-lg tracking-tight">HireGulf</h2>
						<p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
							<Trans>A free AI-powered resume builder designed for expats and professionals in the Gulf region.</Trans>
						</p>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-2 pt-2">
						{socialLinks.map((social) => (
							<Button key={social.label} size="icon-sm" variant="ghost" asChild>
								<a
									href={social.url}
									target="_blank"
									rel="noopener"
									aria-label={`${social.label} (${t`opens in new tab`})`}
								>
									<social.icon aria-hidden="true" size={18} />
								</a>
							</Button>
						))}
					</div>
				</div>

				{/* Product Column */}
				<FooterLinkGroup title={t`Product`} links={getProductLinks()} />

				{/* Company Column */}
				<FooterLinkGroup title={t`Company`} links={getCompanyLinks()} />

				{/* Copyright Column */}
				<div className="space-y-4 sm:col-span-2 lg:col-span-1">
					<Copyright />
				</div>
			</div>
		</motion.footer>
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
