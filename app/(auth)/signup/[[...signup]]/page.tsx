import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const signup = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full  lg:flex flex-col justify-center items-center px-6 py-2">
        <div className="text-center space-y-4 pt-20">
          <h1 className="font-bold text text-3xl text-[#3B3C45] mb-2">
            Welcome to Fint
          </h1>
        </div>
        <div>
          <ClerkLoaded>
            {" "}
            <SignUp path="/signup" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" size={20} />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden lg:flex justify-center items-center bg-red-500">
        <Image src="./logo.svg" alt="logo" width={150} height={150} />
      </div>
    </div>
  );
};

export default signup;
