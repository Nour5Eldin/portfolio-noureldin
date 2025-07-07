
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>&copy; 2024 Alex Johnson. All rights reserved. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
