import { useState } from 'react';
import { Github, Mail, MessageSquare, Send, FileText } from 'lucide-react';
import { Button } from './ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import Resume from './Resume';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Blockchain AI Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 mesh-gradient animate-pulse-glow" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-slide-in">
          {/* Title */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-float">
              Blockchain & AI Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Building the future with decentralized systems and artificial intelligence
            </p>
            
            {/* About Me Section */}
            <div className="mt-8 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-left">
              <h2 className="text-2xl font-bold gradient-text mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                As a passionate Blockchain and AI Engineer, I specialize in developing cutting-edge decentralized applications 
                and intelligent systems. With extensive experience in smart contract development, DeFi protocols, and machine 
                learning models, I bridge the gap between blockchain technology and artificial intelligence to create innovative 
                solutions. My expertise spans across multiple blockchain platforms including Ethereum, Solana, and Polkadot, 
                combined with advanced AI/ML frameworks to deliver robust, scalable applications.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="glow-effect group"
              onClick={() => setIsResumeOpen(true)}
            >
              <FileText className="mr-2 h-5 w-5" />
              View CV
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button size="lg" variant="outline" className="glow-effect">
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <a href="mailto:" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all glow-effect hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all glow-effect hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all glow-effect hover:scale-110">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all glow-effect hover:scale-110">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />

      {/* Resume Modal */}
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;
