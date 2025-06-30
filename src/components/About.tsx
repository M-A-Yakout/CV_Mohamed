import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful interfaces that users love to interact with"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams to deliver exceptional results"
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-charcoal/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-accent/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-accent to-gold mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <div className="relative">
                <p className="text-lg text-platinum/90 leading-relaxed mb-6">
                  I'm a passionate student in college with a deep love for technology and creative problem-solving. 
                  My journey in software development has been driven by curiosity and the desire to build 
                  meaningful digital experiences.
                </p>
                
                <p className="text-lg text-platinum/90 leading-relaxed mb-8">
                  With over 25 projects under my belt, I've explored various technologies and frameworks, 
                  always eager to learn and take on new challenges. Each project has taught me something 
                  valuable about the craft of software development.
                </p>

                {/* Enhanced stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group">
                    <div className="text-4xl font-bold text-neon-accent mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                    <div className="text-platinum/80">Projects Delivered</div>
                  </div>
                  
                  <div className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group">
                    <div className="text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">Student</div>
                    <div className="text-platinum/80">Current Status</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 hover:glow-border transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold text-gradient mb-8">
                  What I Bring
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className="text-center group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 bg-neon-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-accent/30 transition-colors duration-300">
                        <feature.icon className="text-neon-accent group-hover:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <h4 className="font-semibold text-platinum mb-2">{feature.title}</h4>
                      <p className="text-platinum/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="glass-card p-8 hover:glow-border transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-8 text-center">
              Core Principles
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-3 h-3 bg-neon-accent rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform duration-300"></div>
                <h4 className="font-semibold text-platinum mb-3">User-Centric Design</h4>
                <p className="text-platinum/80 text-sm leading-relaxed">Every decision is driven by user needs and business objectives, ensuring meaningful experiences.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform duration-300"></div>
                <h4 className="font-semibold text-platinum mb-3">Scalable Solutions</h4>
                <p className="text-platinum/80 text-sm leading-relaxed">Building for today while preparing for tomorrow's growth and evolving requirements.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-3 h-3 bg-neon-accent rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform duration-300"></div>
                <h4 className="font-semibold text-platinum mb-3">Continuous Learning</h4>
                <p className="text-platinum/80 text-sm leading-relaxed">Staying ahead of technology trends and industry best practices through constant growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;