import { Camera } from "lucide-react";

const images = [
  "/placeholder1.jpg",
  "/placeholder2.jpg",
  "/placeholder3.jpg",
  "/placeholder4.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-4">
            Instagram @qbssalon
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            Empowering your journey to lasting well-being.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/qbssalon_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
