import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface TechItem {
  name: string;
  gradient: string;
  icon: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  {
    name: 'React',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #00d8ff 100%)',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7 shrink-0">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #38bdf8 100%)',
    icon: (
      <svg viewBox="0 0 180 180" className="w-7 h-7 shrink-0 rounded-full">
        <circle cx="90" cy="90" fill="#000000" r="90" stroke="#ffffff" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="#ffffff"
        />
        <rect fill="#ffffff" height="72" width="12" x="115" y="54" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3178c6 50%, #60a5fa 100%)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-7 h-7 shrink-0 rounded-md overflow-hidden">
        <path fill="#3178c6" d="M0 0h128v128H0z" />
        <path
          fill="#ffffff"
          d="M68.5 73.5c0-4.6 2.5-8.2 7.7-10.8 5.2-2.6 12.3-4.2 21.2-4.8v-7.1c-6.8.4-12 1.4-15.6 3.1-3.6 1.7-5.4 4.3-5.4 7.8 0 2.8 1.1 5 3.3 6.6 2.2 1.6 5.8 3 10.9 4.3 8.3 2 13.9 4.3 16.8 6.9s4.3 6.2 4.3 10.8c0 5.6-2.6 9.8-7.9 12.6s-13.1 4.2-23.4 4.2c-7.9 0-14.7-1.3-20.4-3.9v-13.8c6.6 3.8 13.3 5.7 20.1 5.7 4.7 0 8.3-.9 10.8-2.6 2.5-1.7 3.8-4.1 3.8-7.1 0-2.8-1.2-5-3.5-6.6-2.3-1.6-6.4-3.1-12.3-4.5-8-1.9-13.4-4.2-16.2-6.9-2.7-2.6-4.1-6.1-4.1-10.4zm-48.3-25.2h44.8v12.5H44.6v46.1H29.1V60.8H20.2V48.3z"
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    gradient: 'linear-gradient(135deg, #15803d 0%, #22c55e 50%, #4ade80 100%)',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
        <path fill="#539e43" d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm7.3 18.2c-.3.5-.8.9-1.4 1.2-1.3.7-2.9.8-4.5.3-.3-.1-.5-.3-.7-.5-.2-.2-.3-.5-.3-.8 0-.6.4-1 1-1 .2 0 .4.1.6.2 1.1.4 2.2.3 3.1-.2.4-.2.6-.5.7-.9.1-.4 0-.8-.3-1.1-.5-.5-1.5-.9-2.9-1.3-1.8-.5-3-1.1-3.7-1.8-.7-.7-1-1.6-.9-2.6.1-1.2.7-2.2 1.7-2.8 1.1-.7 2.5-.9 3.9-.6.4.1.8.3 1.2.6.4.3.6.8.5 1.3-.1.6-.5 1-1.1 1-.2 0-.4-.1-.6-.2-.8-.3-1.7-.3-2.5-.1-.4.1-.7.4-.8.7-.1.3 0 .7.3.9.4.4 1.3.8 2.6 1.2 1.8.5 3.1 1.1 3.8 1.8.7.7 1 1.7.9 2.8z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #06b6d4 100%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
        <path fill="#38bdf8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #eab308 100%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
        <path fill="#3776ab" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.808v.825H3.85S0 5.766 0 11.898c0 6.133 3.36 5.922 3.36 5.922h2.007v-2.82s-.11-3.36 3.306-3.36h5.688s3.193.05 3.193-3.137V3.137S17.994 0 11.914 0zm-3.26 1.83a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02z" />
        <path fill="#ffd438" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.808v-.825h8.164S24 18.234 24 12.102c0-6.133-3.36-5.922-3.36-5.922h-2.007v2.82s.11 3.36-3.306 3.36H9.64s-3.193-.05-3.193 3.137v5.385S6.006 24 12.086 24zm3.26-1.83a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #336791 50%, #60a5fa 100%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
        <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 14.5c-.7.3-1.6.4-2.3.2-1.3-.3-2.1-1.3-2.6-2.3-.4-.9-.6-1.9-.4-2.9.2-.8.6-1.6 1.2-2.1.8-.7 1.9-1 3-1 .5 0 1.1.1 1.6.3v1.8c-.4-.2-.9-.3-1.4-.3-.8 0-1.5.3-2 .8-.5.5-.8 1.1-.9 1.8-.1.7.1 1.5.4 2.1.3.7.9 1.3 1.6 1.5.5.1 1.1.1 1.6-.1v1.8z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #2496ed 50%, #38bdf8 100%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
        <path fill="#2496ed" d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m21.758.89c-.58-.396-1.574-.537-2.383-.35-.295-.87-1.127-1.52-2.13-1.636-.264-.03-.532-.016-.795.038l-.328.067-.09-.323c-.328-1.173-1.425-2.026-2.73-2.091-.144-.007-.29-.004-.436.012l-.337.037-.058-.334c-.31-1.782-1.85-3.118-3.66-3.176l-.427-.014-.078.42c-.085.459-.06 1.01.077 1.583H.186A.186.186 0 0 0 0 9.006v4.618c0 3.018 2.052 5.565 4.966 6.166 1.48.305 3.042.302 4.542-.01 2.873-.594 5.378-2.52 6.772-5.182 1.492.344 3.076.257 4.508-.25 1.517-.538 2.766-1.633 3.212-3.159z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    gradient: 'linear-gradient(135deg, #a259ff 0%, #f24e1e 50%, #ff7262 100%)',
    icon: (
      <svg viewBox="0 0 38 57" className="w-6 h-7 shrink-0">
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    gradient: 'linear-gradient(135deg, #991b1b 0%, #dc382d 50%, #f87171 100%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
        <path fill="#dc382d" d="M19.98 5.76L12 .46 4.02 5.76 12 11.06l7.98-5.3zM3.48 7.37L2 8.35l10 6.67 10-6.67-1.48-.98L12 13.04 3.48 7.37zm0 4.54L2 12.89l10 6.67 10-6.67-1.48-.98L12 17.58l-8.52-5.67zm0 4.54L2 17.43l10 6.67 10-6.67-1.48-.98L12 22.12l-8.52-5.67z" />
      </svg>
    ),
  },
];

export default function Technology(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the section height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Stage 1 (Intro Title) Transforms:
  // Starts full opacity/scale in center, then scales up & blurs out on scroll
  const introOpacity = useTransform(scrollYProgress, [0, 0.22, 0.44], [1, 1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.22, 0.44], [1, 1.05, 1.25]);
  const introBlur = useTransform(scrollYProgress, [0, 0.22, 0.44], ['blur(0px)', 'blur(0px)', 'blur(16px)']);
  const introPointer = useTransform(scrollYProgress, (v) => (v < 0.4 ? 'auto' : 'none'));

  // Stage 2 (Technology Showcase) Transforms:
  // Scales in and becomes full opacity as user scrolls past 30%
  const techOpacity = useTransform(scrollYProgress, [0.32, 0.54, 1], [0, 1, 1]);
  const techScale = useTransform(scrollYProgress, [0.32, 0.54, 1], [0.86, 1, 1]);
  const techY = useTransform(scrollYProgress, [0.32, 0.54, 1], [80, 0, 0]);
  const techPointer = useTransform(scrollYProgress, (v) => (v > 0.38 ? 'auto' : 'none'));

  return (
    <section
      id="technology"
      ref={containerRef}
      className="relative w-full h-[220vh] bg-black"
    >
      {/* Pinned Sticky Viewport (Full Screen on Scroll) */}
      <div className="sticky top-0 w-full h-screen h-[100svh] overflow-hidden flex items-center justify-center bg-[#020713]">
        
        {/* Ambient Cosmic Background Flare */}
        <div className="absolute w-[420px] sm:w-[700px] md:w-[900px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-500/15 to-cyan-400/20 blur-[140px] pointer-events-none" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* ========================================================= */}
        {/* LAYER 1: Surprise Title Screen (TECHNOLOGY / Tools Behind) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: introOpacity,
            scale: introScale,
            filter: introBlur,
            pointerEvents: introPointer as any,
          }}
          onClick={() => {
            if (containerRef.current) {
              const top = containerRef.current.offsetTop;
              const height = containerRef.current.offsetHeight;
              window.scrollTo({
                top: top + height * 0.55,
                behavior: 'smooth',
              });
            }
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20 select-none cursor-pointer"
        >
          <div className="relative">
            {/* Soft Ambient Glow Layer */}
            <span
              className="absolute inset-0 text-[46px] sm:text-[76px] md:text-[104px] lg:text-[124px] font-black uppercase text-blue-500/20 blur-xl select-none"
              aria-hidden="true"
            >
              TECHNOLOGY
            </span>

            {/* Crisp White Heading */}
            <h2 className="relative text-[46px] sm:text-[76px] md:text-[104px] lg:text-[124px] font-black tracking-tight text-white uppercase leading-none drop-shadow-[0_10px_40px_rgba(255,255,255,0.2)]">
              TECHNOLOGY
            </h2>
          </div>

          <p className="text-[15px] sm:text-[19px] md:text-[22px] text-neutral-400 font-normal tracking-wide mt-4 sm:mt-6 max-w-xl">
            The Tools Behind What I Build
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* LAYER 2: Technology Content Showcase (Full Screen on Mobile) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: techOpacity,
            scale: techScale,
            y: techY,
            pointerEvents: techPointer as any,
          }}
          className="relative z-30 w-full max-w-[1400px] h-[100svh] sm:h-auto px-2 sm:px-6 lg:px-8 py-2.5 sm:py-0 flex flex-col justify-between sm:justify-center items-center"
        >
          {/* Main Hero Container with Video - Full Height on Mobile, Standard Box on Desktop */}
          <div className="relative w-full flex-1 sm:flex-initial rounded-[22px] sm:rounded-[36px] md:rounded-[44px] bg-black border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95)] overflow-hidden min-h-0 sm:h-[490px] md:h-[530px] flex flex-col justify-between pb-16 sm:pb-20 md:pb-14">
            {/* Background Video Layer */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-black">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105 transition-transform duration-1000"
                style={{
                  filter: 'invert(1) hue-rotate(175deg) brightness(0.65) contrast(1.4) saturate(1.4)',
                }}
              />
              {/* Deep Black Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    'linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0.88) 45%, rgba(0, 0, 0, 0.25) 75%, transparent 100%)',
                }}
              />
            </div>

            {/* Hero Text Content */}
            <div className="relative z-20 flex-1 px-5 sm:px-10 md:px-14 pt-6 sm:pt-10 md:pt-12 flex flex-col items-start justify-center sm:justify-start">
              <div className="flex flex-col items-start max-w-[680px]">
                <h3 className="font-display text-[26px] sm:text-[40px] md:text-[50px] font-medium leading-[1.08] tracking-tight text-white mb-2 sm:mb-3">
                  Technology
                </h3>
                <p className="font-sans text-[12.5px] sm:text-[14px] md:text-[14.5px] text-slate-300 leading-relaxed max-w-[480px] mb-4 sm:mb-6">
                  High-performance frameworks, resilient cloud architectures, and modern engineering tools powering scalable web applications, custom business systems, and intuitive UI/UX experiences.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-[#0a152d] px-5 sm:px-7 py-2 sm:py-3 rounded-full text-[12.5px] sm:text-[13.5px] font-semibold transition-colors hover:bg-slate-200 shadow-md cursor-pointer"
                >
                  More about
                </motion.button>
              </div>
            </div>

            {/* Floating Bottom Capsule Nav */}
            <div className="absolute bottom-3 sm:bottom-6 md:bottom-7 left-1/2 -translate-x-1/2 z-30 w-auto max-w-[calc(100%-24px)]">
              <nav className="flex items-center bg-black/85 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.8)] border border-white/10 gap-1 sm:gap-2 whitespace-nowrap overflow-x-auto max-w-full">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-white/10 border border-white/15 shadow-sm rounded-full flex items-center justify-center text-white text-[11px] sm:text-[13px] select-none shrink-0 font-semibold">
                  ✦
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[11px] sm:text-[12px] font-semibold text-slate-300 hover:text-white px-2.5 sm:px-3.5 py-1 sm:py-2 transition-colors cursor-pointer"
                >
                  Stack
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1 sm:gap-1.5 bg-white px-3 sm:px-5 py-1 sm:py-2 rounded-full text-[11px] sm:text-[12px] font-semibold text-[#0a1b33] border border-white/20 shadow-sm hover:bg-slate-100 transition-all cursor-pointer shrink-0"
                >
                  <span>Get in touch</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0a1b33]" />
                </button>
              </nav>
            </div>
          </div>

          {/* Seamless Marquee Logo Scroller */}
          <div className="w-full max-w-[1400px] mt-2 sm:mt-6 overflow-hidden marquee-mask shrink-0">
            <div className="flex w-max gap-2 sm:gap-5 animate-marquee">
              {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative h-11 sm:h-15 md:h-18 px-3.5 sm:px-5 md:px-6 shrink-0 flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#0c1629]/90 border border-white/10 shadow-md hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all overflow-hidden cursor-pointer"
                >
                  <div
                    className="absolute inset-0 transition-all duration-500 ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"
                    style={{ background: tech.gradient }}
                  />
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span className="relative z-10 text-[11.5px] sm:text-[13px] md:text-[13.5px] font-semibold text-white tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
