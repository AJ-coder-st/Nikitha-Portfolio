import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const roles = ["Data Analyst", "Power BI Developer", "Excel Specialist"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[15%] w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl animate-float-slow" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-accent/[0.03] blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[40%] right-[30%] w-56 h-56 rounded-full bg-mauve/[0.03] blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[40%] left-[30%] w-40 h-40 rounded-full bg-lavender/[0.02] blur-2xl animate-float" style={{ animationDelay: "5s" }} />
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary/80 font-semibold text-sm sm:text-base tracking-[0.4em] uppercase mb-10"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-wide mb-6 glow-text"
        >
          Nikitha P
        </motion.h1>

        {/* Glow line under name */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-[2px] mx-auto mb-10"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(262 55% 70%), hsl(340 45% 70%), transparent)",
            boxShadow: "0 0 20px hsla(262, 55%, 70%, 0.3)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="h-10 mb-10"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl text-primary/90 font-display font-semibold tracking-wide italic">
            {displayed}
            <span className="animate-pulse text-primary/50">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed tracking-wide font-medium"
        >
          Turning raw data into valuable insights through advanced analytics,
          interactive dashboards, and strategic data visualization.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-foreground font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-500 button-gradient text-white shadow-lg"
        >
          Get In Touch
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 text-lg">→</span>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 mx-auto overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
            style={{
              background: "linear-gradient(180deg, transparent, hsl(262 40% 65%), transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
