import { t } from "@lingui/core/macro";
import { ArticleIcon } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { client } from "@/integrations/orpc/client";
import { DashboardHeader } from "../-components/header";
import { BlogForm, type BlogFormData } from "./-components/blog-form";

export const Route = createFileRoute("/dashboard/blog/new")({
	component: NewBlogPostPage,
	beforeLoad: async () => {
		try {
			const result = await client.blog.isAdmin();
			if (!result.isAdmin) throw redirect({ to: "/dashboard/resumes", replace: true });
		} catch {
			throw redirect({ to: "/dashboard/resumes", replace: true });
		}
	},
});

function NewBlogPostPage() {
	const navigate = useNavigate();

	const { mutate, isPending } = useMutation({
		mutationFn: (data: BlogFormData) => client.blog.create(data),
		onSuccess: () => {
			toast.success(t`Blog post created`);
			navigate({ to: "/dashboard/blog" });
		},
		onError: () => {
			toast.error(t`Failed to create blog post`);
		},
	});

	return (
		<div className="space-y-4">
			<DashboardHeader icon={ArticleIcon} title={t`New Blog Post`} />
			<Separator />
			<BlogForm onSubmit={mutate} isLoading={isPending} submitLabel={t`Create Post`} />
		</div>
	);
}
