import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target } from "lucide-react";

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="focus" className="py-32 sm:py-40 section-gradient">
      <div className="container mx-auto px-6 text-center">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-wide mb-6"
          >
            <span className="gradient-text">Focus</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-24 mx-auto mb-20"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-lg mx-auto glass-card-hover p-14 sm:p-16"
          >
            <Target size={48} className="text-primary/70 mx-auto mb-10" />
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-wide leading-tight">
              Data-Driven
              <br />
              <span className="gradient-text">Decision Making</span>
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FocusSection;
