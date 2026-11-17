import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll reaction as the user scrolls through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -25]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-white py-12 sm:py-16 md:py-20 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <motion.div
        style={{ y: contentY }}
        className="max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        {/* Overline Label with subtle entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-2 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.06em] text-neutral-500 uppercase">
            Beyond the Work
          </span>
        </motion.div>

        {/* Section Title with smooth slide-up & blur reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold tracking-tight text-neutral-900 leading-[1.15] mb-4 sm:mb-5"
        >
          A Little About Me
        </motion.h2>

        {/* Dynamic expanding accent divider on scroll */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="w-14 sm:w-16 h-[2.5px] bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mx-auto mb-6 sm:mb-7 origin-center"
        />

        {/* Paragraphs with staggered reveal */}
        <div className="flex flex-col gap-4 sm:gap-5 text-neutral-700 font-normal text-[15px] sm:text-[16px] md:text-[16.5px] leading-[1.72] sm:leading-[1.75] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            I am a passionate and motivated aspiring Software Developer with an interest in designing, 
            developing, and managing modern web-based software applications. I enjoy building responsive 
            websites and functional systems that solve real-world problems and improve business processes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            I have an interest in both frontend and backend development, as well as system design, database 
            management, and software development methodologies. Alongside my technical skills, I am 
            passionate about project planning, problem solving, teamwork, and coordinating development 
            activities. My long-term career goal is to become a Project Manager, where I can combine my 
            technical knowledge, organizational skills, and leadership abilities to successfully plan, 
            manage, and deliver software development projects.
          </motion.p>
        </div>

        {/* More Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-9"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-neutral-900 text-white text-[14px] sm:text-[14.5px] font-semibold tracking-wide hover:bg-neutral-800 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <span>More Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
