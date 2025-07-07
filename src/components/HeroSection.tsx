
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/portfolioData';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Alex Johnson
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-6">
            Frontend Developer specializing in{' '}
            <span className="text-cyan-400 font-semibold transition-all duration-500 animate-pulse">
              {skills[currentSkill]}
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full px-8 py-3 text-lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-full px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
