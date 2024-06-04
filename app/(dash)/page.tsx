import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
