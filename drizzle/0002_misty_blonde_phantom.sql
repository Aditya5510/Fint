ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pid_unique";--> statement-breakpoint
ALTER TABLE "accounts" DROP COLUMN IF EXISTS "pid";