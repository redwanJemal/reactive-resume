import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArticleIcon, TrashSimpleIcon } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useConfirm } from "@/hooks/use-confirm";
import { client, orpc } from "@/integrations/orpc/client";
import { DashboardHeader } from "../-components/header";
import { BlogForm, type BlogFormData } from "./-components/blog-form";

export const Route = createFileRoute("/dashboard/blog/$id")({
	component: EditBlogPostPage,
	beforeLoad: async () => {
		try {
			const result = await client.blog.isAdmin();
			if (!result.isAdmin) throw redirect({ to: "/dashboard/resumes", replace: true });
		} catch {
			throw redirect({ to: "/dashboard/resumes", replace: true });
		}
	},
});

function EditBlogPostPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const confirm = useConfirm();
	const queryClient = useQueryClient();

	const { data: post, isLoading: isLoadingPost } = useQuery(orpc.blog.getById.queryOptions({ input: { id } }));

	const { mutate: updatePost, isPending: isUpdating } = useMutation({
		mutationFn: (data: BlogFormData) => client.blog.update({ id, ...data }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: orpc.blog.getById.queryOptions({ input: { id } }).queryKey });
			queryClient.invalidateQueries({ queryKey: orpc.blog.list.queryOptions().queryKey });
			toast.success(t`Blog post updated`);
		},
		onError: () => {
			toast.error(t`Failed to update blog post`);
		},
	});

	const { mutate: deletePost } = useMutation({
		mutationFn: () => client.blog.delete({ id }),
		onSuccess: () => {
			toast.success(t`Blog post deleted`);
			navigate({ to: "/dashboard/blog" });
		},
	});

	const handleDelete = async () => {
		const confirmed = await confirm(t`Delete this post?`, {
			description: t`This action cannot be undone.`,
		});
		if (confirmed) deletePost();
	};

	if (isLoadingPost || !post) {
		return (
			<div className="py-12 text-center text-muted-foreground">
				<Trans>Loading...</Trans>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<DashboardHeader icon={ArticleIcon} title={t`Edit Blog Post`} />
				<Button variant="destructive" size="sm" onClick={handleDelete}>
					<TrashSimpleIcon />
					<Trans>Delete</Trans>
				</Button>
			</div>

			<Separator />

			<BlogForm
				defaultValues={{
					slug: post.slug,
					title: post.title,
					excerpt: post.excerpt,
					category: post.category,
					categoryLabel: post.categoryLabel,
					coverImage: post.coverImage,
					content: post.content,
					readTime: post.readTime,
					isPublished: post.isPublished,
				}}
				onSubmit={updatePost}
				isLoading={isUpdating}
				submitLabel={t`Save Changes`}
			/>
		</div>
	);
}
