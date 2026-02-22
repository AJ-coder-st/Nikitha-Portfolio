import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderOpen } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Projects</span>
          </h2>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + n * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card p-6 group cursor-pointer hover:glow-border transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FolderOpen size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Project {n}
                </h3>
                <p className="text-sm text-muted-foreground">
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
