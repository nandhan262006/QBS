import { Sparkles, Waves, Sun, Heart, Palette, Scissors } from "lucide-react";

const services = [
  { icon: Waves, label: "Waxing", desc: "Smooth & hair-free skin" },
  { icon: Sun, label: "Facial", desc: "Glowing & refreshed skin" },
  { icon: Heart, label: "Spa", desc: "Relax & rejuvenate" },
  { icon: Heart, label: "Massage", desc: "Release tension" },
  { icon: Palette, label: "Makeup", desc: "Flawless looks" },
  { icon: Scissors, label: "Hair", desc: "Style & care" },
];

export default function Services() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.label}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#8B5CF6]/30 hover:shadow-lg hover:shadow-[#8B5CF6]/5 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#F3E8FF] group-hover:bg-[#8B5CF6] transition-colors flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#652D91] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {service.label}
                </h3>
                <p className="text-xs text-gray-500">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
