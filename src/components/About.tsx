import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Code, Globe } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Code, label: "Projects Delivered", value: "100+" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Globe, label: "Countries Served", value: "20+" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
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
            About <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            We're a team of blockchain engineers and developers led by{" "}
            <span className="text-primary font-semibold">Muhammad Mustafa Tahir</span>, 
            delivering secure and scalable decentralized solutions worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-primary p-1 card-glow">
            <div className="bg-card rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                Why Choose Us?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-semibold mb-2 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Expert Team
                  </h4>
                  <p className="ml-5">Blockchain specialists with deep expertise in Solidity, DeFi, and Web3 technologies.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Security First
                  </h4>
                  <p className="ml-5">Rigorous testing and security audits ensure your smart contracts are bulletproof.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Fast Delivery
                  </h4>
                  <p className="ml-5">Agile development process with quick turnaround times without compromising quality.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Global Support
                  </h4>
                  <p className="ml-5">24/7 communication and support across multiple time zones worldwide.</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
