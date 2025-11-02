import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/80 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>

          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => scrollToSection('hero')}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>
              Reviews
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('blog')}>
              Blog
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
