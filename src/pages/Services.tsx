import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Tv, MonitorPlay, ShieldAlert, Cpu, Speaker, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  { id: 'led', title: 'LED TV Repair', desc: 'Expert solutions for LED TV screen problems, power issues, and audio defects.', icon: Tv },
  { id: 'lcd', title: 'LCD TV Repair', desc: 'Comprehensive repair for LCD TVs including backlight replacement and panel fixing.', icon: MonitorPlay },
  { id: 'smart', title: 'Smart TV Repair', desc: 'Troubleshooting software issues, WiFi connectivity, and app malfunctions.', icon: Tv },
  { id: 'oled', title: 'OLED TV Repair', desc: 'Specialized repair for OLED TVs, burn-in issues, and screen replacements.', icon: Tv },
  { id: 'qled', title: 'QLED TV Repair', desc: 'Fixing color distortion, backlighting, and motherboard issues in QLED models.', icon: Tv },
  { id: 'android', title: 'Android TV Repair', desc: 'Firmware updates, boot loop fixes, and performance optimization.', icon: Tv },
  { id: 'panel', title: 'Panel Repair', desc: 'Fixing lines on screen, ghosting, double image, and blank displays.', icon: ShieldAlert },
  { id: 'motherboard', title: 'Motherboard Repair', desc: 'Component level repair for dead TVs and restarting issues.', icon: Cpu },
  { id: 'backlight', title: 'Backlight Replacement', desc: 'Sound but no picture? We replace LED backlights with genuine parts.', icon: Tv },
  { id: 'power', title: 'Power Supply Repair', desc: 'Fixing TVs that wont turn on or have blinking red lights.', icon: Cpu },
  { id: 'speaker', title: 'Speaker Repair', desc: 'Distorted sound or no audio issues resolved quickly.', icon: Speaker },
  { id: 'wifi', title: 'WiFi Repair', desc: 'Fixing connectivity issues and network module replacement.', icon: Wifi },
];

const brands = ['Samsung', 'LG', 'Sony', 'Mi', 'OnePlus', 'Panasonic', 'TCL', 'Vu', 'Kodak', 'Philips', 'Haier', 'Acer', 'Motorola', 'Realme'];

export function Services() {
  return (
    <>
      <SEO 
        title="TV Repair Services | LED, LCD, Smart TV" 
        description="Comprehensive TV repair services for all major brands. We fix LED, LCD, OLED, QLED, and Smart TVs. Motherboard repair, panel fixing, backlight replacement."
      />
      
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Repair Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Professional, reliable, and affordable repair solutions for all types of televisions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allServices.map((service, idx) => (
              <Link to="/contact" key={service.id} className="group block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 4) * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all h-full flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Brands We Repair</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Our certified technicians are experienced in repairing TVs from all major manufacturers using genuine parts.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, idx) => (
              <div key={idx} className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-lg text-gray-800 font-medium hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Facing an issue not listed here?</h2>
            <p className="text-emerald-100">Don't worry, give us a call and we'll help you diagnose the problem.</p>
          </div>
          <a href="tel:+919891056716" className="shrink-0 flex items-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
            <Phone className="w-5 h-5" />
            +91 9891056716
          </a>
        </div>
      </section>
    </>
  );
}
