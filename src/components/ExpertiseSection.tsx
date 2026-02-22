import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileSpreadsheet, BarChart3, Database } from "lucide-react";

const skills = [
  { name: "Advanced Excel", icon: FileSpreadsheet, level: 90 },
  { name: "Power BI", icon: BarChart3, level: 85 },
  { name: "MySQL", icon: Database, level: 80 },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-light tracking-wide mb-4 text-center"
          >
            <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-16 mx-auto mb-16"
          />

          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500"
                  >
                    <skill.icon size={18} className="text-primary/70" />
                  </motion.div>
                  <span className="font-display text-lg font-medium text-foreground tracking-wide">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground font-medium tracking-wider">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-secondary/80 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, hsl(262 40% 55%), hsl(340 25% 60%), hsl(262 50% 70%))",
                      backgroundSize: "200% 100%",
                    }}
                  >
                    <div className="absolute inset-0 shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
