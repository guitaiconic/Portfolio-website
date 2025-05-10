import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className=" flex flex-col items-center">
        <p className="text-lg leading-relaxed">
          Versatile and expressive, passionate about performance and lifestyle
          art. With a unique blend of modeling, fashion, and dance, this space
          showcases my journey through rhythm, movement, and visual
          storytelling.
        </p>
        <div className="mt-8">
          <Link href="/about">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition">
              READ MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Image src="/perf.png" alt="Performance" width={1200} height={800} />
        <div className="absolute top-0 left-0 font-bold  hover:text-red-500 uppercase ml-4 mt-4">
          <Link href="/myWork" className="text-3xl">
            Perfor <span className="text-red-500">mance</span>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/Mywork.png"
          alt="My Work"
          width={1200}
          height={800}
          className="min-w-full "
        />
        <div className="absolute bottom-0 left-0 font-bold  hover:text-blue-500 uppercase ml-4 mb-4">
          <Link href="/myWork" className="text-3xl">
            My <span className="text-blue-500">Work</span>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/lifestyle.png"
          alt="Lifestyle"
          width={800}
          height={300}
          className="w-full h-[200px] object-cover rounded"
        />
        <div className="absolute bottom-0 left-0 font-bold  hover:text-yellow-400 uppercase ml-4 mb-4">
          <Link href="/myWork" className="text-3xl">
            Life <span className="text-yellow-400">style</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
