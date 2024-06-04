"use client";

import { useUser } from "@clerk/nextjs";

function capitalizeName(name: string) {
  if (typeof name !== "string" || name.length === 0) {
    return "";
  }
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

const Hello = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4 ml-3">
      <h2 className="text-2xl lg:text-4xl text-white font-medium ">
        Welcome Back{isLoaded ? "," : " "}
        {capitalizeName(user?.firstName as string)}
      </h2>
      <p className="text-sm lg:text-base text-red-300">
        This is your Financial Report
      </p>
    </div>
  );
};

export default Hello;
