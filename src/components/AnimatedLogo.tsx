import { motion } from "framer-motion";
import logoSrc from "@/assets/codelithics-logo.svg";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Soft pulsing glow behind the logo */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(108,80,254,0.35) 0%, rgba(5,127,252,0.2) 45%, rgba(255,255,255,0) 70%)",
        }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Subtle rotating gradient ring */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(108,80,254,0) 0deg, rgba(108,80,254,0.5) 90deg, rgba(5,127,252,0.5) 180deg, rgba(108,80,254,0) 360deg)",
          maskImage:
            "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 72%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src={logoSrc}
        alt="Codelithics logo"
        className="relative h-full w-auto object-contain"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        draggable={false}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
