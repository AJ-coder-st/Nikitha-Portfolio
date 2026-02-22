import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-32 sm:py-40 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-wide mb-6 text-center"
          >
            <span className="gradient-text">Education</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-24 mx-auto mb-20"
          />

          <div className="max-w-xl mx-auto relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="absolute left-8 top-0 bottom-0 w-[2px] origin-top"
              style={{
                background: "linear-gradient(180deg, hsl(262 55% 70%), transparent)",
                boxShadow: "0 0 10px hsla(262, 55%, 70%, 0.3)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-20"
            >
              <div className="absolute left-4 top-6 w-10 h-10 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center shadow-lg">
                <GraduationCap size={18} className="text-primary/90" />
              </div>

              <div className="glass-card-hover p-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-wide">
                  Bachelor of Commerce
                </h3>
                <p className="text-primary/90 text-lg font-semibold tracking-wide">
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
