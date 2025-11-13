import { motion } from "framer-motion";

const technologies = [
  // Smart Contracts
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg" },
  { name: "OpenZeppelin", icon: "https://avatars.githubusercontent.com/u/22205159?s=200&v=4" },
  { name: "Ethereum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ethereum/ethereum-original.svg" },
  { name: "Base", icon: "https://avatars.githubusercontent.com/u/108554348?s=200&v=4" },
  
  // Web3 & DeFi
  { name: "Web3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg" },
  { name: "Ethers.js", icon: "https://docs.ethers.org/v5/static/logo.svg" },
  { name: "Chainlink", icon: "https://avatars.githubusercontent.com/u/7078854?s=200&v=4" },
  { name: "Moralis", icon: "https://avatars.githubusercontent.com/u/62961448?s=200&v=4" },
  { name: "IPFS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ipfs/ipfs-original.svg" },
  
  // Web Development
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  
  // AI & Data
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenAI", icon: "https://avatars.githubusercontent.com/u/14957082?s=200&v=4" },
  { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge technologies powering next-generation blockchain solutions
          </p>
        </motion.div>

        {/* Scrolling Banner */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${tech.name}-${index}`}
                className="flex-shrink-0 mx-6 group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 via-card to-secondary-glow/10 border border-border rounded-2xl flex items-center justify-center transition-all duration-300 card-glow p-4 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3 group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${tech.name}-${index}`}
                className="flex-shrink-0 mx-6 group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 via-card to-secondary-glow/10 border border-border rounded-2xl flex items-center justify-center transition-all duration-300 card-glow p-4 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3 group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
