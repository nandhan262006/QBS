import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Check } from "lucide-react";

const menServices = [
  {
    title: "Men's Haircuts & Grooming",
    desc: "Stay sharp with modern haircuts, beard styling, shaving, and professional grooming services.",
    items: [
      "Basic Haircut",
      "Advanced Haircut",
      "Creative Haircut",
      "Kids Haircut",
      "Beard Design",
      "Clean Shave",
      "Head Shave",
      "Hair Ironing",
      "Blow Dry Styling",
    ],
    image: "/images/services/mens-haircut.jpg",
    bg: "from-[#F3E8FF] to-[#8B5CF6]/20",
  },
  {
    title: "Men's Hair Coloring",
    desc: "Premium coloring solutions designed to enhance your style and confidence.",
    items: [
      "Moustache Coloring",
      "Beard Coloring",
      "Global Hair Coloring",
      "Premium Hair Coloring",
      "Fashion Streaks",
      "Advanced Streaks",
      "Pre-Lightening",
      "Metal DX Protection",
      "Henna Colouring",
      "BB Colouring",
    ],
    image: "/images/services/mens-hair-color.jpg",
    bg: "from-[#E0F7FA] to-[#26C6DA]/20",
  },
  {
    title: "Men's Makeover",
    desc: "Complete makeover services for weddings, events, photoshoots and special occasions.",
    items: [
      "Professional Makeup",
      "Makeup-MAC-Expert",
      "Hair Styling",
      "Groom Makeover",
      "Pre-Wedding Photoshoot",
      "Event Styling",
    ],
    image: "/images/services/mens-makeover.avif",
    bg: "from-[#FFF3E0] to-[#FF9800]/20",
  },
  {
    title: "Men's Body Care",
    desc: "Luxury hand, foot and body care treatments to keep you refreshed and confident.",
    items: [
      "Regular Pedicure",
      "Foot Massage",
      "Chocolate Foot Spa",
      "Crystal Crush Pedicure",
      "Bomb Pedi",
      "Premium Pedicure",
      "Foot Spa",
      "Heel Peel Treatment",
      "Regular Manicure",
      "Full Arms Massage",
      "Body Polishing",
    ],
    image: "/images/services/mens-bodycare.webp",
    bg: "from-[#E8F5E9] to-[#4CAF50]/20",
  },
  {
    title: "Men's Facial Treatments",
    desc: "Revitalize your skin with advanced facial therapies for hydration, brightening and anti-aging.",
    items: [
      "Fruit Facial",
      "Mud Facial",
      "Papaya Facial",
      "Pearl Facial",
      "Oxygen Facial",
      "24K Gold Facial",
      "Anti-Aging Facial",
      "Collagen Facial",
    ],
    image: "/images/services/mens-facial.jpg",
    bg: "from-[#FCE4EC] to-[#E91E63]/20",
  },
  {
    title: "Men's Korean Facials",
    desc: "Trending Korean skincare treatments for radiant, healthy and youthful-looking skin.",
    items: [
      "Glass Skin Facial",
      "Ultra Lightening Facial",
      "Hydra Lightening Facial",
      "Vitamin Mask",
      "Korean Mask",
      "Gold Mask",
      "Acne Skin Treatment",
      "Pigmented Skin Treatment",
    ],
    image: "/images/services/mens-korean-facial.jpg",
    bg: "from-[#F3E5F5] to-[#9C27B0]/20",
  },
  {
    title: "Cleanup & Detan",
    desc: "Restore your natural glow with professional cleanup and detan treatments.",
    items: [
      "Face Detan",
      "Neck Detan",
      "Feet Detan",
      "Full Arms Detan",
      "Full Legs Detan",
      "Full Body Detan",
      "Rose Cleanup",
      "Tan Cleanup",
      "Radiance Cleanup",
    ],
    image: "/images/services/mens-cleanup.webp",
    bg: "from-[#E3F2FD] to-[#2196F3]/20",
  },
  {
    title: "Hair Spa & Treatments",
    desc: "Advanced hair nourishment and scalp therapies for stronger, healthier hair.",
    items: [
      "Hair Spa",
      "Korean Hair Spa",
      "Shea Hair Spa",
      "Nashi Hair Spa",
      "Menthol Head Massage",
      "Anti-Dandruff Treatment",
      "Hair Fall Treatment",
      "Keratin Treatment",
      "Straightening & Smoothening",
    ],
    image: "/images/services/mens-hairspa.avif",
    bg: "from-[#FFF8E1] to-[#FFC107]/20",
  },
  {
    title: "Premium BAL Facials",
    desc: "Exclusive skin solutions customized for acne, aging, pigmentation and oily skin concerns.",
    items: [
      "Acne Skin Facial",
      "Mature Skin Facial",
      "Lipid Dry Skin Facial",
      "Pigmented Skin Facial",
      "Oily Skin Facial",
    ],
    image: "/images/services/mens-bal-facial.webp",
    bg: "from-[#EDE7F6] to-[#673AB7]/20",
  },
];

function encodeWhatsApp(text: string) {
  return text
    .replace(/['"]/g, "")
    .replace(/&/g, "and")
    .split(" ")
    .filter(Boolean)
    .join("%20");
}

export default function MenServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm text-gray-500 mb-4">
              <a href="/" className="hover:text-[#652D91] transition-colors">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#652D91] font-medium">Men</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
              Services
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {menServices.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col lg:flex-row gap-8 items-center py-16 border-b border-gray-100 last:border-b-0"
            >
              <div
                className={`w-full lg:w-1/2 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-4xl font-bold text-white/40 font-[family-name:var(--font-playfair)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 space-y-5 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>

                <ul className="grid grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <Check className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919848609996?text=Hi%20QBS%20Salon,%20I%20want%20to%20book%20${encodeWhatsApp(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#652D91] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#50287A] transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
