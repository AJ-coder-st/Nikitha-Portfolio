import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="max-w-xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative pl-16"
            >
              <div className="absolute left-3 top-2 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <GraduationCap size={14} className="text-primary" />
              </div>

              <div className="glass-card p-6 glow-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Bachelor of Commerce
                </h3>
                <p className="text-primary text-sm font-medium">
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
