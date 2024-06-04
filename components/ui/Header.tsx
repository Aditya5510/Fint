import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./HeaderLogo";
import { Navigation } from "./Navigation";
import { Loader2 } from "lucide-react";
import Hello from "./Hello";

export const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-b from-red-700 to-red-500 py-8 lg:px-14 pb-32">
        <div className="max-w-screen-2xl mx-auto p-2 pr-4">
          <div className="w-full flex items-center justify-between mb-14">
            <div className="flex items-center lg:gap-x-16">
              <HeaderLogo />
              <Navigation />
            </div>
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/signin" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 size={24} className="text-white animate-spin" />
            </ClerkLoading>
          </div>
          <Hello />
        </div>
      </header>
    </div>
  );
};
