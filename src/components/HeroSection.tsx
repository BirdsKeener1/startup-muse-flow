import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0] 
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 2 + "s",
          }}
        />
      ))}
    </div>
  );
};

const FloatingIcon = ({ Icon, delay }: { Icon: any; delay: number }) => (
  <motion.div
    className="absolute z-10 p-4 glass-card rounded-xl"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ 
      delay: delay,
      duration: 0.6,
      ease: "easeOut"
    }}
    whileHover={{ 
      scale: 1.1, 
      rotateY: 15,
      boxShadow: "var(--glow-primary)"
    }}
  >
    <Icon className="w-8 h-8 text-primary" />
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic AI ecosystem" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Particle Field */}
      <ParticleField />

      {/* Floating 3D Icons */}
      <div className="absolute top-[20%] left-[10%] z-10">
        <FloatingIcon Icon={Brain} delay={0.5} />
      </div>
      <div className="absolute top-[30%] right-[15%] z-10">
        <FloatingIcon Icon={Zap} delay={0.7} />
      </div>
      <div className="absolute bottom-[25%] left-[20%] z-10">
        <FloatingIcon Icon={Sparkles} delay={0.9} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Transform Your Startup Journey
            <br />
            <span className="text-secondary">with AI-Powered Guidance</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Experience the future of startup incubation with our revolutionary 
            multi-agent ecosystem. Five specialized AI agents collaborate to provide 
            comprehensive guidance, real-time insights, and strategic direction for your venture.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </motion.div>

      <motion.div
        className="mt-16 flex justify-center items-center gap-8 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-sm text-foreground-muted">
          ⚡ Real-time Analysis
        </div>
        <div className="w-px h-4 bg-border hidden sm:block"></div>
        <div className="text-sm text-foreground-muted">
          🤝 Multi-Agent Collaboration
        </div>
        <div className="w-px h-4 bg-border hidden sm:block"></div>
        <div className="text-sm text-foreground-muted">
          📊 Comprehensive Insights
        </div>
      </motion.div>
        </motion.div>
      </div>
    </section>
  );
};