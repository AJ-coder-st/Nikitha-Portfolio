import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const AboutSection = ({ id = "about" }: { id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">ABOUT ME</span>
          </h2>

          <div className="max-w-3xl mx-auto glass-card p-8 sm:p-10 glow-border">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
                <User size={40} className="text-primary" />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center sm:text-left">
                <p>
                  I'm B.Com graduate and aspiring Data Analyst with hands-on experience in Excel, SQL, and Power BI.
                </p>
                <p>
                  Skilled in data cleaning, exploratory data analysis, and creating interactive dashboards.
                </p>
                <p>
                  Passionate about transforming raw data into meaningful business insights through visualization and analysis.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
