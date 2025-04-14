// components/Header.tsx
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
  return (
    <header className="bg-black text-white py-6 px-4">
      <div className="flex flex-col items-center">
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
