import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = ({ id = "about" }: { id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className="py-32 sm:py-40 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-wide mb-6 text-center"
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-24 mx-auto mb-20"
          />

          <div className="max-w-5xl mx-auto glass-card-hover p-10 sm:p-16">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Profile picture */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-shrink-0"
              >
                <div className="absolute -inset-6 rounded-full bg-primary/[0.08] blur-3xl animate-pulse-glow" />
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-secondary/80 flex items-center justify-center border-2 border-primary/20 overflow-hidden group cursor-pointer profile-image-shadow transition-all duration-700 hover:scale-105">
                  <img 
                    src="/Nikitha_P.jpg.jpg.jpeg" 
                    alt="Nikitha P" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 text-foreground/90 leading-relaxed text-center md:text-left text-base sm:text-lg"
              >
                <p>
                  I'm B.Com graduate and aspiring Data Analyst with hands-on experience in Excel, SQL, and Power BI.
                </p>
                <p>
                  Skilled in data cleaning, exploratory data analysis, and creating interactive dashboards.
                </p>
                <p>
                  Passionate about transforming raw data into meaningful business insights through visualization and analysis.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
