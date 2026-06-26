import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Store, TrendingUp, HeadphonesIcon, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Store, label: "Established Brand", desc: "Join a growing salon brand with proven customer trust and quality services." },
  { icon: TrendingUp, label: "Profitable Business Model", desc: "Strong revenue opportunities with recurring beauty and wellness services." },
  { icon: HeadphonesIcon, label: "Complete Support", desc: "Training, marketing, operations, and launch support from our expert team." },
];

const supportItems = [
  "Location Selection Assistance",
  "Salon Interior Design Guidance",
  "Staff Recruitment & Training",
  "Brand Marketing Support",
  "Operational Setup Assistance",
  "Software & Management Systems",
  "Ongoing Business Development",
];

const stats = [
  { value: "1000+", label: "Sq. Ft Space" },
  { value: "₹10L+", label: "Investment Range" },
  { value: "30+", label: "Salon Services" },
  { value: "365", label: "Days Support" },
];

export default function FranchisePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/franchise-banner.jpg"
            alt="QBS Salon Franchise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative text-center text-white px-4 max-w-3xl">
            <nav className="text-sm text-white/60 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">Franchise</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Own a QBS Salon Franchise
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Build a successful beauty business with one of Vijayawada&apos;s trusted salon brands.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-3">
                Franchise Opportunity
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                Why Partner With QBS Salon?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#F3E8FF] group-hover:bg-[#8B5CF6] transition-colors flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-[#652D91] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/franchise-support.jpg"
                  alt="Franchise Support"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-5">
                <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm">
                  What We Provide
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                  Complete Franchise Support
                </h2>
                <ul className="space-y-3">
                  {supportItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#652D91]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-3">
                Investment
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                Franchise Requirements
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-gradient-to-br from-[#F3E8FF] to-white rounded-2xl p-8 border border-gray-100"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[#652D91] font-[family-name:var(--font-playfair)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#8B5CF6] font-medium tracking-wider uppercase text-sm mb-3">
                Apply Now
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                Franchise Enquiry
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your interest"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6] resize-none"
                />
                <a
                  href="https://wa.me/919848609996?text=Hi%20QBS%20Salon,%20I%20am%20interested%20in%20a%20franchise."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#652D91] text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#50287A] transition-colors"
                >
                  Apply For Franchise
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#652D91]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
              Start Your Salon Business Journey With QBS
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Become part of a growing beauty brand and build a successful future.
            </p>
            <a
              href="https://wa.me/919848609996?text=Hi%20QBS,%20I%20want%20franchise%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#652D91] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Talk To Our Franchise Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
