import { Trans } from "@lingui/react/macro";
import { useCallback, useEffect, useState } from "react";
import { RichInput } from "@/components/input/rich-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const CATEGORIES = [
	{ value: "gulf-job-tips", label: "Gulf Job Tips" },
	{ value: "resume-writing", label: "Resume Writing" },
	{ value: "visa-work-permits", label: "Visa & Work Permits" },
	{ value: "interview-prep", label: "Interview Prep" },
] as const;

export type BlogFormData = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	categoryLabel: string;
	coverImage: string | null;
	content: string;
	readTime: number;
	isPublished: boolean;
};

type Props = {
	defaultValues?: BlogFormData;
	onSubmit: (data: BlogFormData) => void;
	isLoading?: boolean;
	submitLabel: string;
};

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();
}

function estimateReadTime(html: string): number {
	const text = html.replace(/<[^>]*>/g, "");
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

export function BlogForm({ defaultValues, onSubmit, isLoading, submitLabel }: Props) {
	const [form, setForm] = useState<BlogFormData>(
		defaultValues ?? {
			slug: "",
			title: "",
			excerpt: "",
			category: "gulf-job-tips",
			categoryLabel: "Gulf Job Tips",
			coverImage: null,
			content: "",
			readTime: 5,
			isPublished: false,
		},
	);

	const [slugManual, setSlugManual] = useState(!!defaultValues);

	const update = useCallback(<K extends keyof BlogFormData>(key: K, value: BlogFormData[K]) => {
		setForm((prev) => ({ ...prev, [key]: value }));
	}, []);

	useEffect(() => {
		if (!slugManual) {
			update("slug", slugify(form.title));
		}
	}, [form.title, slugManual, update]);

	const handleCategoryChange = (value: string) => {
		const cat = CATEGORIES.find((c) => c.value === value);
		if (cat) {
			update("category", cat.value);
			update("categoryLabel", cat.label);
		}
	};

	const handleContentChange = (html: string) => {
		update("content", html);
		update("readTime", estimateReadTime(html));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(form);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="title">
						<Trans>Title</Trans>
					</Label>
					<Input id="title" value={form.title} onChange={(e) => update("title", e.target.value)} required />
				</div>

				<div className="space-y-2">
					<Label htmlFor="slug">
						<Trans>Slug</Trans>
					</Label>
					<Input
						id="slug"
						value={form.slug}
						onChange={(e) => {
							setSlugManual(true);
							update("slug", e.target.value);
						}}
						required
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="excerpt">
					<Trans>Excerpt</Trans>
				</Label>
				<Textarea
					id="excerpt"
					value={form.excerpt}
					onChange={(e) => update("excerpt", e.target.value)}
					rows={3}
					required
				/>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="category">
						<Trans>Category</Trans>
					</Label>
					<select
						id="category"
						value={form.category}
						onChange={(e) => handleCategoryChange(e.target.value)}
						className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
					>
						{CATEGORIES.map((cat) => (
							<option key={cat.value} value={cat.value}>
								{cat.label}
							</option>
						))}
					</select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="coverImage">
						<Trans>Cover Image URL</Trans>
					</Label>
					<Input
						id="coverImage"
						value={form.coverImage ?? ""}
						onChange={(e) => update("coverImage", e.target.value || null)}
						placeholder="https://..."
					/>
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="readTime">
						<Trans>Read Time (minutes)</Trans>
					</Label>
					<Input
						id="readTime"
						type="number"
						min={1}
						value={form.readTime}
						onChange={(e) => update("readTime", Number.parseInt(e.target.value, 10) || 1)}
					/>
				</div>

				<div className="flex items-center gap-3 pt-6">
					<Switch
						id="isPublished"
						checked={form.isPublished}
						onCheckedChange={(checked) => update("isPublished", !!checked)}
					/>
					<Label htmlFor="isPublished">
						<Trans>Published</Trans>
					</Label>
				</div>
			</div>

			<div className="space-y-2">
				<Label>
					<Trans>Content</Trans>
				</Label>
				<RichInput value={form.content} onChange={handleContentChange} />
			</div>

			<div className="flex justify-end">
				<Button type="submit" disabled={isLoading}>
					{submitLabel}
				</Button>
			</div>
		</form>
	);
}
