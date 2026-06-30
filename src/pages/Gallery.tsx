import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

const images = [
  { url: "https://images.unsplash.com/photo-1593344605963-c7daee4e5189?q=80&w=2070&auto=format&fit=crop", title: "Motherboard Repair" },
  { url: "https://images.unsplash.com/photo-1550005973-774f9d266e74?q=80&w=2070&auto=format&fit=crop", title: "LED TV Testing" },
  { url: "https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=2070&auto=format&fit=crop", title: "Circuit Diagnosis" },
  { url: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1974&auto=format&fit=crop", title: "Panel Inspection" },
  { url: "https://images.unsplash.com/photo-1591823908851-93c09b85c88c?q=80&w=2070&auto=format&fit=crop", title: "Smart TV Setup" },
  { url: "https://images.unsplash.com/photo-1593344604978-0bc972e3fb63?q=80&w=2070&auto=format&fit=crop", title: "Component Soldering" },
];

export function Gallery() {
  return (
    <>
      <SEO 
        title="Our Work Gallery | TV Repair Experts" 
        description="View our gallery of recent TV repair works, including motherboard fixing, backlight replacement, and screen diagnosis."
      />
      
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl font-bold mb-4"
          >
            Our Work Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            A glimpse into our professional repair workshop and doorstep services.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-video bg-gray-200 shadow-sm"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">Trust your expensive TVs with the experts.</p>
            <a href="tel:+919891056716" className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
              Book a Technician Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
