import { zodResolver } from "@hookform/resolvers/zod";
import { Trans } from "@lingui/react/macro";
import { useForm } from "react-hook-form";
import type z from "zod";
import { URLInput } from "@/components/input/url-input";
import { useResumeStore } from "@/components/resume/store/resume";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { basicsSchema } from "@/schema/resume/data";
import { SectionBase } from "../shared/section-base";
import { CustomFieldsSection } from "./custom-fields";

export function BasicsSectionBuilder() {
	return (
		<SectionBase type="basics">
			<BasicsSectionForm />
		</SectionBase>
	);
}

const formSchema = basicsSchema;

type FormValues = z.infer<typeof formSchema>;

function BasicsSectionForm() {
	const basics = useResumeStore((state) => state.resume.data.basics);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: basics,
		mode: "onChange",
	});

	const onSubmit = (data: FormValues) => {
		updateResumeData((draft) => {
			draft.basics = data;
		});
	};

	return (
		<Form {...form}>
			<form onChange={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<Trans>Name</Trans>
							</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="headline"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<Trans>Headline</Trans>
							</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<Trans>Email</Trans>
							</FormLabel>
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<Trans>Phone</Trans>
							</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<Trans>Location</Trans>
							</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="website"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<Trans>Website</Trans>
							</FormLabel>
							<FormControl>
								<URLInput {...field} value={field.value} onChange={field.onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Gulf CV Fields */}
				<div className="space-y-4 border-t pt-4">
					<p className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
						<Trans>Gulf CV Fields</Trans>
					</p>

					<FormField
						control={form.control}
						name="nationality"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<Trans>Nationality</Trans>
								</FormLabel>
								<FormControl>
									<Input {...field} placeholder="e.g. Indian, Filipino, Egyptian" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="dateOfBirth"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<Trans>Date of Birth</Trans>
								</FormLabel>
								<FormControl>
									<Input {...field} placeholder="e.g. 1990-01-15" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="maritalStatus"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<Trans>Marital Status</Trans>
								</FormLabel>
								<FormControl>
									<Input {...field} placeholder="e.g. Single, Married" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="visaStatus"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<Trans>Visa Status</Trans>
								</FormLabel>
								<FormControl>
									<Input {...field} placeholder="e.g. Resident, Visit Visa, Citizen" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<CustomFieldsSection onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
