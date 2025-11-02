import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Github, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'blockchain' | 'ai'>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className="glow-effect"
          >
            All Projects
          </Button>
          <Button
            onClick={() => setFilter('blockchain')}
            variant={filter === 'blockchain' ? 'default' : 'outline'}
            className="glow-effect"
          >
            Blockchain
          </Button>
          <Button
            onClick={() => setFilter('ai')}
            variant={filter === 'ai' ? 'default' : 'outline'}
            className="glow-effect"
          >
            AI & ML
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:scale-105 hover:glow-effect animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {/* Image placeholder - replace with actual project screenshots */}
                <div className="w-full h-full flex items-center justify-center bg-muted/50">
                  <span className="text-sm text-muted-foreground">Project Image</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 9 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="glow-effect"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </Button>
          </div>
        )}

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-xl border-primary/20">
            <DialogHeader>
              <DialogTitle className="text-3xl gradient-text">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Image placeholder - replace with actual project screenshots */}
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="flex-1 glow-effect">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View Source
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 glow-effect">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
