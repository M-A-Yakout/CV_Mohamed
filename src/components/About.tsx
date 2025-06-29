const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-charcoal/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-platinum/90 leading-relaxed">
                I'm a student in college, passionate about technology and creative solutions.
              </p>
              
              <p className="text-lg text-platinum/90 leading-relaxed">
                I've already built around 25 projects, always eager to learn and take on new challenges in software development.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass-card p-6 text-center hover:glow-border transition-all duration-300">
                  <div className="text-3xl font-bold text-neon-accent mb-2">25+</div>
                  <div className="text-platinum/80">Projects Delivered</div>
                </div>
                
                <div className="glass-card p-6 text-center hover:glow-border transition-all duration-300">
                  <div className="text-3xl font-bold text-neon-accent mb-2">Student</div>
                  <div className="text-platinum/80">Current Status</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 hover:glow-border transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold text-gradient mb-6">
                  Core Principles
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-platinum mb-1">User-Centric Design</h4>
                      <p className="text-platinum/80 text-sm">Every decision is driven by user needs and business objectives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-platinum mb-1">Scalable Solutions</h4>
                      <p className="text-platinum/80 text-sm">Building for today while preparing for tomorrow's growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-platinum mb-1">Continuous Learning</h4>
                      <p className="text-platinum/80 text-sm">Staying ahead of technology trends and industry best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
