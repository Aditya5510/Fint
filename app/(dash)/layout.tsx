//common layout

import { Header } from "@/components/ui/Header";

type props = { children: React.ReactNode };

const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
