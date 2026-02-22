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
    <section id="expertise" className="py-32 sm:py-40">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-wide mb-6 text-center"
          >
            <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-24 mx-auto mb-20"
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card-hover p-8 sm:p-10 group"
              >
                <div className="flex items-center gap-5 mb-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    className="w-14 h-14 rounded-2xl bg-primary/[0.1] flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500 border border-primary/20"
                  >
                    <skill.icon size={24} className="text-primary/80" />
                  </motion.div>
                  <span className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-wide">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-base sm:text-lg text-primary/90 font-bold tracking-wider">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2.5 rounded-full bg-secondary/80 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, hsl(262 55% 65%), hsl(340 45% 70%), hsl(280 50% 75%))",
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
