import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactItems = [
    { icon: Phone, label: "6369886225", href: "tel:6369886225" },
    { icon: Mail, label: "nnikitha033@gmail.com", href: "mailto:nnikitha033@gmail.com" },
    {
      icon: Linkedin,
      label: "linkedin.com/in/nikitha033",
      href: "https://linkedin.com/in/nikitha033",
    },
    { icon: MapPin, label: "Chennai, India", href: null },
  ];

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-light tracking-wide mb-4 text-center"
          >
            <span className="gradient-text">Contact</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-16 mx-auto mb-16"
          />

          <div className="max-w-md mx-auto glass-card-hover p-10 text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display text-2xl font-medium text-foreground tracking-wide mb-10"
            >
              NIKITHA P
            </motion.h3>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center gap-4 group"
                >
                  <motion.div
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-9 h-9 rounded-xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500"
                  >
                    <item.icon size={15} className="text-primary/60" />
                  </motion.div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-500 text-sm tracking-wide"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm tracking-wide">
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
