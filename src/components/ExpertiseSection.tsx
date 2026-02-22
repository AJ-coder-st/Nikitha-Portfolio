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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Expertise</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="glass-card p-6 group hover:glow-border transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-display font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-sm text-muted-foreground font-medium">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                    style={{ boxShadow: "0 0 12px hsla(217, 91%, 60%, 0.4)" }}
                  />
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
