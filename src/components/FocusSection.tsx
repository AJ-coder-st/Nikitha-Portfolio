import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target } from "lucide-react";

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="focus" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
            <span className="gradient-text">Focus</span>
          </h2>

          <div className="max-w-xl mx-auto glass-card p-10 glow-border">
            <Target size={40} className="text-primary mx-auto mb-6" />
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="font-display text-2xl sm:text-3xl font-bold text-foreground animated-underline inline-block pb-2"
            >
              Data-Driven Decision Making
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FocusSection;
