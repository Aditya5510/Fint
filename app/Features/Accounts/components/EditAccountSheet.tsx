import {
  SheetContent,
  SheetDescription,
  SheetTitle,
  Sheet,
  SheetHeader,
} from "@/components/ui/sheet";
// import { useNewAccount } from "../hooks/useNewAccount";
import { useOpenAccount } from "../hooks/useOpenAccount";
import { AccountForm } from "./AccountForm";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
// import { useCreatEAccount } from "../api/useCreateAccount";
import { useAccount } from "../api/userAccount";
import { Loader2 } from "lucide-react";
import { useEditAccounts } from "../api/useEditAccounts";
import { useDeleteAccount } from "../api/useDeleteAccount";
import { useConfirm } from "@/app/hooks/useConfirm";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

export const EditAccountSheet = () => {
  const { isOpen, onClose, id } = useOpenAccount();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this account?",
    "This action cannot be undone"
  );

  const accountQuery = useAccount(id);

  const editmutation = useEditAccounts(id as string);
  const deletemutation = useDeleteAccount(id as string);

  const isPending = editmutation.isPending || deletemutation.isPending;

  const onSubmit = (values: FormValues) => {
    editmutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  const isLoading = accountQuery.isLoading;

  const onDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deletemutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Edit Account</SheetTitle>
            <SheetDescription>Edit an existing account</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="size-4 text-muted-foreground animate-spin" />
              </div>
            </>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              disabled={isPending}
              defaultValues={defaultValues}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
