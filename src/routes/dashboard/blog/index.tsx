import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArticleIcon, PencilSimpleIcon, PlusIcon, TrashSimpleIcon } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useConfirm } from "@/hooks/use-confirm";
import { client, orpc } from "@/integrations/orpc/client";
import { DashboardHeader } from "../-components/header";

export const Route = createFileRoute("/dashboard/blog/")({
	component: BlogListPage,
	beforeLoad: async () => {
		try {
			const result = await client.blog.isAdmin();
			if (!result.isAdmin) throw redirect({ to: "/dashboard/resumes", replace: true });
		} catch {
			throw redirect({ to: "/dashboard/resumes", replace: true });
		}
	},
});

function BlogListPage() {
	const confirm = useConfirm();
	const queryClient = useQueryClient();
	const { data: posts = [] } = useQuery(orpc.blog.list.queryOptions());

	const { mutateAsync: deletePost } = useMutation({
		mutationFn: (id: string) => client.blog.delete({ id }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: orpc.blog.list.queryOptions().queryKey });
			toast.success(t`Blog post deleted`);
		},
	});

	const handleDelete = async (id: string, title: string) => {
		const confirmed = await confirm(t`Delete "${title}"?`, {
			description: t`This action cannot be undone.`,
		});
		if (confirmed) await deletePost(id);
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<DashboardHeader icon={ArticleIcon} title={t`Blog Posts`} />
				<Button asChild>
					<Link to="/dashboard/blog/new">
						<PlusIcon />
						<Trans>New Post</Trans>
					</Link>
				</Button>
			</div>

			<Separator />

			{posts.length === 0 ? (
				<div className="py-12 text-center text-muted-foreground">
					<Trans>No blog posts yet. Create your first post.</Trans>
				</div>
			) : (
				<div className="space-y-2">
					{posts.map((post) => (
						<div key={post.id} className="flex items-center justify-between gap-4 rounded-lg border p-4">
							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2">
									<h3 className="truncate font-medium">{post.title}</h3>
									<Badge variant={post.isPublished ? "default" : "secondary"}>
										{post.isPublished ? t`Published` : t`Draft`}
									</Badge>
								</div>
								<div className="mt-1 flex items-center gap-3 text-muted-foreground text-sm">
									<span>{post.categoryLabel}</span>
									<span>
										{new Date(post.createdAt).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</span>
								</div>
							</div>

							<div className="flex items-center gap-1">
								<Button size="icon" variant="ghost" asChild>
									<Link to="/dashboard/blog/$id" params={{ id: post.id }}>
										<PencilSimpleIcon />
									</Link>
								</Button>
								<Button size="icon" variant="ghost" onClick={() => handleDelete(post.id, post.title)}>
									<TrashSimpleIcon />
								</Button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
