import { Sparkles, Flame, Sun, Heart } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Deep Cleansing Facial",
    desc: "Relaxing facial massage for glowing, refreshed skin.",
  },
  {
    icon: Flame,
    title: "Hot Stone Therapy",
    desc: "Relieves deep muscle tension and promotes full relaxation.",
  },
  {
    icon: Sparkles,
    title: "Glow & Radiance Facial",
    desc: "Brightens skin and enhances your natural glow.",
  },
  {
    icon: Heart,
    title: "Head & Shoulder Massage",
    desc: "Eases stress, improves circulation, and calms mind.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            Treatments Tailored For Your Radiance
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#8B5CF6]/30 hover:shadow-xl hover:shadow-[#8B5CF6]/10 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] group-hover:bg-[#8B5CF6] transition-colors flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#652D91] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
