import Image from "next/image";
import Link from "next/link";
import Spotlight from "./_components/Spotlight";
import LatestWork from "./_components/LatestWork";

export default function HomePage() {
  return (
    <main className=" text-white min-h-screen">
      <section>
        <div className="grid md:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            {/* Top Text */}
            <div>
              <p className="text-lg leading-relaxed">
                Versatile and expressive, passionate about performance and
                lifestyle art. With a unique blend of modeling, fashion, and
                dance, this space showcases my journey through rhythm, movement,
                and visual storytelling.
              </p>
              <Link href="/about">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition">
                  READ MORE
                </button>
              </Link>
            </div>

            {/* Bottom Left Image */}
            <div className="relative">
              <Image
                src="/Mywork.png"
                alt="My Work"
                width={800}
                height={400}
                className="w-full h-[300px] object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 font-bold  hover:text-blue-500 uppercase ml-4 mb-4">
                <Link href="/myWork" className="text-3xl">
                  My <span className="text-blue-500">Work</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Top Right Image - Bigger */}
            <div className="relative">
              <Image
                src="/perf.png"
                alt="Performance"
                width={800}
                height={600}
                className="w-full h-[450px] object-cover rounded "
              />
              <div className="absolute top-0 left-0 font-bold  hover:text-red-500 uppercase ml-4 mt-4">
                <Link href="/myWork" className="text-3xl">
                  Perfor <span className="text-red-500">mance</span>
                </Link>
              </div>
            </div>

            {/* Bottom Right Image - Smaller */}
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
        </div>
      </section>

      <Spotlight />
      <LatestWork />
    </main>
  );
}
