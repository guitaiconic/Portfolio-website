import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 group">
      <div className="transition-transform group-hover:scale-110 ">
        <Image src="/logo.svg" height="50" width="50" alt="Ini Logo" />
      </div>
    </Link>
  );
}
