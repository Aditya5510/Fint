ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pid_unique";--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "pid" DROP NOT NULL;