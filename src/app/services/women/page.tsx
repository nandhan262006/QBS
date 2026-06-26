import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Check } from "lucide-react";

const womenServices = [
  {
    title: "Threading Services",
    desc: "Professional threading services for perfectly shaped eyebrows and smooth facial hair removal.",
    image: "/images/services/threading.jpg",
    items: [
      "Eyebrows Threading",
      "Upper Lip Threading",
      "Chin Threading",
      "Forehead Threading",
      "Cheek Threading",
      "Side Locks Threading",
      "Full Face Threading",
    ],
    bg: "from-[#F3E8FF] to-[#8B5CF6]/20",
  },
  {
    title: "Waxing Services",
    desc: "Achieve silky smooth skin with our premium waxing treatments for all body areas.",
    image: "/images/services/waxing.webp",
    items: [
      "Under Arms Waxing",
      "Half Arms Waxing",
      "Full Arms Waxing",
      "Half Legs Waxing",
      "Full Legs Waxing",
      "Upper Lip / Chin / Forehead",
      "Full Face",
      "Lower Back / Upper Back / Midriff",
      "Bikini Wax",
    ],
    bg: "from-[#E0F7FA] to-[#26C6DA]/20",
  },
  {
    title: "Haircuts & Styling",
    desc: "Modern cuts and professional styling tailored to your face shape and lifestyle.",
    image: "/images/services/haircut.webp",
    items: [
      "Hair Cut",
      "Fringe Cut",
      "Hair Wash",
      "Blow Dry",
      "Hair Ironing",
      "Hair Crimping",
    ],
    bg: "from-[#FFF3E0] to-[#FF9800]/20",
  },
  {
    title: "Hair Coloring",
    desc: "Transform your look with premium coloring, highlights and fashion shades.",
    image: "/images/services/coloring.avif",
    items: [
      "Henna Application",
      "Henna Application with Blast Dry",
      "BB Coloring",
      "Global Coloring",
      "Root Touch-up",
      "Regular Global Coloring",
    ],
    bg: "from-[#E8F5E9] to-[#4CAF50]/20",
  },
  {
    title: "Hair Spa & Head Massage",
    desc: "Deep nourishment and rejuvenation treatments for healthy, shiny hair.",
    image: "/images/services/hairspa.jpg",
    items: [
      "Hair Spa",
      "Nashi Hair Spa",
      "Shea Hair Spa",
      "Deep Conditioning Therapy",
      "Pure Coconut Nourisher",
      "Olive Bliss",
      "Almond Indulgence",
      "Jojaba Menthol Chiller",
    ],
    bg: "from-[#FCE4EC] to-[#E91E63]/20",
  },
  {
    title: "Hair & Scalp Treatments",
    desc: "Advanced solutions for damaged, frizzy and chemically treated hair.",
    image: "/images/services/treatment.jpg",
    items: [
      "Nutritive Treatment",
      "Normal to Dull Hair Treatment",
      "Absolut Repair Treatment",
      "Intense Smoothening Treatment",
      "Colour Radiance Treatment",
      "Hair Fall Treatment",
      "Dandruff Treatment",
      "Lice Treatment",
    ],
    bg: "from-[#F3E5F5] to-[#9C27B0]/20",
  },
  {
    title: "Pedicure & Manicure",
    desc: "Luxury hand and foot care treatments for beautiful and healthy nails.",
    image: "/images/services/pedicure.webp",
    items: [
      "Regular Pedicure",
      "Foot Massage",
      "Chocolate Foot Spa",
      "Crystal Crush Pedicure",
      "Bomb Pedi",
      "Premium Pedicure",
      "Heel Peel Treatment",
      "Regular Manicure",
      "Full Arms Massage",
      "Body Polishing",
    ],
    bg: "from-[#E3F2FD] to-[#2196F3]/20",
  },
  {
    title: "Skin Care Treatments",
    desc: "Professional skin rejuvenation treatments for glowing and healthy skin.",
    image: "/images/services/skincare.jpg",
    items: [
      "Face Detan",
      "Neck Detan",
      "Full Arms Detan",
      "Full Legs Detan",
      "Full Body Detan",
      "Face Clean Up",
      "Tan Clean Up",
      "Radiance Cleanup",
    ],
    bg: "from-[#FFF8E1] to-[#FFC107]/20",
  },
  {
    title: "Facial Treatments",
    desc: "Customized facial therapies designed to improve skin texture and radiance.",
    image: "/images/services/facial.webp",
    items: [
      "Fruit Facial",
      "Papaya Facial",
      "Pearl Facial",
      "Oxygen Facial",
      "24 Karat Gold Facial",
      "Bright Back Facial",
      "Collagen Facial",
      "Brightening Facial",
      "Hydra 15 In One",
    ],
    bg: "from-[#EDE7F6] to-[#673AB7]/20",
  },
  {
    title: "Korean Facials",
    desc: "Trending Korean skincare therapies for flawless, radiant and youthful skin.",
    image: "/images/services/korean-facial.jpg",
    items: [
      "Korean Glow Facial",
      "Hydra Facial",
      "Ultra Lightening Facial",
      "Glass Skin Treatment",
      "Skin Rejuvenation",
      "Korean Brightening Therapy",
    ],
    bg: "from-[#FBE9E7] to-[#FF5722]/20",
  },
  {
    title: "Nail Enhancements",
    desc: "Stylish nail extensions and creative nail art for every occasion.",
    image: "/images/services/nails.webp",
    items: [
      "Acrylic Extensions",
      "Gel X Extensions",
      "Gel Extensions",
      "Inbuild Acrylic Extension",
      "Ombre Extension",
      "Soft Tip Extension",
      "Nail Art",
    ],
    bg: "from-[#E0F2F1] to-[#009688]/20",
  },
  {
    title: "Bridal Makeup",
    desc: "Complete bridal beauty solutions with makeup, hairstyling and pre-bridal packages.",
    image: "/images/services/bridal.png",
    items: [
      "Engagement Makeup",
      "Bridal Makeup",
      "Reception Makeup",
      "Party Makeup",
      "Hair Styling",
      "Saree Draping",
      "Trail Makeup",
    ],
    bg: "from-[#FFFDE7] to-[#FFEB3B]/20",
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

export default function WomenServicesPage() {
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
              <span className="text-[#652D91] font-medium">Women</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
              Services
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {womenServices.map((service, i) => (
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
