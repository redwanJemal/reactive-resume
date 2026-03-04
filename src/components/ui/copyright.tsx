import { Trans } from "@lingui/react/macro";
import { cn } from "@/utils/style";

type Props = React.ComponentProps<"div">;

export function Copyright({ className, ...props }: Props) {
	return (
		<div className={cn("text-muted-foreground/80 text-xs leading-relaxed", className)} {...props}>
			<p>
				<Trans>© 2026 HireGulf. All rights reserved.</Trans>
			</p>

			<p>
				<Trans>Built for Gulf professionals.</Trans>
			</p>

			<p className="mt-4">HireGulf v{__APP_VERSION__}</p>
		</div>
	);
}
