import Image from "next/image";

export default function Spotlight() {
  return (
    <>
      <section className="py-16 bg-black text-white">
        <h2 className="text-center text-3xl font-bold mb-10">
          IN THE SPOTLIGHT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded shadow-lg">
            <Image
              src="/model.jpg"
              alt="Model"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-center py-2">
              <p>MODEL</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded shadow-lg">
            <Image
              src="/passion.jpg"
              alt="Passion"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-pink-600 text-center py-2">
              <p>PASSION</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded shadow-lg">
            <Image
              src="/dance.jpg"
              alt="Dance"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-purple-700 text-center py-2">
              <p>DANCE</p>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
