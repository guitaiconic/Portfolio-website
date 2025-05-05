import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" text-white min-h-screen">
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

        <div className="flex flex-col justify-center mt-">
          <h2 className="text-3xl font-semibold text-White-500 mb-4">
            Image Description
          </h2>
          <p className="text-lg text-gray-600 mb-32">
            Hi, I am [Your Name], a passionate and experienced hip-hop
            choreographer with a strong background in creative movement,
            fitness, and dance performance. Over the years, I have had the
            privilege of teaching and performing, using dance as a powerful tool
            for self-expression and fitness. I believe in the transformative
            power of dance, and I strive to make a positive impact on those I
            work with, whether its through fitness or artistic growth. Outside
            of dance, I enjoy exploring new ways to express creativity and build
            community. I also focus on maintaining a healthy lifestyle,
            understanding how fitness and dance go hand in hand.
          </p>
        </div>

        {/* Image Section - Adjusted to occupy entire second column */}
        <div className="flex justify-center col-span-1 mt-32">
          <Image
            src="/video.png"
            alt="About"
            width={500}
            height={500}
            className="object-cover w-full h-full" // Ensure image covers full area
          />
        </div>
      </div>
    </section>
  );
}
