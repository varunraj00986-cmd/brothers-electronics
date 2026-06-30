import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Inspection Charge',
    price: '₹299',
    desc: 'Visiting and diagnosis fee. Waived off if you proceed with repair.',
    features: ['Doorstep Visit', 'Complete Diagnosis', 'Cost Estimate', 'Expert Consultation'],
    recommended: false,
  },
  {
    name: 'Basic Repair',
    price: 'From ₹499',
    desc: 'For minor issues like software setup, remote tuning, or basic part replacements.',
    features: ['Software Troubleshooting', 'Remote Setup', 'Minor Component Fix', '90 Days Warranty'],
    recommended: true,
  },
  {
    name: 'Advanced Repair',
    price: 'Estimate based on diagnosis',
    desc: 'For major issues like Motherboard, Power Supply, or Backlight replacement.',
    features: ['Motherboard Repair', 'Backlight Replacement', 'Power Supply Fix', 'Genuine Spare Parts', '90 Days Warranty'],
    recommended: false,
  }
];

export function Pricing() {
  return (
    <>
      <SEO 
        title="TV Repair Pricing | Affordable Rates" 
        description="Transparent and affordable pricing for LED, LCD, and Smart TV repairs. Low inspection charges and genuine spare parts."
      />
      
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            No hidden costs. You only pay for what needs to be fixed.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-12 max-w-3xl mx-auto flex items-start gap-4">
            <Info className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-emerald-900 mb-1">Important Note</h3>
              <p className="text-emerald-800 text-sm">
                The final repair cost depends on the exact issue diagnosed by our technician and the cost of any required spare parts. The inspection charge (₹299) is waived off if you choose to proceed with the repair.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-8 border ${plan.recommended ? 'border-emerald-500 shadow-xl relative' : 'border-gray-200 shadow-sm hover:shadow-md'} transition-shadow`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                    MOST COMMON
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{plan.desc}</p>
                <div className="text-3xl font-bold text-gray-900 mb-8">{plan.price}</div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full py-4 text-center rounded-xl font-semibold transition-colors ${
                    plan.recommended 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
