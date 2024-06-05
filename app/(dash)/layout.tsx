//common layout

import { Header } from "@/components/ui/Header";
import QueryP from "../providers/queryP";

type props = { children: React.ReactNode };

const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      <QueryP>{children}</QueryP>
    </div>
  );
};

export default Layout;
