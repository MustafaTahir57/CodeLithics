import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import dogwalkerThumbnail from "@/assets/dogwalker-thumbnail.png";
import ithThumbnail from "@/assets/ith-thumbnail.png";
import qdviThumbnail from "@/assets/qdvi-thumbnail.png";
import tedaiThumbnail from "@/assets/tedai-thumbnail.png";
import gridriderThumbnail from "@/assets/gridrider-thumbnail.png";

const projects = [
  {
    title: "Dog-Walker",
    description: "A complete presale dapp with staking and reward features",
    tags: ["Solidity", "React", "Web3.js", "Staking", "Presale"],
    image: dogwalkerThumbnail,
    demoUrl: "https://dog-walker.io/",
  },
  {
    title: "In The House",
    description: "Full-featured token sale platform with integrated staking mechanism and earning rewards",
    tags: ["Solidity", "React", "Web3.js", "Rewards", "Token Sale"],
    image: ithThumbnail,
    demoUrl: "https://dog-walker.io/",
  },
  {
    title: "QDVI",
    description: "Secure and streamlined token sale solution with wallet integration and real-time purchase tracking",
    tags: ["Solidity", "Web3", "React", "Token Sale", "USDT"],
    image: qdviThumbnail,
    demoUrl: "https://dog-walker.io/",
  },
  {
    title: "TedAI",
    description: "AI-powered chatbot meme coin with interactive conversational features and community engagement",
    tags: ["AI", "React", "Web3", "Meme Coin", "Chatbot"],
    image: tedaiThumbnail,
    demoUrl: "https://dog-walker.io/",
  },
  {
    title: "GridRider",
    description: "Engaging blockchain gaming platform featuring two fantastic games with competitive gameplay and rewards",
    tags: ["Gaming", "Web3", "React", "Solidity", "DApp"],
    image: gridriderThumbnail,
    demoUrl: "https://www.gridrider.io/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world blockchain solutions delivering results for clients worldwide
          </p>
        </motion.div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow overflow-hidden h-full group">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
