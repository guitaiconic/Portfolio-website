import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function page() {
  return (
    <div>
      <Image src="/video.png" alt="About" width={800} height={400} />
    </div>
  );
}
