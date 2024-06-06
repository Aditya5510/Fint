"use client";

import { NewAccountSheet } from "../Features/Accounts/components/AcoountSheet";

import { useMountedState } from "react-use";
import { EditAccountSheet } from "../Features/Accounts/components/EditAccountSheet";

const SheetP = () => {
  const isMounted = useMountedState();

  // if (!isMounted()) return null;
  //above is a bug

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};

export default SheetP;
