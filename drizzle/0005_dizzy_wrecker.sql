ALTER TABLE "categories" DROP CONSTRAINT "categories_pid_unique";--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "pid" DROP NOT NULL;