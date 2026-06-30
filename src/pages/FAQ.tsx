import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How much does a TV repair cost?",
    a: "The repair cost depends on the size of the TV, the brand, and the exact problem (e.g., backlight, motherboard, or screen). We charge a nominal inspection fee of ₹299, which is waived if you proceed with the repair. After diagnosis, we provide a transparent quote before starting any work."
  },
  {
    q: "Do you provide doorstep service?",
    a: "Yes! We specialize in doorstep TV repair services across Delhi. Our technician will visit your home at the scheduled time to diagnose and repair your TV."
  },
  {
    q: "How long does the repair usually take?",
    a: "Most common issues, like backlight replacement, software glitches, or basic motherboard repairs, are completed on the same day within 2-3 hours. If a specific part needs to be ordered, it might take 24-48 hours."
  },
  {
    q: "Do you repair all brands of TVs?",
    a: "Yes, we repair all major brands including Samsung, LG, Sony, MI, OnePlus, TCL, Panasonic, Vu, and more. We handle LED, LCD, Smart, OLED, and Android TVs."
  },
  {
    q: "Do you provide a warranty on repairs?",
    a: "Absolutely! We provide a 90-day service warranty on all our repairs. If the same issue occurs within this period, we will fix it free of charge."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, UPI (GPay, PhonePe, Paytm), and IMPS/NEFT bank transfers. Payment is required only after the repair is successfully completed."
  },
  {
    q: "What is your service area?",
    a: "We currently provide services in and around Delhi. Please contact us with your exact location/PIN code to confirm if we serve your area."
  },
  {
    q: "Can a broken TV screen (panel) be repaired?",
    a: "If the screen is physically cracked or broken, it cannot be repaired and must be replaced. Panel replacement is often expensive (sometimes close to the cost of a new TV), but we can provide you with an exact quote."
  },
  {
    q: "My TV has sound but no picture. Can it be fixed?",
    a: "Yes, this is one of the most common issues. It is usually caused by faulty LED backlights or an inverter board issue. We can replace the backlights at your home on the same day."
  },
  {
    q: "My TV turns on and off continuously (boot loop).",
    a: "This is often a software/firmware issue or a problem with the motherboard. Our technicians can diagnose and flash the correct firmware or repair the motherboard to fix this."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions | TV Repair" 
        description="Find answers to common questions about our TV repair services, pricing, warranty, and process."
      />
      
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Everything you need to know about our services and process.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <div className="flex justify-center gap-4">
              <a href="tel:+919891056716" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
