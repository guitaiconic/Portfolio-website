import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            {/* Top Text */}
            <div className="flex flex-col justify-center space-y-6 h-[60%]">
              <p className="text-lg leading-relaxed">
                Versatile and expressive, passionate about performance and
                lifestyle art. With a unique blend of modeling, fashion, and
                dance, this space showcases my journey through rhythm, movement,
                and visual storytelling.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition">
                READ MORE
              </button>
            </div>

            {/* Bottom Left Image */}
            <div className="mt-6 h-[40%]">
              <Image
                src="/Mywork.png"
                alt="My Work"
                width={800}
                height={300}
                className="w-full h-full object-cover rounded shadow-md"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between">
            {/* Top Right Big Image */}
            <div className="h-[75%]">
              <Image
                src="/perf.png"
                alt="Performance"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded shadow-md"
              />
            </div>

            {/* Bottom Right Small Image */}
            <div className="mt-6 h-[25%]">
              <Image
                src="/lifestyle.png"
                alt="Lifestyle"
                width={800}
                height={200}
                className="w-full h-full object-cover rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
