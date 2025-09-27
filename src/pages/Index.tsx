import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { AgentShowcase } from "@/components/AgentShowcase";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              AI Incubator
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#agents" className="text-foreground-muted hover:text-primary transition-colors">Agents</a>
              <a href="#features" className="text-foreground-muted hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground-muted hover:text-primary transition-colors">How It Works</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/chat">
                <Button variant="outline" className="glass border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Try Demo
                </Button>
              </Link>
              <Link to="/chat">
                <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Agent Showcase */}
      <section id="agents">
        <AgentShowcase />
      </section>

      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Our AI agents collaborate in real-time to provide comprehensive startup guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Share Your Vision",
                description: "Tell us about your startup idea, current stage, and specific challenges you're facing."
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our five specialized agents analyze your input from multiple perspectives and collaborate on solutions."
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Receive comprehensive, actionable recommendations with real-time confidence scores and next steps."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 text-center relative overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground-muted">{item.description}</p>
                
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                AI Incubator
              </div>
              <p className="text-foreground-muted max-w-md">
                Accelerating startup success through advanced AI collaboration and multi-agent expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-foreground-muted">
                <div>Agents</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-foreground-muted">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center text-foreground-muted">
            <p>&copy; 2024 AI Incubator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
