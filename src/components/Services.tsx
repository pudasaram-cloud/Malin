import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Layers, Globe, Palette } from 'lucide-react';

interface ServiceItem {
  id: string;
  verticalTitle: string;
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
  bgImage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-systems',
    verticalTitle: 'web systems',
    title: 'Web Systems',
    description:
      'Custom POS, inventory tracking, CRM, ERP, and internal workflow management portals engineered for speed, automation, and business scalability.',
    buttonText: 'Explore Systems',
    icon: <Layers className="w-5 h-5 text-white/90" />,
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'websites',
    verticalTitle: 'websites',
    title: 'Modern Websites',
    description:
      'Fast, visually striking, and fully responsive websites & landing pages built to showcase your brand, engage customers, and turn visitors into clients.',
    buttonText: 'View Websites',
    icon: <Globe className="w-5 h-5 text-white/90" />,
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ui-ux',
    verticalTitle: 'ui/ux design',
    title: 'UI/UX Design',
    description:
      'Intuitive wireframes, interactive high-fidelity prototypes, and sleek modern design systems crafted for seamless, frictionless user journeys.',
    buttonText: 'Explore UI/UX',
    icon: <Palette className="w-5 h-5 text-white/90" />,
    bgImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Services(): React.ReactElement {
  // Default active service panel
  const [activeId, setActiveId] = useState<string>('web-systems');

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative w-full bg-white py-14 sm:py-18 md:py-22 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start w-full">
        {/* Section Header (Left-aligned) */}
        <div className="w-full text-left max-w-2xl mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-[42px] md:text-[50px] font-extrabold tracking-tight text-neutral-900 leading-[1.14] mb-3"
          >
            Services & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed"
          >
            Delivering high-impact digital solutions tailored to solve business challenges and delight users.
          </motion.p>
        </div>

        {/* 3-Column Expandable Accordion Layout on White Canvas */}
        <div className="w-full flex flex-col md:flex-row md:h-[600px] gap-3.5 sm:gap-4 select-none">
          {SERVICES.map((service, index) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                    setActiveId(service.id);
                  }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative group rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? 'md:flex-[2.5] h-[330px] sm:h-[350px] md:h-auto border-neutral-300 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.22)] ring-1 ring-black/10'
                    : 'md:flex-1 h-[115px] sm:h-[125px] md:h-auto border-neutral-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] opacity-90 hover:opacity-100 hover:border-neutral-300'
                } border bg-neutral-900`}
              >
                {/* Background Image with Dark Vignette & Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isActive ? 'scale-105 filter brightness-[0.52] contrast-105' : 'scale-100 filter brightness-[0.38] contrast-105'
                    }`}
                  />
                  {/* Subtle Gradient Overlays */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.88) 100%)`,
                    }}
                  />
                </div>

                {/* Inner Content Area */}
                <div className="relative z-10 w-full h-full p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                  {/* Top Area: Large Vertical / Rotated Title (Exact style from reference screenshot) */}
                  <div className="flex items-start justify-between">
                    {/* Vertical Title for Desktop (matches screenshot styling) */}
                    <div className="hidden md:flex flex-col items-start pt-2">
                      <span
                        className={`text-[36px] lg:text-[46px] font-extrabold tracking-tight text-white lowercase select-none transition-all duration-500 [writing-mode:vertical-rl] rotate-180 drop-shadow-md ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
                        }`}
                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
                      >
                        {service.verticalTitle}
                      </span>
                    </div>

                    {/* Horizontal Title for Mobile / Tablet Header */}
                    <div className="flex md:hidden items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <span className="p-2 rounded-xl bg-white/15 text-white backdrop-blur-md border border-white/10">
                          {service.icon}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Middle / Expanded Content: ONLY Description */}
                  <div className="my-auto py-2">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col max-w-md"
                        >
                          <p className="text-slate-100 text-sm sm:text-[15px] lg:text-[16px] font-normal leading-relaxed line-clamp-4 md:line-clamp-none drop-shadow-sm">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Area: ONLY Pill Button (Exact shape from reference screenshot) */}
                  <div className="pt-2 flex items-center">
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-white text-black hover:bg-neutral-100 hover:scale-[1.03]'
                          : 'bg-white/90 text-black hover:bg-white'
                      }`}
                    >
                      <span>{service.buttonText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
