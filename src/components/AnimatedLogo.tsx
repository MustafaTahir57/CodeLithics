import { motion } from "framer-motion";
import hexAsset from "@/assets/logo-hex.svg.asset.json";
import cubeAsset from "@/assets/logo-cube.svg.asset.json";

/**
 * Codelithics animated mark.
 * - Outer hexagon shell gently floats / rotates
 * - Inner cube stays static (locked in place)
 * - Wordmark rendered alongside with Orbitron font
 */
const AnimatedLogo = ({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Icon stack */}
      <div className="relative h-full aspect-square">
        {/* Animated hexagon shell */}
        <motion.img
          src={hexAsset.url}
          alt=""
          aria-hidden
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
          animate={{ y: [0, -4, 0, 4, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Static inner cube */}
        <img
          src={cubeAsset.url}
          alt="Codelithics logo"
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      {showWordmark && (
        <span className="font-heading font-bold tracking-[0.08em] text-foreground text-[1.1em] leading-none">
          CODELITHICS
        </span>
      )}
    </div>
  );
};

export default AnimatedLogo;
