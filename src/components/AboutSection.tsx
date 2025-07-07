
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/portfolioData';

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with over 4 years of experience creating dynamic and responsive web applications. 
              I specialize in React ecosystem and love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="border-cyan-400 text-cyan-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
