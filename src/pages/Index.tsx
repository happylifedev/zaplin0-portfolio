import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';

import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="blog">
        <Blog />
      </div>
      
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Blockchain & AI Engineer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
