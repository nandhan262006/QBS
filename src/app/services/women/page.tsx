import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Waves, Sun, Heart, Palette, Scissors, Sparkles } from "lucide-react";

const womenServices = [
  {
    icon: Waves,
    title: "Waxing",
    items: [
      "Full Arms Waxing",
      "Full Legs Waxing",
      "Underarms Waxing",
      "Face Waxing",
      "Bikini Waxing",
      "Body Polishing",
    ],
  },
  {
    icon: Sun,
    title: "Facials",
    items: [
      "Hand-On Facial",
      "Electrotherapy Facial",
      "Clean Up",
      "Anti Ageing Facial",
      "Glow & Radiance Facial",
      "Normal Facial Wash",
    ],
  },
  {
    icon: Heart,
    title: "Spa",
    items: [
      "Aroma Therapy",
      "Body Spa",
      "Relaxation Therapy",
      "Stress Relief Session",
      "Skin Nourishing Spa",
      "Wellness Treatment",
    ],
  },
  {
    icon: Heart,
    title: "Massage",
    items: [
      "Head Massage",
      "Neck & Shoulder Massage",
      "Deep Tissue Massage",
      "Full Body Massage",
      "Foot Reflexology",
      "Relaxation Massage",
    ],
  },
  {
    icon: Palette,
    title: "Makeup",
    items: [
      "Bridal Makeup",
      "Engagement Makeup",
      "Party Makeup",
      "Reception Makeup",
      "HD Makeup",
      "Airbrush Makeup",
    ],
  },
  {
    icon: Scissors,
    title: "Hair",
    items: [
      "Hair Cut & Styling",
      "Hair Coloring",
      "Hair Smoothening",
      "Keratin Treatment",
      "Hair Spa",
      "Hair Straightening",
    ],
  },
];

export default function WomenServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                Women Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete beauty and grooming services tailored for women.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {womenServices.map((service) => {
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
