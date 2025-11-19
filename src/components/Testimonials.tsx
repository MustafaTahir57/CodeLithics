import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import reviewSalvatorer from "@/assets/review-salvatorer.png";
import reviewTexturehaven from "@/assets/review-texturehaven.png";
import reviewBandyka77 from "@/assets/review-bandyka77.png";
import reviewUpwork1 from "@/assets/review-upwork-1.png";
import reviewUpwork2 from "@/assets/review-upwork-2.png";
import reviewCyberg99 from "@/assets/review-cyberg99.png";
import reviewNlcrydertheman from "@/assets/review-nlcrydertheman.png";

const testimonials = [
  {
    name: "salvatorer",
    role: "Fiverr Client, Mali",
    platform: "Fiverr",
    content: "Honestly, I've worked with many developers in the blockchain space, but he truly stands out. He listens carefully, has incredible patience, and unlike many others, negotiating with him isn't a crime, he's genuinely open-minded in a world where everyone only talks about money. An absolute ace in his field. I recommend him to everyone. The true King of IT!",
    rating: 5,
    screenshot: reviewSalvatorer,
  },
  {
    name: "texturehaven",
    role: "Fiverr Client, Netherlands",
    platform: "Fiverr",
    content: "Satisfied with the product, feedback is well received, and support continues until the final result is achieved",
    rating: 5,
    screenshot: reviewTexturehaven,
  },
  {
    name: "bandyka77",
    role: "Fiverr Client, Hungary",
    platform: "Fiverr",
    content: "Despite the unexpected difficulties during development, the job was completed well and he went beyond the scope to get things sorted. This is what I would expect from a good developer who is looking to establish themselves for the long run. Well done.",
    rating: 5,
    screenshot: reviewBandyka77,
  },
  {
    name: "Smart Contract Client",
    role: "Upwork Client",
    platform: "Upwork",
    content: "It's been wonderful working with him",
    rating: 5,
    screenshot: reviewUpwork1,
  },
  {
    name: "Dapp Development Client",
    role: "Upwork Client",
    platform: "Upwork",
    content: "Working with Mustafa is great experience I would really love to work again he's really good in web3 and blockchain ! Recommended",
    rating: 5,
    screenshot: reviewUpwork2,
  },
  {
    name: "cyberg_99",
    role: "Fiverr Client, South Korea",
    platform: "Fiverr",
    content: "Working with M Mustafa on Blockchain Development & Solutions was a truly EXCEPTIONAL experience. The professionalism and depth of understanding demonstrated were impressive, and his ability to exceed expectations with comprehensive documentation stands out. His cooperation and dedication were TOP-NOTCH, making him a pleasure to collaborate with! 🔥",
    rating: 5,
    screenshot: reviewCyberg99,
  },
  {
    name: "nlcrydertheman",
    role: "Fiverr Client, United States",
    platform: "Fiverr",
    content: "Working with M Mustafa was a DELIGHT! His professionalism and attention to detail in blockchain development EXCEEDED my expectations. The timely delivery and fluent communication made the process smooth and enjoyable. 🔥",
    rating: 5,
    screenshot: reviewNlcrydertheman,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by startups and enterprises worldwide
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full p-1"
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow h-full">
                    <CardContent className="pt-6">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <p className="text-muted-foreground mb-6 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <div className="border-t border-border pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="gap-2">
                                <ExternalLink className="w-3 h-3" />
                                See Review
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh]">
                              <DialogHeader>
                                <DialogTitle>{testimonial.platform} Review - {testimonial.name}</DialogTitle>
                                <DialogDescription>
                                  Original review screenshot from {testimonial.platform}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="overflow-auto">
                                <img 
                                  src={testimonial.screenshot} 
                                  alt={`Review from ${testimonial.name}`}
                                  className="w-full h-auto rounded-lg"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
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

export default Testimonials;
