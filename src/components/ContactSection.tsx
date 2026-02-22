import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactItems = [
    { icon: Phone, label: "6369886225", href: "tel:6369886225" },
    { icon: Mail, label: "nnikitha033@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=nnikitha033@gmail.com" },
    {
      icon: Linkedin,
      label: "linkedin.com/in/nikitha033",
      href: "https://linkedin.com/in/nikitha033",
    },
    { icon: MapPin, label: "Chennai, India", href: null },
  ];

  return (
    <section id="contact" className="py-32 sm:py-40">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-wide mb-6 text-center"
          >
            <span className="gradient-text">Contact</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-24 mx-auto mb-20"
          />

          <div className="max-w-lg mx-auto glass-card-hover p-12 sm:p-16 text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-wide mb-12"
            >
              NIKITHA P
            </motion.h3>

            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center gap-5 group"
                >
                  <motion.div
                    whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 rounded-2xl bg-primary/[0.1] flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 border border-primary/20"
                  >
                    <item.icon size={20} className="text-primary/80" />
                  </motion.div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/90 hover:text-foreground transition-colors duration-500 text-base sm:text-lg tracking-wide font-medium"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-foreground/90 text-base sm:text-lg tracking-wide font-medium">
                      {item.label}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
