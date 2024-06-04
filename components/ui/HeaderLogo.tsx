import Link from "next/link";
import Image from "next/image";
// import logo from "@public/logo.png";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center">
        <Image src={"/logo.svg"} alt="logo" height={28} width={28} />
        <p className="font-semibold text-white text-2xl ml-4">Fint</p>
      </div>
    </Link>
  );
};
export default HeaderLogo;
