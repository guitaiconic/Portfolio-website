import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-lg">
      <ul className="flex gap-4 items-center uppercase">
        <li>
          <Link
            href="/"
            className="text-white hover:text-fuchsia-600 hover:underline hover:underline-offset-4 hover:decoration-fuchsia-600 transition-all duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/performance"
            className="text-white hover:text-red-500 hover:underline hover:underline-offset-8 hover:decoration-red-500 transition-all duration-300"
          >
            Performance
          </Link>
        </li>

        <li>
          <Link
            href="/myWork"
            className="text-white hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-blue-500 transition-all duration-300"
          >
            My Work
          </Link>
        </li>

        <li>
          <Link
            href="/lifestyle"
            className="text-white hover:text-yellow-400 hover:underline hover:underline-offset-8 haver:decoration-yellow-400 transition-all duration-300"
          >
            Lifestyle
          </Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
