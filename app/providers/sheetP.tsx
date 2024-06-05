"use client";

import { NewAccountSheet } from "../Features/Accounts/components/AcoountSheet";

import { useMountedState } from "react-use";

const SheetP = () => {
  const isMounted = useMountedState();
  if (!isMounted()) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};

export default SheetP;
