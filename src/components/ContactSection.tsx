import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Contact</span>
          </h2>

          <div className="max-w-xl mx-auto glass-card p-8 sm:p-10 glow-border text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              NIKITHA P
            </h3>

            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{item.label}</span>
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
