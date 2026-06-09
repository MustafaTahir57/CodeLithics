import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {label: "Services", href: "#services"},
    {label: "Projects", href: "#projects"},
    {label: "About", href: "#about"},
    {label: "Testimonials", href: "#testimonials"},
    {label: "Contact", href: "#contact"},
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({behavior: "smooth"});
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{y: -100}}
        animate={{y: 0}}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <motion.div
              className="flex items-center gap-2"
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, ease: "easeOut"}}
            >
              <AnimatedLogo className="h-12 md:h-14 text-xl md:text-2xl" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -20}}
          className="fixed top-24 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border md:hidden"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Us
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
