import { Check, Play } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Experienced Beauty Experts",
  "Hair & Makeup Services",
  "Trusted Customer Care",
  "Affordable Premium Packages",
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#F3E8FF] to-[#8B5CF6]/20 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#652D91]/10 flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-[#652D91] ml-1" />
                </div>
                <p className="text-gray-500 text-sm">Play Video</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#652D91] text-white px-8 py-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">25% OFF</p>
              <p className="text-sm text-[#F3E8FF]">for new Users</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
              Professional Beauty Services at QBS Salon
            </h2>
            <p className="text-gray-600 leading-relaxed">
              QBS Salon delivers premium hair, beauty, makeup, and skincare
              services with experienced professionals, modern techniques, and
              high-quality products to give you a complete beauty experience.
            </p>
            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#652D91]" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#652D91] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#50287A] transition-colors mt-4"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
