"use client";

import { useNewAccount } from "@/app/Features/Accounts/hooks/useNewAccount";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const Accounts = () => {
  const newAccouont = useNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-2 ">Accounts Page</CardTitle>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Accounts;
