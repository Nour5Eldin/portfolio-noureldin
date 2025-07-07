
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolioData';

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Experience Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-pink-400"></div>
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-center mb-12">
              <div 
                className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition-transform z-10"
                onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
              >
                {exp.logo}
              </div>
              <div className={`ml-8 transition-all duration-300 ${selectedExperience === exp.id ? 'scale-105' : ''}`}>
                <Card className={`bg-slate-900/50 border-slate-700 backdrop-blur-sm ${selectedExperience === exp.id ? 'border-cyan-400' : ''}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
                    <p className="text-lg text-pink-400 mb-2">{exp.company}</p>
                    <div className="flex items-center text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.date}
                    </div>
                    {selectedExperience === exp.id && (
                      <p className="text-gray-300 animate-fade-in">{exp.description}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
