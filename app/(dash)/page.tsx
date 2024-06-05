"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useNewAccount } from "../Features/Accounts/hooks/useNewAccount";

const Home = () => {
  const { onOpen } = useNewAccount();
  return (
    <div>
      <Button onClick={onOpen}>Open</Button>
    </div>
  );
};

export default Home;
