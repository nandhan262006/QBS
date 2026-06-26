"use client";

import { useState } from "react";
import { Waves, Sun, Heart, Palette, Scissors, Sparkles } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Waves,
    label: "Waxing",
    desc: "Smooth & hair-free skin",
    image: "/images/services/waxing.webp",
    items: [
      "Full Arms Waxing",
      "Full Legs Waxing",
      "Underarms Waxing",
      "Face Waxing",
      "Bikini Waxing",
      "Body Polishing",
    ],
    detail:
      "Achieve silky smooth and hair-free skin with our professional waxing treatments. We use high-quality products and gentle techniques to ensure maximum comfort and long-lasting results. From facial waxing to full body waxing, our experts help you maintain a flawless and confident look.",
  },
  {
    icon: Sun,
    label: "Facial",
    desc: "Glowing & refreshed skin",
    image: "/images/services/facial.webp",
    items: [
      "Hand-On Facial",
      "Electrotherapy Facial",
      "Clean Up",
      "Anti Ageing Facial",
      "Glow & Radiance Facial",
      "Normal Facial Wash",
    ],
    detail:
      "Refresh and revitalize your skin with our customized facial treatments. Designed to cleanse, nourish, and hydrate, our facials help improve skin texture, reduce dullness, and restore your natural glow. Suitable for all skin types and beauty needs.",
  },
  {
    icon: Heart,
    label: "Spa",
    desc: "Relax & rejuvenate",
    image: "/images/services/hairspa.jpg",
    items: [
      "Aroma Therapy",
      "Body Spa",
      "Relaxation Therapy",
      "Stress Relief Session",
      "Skin Nourishing Spa",
      "Wellness Treatment",
    ],
    detail:
      "Escape from daily stress and indulge in a relaxing spa experience. Our soothing therapies are designed to calm the mind, rejuvenate the body, and promote overall wellness. Enjoy a peaceful atmosphere and premium treatments that leave you feeling refreshed.",
  },
  {
    icon: Heart,
    label: "Massage",
    desc: "Release tension",
    image: "/images/services/treatment.jpg",
    items: [
      "Head Massage",
      "Neck & Shoulder Massage",
      "Deep Tissue Massage",
      "Full Body Massage",
      "Foot Reflexology",
      "Relaxation Massage",
    ],
    detail:
      "Relieve tension and restore balance with our professional massage services. Our skilled therapists use effective techniques to ease muscle stress, improve circulation, and provide complete relaxation. Experience comfort and renewed energy after every session.",
  },
  {
    icon: Palette,
    label: "Makeup",
    desc: "Flawless looks",
    image: "/images/services/bridal.png",
    items: [
      "Bridal Makeup",
      "Engagement Makeup",
      "Party Makeup",
      "Reception Makeup",
      "HD Makeup",
      "Airbrush Makeup",
    ],
    detail:
      "Enhance your beauty with flawless makeup tailored to your style and occasion. Whether it's bridal, party, engagement, or special event makeup, our beauty experts create stunning looks that highlight your natural features and boost your confidence.",
  },
  {
    icon: Scissors,
    label: "Hair",
    desc: "Style & care",
    image: "/images/services/haircut.webp",
    items: [
      "Hair Cut & Styling",
      "Hair Coloring",
      "Hair Smoothening",
      "Keratin Treatment",
      "Hair Spa",
      "Hair Straightening",
    ],
    detail:
      "Transform your look with our expert hair care and styling services. From trendy haircuts and coloring to smoothening, keratin treatments, and styling, we provide personalized solutions that keep your hair healthy, beautiful, and full of life.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  const activeService = services[active];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F3E8FF]/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-4">
            Our Signature Beauty Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            Treatments Tailored For Your Radiance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <button
                key={service.label}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center text-center p-6 rounded-2xl border transition-all cursor-pointer ${
                  i === active
                    ? "bg-[#652D91] border-[#652D91] shadow-lg shadow-[#652D91]/20"
                    : "bg-white border-gray-100 hover:border-[#8B5CF6]/30 hover:shadow-lg hover:shadow-[#8B5CF6]/5"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
                    i === active
                      ? "bg-white/20"
                      : "bg-[#F3E8FF] group-hover:bg-[#8B5CF6]"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-colors ${
                      i === active
                        ? "text-white"
                        : "text-[#652D91] group-hover:text-white"
                    }`}
                  />
                </div>
                <h3
                  className={`font-semibold mb-1 ${
                    i === active ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.label}
                </h3>
                <p
                  className={`text-xs ${
                    i === active ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {service.desc}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                Professional {activeService.label} Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {activeService.detail}
              </p>
              <ul className="space-y-2">
                {activeService.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600 text-sm"
                  >
                    <Sparkles className="w-3 h-3 text-[#8B5CF6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={activeService.image}
                alt={activeService.label}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
