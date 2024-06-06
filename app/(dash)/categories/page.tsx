"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/dataTable";
import { Skeleton } from "@/components/ui/skeleton";
import { useNewCategory } from "@/app/Features/Categories/hooks/useNewCategory";
import { useCategories } from "@/app/Features/Categories/api/userCategories";
import { useBulkDeleteCategories } from "@/app/Features/Categories/api/useBulkDelete";

const Categories = () => {
  const newCategory = useNewCategory();
  const categoryQuery = useCategories();
  const deleteCategory = useBulkDeleteCategories();
  const category = categoryQuery?.data || [];

  const isDisabled = categoryQuery.isLoading || deleteCategory.isPending;

  if (categoryQuery?.isLoading) {
    return (
      <>
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
          <Card className="border-none drop-shadow-sm">
            <CardHeader>
              <Skeleton className="w-8 h-8" />
            </CardHeader>
            <CardContent>
              <div className="h-[500px] w-full flex items center justify-center">
                <Loader2 className="w-8 h-8 text-zinc-500 animate-spin" />
              </div>
            </CardContent>
          </Card>
        </div>
        ;
      </>
    );
  }

  // console.log(accounts);

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-2 ">
            Categories Page
          </CardTitle>
          <Button size="sm" onClick={newCategory.onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={category}
            filterKey="name"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteCategory.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;
