"use client";

import { useEffect, useState } from "react";
import { X, Percent, Sparkles, Star, Check, Phone, MapPin } from "lucide-react";

const branches = [
  "Vijayawada - Labbipet",
  "Vijayawada - Benz Circle",
  "Nandigama",
  "Vijayawada - One Town",
  "Kandukur",
  "Madinaguda",
];

export default function PromoPopup() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem("promoShown");
      if (alreadyShown) return;
    } catch {}

    const id = setTimeout(() => setShow(true), 25000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setStep(1), 600);
    return () => clearTimeout(t);
  }, [show]);

  if (!show) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("promoShown", "true");
    setSubmitted(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-300">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md mx-auto overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => {
            sessionStorage.setItem("promoShown", "true");
            setShow(false);
          }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4 sm:mb-6 animate-in zoom-in-95 duration-300">
              <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-2">
              Thank You!
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We&apos;ll reach out shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <>
            <div className="relative bg-gradient-to-br from-[#652D91] via-[#7C3AED] to-[#8B5CF6] p-6 sm:p-8 text-center text-white overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />

              <div
                className={`transition-all duration-700 ${
                  step >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="inline-flex items-center gap-1 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-3 sm:mb-4 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3" />
                  Limited Time Offer
                </div>
              </div>

              <div
                className={`transition-all duration-700 delay-150 ${
                  step >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm">
                  <Percent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>

              <div
                className={`transition-all duration-700 delay-300 ${
                  step >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] leading-tight">
                  Book Now & Avail
                </h2>
              </div>

              <div
                className={`transition-all duration-700 delay-450 ${
                  step >= 1
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight my-1 sm:my-2">
                  20% OFF
                </p>
              </div>

              <div
                className={`transition-all duration-700 delay-[600ms] ${
                  step >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center justify-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 mt-2">
                  on your first visit • redeem at any branch
                </p>
              </div>
            </div>

            <form className="p-4 sm:p-6 space-y-3 sm:space-y-4" onSubmit={handleBook}>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/10 transition-all"
                />
              </div>
              <div className="relative">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/10 transition-all"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  required
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/10 transition-all text-gray-600 appearance-none bg-white"
                >
                  <option value="">Nearest Branch</option>
                  {branches.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="bg-gradient-to-r from-[#F3E8FF] to-[#EDE9FE] rounded-xl p-3 text-center">
                <p className="text-xs text-[#652D91] font-medium">
                  🎉 20% OFF applied automatically on your first visit
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#652D91] to-[#7C3AED] text-white py-3.5 rounded-xl text-sm font-semibold hover:from-[#50287A] hover:to-[#6D28D9] transition-all shadow-lg shadow-[#652D91]/25 active:scale-[0.98]"
              >
                Book Now & Claim Offer
              </button>

              <p className="text-[10px] sm:text-xs text-gray-400 text-center">
                By booking, you agree to our Terms & Privacy Policy.
                We&apos;ll call or WhatsApp to confirm.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
