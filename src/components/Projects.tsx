import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronDown, Layers } from 'lucide-react';
import {
  projectsHeaderData,
  topProjectPreview,
  myProjectsData,
} from '../data/myProjects';

export default function Projects(): React.ReactElement {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showMobileSpecs, setShowMobileSpecs] = useState(false);

  const currentProject = myProjectsData[activeProjectIdx];

  // Auto-switch slide images every 4 seconds
  useEffect(() => {
    if (!currentProject || !currentProject.slides.length) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % currentProject.slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentProject]);

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev - 1 + myProjectsData.length) % myProjectsData.length);
    setActiveSlide(0);
    setShowMobileSpecs(false);
  };

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % myProjectsData.length);
    setActiveSlide(0);
    setShowMobileSpecs(false);
  };

  if (!currentProject) {
    return <></>;
  }

  return (
    <section id="projects" className="relative w-full bg-white py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 md:gap-18">
        
        {/* Top Section: Left Header & Right Project Box 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Top-Left Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left pr-0 lg:pr-4"
          >
            {/* Main Heading */}
            <h2 className="text-[38px] sm:text-[48px] md:text-[54px] font-extrabold tracking-tight text-neutral-900 leading-[1.08] mb-2 sm:mb-3">
              {projectsHeaderData.title}
            </h2>

            {/* Tagline */}
            <p className="text-[15px] sm:text-[17px] text-neutral-400 font-medium tracking-normal mb-5 sm:mb-6 leading-relaxed">
              {projectsHeaderData.tagline}
            </p>

            {/* Detailed Description */}
            <p className="text-[14.5px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal max-w-xl">
              {projectsHeaderData.description}
            </p>
          </motion.div>

          {/* Top-Right Project Box 1 (Pure Website Image) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 bg-[#0f172a] shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.16)] transition-all duration-500 flex flex-col min-h-[320px] sm:min-h-[380px]"
          >
            {/* Mockup Browser Window Header */}
            <div className="w-full bg-[#1e293b]/90 backdrop-blur-md px-4 py-3 border-b border-white/10 flex items-center justify-between z-20">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[11.5px] font-mono text-slate-300 truncate max-w-[200px] px-3 py-0.5 rounded-full bg-black/30 border border-white/5">
                {topProjectPreview.url}
              </span>
              <div className="w-9" />
            </div>

            {/* Project Image Only */}
            <div className="relative flex-1 w-full overflow-hidden bg-slate-900">
              <img
                src={topProjectPreview.image}
                alt={topProjectPreview.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Showcase: Full Width Image with Title, Nav Arrows & Details Below */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-4 sm:pt-6 flex flex-col gap-8 sm:gap-10"
        >
          {/* Full-Width Auto-changing Image Showcase (4s cycle) */}
          <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 bg-[#0f172a] shadow-[0_18px_45px_rgba(0,0,0,0.09)] flex flex-col h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] group">
            {/* Mockup Browser Window Header */}
            <div className="w-full bg-[#1e293b]/90 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between z-20">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Address Bar */}
              <div className="hidden sm:flex items-center gap-2 text-[12px] font-mono text-slate-300 px-5 py-1 rounded-full bg-black/35 border border-white/10 w-full max-w-sm justify-center">
                <span className="text-emerald-400 text-xs">🔒</span>
                <span className="truncate">{currentProject.url}</span>
              </div>

              <span className="text-xs text-slate-400 font-medium">
                {activeSlide + 1} / {currentProject.slides.length}
              </span>
            </div>

            {/* Slideshow Image Area */}
            <div className="relative flex-1 w-full overflow-hidden bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${currentProject.id}-${activeSlide}`}
                  src={currentProject.slides[activeSlide]}
                  alt={`${currentProject.title} screen ${activeSlide + 1}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Subtle Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                {currentProject.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/45 hover:bg-white/80'
                    }`}
                    aria-label={`Show slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details & Button Section Underneath the Full-Width Image */}
          <div className="flex flex-col text-left w-full">
            {/* Title & Navigation Arrows in Corner (Same Alignment) */}
            <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
              {/* Project Title */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentProject.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-neutral-900 uppercase leading-[1.1]"
                >
                  {currentProject.title}
                </motion.h3>
              </AnimatePresence>

              {/* Corner Circular Navigation Arrows */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                <button
                  onClick={handlePrevProject}
                  aria-label="Previous Project"
                  title="Previous Project"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-black text-neutral-800 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNextProject}
                  aria-label="Next Project"
                  title="Next Project"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-black text-neutral-800 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentProject.id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.8] font-normal max-w-4xl mb-6 sm:mb-8"
              >
                {currentProject.description}
              </motion.p>
            </AnimatePresence>

            {/* Mobile View Stack Toggle Button (Only on mobile) */}
            <div className="sm:hidden mb-6">
              <button
                type="button"
                onClick={() => setShowMobileSpecs((prev) => !prev)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-[13.5px] font-semibold transition-all active:scale-95 shadow-sm cursor-pointer"
                aria-expanded={showMobileSpecs}
              >
                <Layers className="w-4 h-4 text-blue-600" />
                <span>{showMobileSpecs ? 'Hide Stack' : 'View Stack'}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                    showMobileSpecs ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Technical Specifications Grid: Always visible on desktop (sm:block), toggled on mobile */}
            <div className={`${showMobileSpecs ? 'block' : 'hidden sm:block'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`specs-${currentProject.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 border-y border-neutral-200/90 mb-8 bg-neutral-50/60 rounded-2xl px-5 sm:px-6"
                >
                  {currentProject.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className={`flex flex-col ${spec.fullWidth ? 'sm:col-span-2 md:col-span-2' : ''}`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                        {spec.label}:
                      </span>
                      <span className="text-[13.5px] font-semibold text-neutral-800">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="w-full sm:w-auto">
              <a
                href={currentProject.buttonLink || '#contact'}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white text-[14.5px] font-semibold tracking-wide hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg text-center"
              >
                {currentProject.buttonText || 'Discuss Your Project'}
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
