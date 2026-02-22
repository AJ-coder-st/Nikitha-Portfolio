import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-light tracking-wide mb-4 text-center"
          >
            <span className="gradient-text">Education</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-16 mx-auto mb-16"
          />

          <div className="max-w-lg mx-auto relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="absolute left-6 top-0 bottom-0 w-px origin-top"
              style={{
                background: "linear-gradient(180deg, hsl(262 40% 65%), transparent)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-16"
            >
              <div className="absolute left-3 top-4 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <GraduationCap size={13} className="text-primary/70" />
              </div>

              <div className="glass-card-hover p-7">
                <h3 className="font-display text-xl font-medium text-foreground mb-1 tracking-wide">
                  Bachelor of Commerce
                </h3>
                <p className="text-primary/70 text-sm font-medium tracking-wide">
                  DRBCC Hindu College
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
