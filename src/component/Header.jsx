//import components
import Socials from "./Socials";
import Logo from "../Img/header/logo.svg";
import MobileNav from "./MobileNav";

//import Link
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="" />
        </Link>

        {/* Nav - Initially hidden - show on desktop mode */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link to={"/"} className="text-[#696c6d] hover:text-black transition">
            Home
          </Link>

          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-black transition"
          >
            About
          </Link>

          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-black transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-black transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
}
