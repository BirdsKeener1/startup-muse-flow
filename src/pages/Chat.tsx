import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Send, 
  Paperclip, 
  Download, 
  MoreVertical,
  Brain,
  TrendingUp,
  Palette,
  Calculator,
  Scale,
  Presentation,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  agentId?: string;
  timestamp: Date;
  confidence?: number;
  insights?: string[];
}

interface Agent {
  id: string;
  name: string;
  icon: any;
  color: string;
  status: 'thinking' | 'ready' | 'offline';
  confidence: number;
}

const agents: Agent[] = [
  {
    id: 'market-researcher',
    name: 'Market Researcher',
    icon: TrendingUp,
    color: 'primary',
    status: 'ready',
    confidence: 92
  },
  {
    id: 'product-designer',
    name: 'Product Designer', 
    icon: Palette,
    color: 'secondary',
    status: 'thinking',
    confidence: 87
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    icon: Calculator,
    color: 'accent',
    status: 'ready',
    confidence: 95
  },
  {
    id: 'legal-advisor',
    name: 'Legal Advisor',
    icon: Scale,
    color: 'electric-blue',
    status: 'ready',
    confidence: 89
  },
  {
    id: 'pitch-coach',
    name: 'Pitch Coach',
    icon: Presentation,
    color: 'destructive',
    status: 'offline',
    confidence: 0
  }
];

const AgentStatus = ({ agent }: { agent: Agent }) => {
  const Icon = agent.icon;
  
  return (
    <motion.div
      className="flex items-center space-x-3 p-3 glass rounded-lg hover:shadow-glow-primary transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        <Avatar className={`w-10 h-10 bg-${agent.color}/20 border border-${agent.color}/30`}>
          <AvatarFallback className={`bg-${agent.color}/20`}>
            <Icon className={`w-5 h-5 text-${agent.color}`} />
          </AvatarFallback>
        </Avatar>
        
        {/* Status Indicator */}
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
          agent.status === 'ready' ? 'bg-accent' :
          agent.status === 'thinking' ? 'bg-secondary animate-pulse' :
          'bg-muted'
        }`} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{agent.name}</p>
        <div className="flex items-center space-x-2">
          <div className={`w-16 h-1.5 bg-muted rounded-full overflow-hidden`}>
            <motion.div 
              className={`h-full bg-${agent.color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${agent.confidence}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs text-foreground-muted">{agent.confidence}%</span>
        </div>
      </div>
    </motion.div>
  );
};

const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.type === 'user';
  const agent = agents.find(a => a.id === message.agentId);
  const Icon = agent?.icon || Brain;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}
    >
      <div className={`flex max-w-[70%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
        {!isUser && (
          <Avatar className={`w-8 h-8 bg-${agent?.color || 'primary'}/20 border border-${agent?.color || 'primary'}/30`}>
            <AvatarFallback className={`bg-${agent?.color || 'primary'}/20`}>
              <Icon className={`w-4 h-4 text-${agent?.color || 'primary'}`} />
            </AvatarFallback>
          </Avatar>
        )}
        
        <div className={`
          p-4 rounded-2xl relative
          ${isUser 
            ? 'bg-gradient-primary text-primary-foreground ml-2' 
            : 'glass-card mr-2'
          }
        `}>
          {!isUser && agent && (
            <div className="text-xs font-medium text-foreground-muted mb-1">
              {agent.name}
            </div>
          )}
          
          <p className="text-sm leading-relaxed">{message.content}</p>
          
          {message.confidence && (
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/30">
              <span className="text-xs text-foreground-muted">
                Confidence: {message.confidence}%
              </span>
              <div className="text-xs text-foreground-muted">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          )}
          
          {message.insights && (
            <div className="mt-3 space-y-1">
              {message.insights.map((insight, i) => (
                <div key={i} className="text-xs text-accent flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {insight}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'agent',
      content: 'Welcome! I\'m here to help guide your startup journey. Tell me about your business idea, current stage, or any specific challenges you\'re facing.',
      agentId: 'market-researcher',
      timestamp: new Date(),
      confidence: 95,
      insights: ['Market analysis ready', 'Competitive landscape mapped']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: 'I\'ve analyzed your input and coordinated with the team. Based on the market research, I recommend focusing on the B2B segment initially. The financial analyst suggests a lean approach to validate your MVP.',
        agentId: 'market-researcher',
        timestamp: new Date(),
        confidence: 88,
        insights: ['Market opportunity identified', 'Revenue model validated', 'Risk assessment complete']
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">AI Advisory Session</h1>
              <p className="text-foreground-muted">Collaborate with your multi-agent advisory team</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="glass">
                <Download className="w-4 h-4 mr-2" />
                Export Chat
              </Button>
              <Button variant="outline" size="sm" className="glass">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Agent Sidebar */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                Agent Status
              </h3>
              
              <div className="space-y-3">
                {agents.map((agent) => (
                  <AgentStatus key={agent.id} agent={agent} />
                ))}
              </div>
            </Card>

            {/* Insights Panel */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-secondary" />
                Live Insights
              </h3>
              
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    <span className="text-sm font-medium">Market Validation</span>
                  </div>
                  <p className="text-xs text-foreground-muted">Strong demand signals detected in target segment</p>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm font-medium">Funding Window</span>
                  </div>
                  <p className="text-xs text-foreground-muted">Optimal timing for Series A approach</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Chat Interface */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-card h-[calc(100vh-200px)] flex flex-col">
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                </AnimatePresence>
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2"
                  >
                    <Avatar className="w-8 h-8 bg-primary/20">
                      <AvatarFallback className="bg-primary/20">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="glass-card p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-border/30 p-6">
                <div className="flex items-end space-x-4">
                  <Button variant="outline" size="sm" className="glass">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex-1">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about market analysis, product strategy, funding..."
                      className="glass border-border/30 focus:border-primary/50 focus:ring-primary/20"
                      disabled={isTyping}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-primary hover:shadow-glow-primary"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-xs text-foreground-muted mt-2 text-center">
                  Your agents are analyzing your input and collaborating to provide the best guidance
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}