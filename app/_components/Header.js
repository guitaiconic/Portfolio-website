//import components
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
  return (
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px]">
      <div>
        {/* Logo centered at top */}
        <Logo />

        {/* Navigation below the logo */}
        <div className="mt-4">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
