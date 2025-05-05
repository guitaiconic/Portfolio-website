import Image from "next/image";

export default function LatestWork() {
  return (
    <section className="py-16 bg-blue-300 text-black mt-8">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-2xl font-bold">LATEST WORK</h2>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          SEE ALL MEDIA
        </button>
      </div>

      <div className="overflow-x-auto flex space-x-6 px-6">
        {/* Video Card 1 */}
        <div className="relative min-w-[250px]">
          <Image
            src="/video1.jpg"
            alt="Video 1"
            width={300}
            height={200}
            className="rounded object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-500 p-2 rounded-full">▶</div>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative min-w-[250px]">
          <Image
            src="/video2.jpg"
            alt="Video 2"
            width={300}
            height={200}
            className="rounded object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-500 p-2 rounded-full">▶</div>
          </div>
        </div>

        {/* More cards... */}
      </div>
    </section>
  );
}
