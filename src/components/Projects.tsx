import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import defiPlatform from '../assets/projects/1.jpg';
import englishTranslator from '../assets/projects/2.jpg';
import collectibleGame from '../assets/projects/3.jpg';
import askMyPdf from '../assets/projects/4.jpg';
import mintmeSolanaTokenCreator from '../assets/projects/5.jpg';
import creationAutomationPlatform from '../assets/projects/6.jpg';
import solanaToDoListDApp from '../assets/projects/7.jpg';
import aiAgent from '../assets/projects/8.jpg';
import pumpfunEvm from '../assets/projects/9.jpg';

type ProjectCategory = 'all' | 'fullstack' | 'blockchain';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  github: string;
  demo: string;
  fullDescription: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Ethers.js-DApp',
    description: '',
    category: 'blockchain',
    tech: ['ethereum', 'dapp', 'web3js', ],
    github: 'https://github.com/zaplin0/Ethers.js-DApp',
    demo: 'https://blog.logrocket.com/building-dapp-ethers-js',
    fullDescription: 'A beginner-friendly Ethereum DApp to connect wallets, read USDC balance, and transfer tokens using Ethers.js.',
    image: defiPlatform,
  },
  {
    id: 2,
    title: 'English-Translator',
    description: 'Spanish-to-English neural translation',
    category: 'fullstack',
    tech: ['python', 'marian', 'nmt', 'translation'],
    github: 'https://github.com/zaplin0/Spanish-to-English-Translator',
    demo: 'https://www.stars21.com/translator/english/fula',
    fullDescription: 'A sample project that trains a Spanish-to-English neural translation model using Marian NMT. Includes training scripts, helper tools, and a demo translation server.',
    image: englishTranslator,
  },
  {
    id: 3,
    title: 'Collectible-Game',
    description: '',
    category: 'blockchain',
    tech: ['game', 'ethereum', 'cryptogs', 'smartcontract'],
    github: 'https://github.com/zaplin0/Collectible-Game',
    demo: 'https://cryptogs.io/',
    fullDescription: 'A fully on-chain Pogs game built on an extended ERC-721 standard, featuring commit-reveal randomness, pack minting, and decentralized gameplay.',
    image: collectibleGame,
  },
  {
    id: 4,
    title: 'Ask-My-PDF',
    description: 'A proof-of-concept app that answers questions from board game rulebook PDFs',
    category: 'fullstack',
    tech: ['python', 'llm', 'pdf', 'rag'],
    github: 'https://github.com/zaplin0/Ask-My-PDF',
    demo: 'https://sharly.ai',
    fullDescription: 'A proof-of-concept app that answers questions from board game rulebook PDFs. Uses RALM + HyDE retrieval techniques with GPT to provide context-based answers. Simple setup and supports local, Redis, or S3 storage options.',
    image: askMyPdf,
  },
  {
    id: 5,
    title: 'Mintme-Solana-Token-Creator',
    description: 'A plug-and-play React widget for creating Solana tokens effortlessly.',
    category: 'blockchain',
    tech: ['react', 'solana', 'widget', 'solana-program'],
    github: 'https://github.com/zaplin0/Mintme-React-Widget-Solana-Token-Creator',
    demo: 'https://mintme.dev',
    fullDescription: 'A plug-and-play React widget for creating Solana tokens effortlessly. Powered by mintme-sdk, it offers customizable themes, IPFS integration, partner fees, real-time logs, and full TypeScript support — perfect for developers integrating token creation into their apps.',
    image: mintmeSolanaTokenCreator,
  },
  {
    id: 6,
    title: 'Creation-Automation-Platform',
    description: 'Mirada.ai is an all-in-one AI platform offering chatbots, content generation, code assistance, image/video creation, and data analysis.',
    category: 'fullstack',
    tech: ['ai', 'chatbot', 'content', 'code', 'image', 'video'],
    github: 'https://github.com/zaplin0/Unified-AI-Creation-Automation-Platform',
    demo: 'https://mirada.ai',
    fullDescription: 'Built with Next.js + FastAPI and powered by leading AI models, it provides scalable performance, secure architecture, and real-time analytics for businesses and creators.',
    image: creationAutomationPlatform,
  },
  {
    id: 7,
    title: 'Solana-To-Do-List-DApp',
    description: 'A blockchain-powered task manager.',
    category: 'blockchain',
    tech: ['solana', 'dapp', 'smartcontract', 'manager'],
    github: 'https://github.com/zaplin0/Solana-To-Do-List-DApp',
    demo: 'https://chodo.netlify.app',
    fullDescription: 'A blockchain-powered task manager. Deploy or connect to devnet/localnet, update app.config.json, and start with npm run web:start.',
    image: solanaToDoListDApp,
  },
  {
    id: 8,
    title: 'AI-Agent',
    description: 'An AI agent that can help you with your tasks.',
    category: 'fullstack',
    tech: ['ai', 'agent', 'python', 'fastapi'],
    github: 'https://github.com/zaplin0/AI-Agent',
    demo: 'https://strideagents.com',
    fullDescription: 'Open-source framework for building and deploying autonomous AI agents, designed to help businesses, developers, and teams automate tasks, scale operations, and innovate with AI.',
    image: aiAgent,
  },
  {
    id: 9,
    title: 'Pumpfun-EVM',
    description: 'Solidity contract for PumpFun-style token launch on EVM with minting, swap, bonding curve, and Uniswap migration features.',
    category: 'blockchain',
    tech: ['solidity', 'evm', 'smartcontract', ],
    github: 'https://github.com/zaplin0/PumpFun-EVM-Fork-Smart-Contract',
    demo: 'https://ape.store',
    fullDescription: 'Solidity contract for PumpFun-style token launch on EVM with minting, swap, bonding curve, and Uniswap migration features.',
    image: pumpfunEvm,
  },
  {
    id: 10,
    title: 'Pumpfun-EVM',
    description: 'Solidity contract for PumpFun-style token launch on EVM with minting, swap, bonding curve, and Uniswap migration features.',
    category: 'blockchain',
    tech: ['solidity', 'evm', 'smartcontract', ],
    github: 'https://github.com/zaplin0/PumpFun-EVM-Fork-Smart-Contract',
    demo: 'https://ape.store',
    fullDescription: 'Solidity contract for PumpFun-style token launch on EVM with minting, swap, bonding curve, and Uniswap migration features.',
    image: pumpfunEvm,
  },
 
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [category, setCategory] = useState<ProjectCategory>('all');

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(p => p.category === category);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, filteredProjects.length));
  };

  const showLess = () => {
    setVisibleCount(9);
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            variant={category === 'all' ? 'default' : 'outline'}
            onClick={() => { setCategory('all'); setVisibleCount(9); }}
          >
            All Projects
          </Button>
          <Button
            variant={category === 'fullstack' ? 'default' : 'outline'}
            onClick={() => { setCategory('fullstack'); setVisibleCount(9); }}
          >
            AI
          </Button>
          <Button
            variant={category === 'blockchain' ? 'default' : 'outline'}
            onClick={() => { setCategory('blockchain'); setVisibleCount(9); }}
          >
            Blockchain
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {filteredProjects.slice(0, visibleCount).map((project, idx) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group glow-primary hover:glow-secondary border-2"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="text-center">
            <Button onClick={showMore} size="lg">
              Show More Projects
            </Button>
          </div>
        )}

        {visibleCount >= filteredProjects.length && filteredProjects.length > 9 && (
          <div className="text-center">
            <Button onClick={showLess} variant="outline" size="lg">
              Show Less
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-lg border-2">
          {selectedProject && (
            <>
              <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl gradient-text">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base pt-4">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;