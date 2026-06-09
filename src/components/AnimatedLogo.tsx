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
      <motion.img
        src={logoSrc}
        alt="Codelithics logo"
        className="relative h-full w-auto object-contain bg-transparent"
        style={{ background: "transparent" }}
        animate={{ scale: [1, 1.04, 1], filter: [
          "drop-shadow(0 0 0px rgba(108,80,254,0))",
          "drop-shadow(0 4px 14px rgba(108,80,254,0.45))",
          "drop-shadow(0 0 0px rgba(108,80,254,0))",
        ] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        draggable={false}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
