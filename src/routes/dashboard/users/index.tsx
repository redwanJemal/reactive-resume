import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { UsersIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { client, orpc } from "@/integrations/orpc/client";
import { getInitials } from "@/utils/string";
import { DashboardHeader } from "../-components/header";

export const Route = createFileRoute("/dashboard/users/")({
	component: UsersListPage,
	beforeLoad: async () => {
		try {
			const result = await client.blog.isAdmin();
			if (!result.isAdmin) throw redirect({ to: "/dashboard/resumes", replace: true });
		} catch {
			throw redirect({ to: "/dashboard/resumes", replace: true });
		}
	},
});

function UsersListPage() {
	const { data: users = [] } = useQuery(orpc.users.list.queryOptions());

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<DashboardHeader icon={UsersIcon} title={t`Registered Users`} />
				<Badge variant="secondary" className="text-sm">
					{users.length} {t`users`}
				</Badge>
			</div>

			<Separator />

			{users.length === 0 ? (
				<div className="py-12 text-center text-muted-foreground">
					<Trans>No users registered yet.</Trans>
				</div>
			) : (
				<div className="space-y-2">
					{users.map((user) => (
						<div key={user.id} className="flex items-center gap-4 rounded-lg border p-4">
							<Avatar className="size-10 shrink-0">
								<AvatarImage src={user.image ?? undefined} />
								<AvatarFallback>{getInitials(user.name)}</AvatarFallback>
							</Avatar>

							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2">
									<h3 className="truncate font-medium">{user.name}</h3>
									{user.emailVerified && (
										<Badge variant="default" className="text-xs">
											<Trans>Verified</Trans>
										</Badge>
									)}
								</div>
								<p className="truncate text-muted-foreground text-sm">{user.email}</p>
							</div>

							<div className="hidden flex-col items-end gap-1 text-sm sm:flex">
								<span className="text-muted-foreground">
									{user.resumeCount} {user.resumeCount === 1 ? t`resume` : t`resumes`}
								</span>
								<span className="text-muted-foreground text-xs">
									{t`Joined`}{" "}
									{new Date(user.createdAt).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
									})}
								</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
