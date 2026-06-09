import logoAsset from "@/assets/codelithics.png.asset.json";
import { motion } from "framer-motion";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <motion.img
        src={logoAsset.url}
        alt="Codelithics logo"
        className="relative h-full w-auto object-contain bg-transparent"
        draggable={false}
        style={{ background: "transparent", transformOrigin: "50% 42%" }}
        animate={{
          y: [0, -6, 0],
          rotate: [0, 3, 0, -3, 0],
          filter: [
            "drop-shadow(0 0 0px rgba(65,68,242,0))",
            "drop-shadow(0 6px 18px rgba(65,68,242,0.45))",
            "drop-shadow(0 0 0px rgba(65,68,242,0))",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedLogo;
