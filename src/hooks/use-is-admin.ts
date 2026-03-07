import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/integrations/orpc/client";

export function useIsAdmin() {
	const { data, isLoading } = useQuery(orpc.blog.isAdmin.queryOptions());

	return { isAdmin: data?.isAdmin ?? false, isLoading };
}
