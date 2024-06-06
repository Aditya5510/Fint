"use client";

import { useDeleteCategory } from "@/app/Features/Categories/api/useDeleteCategory";
import { useOpenCategory } from "@/app/Features/Categories/hooks/useOpenCategory";
import { useConfirm } from "@/app/hooks/useConfirm";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Delete, Edit, MoreHorizontal, Trash2 } from "lucide-react";

type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  const { onOpen } = useOpenCategory();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this category?",
    "This action cannot be undone"
  );
  const deletemutations = useDeleteCategory(id);

  const handleDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deletemutations.mutate();
    }
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled={false} onClick={() => onOpen(id)}>
            <Edit className="size-4 mr-2" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={deletemutations.isPending}
            onClick={handleDelete}
          >
            <Trash2 className="size-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
