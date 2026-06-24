import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export default function Appointment() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1A0F2E] to-[#2D1B4E] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
              Make an Appointment
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "D.V. Manor Hotel, Tickle Road, Vijayawada",
                },
                { icon: Phone, text: "+91 98486 09996" },
                { icon: Mail, text: "qbsvja@gmail.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6">
              Welcome to QBS Salon
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Select Services
                </label>
                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B5CF6]">
                  <option value="" className="bg-[#2D1B4E]">
                    Choose a service
                  </option>
                  <option value="waxing" className="bg-[#2D1B4E]">
                    Waxing
                  </option>
                  <option value="facial" className="bg-[#2D1B4E]">
                    Facial
                  </option>
                  <option value="hair" className="bg-[#2D1B4E]">
                    Hair
                  </option>
                  <option value="makeup" className="bg-[#2D1B4E]">
                    Makeup
                  </option>
                  <option value="spa" className="bg-[#2D1B4E]">
                    Spa
                  </option>
                  <option value="others" className="bg-[#2D1B4E]">
                    Others
                  </option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B5CF6] [color-scheme:dark]"
              />
              <button
                type="submit"
                className="w-full bg-[#8B5CF6] text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:bg-[#7C3AED] transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Appointment Now
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
