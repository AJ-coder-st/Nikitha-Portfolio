import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target } from "lucide-react";

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="focus" className="py-28 section-gradient">
      <div className="container mx-auto px-6 text-center">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-light tracking-wide mb-4"
          >
            <span className="gradient-text">Focus</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-16 mx-auto mb-16"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-md mx-auto glass-card-hover p-12"
          >
            <Target size={32} className="text-primary/50 mx-auto mb-8" />
            <h3 className="font-display text-2xl sm:text-3xl font-light text-foreground tracking-wide leading-snug">
              Data-Driven
              <br />
              <span className="gradient-text font-medium">Decision Making</span>
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FocusSection;
