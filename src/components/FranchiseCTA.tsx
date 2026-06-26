import { Store, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FranchiseCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#652D91] to-[#8B5CF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Store className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
              Own a QBS Salon Franchise
            </h3>
            <p className="text-white/80 text-sm">
              Start your beauty business journey today
            </p>
          </div>
        </div>
        <Link
          href="/franchise"
          className="inline-flex items-center gap-2 bg-white text-[#652D91] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors flex-shrink-0"
        >
          Franchise Enquiry
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
