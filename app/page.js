import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 items-start">
          {/* Left side: Text (spans two rows) */}
          <div className="md:row-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              Versatile and expressive, passionate about performance and
              lifestyle art. With a unique blend of modeling, fashion, and
              dance, this space showcases my journey through rhythm, movement,
              and visual storytelling.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition">
              READ MORE
            </button>
            {/* Optional: Add a featured image under text if needed */}
            <Image
              src="/Mywork.png"
              alt="My Work"
              width={600}
              height={400}
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          {/* Top Right: Image 1 */}
          <div className="md:col-start-2 md:row-start-1">
            <Image
              src="/perf.png"
              alt="Performance"
              width={800}
              height={450}
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          {/* Bottom Right: Image 2 */}
          <div className="md:col-start-2 md:row-start-2">
            <Image
              src="/lifestyle.png"
              alt="Lifestyle"
              width={800}
              height={450}
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
