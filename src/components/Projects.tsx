import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import defiPlatform from '../assets/projects/1.jpg';
import englishTranslator from '../assets/projects/2.jpg';
import collectibleGame from '../assets/projects/3.jpg';

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
    description: 'Spanish-to-English neural translation',
    category: 'blockchain',
    tech: ['game', 'ethereum', 'cryptogs', 'smartcontract'],
    github: 'https://github.com/zaplin0/Collectible-Game',
    demo: 'https://cryptogs.io/',
    fullDescription: 'A fully on-chain Pogs game built on an extended ERC-721 standard, featuring commit-reveal randomness, pack minting, and decentralized gameplay — it’s SLAMMER TIME on the blockchain!',
    image: collectibleGame,
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