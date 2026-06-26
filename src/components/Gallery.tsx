import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  { src: "/homepagelaptop2.png", alt: "QBS Salon Gallery" },
  { src: "/homepagelaptop.png", alt: "QBS Salon Gallery" },
  { src: "/labdipet.png", alt: "QBS Salon Labbipet" },
  { src: "/benzcircle.png", alt: "QBS Salon Benz Circle" },
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
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/qbssalon_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
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
