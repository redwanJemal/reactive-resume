CREATE TABLE "blog_post" (
	"id" uuid PRIMARY KEY,
	"slug" text NOT NULL UNIQUE,
	"title" text NOT NULL,
	"excerpt" text NOT NULL,
	"category" text NOT NULL,
	"category_label" text NOT NULL,
	"cover_image" text,
	"content" text NOT NULL,
	"read_time" integer DEFAULT 5 NOT NULL,
	"is_published" boolean DEFAULT false NOT NULL,
	"author_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "blog_post_slug_index" ON "blog_post" ("slug");--> statement-breakpoint
CREATE INDEX "blog_post_is_published_index" ON "blog_post" ("is_published");--> statement-breakpoint
CREATE INDEX "blog_post_created_at_index" ON "blog_post" ("created_at" DESC NULLS LAST);--> statement-breakpoint
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_author_id_user_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE CASCADE;