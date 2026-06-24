import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Maximize2 } from "lucide-react";

const photosphereUrl =
  "https://www.google.com/local/place/fid/0x3a35fb5b5182643d:0xbf428ec65e8a3e59/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAGWE3eZduet9kbjQ3agiFInn2Eg2mcNIpUzEihhmaX3jUq_tXYX9taJVuggoueVdc49XFhqtVnfLI53_DSH0NZAb3I7AGAZu4YzMxuJX8qWlE0ujctR4s3GkZSyXG9UdIXe2zFj6w%3Dw160-h106-k-no-pi0-ya313.24857-ro-0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJQ2NpSU92OGdF";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for appointments, inquiries, or feedback.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content:
                      "First Floor, 40-5-10A, Above Vardhaman Jewellers, Near D.V. Manor Hotel, Tickle Road, Vijayawada – 520010",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 98486 09996",
                    href: "tel:+919848609996",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "qbsvja@gmail.com",
                    href: "mailto:qbsvja@gmail.com",
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    content: "Mon - Sun: 9:30 AM - 9:00 PM",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#652D91]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6]"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B5CF6] resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#652D91] text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-[#50287A] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                Find Us Here
              </h2>
              <p className="text-gray-600">
                Visit us at our salon or take a 360° virtual tour.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=D.V.+Manor+Hotel+Tickle+Road+Vijayawada&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="QBS Salon Location"
                />
              </div>

              <div className="bg-gradient-to-br from-[#F3E8FF] to-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#652D91]/10 flex items-center justify-center mb-6">
                  <Maximize2 className="w-8 h-8 text-[#652D91]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  360° Virtual Tour
                </h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Explore our salon interior with an immersive 360-degree view
                  before you visit.
                </p>
                <a
                  href={photosphereUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#652D91] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#50287A] transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                  Take a 360° Tour
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
