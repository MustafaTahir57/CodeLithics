import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate reCAPTCHA only if it's enabled
    if (recaptchaSiteKey && !captchaValue) {
      setErrors({ captcha: "Please complete the reCAPTCHA verification" });
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification to continue.",
        variant: "destructive",
      });
      return;
    }

    // Validate form data
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_email: "contact@codelithics.com",
    };

    try {
      setLoading(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      toast({
        title: "Message sent! 🚀",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setCaptchaValue(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Email failed:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
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
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your Web3 project to life? Get in touch with us today.
          </p>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-1 overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border card-glow h-full">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-heading font-bold mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`bg-secondary border-border focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`bg-secondary border-border focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      rows={5}
                      className={`bg-secondary border-border focus:border-primary resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  {recaptchaSiteKey && (
                    <div className="scale-[0.75] origin-left sm:scale-100">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaSiteKey}
                        onChange={(value) => {
                          setCaptchaValue(value);
                          if (errors.captcha) setErrors({ ...errors, captcha: "" });
                        }}
                        onExpired={() => setCaptchaValue(null)}
                        theme="dark"
                      />
                      {errors.captcha && <p className="text-destructive text-sm mt-1">{errors.captcha}</p>}
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-effect"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-card border-border card-glow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-bold mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:contact@codelithics.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
                  >
                    <Mail className="w-5 h-5" />
                    <span>contact@codelithics.com</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter/X</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary p-1 card-glow">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Quick Response</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, feel free to reach out directly via email or LinkedIn.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
