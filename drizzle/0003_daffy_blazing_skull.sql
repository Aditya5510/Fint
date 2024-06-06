ALTER TABLE "accounts" ADD COLUMN "pid" text NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_pid_unique" UNIQUE("pid");