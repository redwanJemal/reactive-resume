import {
	CalendarIcon,
	EnvelopeIcon,
	FlagIcon,
	GlobeIcon,
	HeartIcon,
	IdentificationCardIcon,
	MapPinIcon,
	PhoneIcon,
} from "@phosphor-icons/react";
import { cn } from "@/utils/style";
import { getSectionComponent } from "../shared/get-section-component";
import { PageIcon } from "../shared/page-icon";
import { PageLink } from "../shared/page-link";
import { PagePicture } from "../shared/page-picture";
import { useResumeStore } from "../store/resume";
import type { TemplateProps } from "./types";

const sectionClassName = cn(
	// Section Heading
	"[&>h6]:border-(--page-primary-color) [&>h6]:border-b",

	// Section Item Header in Sidebar Layout
	"group-data-[layout=sidebar]:[&_.section-item-header>div]:flex-col",
	"group-data-[layout=sidebar]:[&_.section-item-header>div]:items-start",

	// Decoration Line in Section Item Header (logical properties for RTL)
	"group-data-[layout=main]:[&_.section-item-header]:ps-2",
	"group-data-[layout=main]:[&_.section-item-header]:py-0.5",
	"group-data-[layout=main]:[&_.section-item-header]:-ms-2.5",
	"group-data-[layout=main]:[&_.section-item-header]:border-s-2",
	"group-data-[layout=main]:[&_.section-item-header]:border-(--page-primary-color)",
);

/**
 * Template: Khaleeji
 * Gulf-optimized template with RTL support, photo display, and Gulf CV fields.
 * Features a professional sidebar layout with nationality, visa status, DOB, and marital status.
 */
export function KhaleejiTemplate({ pageIndex, pageLayout }: TemplateProps) {
	const isFirstPage = pageIndex === 0;
	const { main, sidebar, fullWidth } = pageLayout;

	return (
		<div className="template-khaleeji page-content">
			{/* Sidebar Background - flips correctly for RTL */}
			{(!fullWidth || isFirstPage) && (
				<div className="page-sidebar-background pointer-events-none absolute inset-y-0 z-0 w-(--page-sidebar-width) shrink-0 bg-(--page-primary-color)/15 ltr:inset-s-0 rtl:inset-e-0" />
			)}

			<div className="flex">
				{(!fullWidth || isFirstPage) && (
					<aside data-layout="sidebar" className="sidebar group z-10 flex w-(--page-sidebar-width) shrink-0 flex-col">
						{isFirstPage && <SidebarHeader />}

						<div className="flex-1 space-y-4 px-(--page-margin-x) pt-(--page-margin-y)">
							{sidebar.map((section) => {
								const Component = getSectionComponent(section, { sectionClassName });
								return <Component key={section} id={section} />;
							})}
						</div>
					</aside>
				)}

				<main data-layout="main" className={cn("main group z-10", !fullWidth ? "col-span-2" : "col-span-3")}>
					{isFirstPage && <MainHeader />}

					<div className="space-y-4 px-(--page-margin-x) pt-(--page-margin-y)">
						{main.map((section) => {
							const Component = getSectionComponent(section, { sectionClassName });
							return <Component key={section} id={section} />;
						})}
					</div>
				</main>
			</div>
		</div>
	);
}

function SidebarHeader() {
	const basics = useResumeStore((state) => state.resume.data.basics);

	return (
		<div className="page-header space-y-4 bg-(--page-primary-color) px-(--page-margin-x) py-(--page-margin-y) text-(--page-background-color)">
			<PagePicture />

			{/* Gulf CV Fields */}
			<div className="basics-items flex flex-col items-start gap-y-2 text-sm [&>div>i]:text-(--page-background-color)!">
				{basics.location && (
					<div className="basics-item-location flex items-center gap-x-1.5">
						<MapPinIcon className="shrink-0" />
						<div>{basics.location}</div>
					</div>
				)}

				{basics.phone && (
					<div className="basics-item-phone flex items-center gap-x-1.5">
						<PhoneIcon className="shrink-0" />
						<PageLink url={`tel:${basics.phone}`} label={basics.phone} />
					</div>
				)}

				{basics.email && (
					<div className="basics-item-email flex items-center gap-x-1.5">
						<EnvelopeIcon className="shrink-0" />
						<PageLink url={`mailto:${basics.email}`} label={basics.email} />
					</div>
				)}

				{basics.website.url && (
					<div className="basics-item-website flex items-center gap-x-1.5">
						<GlobeIcon className="shrink-0" />
						<PageLink {...basics.website} />
					</div>
				)}

				{basics.nationality && (
					<div className="basics-item-nationality flex items-center gap-x-1.5">
						<FlagIcon className="shrink-0" />
						<span>{basics.nationality}</span>
					</div>
				)}

				{basics.dateOfBirth && (
					<div className="basics-item-dob flex items-center gap-x-1.5">
						<CalendarIcon className="shrink-0" />
						<span>{basics.dateOfBirth}</span>
					</div>
				)}

				{basics.maritalStatus && (
					<div className="basics-item-marital flex items-center gap-x-1.5">
						<HeartIcon className="shrink-0" />
						<span>{basics.maritalStatus}</span>
					</div>
				)}

				{basics.visaStatus && (
					<div className="basics-item-visa flex items-center gap-x-1.5">
						<IdentificationCardIcon className="shrink-0" />
						<span>{basics.visaStatus}</span>
					</div>
				)}

				{basics.customFields.map((field) => (
					<div key={field.id} className="basics-item-custom flex items-center gap-x-1.5">
						<PageIcon icon={field.icon} />
						{field.link ? <PageLink url={field.link} label={field.text} /> : <span>{field.text}</span>}
					</div>
				))}
			</div>
		</div>
	);
}

function MainHeader() {
	const basics = useResumeStore((state) => state.resume.data.basics);

	return (
		<div className="page-header px-(--page-margin-x) pt-(--page-margin-y)">
			<div className="basics-header border-(--page-primary-color) border-b-2 pb-4">
				<h2 className="basics-name font-bold text-3xl tracking-tight">{basics.name}</h2>
				<p className="basics-headline mt-1 text-(--page-primary-color)">{basics.headline}</p>
			</div>
		</div>
	);
}
