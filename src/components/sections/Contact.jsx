import React from "react";
import { contactData } from "../../data/contactData";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../data/personalData";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4 md:px-8 selection:bg-purple-500/30">
      <div className="container mx-auto max-w-6xl relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN: Info & Context */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full justify-center"
          >
            <div>
              <motion.h2
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
              >
                {contactData.title.main} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  {contactData.title.accent}
                </span>
              </motion.h2>

              <p className="text-zinc-400 text-lg leading-[1.8] max-w-md mb-8">
                {contactData.description}
              </p>
            </div>

            <div className="space-y-8">
              <ContactDetail icon={Mail} label="Email" value={PERSONAL_INFO.contact.email} href={`mailto:${PERSONAL_INFO.contact.email}`} />
              <ContactDetail icon={MapPin} label="Location" value={PERSONAL_INFO.contact.location} />
              <ContactDetail icon={Phone} label="Phone" value={PERSONAL_INFO.contact.phone} href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`} />

              {/* Socials Row */}
              <div className="pt-8 border-t border-white/10 flex gap-4">
                <SocialBtn icon={Linkedin} href={SOCIAL_LINKS.linkedin} />
                <SocialBtn icon={Github} href={SOCIAL_LINKS.github} />
                <SocialBtn icon={Instagram} href={SOCIAL_LINKS.instagram} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full bg-zinc-900/40 backdrop-blur-2xl border border-[rgba(139,92,246,0.15)] rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_40px_rgba(139,92,246,0.05)] relative overflow-hidden group hover:border-[rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.1)] transition-all duration-500"
          >
            {/* Ambient Glow behind form */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-700" />
            
            <form className="relative z-10 space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <InputGroup label={contactData.labels.firstName} placeholder={contactData.placeholders.firstName} />
                <InputGroup label={contactData.labels.lastName} placeholder={contactData.placeholders.lastName} />
              </div>

              <InputGroup label={contactData.labels.email} type="email" placeholder={contactData.placeholders.email} />

              <div className="space-y-4">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">{contactData.labels.interest}</label>
                <div className="flex flex-wrap gap-2">
                  {contactData.requirements.map(item => (
                    <div key={item} className="group/check relative">
                      <input type="checkbox" id={item} className="peer sr-only" />
                      <label
                        htmlFor={item}
                        className="block px-5 py-2.5 rounded-full border border-white/5 bg-white/5 text-zinc-300 text-sm cursor-pointer transition-all hover:bg-white/10 hover:border-purple-500/40 peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500 peer-checked:text-white peer-checked:border-transparent peer-checked:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">{contactData.labels.message}</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all resize-none"
                  placeholder={contactData.placeholders.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold h-16 rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-purple-500/30 transition-all group/btn hover:-translate-y-0.5"
              >
                <span className="tracking-widest uppercase text-sm">{contactData.labels.submit}</span>
                <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const InputGroup = ({ label, type = "text", placeholder }) => (
  <div className="space-y-2 flex flex-col">
    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">{label}</label>
    <input
      type={type}
      className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all"
      placeholder={placeholder}
    />
  </div>
);

const ContactDetail = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-5 group/item">
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 text-zinc-400 group-hover/item:border-purple-500/30 group-hover/item:text-purple-400 group-hover/item:bg-purple-500/10 transition-all duration-300">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-white font-semibold text-lg hover:text-purple-400 transition-colors">{value}</a>
      ) : (
        <p className="text-white font-semibold text-lg">{value}</p>
      )}
    </div>
  </div>
);

const SocialBtn = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 shadow-sm"
  >
    <Icon size={20} />
  </a>
);
