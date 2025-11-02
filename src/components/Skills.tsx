import { useState } from 'react';
import { Button } from './ui/button';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skills: Skill[] = [
    { name: 'Python', percentage: 98, icon: 'python' },
    { name: 'TypeScript', percentage: 96, icon: 'typescript' },
    { name: 'JavaScript', percentage: 100, icon: 'javascript' },
    { name: 'MongoDB', percentage: 95, icon: 'mongodb' },
    { name: 'Solidity', percentage: 95, icon: 'solidity' },
    { name: 'Rust', percentage: 94, icon: 'rust' },
    { name: 'Move', percentage: 94, icon: 'move' },
    { name: 'Vyper', percentage: 95, icon: 'vyper' },
    { name: 'React', percentage: 95, icon: 'react' },
    { name: 'Next.js', percentage: 97, icon: 'nextjs' },
    { name: 'R', percentage: 93, icon: 'r' },
    { name: 'Haskell', percentage: 92, icon: 'haskell' },
    { name: 'C#', percentage: 96, icon: 'csharp' },
    { name: 'C++', percentage: 100, icon: 'cpp' },
    { name: 'Go', percentage: 100, icon: 'go' },
    { name: 'Ethers.js', percentage: 94, icon: 'ethers' },
    { name: 'Web3.js', percentage: 90, icon: 'web3js' },
    { name: 'Docker', percentage: 88, icon: 'docker' },
    { name: 'AWS', percentage: 90, icon: 'aws' },
    { name: 'Julia', percentage: 88, icon: 'julia' },
  ];

  const displayedSkills = showAll ? skills : skills.slice(0, 10);

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <span className="text-xs font-bold text-primary">{skill.icon.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <span className="text-2xl font-bold gradient-text">{skill.percentage}%</span>
              </div>
              <div className="skill-bar group-hover:glow-effect transition-all">
                <div 
                  className="skill-fill"
                  style={{ '--skill-width': `${skill.percentage}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        {skills.length > 10 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="glow-effect"
            >
              {showAll ? 'Show Less' : 'Show More Skills'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
