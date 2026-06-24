import { MapPin, Phone, Mail, Globe, Camera } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A0F2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image src="/logo-white.png" alt="QBS Salon" width={140} height={45} className="h-10 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the beauty that&apos;s already yours. Premium unisex salon
              in Vijayawada offering professional hair, skin, and beauty
              services.
            </p>
            <a
              href="https://wa.me/919848609996?text=Hello%20QBS%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-colors"
            >
              Make an appointment
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Location</h4>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                First Floor, 40-5-10A,
                <br />
                Above Vardhaman Jewellers,
                <br />
                Near D.V. Manor Hotel,
                <br />
                Tickle Road,
                <br />
                Vijayawada – 520010
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919848609996"
                className="flex items-center gap-3 text-gray-400 hover:text-[#8B5CF6] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98486 09996
              </a>
              <a
                href="mailto:qbsvja@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#8B5CF6] transition-colors"
              >
                <Mail className="w-4 h-4" />
                qbsvja@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "https://www.facebook.com/", label: "FB" },
                { icon: Globe, href: "https://x.com/", label: "X" },
                { icon: Camera, href: "https://www.instagram.com/qbssalon_official/", label: "IG" },
                { icon: Globe, href: "https://www.linkedin.com/", label: "LN" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8B5CF6] hover:text-white transition-all"
                  >
                    <span className="text-xs font-bold">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright &copy; {new Date().getFullYear()} QBS Salon. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
