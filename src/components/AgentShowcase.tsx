import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Palette, 
  Calculator, 
  Scale, 
  Presentation,
  ArrowRight 
} from "lucide-react";
import agentsImage from "@/assets/agents-grid.jpg";

const agents = [
  {
    id: "market-researcher",
    name: "Market Researcher",
    icon: TrendingUp,
    description: "Analyzes market trends, competitor landscapes, and identifies opportunities for your startup's growth and positioning.",
    color: "primary",
    capabilities: ["Market Analysis", "Competitor Research", "Trend Forecasting", "Opportunity Mapping"]
  },
  {
    id: "product-designer",
    name: "Product Designer",
    icon: Palette,
    description: "Optimizes user experience, product design, and feature prioritization to build solutions users love.",
    color: "secondary",
    capabilities: ["UX/UI Design", "Feature Planning", "User Research", "Prototype Validation"]
  },
  {
    id: "financial-analyst",
    name: "Financial Analyst",
    icon: Calculator,
    description: "Provides financial modeling, revenue projections, funding strategies, and economic viability assessments.",
    color: "accent",
    capabilities: ["Financial Modeling", "Revenue Projections", "Funding Strategy", "Risk Assessment"]
  },
  {
    id: "legal-advisor",
    name: "Legal Advisor",
    icon: Scale,
    description: "Guides through legal structures, compliance requirements, intellectual property, and regulatory considerations.",
    color: "electric-blue",
    capabilities: ["Legal Structure", "IP Protection", "Compliance", "Contract Review"]
  },
  {
    id: "pitch-coach",
    name: "Pitch Coach",
    icon: Presentation,
    description: "Refines your pitch deck, presentation skills, and storytelling to effectively communicate your vision to investors.",
    color: "destructive",
    capabilities: ["Pitch Deck Review", "Storytelling", "Presentation Skills", "Investor Relations"]
  }
];

const AgentCard = ({ agent, index }: { agent: any; index: number }) => {
  const Icon = agent.icon;
  
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
      whileHover={{ 
        y: -10,
        scale: 1.02,
      }}
      className="group"
    >
      <Card className="glass-card p-6 h-full relative overflow-hidden hover:shadow-glow transition-all duration-500">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${agent.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div 
            className={`w-16 h-16 rounded-xl bg-${agent.color}/20 flex items-center justify-center mb-6 group-hover:shadow-glow-${agent.color} transition-all duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className={`w-8 h-8 text-${agent.color}`} />
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
            {agent.name}
          </h3>
          
          <p className="text-foreground-muted mb-6 leading-relaxed">
            {agent.description}
          </p>

          {/* Capabilities */}
          <div className="space-y-2 mb-6">
            <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">
              Key Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {agent.capabilities.map((capability: string, i: number) => (
                <span 
                  key={i}
                  className={`px-3 py-1 text-xs rounded-full bg-${agent.color}/20 text-${agent.color} border border-${agent.color}/30`}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* Learn More Link */}
          <motion.div 
            className="flex items-center text-primary hover:text-secondary transition-colors cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.div>
        </div>

        {/* Connecting Lines (shown on hover) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-full h-full">
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={`text-${agent.color}`} stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" className={`text-${agent.color}`} stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 Q50,25 100,0 T200,0"
              stroke={`url(#gradient-${index})`}
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export const AgentShowcase = () => {
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
            Meet Your <span className="bg-gradient-primary bg-clip-text text-transparent">AI Advisory Team</span>
          </motion.h2>
          
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Five specialized agents working in harmony to provide comprehensive startup guidance. 
            Each agent brings unique expertise while collaborating seamlessly to accelerate your success.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.slice(0, 3).map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
        
        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {agents.slice(3).map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index + 3} />
          ))}
        </div>

        {/* Collaboration Visualization */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Real-time Collaboration</h3>
            <p className="text-foreground-muted mb-6">
              Watch as our agents communicate, share insights, and resolve conflicts to provide 
              you with unified, actionable recommendations.
            </p>
            
            <div className="flex justify-center items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};