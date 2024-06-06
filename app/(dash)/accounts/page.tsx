"use client";

import { useNewAccount } from "@/app/Features/Accounts/hooks/useNewAccount";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/dataTable";
import { useAccounts } from "@/app/Features/Accounts/api/userAccounts";
import { Skeleton } from "@/components/ui/skeleton";
import { useBulkDeleteAccounts } from "@/app/Features/Accounts/api/useBulkDelete";

const Accounts = () => {
  const newAccouont = useNewAccount();
  const accountsQuery = useAccounts();
  const deleteAccounts = useBulkDeleteAccounts();
  const accounts = accountsQuery?.data || [];

  const isDisabled = accountsQuery.isLoading || deleteAccounts.isPending;

  if (accountsQuery?.isLoading) {
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
          <CardTitle className="text-xl line-clamp-2 ">Accounts Page</CardTitle>
          <Button size="sm" onClick={newAccouont.onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={accounts}
            filterKey="email"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteAccounts.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounts;
