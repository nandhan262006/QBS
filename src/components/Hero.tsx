"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Play } from "lucide-react";
import Link from "next/link";

const slides = [
  { desktop: "/labdipet.png", mobile: "/labdipetM.png", alt: "QBS Salon Labbipet" },
  { desktop: "/kandukuru.png", mobile: "/kandukuruM.png", alt: "QBS Salon Kandukuru" },
  { desktop: "/benzcircle.png", mobile: "/benzcircleM.png", alt: "QBS Salon Benz Circle" },
  { desktop: "/homepagelaptop.png", mobile: "/HOMEPAGE.png", alt: "QBS Salon Homepage" },
  { desktop: "/homepagelaptop2.png", mobile: "/HOMEPAGE.png", alt: "QBS Salon Homepage 2" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.desktop}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.desktop}
            alt={slide.alt}
            fill
            className="object-cover hidden md:block"
            priority
            sizes="100vw"
          />
          <Image
            src={slide.mobile}
            alt={slide.alt}
            fill
            className="object-cover block md:hidden"
            priority
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Style • Beauty • Confidence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)]">
              Experience the Art of Beauty at{" "}
              <span className="text-[#C9A84C]">QBS Salon</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
              From trendy hair styling and flawless makeup to relaxing beauty
              treatments, QBS Salon brings expert care and premium services to
              help you look confident and feel amazing every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#652D91] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#50287A] transition-colors"
              >
                Read More
              </Link>
              <a
                href="https://www.youtube.com/watch?v=9qZs9h7zrWE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors"
              >
                <Play className="w-4 h-4" />
                Play Video
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-300 to-gray-400"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">
                  Talk to over 45+ Specialists
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full ${
              i === current
                ? "bg-[#8B5CF6] w-8 h-2.5"
                : "bg-white/50 hover:bg-white/80 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
