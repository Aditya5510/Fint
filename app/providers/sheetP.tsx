"use client";
import { useMountedState } from "react-use";
import { NewAccountSheet } from "../Features/Accounts/components/AcoountSheet";
import { EditAccountSheet } from "../Features/Accounts/components/EditAccountSheet";

// import { NewAccountSheet } from "../Features/Accounts/components/AcoountSheet";
import { NewCategorySheet } from "../Features/Categories/components/CategorySheet";
// import { EditAccountSheet } from "../Features/Accounts/components/EditAccountSheet";
import { EditCategorySheet } from "../Features/Categories/components/EditCategorySheet";

const SheetP = () => {
  const isMounted = useMountedState();

  // if (!isMounted()) return null;
  //above is a bug

  return (
    <>
      <NewCategorySheet />
      <EditCategorySheet />
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};

export default SheetP;
