import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO 
        title="About Us | Brothers TV Repair Services" 
        description="With over 21 years of experience, Brothers TV Repair Services is the most trusted LED, LCD & Smart TV repair company in Delhi."
      />
      
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-emerald-600/20 blur-3xl transform translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Brothers TV Repair
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              We are a team of certified and passionate electronics technicians dedicated to bringing your broken TVs back to life.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Partner in TV Repair</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Established with a vision to provide honest, reliable, and high-quality electronic repair services, Brothers TV Repair has grown to become a trusted name in Delhi. 
                </p>
                <p>
                  We understand how important your television is for your daily entertainment. That's why we focus on fast turnaround times without compromising on the quality of repair. Our technicians undergo regular training to stay updated with the latest TV technologies, from basic LCDs to advanced OLED and QLED screens.
                </p>
                <p>
                  Our commitment to transparency means you get upfront pricing, genuine spare parts, and a solid 90-day warranty on our repair services.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, stat: '21+', label: 'Years Experience', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { icon: Users, stat: '1,25,000+', label: 'TVs Repaired', color: 'text-green-600', bg: 'bg-green-50' },
                { icon: ThumbsUp, stat: '1,20,000+', label: 'Happy Customers', color: 'text-purple-600', bg: 'bg-purple-50' },
                { icon: ShieldCheck, stat: '90 Days', label: 'Service Warranty', color: 'text-orange-600', bg: 'bg-orange-50' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${item.bg}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
                  <div className="text-sm font-medium text-gray-500">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our simple and hassle-free repair process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-emerald-100 z-0"></div>
            
            {[
              { step: '01', title: 'Book Service', desc: 'Call or book online. We schedule a visit at your convenience.' },
              { step: '02', title: 'Diagnosis', desc: 'Technician visits and identifies the core issue.' },
              { step: '03', title: 'Repair', desc: 'We fix it using genuine parts upon your approval.' },
              { step: '04', title: 'Testing & Warranty', desc: 'Rigorous testing followed by a 90-day warranty.' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-emerald-50 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600 shadow-sm mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
