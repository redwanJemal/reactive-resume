import { Trans } from "@lingui/react/macro";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/privacy")({
	component: PrivacyPage,
});

function PrivacyPage() {
	return (
		<main className="container mx-auto max-w-3xl px-4 py-24 lg:px-12">
			<h1 className="mb-8 font-bold text-3xl tracking-tight">
				<Trans>Privacy Policy</Trans>
			</h1>

			<div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
				<p>
					<Trans>Last updated: March 2026</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Information We Collect</Trans>
				</h2>
				<p>
					<Trans>
						When you create an account, we collect your name, email address, and optional profile photo. When you build
						resumes, the content you enter (work experience, education, skills, etc.) is stored in our database to power
						the resume builder.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>How We Use Your Information</Trans>
				</h2>
				<p>
					<Trans>
						Your information is used solely to provide and improve the NoorCV service. We use your email to authenticate
						your account and send essential service communications. Resume data is used only to render and export your
						resumes.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Data Storage & Security</Trans>
				</h2>
				<p>
					<Trans>
						Your data is stored securely on our servers. We use encryption in transit (HTTPS) and follow
						industry-standard security practices. We do not sell, trade, or rent your personal information to third
						parties.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Third-Party Services</Trans>
				</h2>
				<p>
					<Trans>
						We may use third-party services for authentication (Google OAuth) and AI features (OpenAI, Google Gemini).
						These services process data according to their own privacy policies. We only share the minimum data
						necessary for these services to function.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Your Rights</Trans>
				</h2>
				<p>
					<Trans>
						You can access, update, or delete your personal data at any time through your account settings. You may
						delete your account entirely, which removes all associated data from our servers. To exercise these rights,
						contact us at hello@noorcv.com.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Cookies</Trans>
				</h2>
				<p>
					<Trans>
						We use essential cookies for authentication and session management. We do not use tracking cookies or
						third-party analytics cookies.
					</Trans>
				</p>

				<h2 className="font-semibold text-foreground text-lg">
					<Trans>Contact</Trans>
				</h2>
				<p>
					<Trans>For privacy-related questions, contact us at hello@noorcv.com.</Trans>
				</p>
			</div>
		</main>
	);
}
