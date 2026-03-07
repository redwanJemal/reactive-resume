import { createFileRoute } from "@tanstack/react-router";
import { BlogPreview } from "./-sections/blog-preview";
import { FAQ } from "./-sections/faq";
import { Features } from "./-sections/features";
import { Footer } from "./-sections/footer";
import { Hero } from "./-sections/hero";
import { HowItWorks } from "./-sections/how-it-works";
import { Prefooter } from "./-sections/prefooter";

import { Templates } from "./-sections/templates";
import { Testimonials } from "./-sections/testimonials";

export const Route = createFileRoute("/_home/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main id="main-content" className="relative">
			<Hero />
			<HowItWorks />
			<Templates />
			<Features />

			<Testimonials />
			<BlogPreview />
			<FAQ />
			<Prefooter />
			<Footer />
		</main>
	);
}
