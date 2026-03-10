import React from "react";
import { contactData } from "../../data/contactData";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../data/personalData";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";


export default function Contact() {
  return (
    <section id="contact" className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4 md:px-8">

      {/* Dynamic Background */}
      {/* Dynamic Background Removed to use Global Background */}

      <div className="container mx-auto max-w-5xl relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT COLUMN: Info & Context */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
              >
                {contactData.title.main} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-teal-400">
                  {contactData.title.accent}
                </span>
              </motion.h1>

              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md mb-12">
                {contactData.description}
              </p>
            </div>

            <div className="space-y-8">
              <ContactDetail icon={Mail} label="Email" value={contactData.info.email} href={`mailto:${contactData.info.email}`} />
              <ContactDetail icon={MapPin} label="Location" value={contactData.info.location} />
              <ContactDetail icon={Phone} label="Phone" value={contactData.info.phone} href={`tel:${contactData.info.phone.replace(/\s+/g, '')}`} />

              {/* Socials Row */}
              <div className="pt-8 border-t border-white/10 flex gap-4">
                <SocialBtn icon={Linkedin} href={SOCIAL_LINKS.linkedin} />
                <SocialBtn icon={Instagram} href={SOCIAL_LINKS.instagram} />
                <SocialBtn icon={Twitter} href={SOCIAL_LINKS.twitter} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

            <form className="relative z-10 space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label={contactData.labels.firstName} placeholder={contactData.placeholders.firstName} />
                <InputGroup label={contactData.labels.lastName} placeholder={contactData.placeholders.lastName} />
              </div>

              <InputGroup label={contactData.labels.email} type="email" placeholder={contactData.placeholders.email} />

              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-300 ml-1">{contactData.labels.interest}</label>
                <div className="flex flex-wrap gap-2">
                  {contactData.requirements.map(item => (
                    <div key={item} className="group relative">
                      <input type="checkbox" id={item} className="peer sr-only" />
                      <label
                        htmlFor={item}
                        className="block px-4 py-2 rounded-full border border-white/10 bg-black/20 text-zinc-400 text-sm cursor-pointer transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-white/30"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">{contactData.labels.message}</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder={contactData.placeholders.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold h-14 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group"
              >
                {contactData.labels.submit}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Sub-components for cleanliness
const InputGroup = ({ label, type = "text", placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-zinc-300 ml-1">{label}</label>
    <input
      type={type}
      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
      placeholder={placeholder}
    />
  </div>
);

const ContactDetail = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-sm text-zinc-500">{label}</p>
      {href ? (
        <a href={href} className="text-white font-medium hover:text-teal-400 transition-colors">{value}</a>
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </div>
  </div>
);

const SocialBtn = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-transparent border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:bg-white/5 transition-all"
  >
    <Icon size={18} />
  </a>
);
