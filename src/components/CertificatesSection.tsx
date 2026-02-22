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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
      className="perspective-1000 h-56 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center text-center glow-border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Award size={36} className="text-primary mb-4" />
          <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">
            {cert.title}
          </h3>
          <p className="text-primary text-xs mt-2 font-medium">{cert.institution}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card p-6 flex items-center justify-center text-center"
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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Certificates</span>
          </h2>

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
