//common layout

import { Header } from "@/components/ui/Header";
import QueryP from "../providers/queryP";
import SheetP from "../providers/sheetP";
import { Toaster } from "sonner";

type props = { children: React.ReactNode };

const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      <QueryP>
        <SheetP />
        <Toaster />
        {children}
      </QueryP>
    </div>
  );
};

export default Layout;
