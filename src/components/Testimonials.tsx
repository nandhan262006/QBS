"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Absolutely loved the service at QBS Salon! The staff was professional, friendly, and gave me the perfect look for my special occasion.",
    name: "Priya S.",
    place: "Vijayawada",
    stars: 5,
  },
  {
    text: "One of the best salons in Vijayawada. Excellent hair spa, clean ambience, and highly skilled beauticians. Highly recommended!",
    name: "Ananya R.",
    place: "Vijayawada",
    stars: 5,
  },
  {
    text: "Amazing bridal makeup! They understood exactly what I wanted and delivered flawlessly. Felt like a queen on my wedding day.",
    name: "Lakshmi K.",
    place: "Guntur",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#1A0F2E] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Look what our customers say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-sm">
            <Quote className="w-12 h-12 text-[#8B5CF6]/30 mx-auto mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]"
                />
              ))}
            </div>
            <p className="font-semibold text-white">
              {testimonials[active].name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[active].place}
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active
                    ? "bg-[#8B5CF6] w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm">
              <Star className="w-4 h-4 fill-[#8B5CF6]" />
              4.9 Stars | 9235+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
