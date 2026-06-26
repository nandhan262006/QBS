import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Map } from "lucide-react";

const branches = [
  {
    name: "QBS Salon - Vijayawada",
    address:
      "First Floor, 40-5-10A, Above Vardhaman Jewellers, Near D.V. Manor Hotel, Tikkle Road, Labbipet, Vijayawada, Andhra Pradesh - 520010",
    phone: "+91 98486 09996",
    phoneHref: "+919848609996",
    waHref: "919848609996",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4918232249865!2d80.64848649999999!3d16.501249899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb5b5182643d%3A0xbf428ec65e8a3e59!2sQBS%20Salon!5e0!3m2!1sen!2sin!4v1780738149898!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=16.5012499,80.6484865",
  },
  {
    name: "QBS Salon - Benz Circle",
    address:
      "Ground floor, HRT Plaza, Patamatalanka, Benz Circle, Vijayawada, Andhra Pradesh 520010",
    phone: "+91 98486 09996",
    phoneHref: "+919848609996",
    waHref: "919848609996",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.564760242731!2d80.65444509999999!3d16.4975619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb31673eb9db%3A0x99029a11d3ea6fc1!2sQBS%20salon%20-%20Benz%20circle!5e0!3m2!1sen!2sin!4v1780738377449!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=16.4975619,80.6544451",
  },
  {
    name: "QBS Salon - Nandigama",
    address:
      "Beside Reliance Trends, opp Lakshmi Prasanna theatre, 10-72, Raitupeta Centre, Nandigama, NTR (Dt), AP-521185",
    phone: "+91 99393 90505",
    phoneHref: "+919939390505",
    waHref: "919939390505",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489661.2149580424!2d80.32442519556916!3d16.501936542009418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35bcbb34669d01%3A0x672b183890ea9268!2sSri%20Lakshmi%20Prasanna%20Theater!5e0!3m2!1sen!2sin!4v1781246305337!5m2!1sen!2sin",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Beside+Reliance+Trends,+Opp+Lakshmi+Prasanna+Theatre,+Raitupeta+Centre,+Nandigama,+NTR+District,+Andhra+Pradesh+521185",
  },
  {
    name: "QBS Salon - One Town",
    address:
      "Vinnakota Vari St, near Balaji Sweet shop, 1 Town, chowk, Vijayawada, Andhra Pradesh 520001",
    phone: "+91 79927 99799",
    phoneHref: "+917992799799",
    waHref: "917992799799",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1703735109663!2d80.6107292!3d16.5174942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21ee19cb3c89f4e7%3A0xb19be111b0f00ab4!2sQBS%20SALON!5e0!3m2!1sen!2sin!4v1780738906211!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=16.5174942,80.6107292",
  },
  {
    name: "QBS Salon - Kandukur",
    address:
      "1st floor, sr elite hub, Do.no 2-4-4, revenue colony, Oguru, Andhra Pradesh 523105",
    phone: "+91 95552 95295",
    phoneHref: "+919555295295",
    waHref: "919555295295",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.7924384379726!2d79.92268740000002!3d15.2245211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0d6a4d7f7297%3A0xd78bffeaec184861!2sQbs%20salon%20-%20kandukur!5e0!3m2!1sen!2sin!4v1780739084032!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=15.2245211,79.9226874",
  },
  {
    name: "QBS Salon - Madinaguda",
    address:
      "2nd Floor, CBR Estates, near Croma Showroom, Madinaguda, Deepthisri Nagar, Hyderabad, Telangana 500049",
    phone: "+91 99858 09996",
    phoneHref: "+919985809996",
    waHref: "919985809996",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2330648402003!2d78.34014189999999!3d17.4963844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936dec70f6a9%3A0x718d5d52d4f47c39!2sQBS%20Salon%20Madinaguda!5e0!3m2!1sen!2sin!4v1780739345263!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=17.4963844,78.340141",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-[#F3E8FF]/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm text-gray-500 mb-4">
              <a href="/" className="hover:text-[#652D91] transition-colors">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#652D91] font-medium">Our Locations</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
              Our Branches
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your nearest QBS Hair & Beauty Studio and enjoy premium hair,
              skin, nail, makeup and grooming services.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#8B5CF6]/5 transition-all"
                >
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                      {branch.name}
                    </h3>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">{branch.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                      <a
                        href={`tel:${branch.phoneHref}`}
                        className="text-gray-600 text-sm hover:text-[#652D91] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${branch.waHref}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1DA851] transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                      <a
                        href={branch.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#652D91] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#50287A] transition-colors"
                      >
                        <Map className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="w-full h-[300px]">
                    <iframe
                      src={branch.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={branch.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
