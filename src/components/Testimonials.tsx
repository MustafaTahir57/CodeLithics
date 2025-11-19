import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "salvatorer",
    role: "Fiverr Client, Mali",
    content: "Honestly, I've worked with many developers in the blockchain space, but he truly stands out. He listens carefully, has incredible patience, and unlike many others, negotiating with him isn't a crime, he's genuinely open-minded in a world where everyone only talks about money. An absolute ace in his field. I recommend him to everyone. The true King of IT!",
    rating: 5,
  },
  {
    name: "texturehaven",
    role: "Fiverr Client, Netherlands",
    content: "Satisfied with the product, feedback is well received, and support continues until the final result is achieved",
    rating: 5,
  },
  {
    name: "bandyka77",
    role: "Fiverr Client, Hungary",
    content: "Despite the unexpected difficulties during development, the job was completed well and he went beyond the scope to get things sorted. This is what I would expect from a good developer who is looking to establish themselves for the long run. Well done.",
    rating: 5,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
