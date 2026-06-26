import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const highlights = [
  "Experienced Beauty Experts",
  "Hair & Makeup Services",
  "Trusted Customer Care",
  "Affordable Premium Packages",
  "Premium Products",
  "Hygienic Environment",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                About QBS Salon
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the beauty that&apos;s already yours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/bride.jpg"
                  alt="QBS Salon Bride"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  QBS Salon is a premium unisex salon in Vijayawada, dedicated
                  to providing exceptional beauty and grooming services. With a
                  team of highly skilled professionals, we offer a complete
                  range of hair, skincare, makeup, and wellness treatments
                  tailored to your unique needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in using high-quality products and modern techniques
                  to deliver results that exceed expectations. Our warm and
                  welcoming atmosphere ensures every visit is a relaxing and
                  enjoyable experience.
                </p>
                <ul className="grid grid-cols-2 gap-3 pt-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#652D91]" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
