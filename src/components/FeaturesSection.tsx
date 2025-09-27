import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Target,
  Brain,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Insights",
    description: "Get instant analysis and recommendations as your startup evolves. Our agents continuously monitor and adapt to market changes.",
    stats: "< 2s response time"
  },
  {
    icon: Brain,
    title: "Conflict Resolution",
    description: "When agents disagree, our advanced conflict resolution system weighs different perspectives to provide balanced recommendations.",
    stats: "99.7% accuracy rate"
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analysis",
    description: "Deep dive into every aspect of your business with multi-dimensional analysis covering market, product, finance, legal, and pitch perspectives.",
    stats: "500+ data points"
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description: "Enterprise-grade security ensures your startup data remains protected while our agents provide guidance.",
    stats: "SOC 2 compliant"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your AI advisory team anytime, anywhere. Never wait for office hours to get critical business guidance.",
    stats: "Always online"
  },
  {
    icon: Target,
    title: "Personalized Strategy",
    description: "Tailored recommendations based on your industry, stage, team size, and unique business model requirements.",
    stats: "Custom fit"
  }
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="glass-card p-8 h-full relative overflow-hidden hover:shadow-glow transition-all duration-500">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Icon with Glow Effect */}
          <motion.div 
            className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-foreground-muted mb-6 leading-relaxed">
            {feature.description}
          </p>

          {/* Stats Badge */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
              {feature.stats}
            </span>
            
            {/* Animated Arrow */}
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Particle Effect on Hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Powered by <span className="bg-gradient-secondary bg-clip-text text-transparent">Advanced AI</span>
          </motion.h2>
          
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of startup incubation with cutting-edge AI technology 
            designed to accelerate your journey from idea to successful venture.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Rocket className="w-12 h-12 text-primary mr-4" />
                <h3 className="text-3xl font-bold">Ready to Launch?</h3>
              </div>
              
              <p className="text-xl text-foreground-muted mb-8">
                Join thousands of founders who've accelerated their startup journey with our AI advisory team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-foreground-muted">Startups Guided</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">$2.5B+</div>
                  <div className="text-sm text-foreground-muted">Funding Raised</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">94%</div>
                  <div className="text-sm text-foreground-muted">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};