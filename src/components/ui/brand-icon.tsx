import { cn } from "@/utils/style";

type Props = React.ComponentProps<"img"> & {
	variant?: "logo" | "icon";
};

export function BrandIcon({ variant = "logo", className, ...props }: Props) {
	const defaultClass = variant === "logo" ? "h-12 w-auto" : "size-12";

	return (
		<>
			<img
				src={`/${variant}/dark.png`}
				alt="NoorCV"
				className={cn(`hidden dark:block ${defaultClass}`, className)}
				{...props}
			/>
			<img
				src={`/${variant}/light.png`}
				alt="NoorCV"
				className={cn(`block dark:hidden ${defaultClass}`, className)}
				{...props}
			/>
		</>
	);
}
