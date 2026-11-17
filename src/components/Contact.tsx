import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waNumber = '94701095008';
    let text = `Hi Malin,\n\n`;
    if (formData.name) text += `Name: ${formData.name}\n`;
    if (formData.email) text += `Email: ${formData.email}\n`;
    if (formData.message) text += `Message: ${formData.message}\n`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text.trim())}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }, 400);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-16 sm:py-22 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto flex flex-col">
        
        {/* Section Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mb-8 sm:mb-10"
        >
          <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-black text-neutral-900 tracking-tight leading-[1.08] mb-2 sm:mb-3">
            Let's Work Together
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-neutral-400 font-normal leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to send me a message.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 text-left"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-[13.5px] sm:text-[14px] font-bold text-neutral-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 rounded-2xl border border-neutral-300/90 text-neutral-900 placeholder:text-neutral-400 text-[14.5px] sm:text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all bg-white shadow-sm"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-[13.5px] sm:text-[14px] font-bold text-neutral-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 rounded-2xl border border-neutral-300/90 text-neutral-900 placeholder:text-neutral-400 text-[14.5px] sm:text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all bg-white shadow-sm"
            />
          </div>

          {/* Your Message */}
          <div className="flex flex-col">
            <label className="text-[13.5px] sm:text-[14px] font-bold text-neutral-900 mb-2">
              Your Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 rounded-2xl border border-neutral-300/90 text-neutral-900 placeholder:text-neutral-400 text-[14.5px] sm:text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all bg-white shadow-sm resize-none"
            />
          </div>

          {/* WhatsApp Me Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 sm:py-4.5 px-8 rounded-2xl bg-black text-white text-[14px] sm:text-[15px] font-bold tracking-wider uppercase hover:bg-neutral-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5"
            >
              {loading ? (
                <span>Connecting...</span>
              ) : submitted ? (
                <span className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" /> Opening WhatsApp...
                </span>
              ) : (
                <>
                  {/* <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-emerald-400 shrink-0">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.38C8.64 7.38 8.43 7.45 8.24 7.66C8.06 7.86 7.55 8.35 7.55 9.35C7.55 10.36 8.28 11.33 8.39 11.47C8.49 11.61 9.8 13.63 11.83 14.51C13.51 15.24 13.86 15.09 14.21 15.06C14.57 15.03 15.36 14.59 15.52 14.13C15.68 13.67 15.68 13.28 15.63 13.2C15.58 13.11 15.44 13.06 15.23 12.95C15.02 12.85 13.98 12.34 13.79 12.27C13.6 12.2 13.46 12.16 13.32 12.37C13.18 12.58 12.78 13.06 12.65 13.2C12.53 13.35 12.41 13.37 12.2 13.26C11.99 13.16 11.12 12.87 10.08 11.95C9.28 11.23 8.73 10.35 8.58 10.09C8.42 9.83 8.56 9.69 8.67 9.58C8.76 9.49 8.88 9.33 8.99 9.2C9.09 9.07 9.13 8.97 9.2 8.83C9.27 8.69 9.23 8.57 9.18 8.47C9.13 8.36 8.73 7.38 8.83 7.38Z"/>
                  </svg> */}
                  <span>SEND MESSAGE</span>
                </>
              )}
            </button>
          </div>
        </motion.form>

        {/* Clean Footer Note */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-200/80 text-center text-xs text-neutral-400">
          © {CURRENT_YEAR} Malin. All rights reserved.
        </div>

      </div>
    </section>
  );
}
