import logoSrc from "@/assets/codelithics-logo.svg";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <img
        src={logoSrc}
        alt="Codelithics logo"
        className="relative h-full w-auto object-contain bg-transparent"
        style={{ background: "transparent" }}
        draggable={false}
      />
    </div>
  );
};

export default AnimatedLogo;
