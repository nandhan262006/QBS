import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, Sparkles, Sun, Heart, Waves } from "lucide-react";

const menServices = [
  {
    icon: Scissors,
    title: "Haircut & Styling",
    items: [
      "Classic Haircut",
      "Trendy Styles",
      "Beard Trimming",
      "Hair Wash & Style",
    ],
  },
  {
    icon: Sun,
    title: "Facial & Skincare",
    items: [
      "Clean Up",
      "Deep Cleansing Facial",
      "Glow Facial",
      "Anti-Ageing Facial",
    ],
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    items: [
      "Head Massage",
      "Neck & Shoulder Massage",
      "Deep Tissue Massage",
      "Full Body Massage",
    ],
  },
  {
    icon: Waves,
    title: "Spa",
    items: [
      "Body Spa",
      "Aroma Therapy",
      "Relaxation Therapy",
      "Stress Relief Session",
    ],
  },
  {
    icon: Scissors,
    title: "Grooming",
    items: [
      "Beard Shaping",
      "Facial Hair Trimming",
      "Manicure",
      "Pedicure",
    ],
  },
];

export default function MenServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                Men Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium grooming and styling services for men.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {menServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-[#8B5CF6]/5 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-[#652D91]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-gray-600 text-sm"
                        >
                          <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
