
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input type="email" className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Role/Company</label>
                <Input className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400" placeholder="Your Role or Company" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400 min-h-32" placeholder="Tell me about your project or just say hello!" />
              </div>
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 rounded-full py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
