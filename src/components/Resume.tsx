import { X, Mail, Github, MapPin, Calendar, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { Button } from './ui/button';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume = ({ isOpen, onClose }: ResumeProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Resume Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl animate-scale-in">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Resume Header */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 border-b border-border">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold gradient-text">Blockchain & AI Engineer</h1>
            <p className="text-xl text-muted-foreground">Full-Stack Developer | Smart Contract Specialist | ML Engineer</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>github.com/username</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote / Global</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Highly skilled Blockchain and AI Engineer with 5+ years of experience designing and implementing 
              decentralized applications, smart contracts, and machine learning solutions. Expert in multiple 
              blockchain platforms including Ethereum, Solana, and Polkadot, combined with advanced AI/ML 
              frameworks. Proven track record of delivering scalable, secure, and innovative solutions that 
              bridge blockchain technology with artificial intelligence.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Blockchain Technologies</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Solidity, Rust, Move, Vyper</li>
                  <li>• Ethereum, Solana, Polkadot, BSC</li>
                  <li>• Smart Contracts & DeFi Protocols</li>
                  <li>• Web3.js, Ethers.js, Hardhat</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">AI & Development</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Python, TypeScript, JavaScript, C++, Go</li>
                  <li>• TensorFlow, PyTorch, Scikit-learn</li>
                  <li>• React, Next.js, Node.js</li>
                  <li>• Docker, AWS, Cloud Infrastructure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">Senior Blockchain Engineer</h3>
                    <p className="text-primary">Leading DeFi Protocol</p>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2022 - Present
                  </span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Architected and deployed $50M+ TVL DeFi protocol on Ethereum and Polygon</li>
                  <li>• Developed gas-optimized smart contracts reducing transaction costs by 40%</li>
                  <li>• Implemented comprehensive security measures and passed multiple audits</li>
                  <li>• Led team of 5 engineers in developing cross-chain bridge infrastructure</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">AI/ML Engineer & Blockchain Developer</h3>
                    <p className="text-primary">Tech Innovation Lab</p>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2020 - 2022
                  </span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Built AI-powered trading bot with 78% prediction accuracy for crypto markets</li>
                  <li>• Developed NFT marketplace with ML-based recommendation system</li>
                  <li>• Created decentralized identity verification using machine learning</li>
                  <li>• Integrated blockchain with IoT devices for supply chain tracking</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">Full-Stack Blockchain Developer</h3>
                    <p className="text-primary">Crypto Startup</p>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2019 - 2020
                  </span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Developed end-to-end dApp with React and Solidity for token staking</li>
                  <li>• Implemented wallet integration with MetaMask and WalletConnect</li>
                  <li>• Built automated testing suite achieving 95% code coverage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h2>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-bold">Master of Science in Computer Science</h3>
              <p className="text-primary">Specialization: Artificial Intelligence & Blockchain</p>
              <p className="text-sm text-muted-foreground">Top-Tier University | 2017 - 2019</p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Certifications & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="text-sm">
                <p className="font-semibold">✓ Certified Blockchain Expert (CBE)</p>
                <p className="text-muted-foreground">Blockchain Council</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">✓ AWS Certified Solutions Architect</p>
                <p className="text-muted-foreground">Amazon Web Services</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">✓ TensorFlow Developer Certificate</p>
                <p className="text-muted-foreground">Google</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">✓ Smart Contract Security Auditor</p>
                <p className="text-muted-foreground">OpenZeppelin</p>
              </div>
            </div>
          </section>

          {/* Notable Projects */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Key Achievements</h2>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Published 3 research papers on blockchain scalability and AI integration</li>
              <li>• Contributed to 15+ open-source blockchain projects with 2K+ GitHub stars</li>
              <li>• Speaker at 5 international blockchain and AI conferences</li>
              <li>• Successfully audited 30+ smart contracts with zero security breaches</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
