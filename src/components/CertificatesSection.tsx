import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Data Analysis Course Completion",
    institution: "Besant Technology, Chennai",
    description:
      "Completed comprehensive data analysis course covering Advanced Excel, Power BI, and SQL.",
  },
  {
    title: "Honours Diploma in Computer Application (HDCA) Course Completion",
    institution: "NSI Computer Education, Chennai",
    description:
      "Completed certification training in MS Office tools, including Microsoft Excel, PowerPoint, Word, TallyPrime, and basic HTML fundamentals.",
  },
];

const CertificateCard = ({
  cert,
  index,
  inView,
}: {
  cert: (typeof certificates)[0];
  index: number;
  inView: boolean;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="perspective-1000 h-60 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass-card p-7 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-5">
            <Award size={22} className="text-primary/60" />
          </div>
          <h3 className="font-display text-base font-medium text-foreground tracking-wide leading-snug mb-2">
            {cert.title}
          </h3>
          <p className="text-primary/60 text-xs font-medium tracking-wide">
            {cert.institution}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card p-7 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            {cert.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="py-28 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-light tracking-wide mb-4 text-center"
          >
            <span className="gradient-text">Certificates</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-divider max-w-16 mx-auto mb-16"
          />

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <CertificateCard key={i} cert={cert} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
