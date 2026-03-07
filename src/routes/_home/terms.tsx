import { Trans } from "@lingui/react/macro";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/terms")({
	component: TermsPage,
});

function TermsPage() {
	return (
		<main className="container mx-auto max-w-3xl px-4 py-24 lg:px-12">
			<h1 className="mb-8 font-bold text-3xl tracking-tight">
				<Trans>Terms of Service</Trans>
			</h1>

			<div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
				<p>
					<Trans>Last updated: March 2026</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Acceptance of Terms</Trans>
				</h2>
				<p>
					<Trans>
						By accessing or using NoorCV, you agree to be bound by these Terms of Service. If you do not agree, please
						do not use the service.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>The Service</Trans>
				</h2>
				<p>
					<Trans>
						NoorCV is a free online resume builder. We provide tools to create, edit, export, and share resumes. The
						service is provided "as is" without warranties of any kind.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Your Account</Trans>
				</h2>
				<p>
					<Trans>
						You are responsible for maintaining the security of your account credentials. You must provide accurate
						information when creating an account. You may not use the service for unlawful purposes.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Your Content</Trans>
				</h2>
				<p>
					<Trans>
						You retain ownership of all content you create using NoorCV, including resume text, uploads, and designs. We
						do not claim any intellectual property rights over your content. You grant us a limited license to store and
						process your content solely for providing the service.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Acceptable Use</Trans>
				</h2>
				<p>
					<Trans>
						You agree not to misuse the service, including but not limited to: attempting to gain unauthorized access,
						interfering with other users, or using the service to distribute malware or spam.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Limitation of Liability</Trans>
				</h2>
				<p>
					<Trans>
						NoorCV shall not be liable for any indirect, incidental, or consequential damages arising from your use of
						the service. Our total liability is limited to the amount you paid for the service (which is zero, as NoorCV
						is free).
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Changes to Terms</Trans>
				</h2>
				<p>
					<Trans>
						We may update these terms from time to time. Continued use of the service after changes constitutes
						acceptance of the new terms.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Contact</Trans>
				</h2>
				<p>
					<Trans>For questions about these terms, contact us at hello@noorcv.com.</Trans>
				</p>
			</div>
		</main>
	);
}
