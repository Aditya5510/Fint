import {
  SheetContent,
  SheetDescription,
  SheetTitle,
  Sheet,
  SheetHeader,
} from "@/components/ui/sheet";
import { useOpenCategory } from "../hooks/useOpenCategory";
import { CategoryForm } from "./CategoryForm";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useEditCategory } from "../api/useEditCategory";
import { useDeleteCategory } from "../api/useDeleteCategory";
import { useConfirm } from "@/app/hooks/useConfirm";
import { useCategory } from "../api/userCategory";

const formSchema = insertCategorySchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

export const EditCategorySheet = () => {
  const { isOpen, onClose, id } = useOpenCategory();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this Category?",
    "This action cannot be undone"
  );

  const categoryQuery = useCategory(id);

  const editmutation = useEditCategory(id as string);
  const deletemutation = useDeleteCategory(id as string);

  const isPending = editmutation.isPending || deletemutation.isPending;

  const onSubmit = (values: FormValues) => {
    editmutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const defaultValues = categoryQuery.data
    ? {
        name: categoryQuery.data.name,
      }
    : {
        name: "",
      };

  const isLoading = categoryQuery.isLoading;

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
            <SheetTitle>Edit Category</SheetTitle>
            <SheetDescription>Edit an existing Category</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="size-4 text-muted-foreground animate-spin" />
              </div>
            </>
          ) : (
            <CategoryForm
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
