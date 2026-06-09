import logoAsset from "@/assets/codelithics.png.asset.json";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <img
        src={logoAsset.url}
        alt="Codelithics logo"
        className="relative h-full w-auto object-contain bg-transparent"
        style={{ background: "transparent" }}
        draggable={false}
      />
    </div>
  );
};

export default AnimatedLogo;
