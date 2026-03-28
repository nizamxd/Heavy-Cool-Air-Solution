import React, { useState, useEffect } from "react";
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Menu, 
  X, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Users, 
  Wrench, 
  Snowflake, 
  Settings,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/utils";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue p-2 rounded-lg">
            <Snowflake className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Heavy Cool <span className="text-brand-blue font-medium">Air Solution</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:07017541250" 
            className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-brand-blue"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:07017541250" 
              className="bg-brand-blue text-white px-6 py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 070175 41250
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with dark blur overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/ac-room/1920/1080" 
          alt="Modern AC Room" 
          className="w-full h-full object-cover blur-[8px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            Trusted AC Experts in Noida & Ghaziabad
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 text-balance drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Affordable AC Rental & Repair Services in <span className="text-brand-blue">Noida & Ghaziabad</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed drop-shadow-md">
            Stay cool with high-performance ACs at budget-friendly prices. Fast installation, reliable service, and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="https://wa.me/917017541250?text=Hello%20Heavy%20Cool%20Air%20Solution,%20I%20want%20to%20book%20AC%20service.%20Please%20contact%20me%20with%20details." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-8 py-4 rounded-[15px] font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group"
            >
              🔥 Rent Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:07017541250" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-[15px] font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70 font-medium flex items-center gap-2 justify-center md:justify-start">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Book Today, Pay Later • Free Basic Service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 rounded-[15px] overflow-hidden shadow-2xl border-4 border-white/10 backdrop-blur-sm">
            <img 
              src="https://picsum.photos/seed/ac-unit/800/600" 
              alt="Premium AC Unit" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-[15px] shadow-xl z-20 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Snowflake className="text-brand-blue w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cooling Guaranteed</p>
              <p className="text-lg font-bold text-slate-900">100% Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "AC Rental",
      desc: "High-performance ACs for the entire season at affordable rates.",
      icon: <Snowflake className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "AC Repair",
      desc: "Expert repair services and genuine gas refilling for all brands.",
      icon: <Wrench className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "AC Installation",
      desc: "Professional installation and uninstallation by experienced technicians.",
      icon: <Settings className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "AC Gas Filling",
      desc: "Genuine gas refilling and leak testing to ensure optimal cooling performance.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">Comprehensive Cooling Solutions</p>
          <p className="text-slate-600">Best AC rental service in Noida and Ghaziabad. Affordable split and window AC on rent with fast installation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[15px] bg-slate-50 border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-[15px] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Window AC Rental",
      price: "7999",
      features: [
        "Free Installation",
        "Low Electricity Consumption",
        "Fast Cooling",
        "Free Basic Service",
      ],
      popular: false,
      link: "https://wa.me/917017541250?text=Hello%20Heavy%20Cool%20Air%20Solution,%20I%20want%20to%20rent%20a%20Window%20AC%20for%20%E2%82%B97999.%20Please%20share%20full%20details,%20installation%20and%20availability."
    },
    {
      name: "Split AC Rental",
      price: "12499",
      features: [
        "Powerful Cooling",
        "Silent Operation",
        "Free Installation",
        "Free Maintenance",
      ],
      popular: true,
      link: "https://wa.me/917017541250?text=Hello%20Heavy%20Cool%20Air%20Solution,%20I%20want%20to%20rent%20a%20Split%20AC%20for%20%E2%82%B912499.%20Please%20share%20full%20details,%20installation%20and%20booking%20process."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Pricing Plans</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">Affordable Seasonal Rentals</p>
          <p className="text-slate-600">Choose the best plan for your home or office. No hidden charges, just pure cooling.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "relative p-10 rounded-[15px] transition-all duration-500 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
                plan.popular && "border-2 border-brand-blue"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-500 font-medium">/ Season</span>
                </div>
                <p className="mt-2 text-sm text-brand-blue font-bold">Limited Time Offer 🔥</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-4 rounded-[15px] font-bold text-lg transition-all flex items-center justify-center gap-2",
                  plan.popular 
                    ? "bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-200" 
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                )}
              >
                Rent Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      title: "Fast Installation",
      desc: "Get your AC installed within 24 hours of booking.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Reliable Support",
      desc: "Our team is always ready to help you with any issues.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Affordable Pricing",
      desc: "Best rates in Noida and Ghaziabad with no hidden costs.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Expert Technicians",
      desc: "Highly skilled professionals for all your AC needs.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
            <p className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">We Provide the Best Cooling Experience</p>
            <p className="text-slate-600 mb-12 text-lg">With years of experience in the industry, we understand your cooling needs better than anyone else. Our commitment to quality and customer satisfaction sets us apart.</p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-[15px] flex items-center justify-center text-brand-blue">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-slate-900">{f.title}</h4>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://picsum.photos/seed/happy-customer/800/1000" 
                alt="Happy Customer" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-[15px] shadow-2xl max-w-[200px]">
              <p className="text-4xl font-black text-brand-blue mb-1">10k+</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Happy Customers Served</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    { name: "Rohit Sharma", text: "Very fast AC installation, great service!" },
    { name: "Aman Verma", text: "Affordable pricing and quick support." },
    { name: "Neha Singh", text: "Best AC rental service in Noida." },
    { name: "Rahul Kumar", text: "Technicians are professional and polite." },
    // Duplicate for infinite scroll
    { name: "Rohit Sharma", text: "Very fast AC installation, great service!" },
    { name: "Aman Verma", text: "Affordable pricing and quick support." },
    { name: "Neha Singh", text: "Best AC rental service in Noida." },
    { name: "Rahul Kumar", text: "Technicians are professional and polite." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Customer Reviews</h2>
        <p className="text-4xl font-extrabold text-slate-900">What Our Clients Say</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="mx-4 w-[350px] bg-slate-50 p-8 rounded-[15px] border border-slate-100 shadow-sm flex flex-col gap-4 whitespace-normal"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-lg text-slate-700 font-medium italic">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-white">
                  {t.name[0]}
                </div>
                <p className="font-bold text-slate-900">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <p className="text-4xl font-extrabold text-slate-900 mb-8">Get in Touch Today</p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:07017541250" className="text-2xl font-bold text-slate-900 hover:text-brand-blue transition-colors">070175 41250</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Our Location</p>
                  <p className="text-xl font-bold text-slate-900 leading-relaxed">
                    Gali No. 7, Balaji Enclave,<br />
                    Shahberi, Greater Noida
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</p>
                  <a href="https://wa.me/917017541250?text=Hello%20Heavy%20Cool%20Air%20Solution,%20I%20want%20to%20book%20AC%20service.%20Please%20contact%20me%20with%20details." className="text-xl font-bold text-slate-900 hover:text-brand-blue transition-colors">Chat with us on WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <p className="text-lg font-bold text-slate-900 mb-2">Service Areas:</p>
              <p className="text-slate-600">Noida (All Sectors), Greater Noida, Ghaziabad, Indirapuram, Vaishali, Vasundhara, Crossing Republik.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.834789547513!2d77.428589!3d28.604753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee2251b11331%3A0x48d4030d336a9ad!2sShahberi%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711654125000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-blue p-2 rounded-lg">
                <Snowflake className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Heavy Cool <span className="text-brand-blue font-medium">Air Solution</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Best AC rental service in Noida and Ghaziabad. Get split AC and window AC on rent at lowest price with fast installation and reliable service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-brand-blue transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-brand-blue transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-slate-500 hover:text-brand-blue transition-colors">Pricing</a></li>
              <li><a href="#why-us" className="text-slate-500 hover:text-brand-blue transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">Window AC Rental</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">Split AC Rental</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">AC Repairing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">Gas Filling</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">Installation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                Gali No. 7, Balaji Enclave, Shahberi, Greater Noida
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                070175 41250
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <MessageCircle className="w-5 h-5 text-brand-blue shrink-0" />
                WhatsApp: 7017541250
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Heavy Cool Air Solution. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 text-xs hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-xs hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/917017541250?text=Hello%20Heavy%20Cool%20Air%20Solution,%20I%20want%20to%20book%20AC%20service.%20Please%20contact%20me%20with%20details." 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat with us!
    </span>
  </a>
);

const MobileCallButton = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200">
    <a 
      href="tel:07017541250" 
      className="w-full bg-brand-blue text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-200"
    >
      <Phone className="w-6 h-6" />
      Call Now: 070175 41250
    </a>
  </div>
);

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
  >
    <motion.div 
      animate={{ 
        rotate: 360,
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        rotate: { repeat: Infinity, duration: 2, ease: "linear" },
        scale: { repeat: Infinity, duration: 2 }
      }}
      className="bg-brand-blue p-4 rounded-2xl mb-6"
    >
      <Snowflake className="text-white w-12 h-12" />
    </motion.div>
    <p className="text-2xl font-black text-slate-900 tracking-tighter">HEAVY COOL</p>
    <p className="text-brand-blue font-bold uppercase tracking-widest text-xs mt-1">Air Solution</p>
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      
      <WhatsAppButton />
      <MobileCallButton />
    </div>
  );
}
