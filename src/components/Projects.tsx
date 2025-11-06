import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import defiPlatform from '../assets/projects/1.jpg';
import nftMarketplace from '../assets/projects/2.jpg';
import ecommerce from '../assets/projects/3.jpg';
import solanaDex from '../assets/projects/4.jpg';
import socialMedia from '../assets/projects/5.jpg';
import contractAuditor from '../assets/projects/6.jpg';
import daoPlatform from '../assets/projects/7.jpg';
import projectManagement from '../assets/projects/8.jpg';
import project9 from '../assets/projects/9.jpg';

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
    title: 'Pumpfun',
    description: 'Tools for Solana meme trading.',
    category: 'blockchain',
    tech: ['launchpad', 'solana', 'typescript', 'pump'],
    github: 'https://github.com/happylifedev/Solana-Meme-Trade-Tools',
    demo: 'https://dumpfun.vercel.app',
    fullDescription: 'Tools for Solana meme trading — track launchpads, view charts, and trade fast with Axiom or Gmgn.',
    image: defiPlatform,
  },
   {
    id: 6,
    title: 'FashionCorner',
    description: 'FashionCorner - Next.js 14 Fullstack Ecommerce App',
    category: 'fullstack',
    tech: ['Python', 'Solidity', 'Machine Learning', 'React'],
    github: 'https://github.com/happylifedev/FashionCorner',
    demo: 'https://fashion-corner.vercel.app',
    fullDescription: 'Fullstack Next.js  e-commerce app with MongoDB, Cloudinary, PayPay, and an admin dashboard for seamless store management.',
    image: contractAuditor,
  },
  {
    id: 2,
    title: 'Pumpfun-smartcontract',
    description: 'Fork of Pump.fun with core functionalities on Solana Devnet',
    category: 'blockchain',
    tech: ['rust', 'solana', 'smartcontract'],
    github: 'https://github.com/happylifedev/ump.fun-Smart-Contract-Devnet-',
    demo: 'https://bunt.fun/',
    fullDescription: 'Fork of Pump.fun with core functionalities on Solana Devnet. Includes smart contract, token launch, swap, curve, and withdrawal. Frontend & backend available via GitHub. Contact: Telegram / WhatsApp / Twitter.',
    image: nftMarketplace,
  },
  {
    id: 3,
    title: 'Solana-Casino-Game',
    description: '',
    category: 'blockchain',
    tech: ['rust', 'typescript', 'solana', 'casino-game'],
    github: 'https://github.com/happylifedev/casinogame',
    demo: 'https://ggsol.io',
    fullDescription: '',
    image: ecommerce,
  },
  
  {
    id: 5,
    title: 'Krycha-Store',
    description: 'Fullstack Next.js e-commerce app',
    category: 'fullstack',
    tech: ['Next', 'typescript', 'javascript', 'scss'],
    github: 'https://github.com/happylifedev/Krycha-Store',
    demo: 'https://krycha-store.vercel.app',
    fullDescription: 'Fullstack Next.js e-commerce app using Firebase, Stripe, and SSG for fast, secure, and SEO-optimized shopping.',
    image: socialMedia,
  },
  {
    id: 4,
    title: ' Jupiter-Arbitrage Bot',
    description: 'An advanced, non-custodial Solana arbitrage bot powered by Jupiter Aggregator V6.',
    category: 'blockchain',
    tech: ['Dex', 'typescript', 'Solana', 'React'],
    github: 'https://github.com/happylifedev/abitragebot',
    demo: 'https://solscan.io/tx/4SWQPhWbzAPyCgwk5g7frohM6FfeffgUg3occX2zzhCLpQuDxzmhEgb4dNiT914NfRT4JTYjq9n5aViAs3iwb9PU',
    fullDescription: 'An advanced, non-custodial Solana arbitrage bot powered by Jupiter Aggregator V6. It scans DEXs in real time, builds multi-leg swap routes, and executes instant, MEV-protected trades for passive yield. Features include local routing, transaction racing, and QuickNode integration for ultra-fast, secure performance.',
    image: solanaDex,
  },
  {
    id: 7,
    title: 'Muji Hotel',
    description: 'A modern hotel booking platform built with Next.js, Sanity CMS, and Stripe for payments.',
    category: 'fullstack',
    tech: ['React.js', 'typescript', 'javascript', 'scss'],
    github: 'https://github.com/happylifedev/StayModern',
    demo: 'https://muji-hotel.vercel.app',
    fullDescription: 'About Modern hotel booking platform built with Next.js, Sanity CMS, and Stripe for secure, seamless reservations.',
    image: daoPlatform,
  },
  {
    id: 8,
    title: 'ecommerce-project',
    description: 'Full-stack e-commerce solution with real-time admin dashboard',
    category: 'fullstack',
    tech: ['React.js', 'typescript', 'prisma', 'scss'],
    github: 'https://github.com/happylifedev/Pogres?tab=readme-ov-file',
    demo: 'https://ecommerce-project-admin-five.vercel.app',
    fullDescription: 'Full-stack e-commerce solution with real-time admin dashboard, product management, and seamless store integration using Next.js, Prisma, and Stripe.',
    image: projectManagement,
  },
  {
    id: 9,
    title: 'DApp-with-Ethers.js',
    description: 'A simple DApp using Ethers.js to connect wallets, view USDC balances, and transfer tokens.',
    category: 'blockchain',
    tech: ['ethers.js', 'ethereum', 'Dapp', 'web3'],
    github: 'https://github.com/happylifedev/DApp-with-Ethers.js',
    demo: 'https://blog.logrocket.com/building-dapp-ethers-js/',
    fullDescription: 'A simple DApp using Ethers.js to connect wallets, view USDC balances, and transfer tokens.',
    image: project9 ,
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
            Full-Stack
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