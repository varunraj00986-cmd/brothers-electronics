import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, ThumbsUp, ArrowRight, CheckCircle2, Star, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

const services = [
  { id: 1, title: 'LED TV Repair', desc: 'Expert repair for all LED models.', icon: TvIcon },
  { id: 2, title: 'LCD TV Repair', desc: 'Screen, motherboard, and power issues.', icon: TvIcon },
  { id: 3, title: 'Smart TV Repair', desc: 'Software, WiFi, and panel fixes.', icon: TvIcon },
  { id: 4, title: 'Panel Repair', desc: 'Lines on screen, no picture, backlight issues.', icon: Wrench },
];

function TvIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  );
}

export function Home() {
  return (
    <>
      <SEO 
        title="Expert LED, LCD & Smart TV Repair Services at Home" 
        description="Fast, reliable & affordable TV repair at your doorstep in Delhi. Same Day TV Repair | 90 Days Warranty | Experienced Technicians | Genuine Spare Parts."
        keywords="TV repair Delhi, LED repair, LCD repair, Smart TV service, home TV repair"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0a0f1c]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight font-display">
                  Revive Your TV <br className="hidden lg:block" />
                  <span className="text-gradient">At Your Doorstep</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Don't let a broken TV ruin your day. We provide blazing fast, reliable, and affordable TV repair with genuine parts and a rock-solid 90-day warranty.
                </p>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-white mb-8">
                  <div className="flex items-center gap-3 glass-dark px-5 py-3 rounded-xl shadow-lg">
                    <div className="bg-yellow-500/20 p-2 rounded-lg"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /></div>
                    <div className="flex flex-col text-left"><span className="text-lg font-bold">4.9/5</span><span className="text-xs text-gray-400">Rating</span></div>
                  </div>
                  <div className="flex items-center gap-3 glass-dark px-5 py-3 rounded-xl shadow-lg">
                    <div className="bg-emerald-500/20 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                    <div className="flex flex-col text-left"><span className="text-lg font-bold">1.2L+</span><span className="text-xs text-gray-400">TVs Repaired</span></div>
                  </div>
                  <div className="flex items-center gap-3 glass-dark px-5 py-3 rounded-xl shadow-lg">
                    <div className="bg-blue-500/20 p-2 rounded-lg"><Shield className="w-5 h-5 text-blue-400" /></div>
                    <div className="flex flex-col text-left"><span className="text-lg font-bold">90 Days</span><span className="text-xs text-gray-400">Warranty</span></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <div className="glass-dark rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">Book a Free Visit</h3>
                  <p className="text-gray-400 text-sm mb-6 font-light">Our expert will call you to confirm the appointment in 5 mins.</p>
                  
                  <form onSubmit={(e) => { e.preventDefault(); alert('Booking Request Sent!'); }} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Full Name" 
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-900/50 text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-900/50 text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <select 
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-900/50 text-white font-medium appearance-none"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled className="text-gray-500">Select TV Issue</option>
                        <option value="no-picture">No Picture / Sound Only</option>
                        <option value="no-power">TV Not Turning On</option>
                        <option value="lines">Lines on Screen</option>
                        <option value="physical-damage">Screen Broken</option>
                        <option value="other">Other Issue</option>
                      </select>
                    </div>
                    
                    <button type="submit" className="w-full bg-gradient-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 mt-2 flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all">
                      Book Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1 font-medium">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Secure & Confidential
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <div className="bg-white py-6 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">We Repair All Major Brands</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Samsung', 'LG', 'Sony', 'Panasonic', 'Mi', 'OnePlus', 'TCL', 'Philips', 'Vu', 'Acer', 'Motorola', 'Realme'].map((brand, idx) => (
              <div key={idx} className="text-xl md:text-3xl font-bold text-gray-900 font-display px-8">
                {brand}
              </div>
            ))}
          </div>
          <div className="marquee-content items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500" aria-hidden="true">
             {['Samsung', 'LG', 'Sony', 'Panasonic', 'Mi', 'OnePlus', 'TCL', 'Philips', 'Vu', 'Acer', 'Motorola', 'Realme'].map((brand, idx) => (
              <div key={`dup-${idx}`} className="text-xl md:text-3xl font-bold text-gray-900 font-display px-8">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Brothers TV?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide the most reliable and affordable TV repair services right at your doorstep.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Same Day Service', desc: 'Get your TV fixed on the same day you call us.', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: '90 Days Warranty', desc: 'Peace of mind with our service warranty on repairs.', icon: Shield, color: 'text-green-600', bg: 'bg-green-50' },
              { title: 'Certified Techs', desc: 'Highly trained professionals for all brands.', icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Original Parts', desc: 'We only use genuine OEM spare parts.', icon: ThumbsUp, color: 'text-purple-600', bg: 'bg-purple-50' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg}`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our TV Repair Services</h2>
              <p className="text-gray-500">Expert solutions for all kinds of TV problems.</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
              See All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <Link to="/contact" key={idx} className="group block">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-white shadow-sm rounded-full flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#0a0f1c]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-dark rounded-3xl p-10 md:p-16 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-display tracking-tight">
              Need Your TV <span className="text-gradient">Fixed Fast?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Our expert technicians are ready to visit your home today. Get a free inspection, instant diagnosis, and a transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+919891056716" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:-translate-y-1 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call +91 9891056716
              </a>
              <a 
                href="https://wa.me/919891056716" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 glass-dark text-emerald-400 hover:text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/10 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
