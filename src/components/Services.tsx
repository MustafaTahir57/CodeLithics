import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Blocks, Coins, Brain, FileCode, Wallet } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Smart Contract Development",
    description: "Smart contract development for all EVM chains — from ERC-20s to DeFi protocols, built secure and audit-ready.",
  },
  {
    icon: Blocks,
    title: "DApp & Web3 Integration",
    description: "Full-stack decentralized applications using React, Web3.js, and Ethers.js.",
  },
  {
    icon: Coins,
    title: "NFT Marketplace Development",
    description: "Complete NFT platforms with minting, trading, and royalty management systems.",
  },
  {
    icon: Wallet,
    title: "DeFi Protocols",
    description: "Liquidity pools, yield farming, staking platforms, and advanced DeFi mechanisms.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Custom AI integrations, chatbots, and intelligent automation to enhance your Web3 products.",
  },
  {
    icon: FileCode,
    title: "Custom Blockchain Solutions",
    description: "Tailored blockchain architectures and token solutions for unique business needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive Web3 development services to bring your blockchain vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow h-full group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
