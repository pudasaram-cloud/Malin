import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch feedback every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative w-full bg-[#030712] py-16 sm:py-20 md:py-26 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[36px] sm:text-[44px] md:text-[50px] font-extrabold tracking-tight text-white leading-[1.1] mb-2 sm:mb-3">
            What People Say
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-neutral-400 font-normal">
            Feedback from people I've worked with
          </p>
        </motion.div>

        {/* Testimonial White Card matching the design */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col justify-between min-h-[300px] sm:min-h-[360px] md:min-h-[380px]"
        >
          {/* Quote Area */}
          <div className="flex-1 flex items-center justify-center my-4 sm:my-6">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-xl sm:text-2xl md:text-[27px] lg:text-[31px] font-bold text-neutral-900 text-center leading-[1.38] sm:leading-[1.42] max-w-4xl mx-auto"
              >
                "{current.quote}"
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Bottom Row: Author attribution & Corner Navigation Arrows */}
          <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-neutral-100">
            {/* Author Attribution */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 text-neutral-700 text-sm sm:text-base font-medium"
              >
                <span>— {current.author}</span>
              </motion.div>
            </AnimatePresence>

            {/* Circular Navigation Arrows matching the screenshot */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous feedback"
                title="Previous feedback"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm group cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next feedback"
                title="Next feedback"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm group cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
