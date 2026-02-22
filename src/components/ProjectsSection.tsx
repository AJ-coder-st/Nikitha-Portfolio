import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderOpen } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-light tracking-wide mb-4 text-center"
          >
            <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-16 mx-auto mb-16"
          />

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + n * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.4 } }}
                className="glass-card-hover p-7 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-500">
                  <FolderOpen size={18} className="text-primary/60" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2 tracking-wide">
                  Project {n}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Coming soon — details will be added shortly.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
