import Image from "next/image";

export default function Spotlight() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col justify-center mt-">
        <h2 className="text-3xl font-semibold text-White-500 mb-4">
          Image Description
        </h2>
        <p className="text-lg text-gray-600 mb-32">
          Hi, I am [Your Name], a passionate and experienced hip-hop
          choreographer with a strong background in creative movement, fitness,
          and dance performance. Over the years, I have had the privilege of
          teaching and performing, using dance as a powerful tool for
          self-expression and fitness. I believe in the transformative power of
          dance, and I strive to make a positive impact on those I work with,
          whether its through fitness or artistic growth. Outside of dance, I
          enjoy exploring new ways to express creativity and build community. I
          also focus on maintaining a healthy lifestyle, understanding how
          fitness and dance go hand in hand.
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
  );
}
