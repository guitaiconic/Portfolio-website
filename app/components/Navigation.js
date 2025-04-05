import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/home">Home</Link>
      </li>

      <li>
        <Link href="/performance">Performance</Link>
      </li>

      <li>
        <Link href="/myWork">My Work</Link>
      </li>

      <li>
        <Link href="/lifestyle">Lifestyle</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
