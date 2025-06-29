
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'JavaScript ES6+', level: 92 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Responsive Design', level: 93 },
        { name: 'Web Performance', level: 85 },
        { name: 'Accessibility (a11y)', level: 80 },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'GraphQL', level: 82 },
        { name: 'REST APIs', level: 93 },
        { name: 'Express.js', level: 87 },
        { name: 'Authentication & Authorization', level: 85 },
        { name: 'Microservices Architecture', level: 80 },
        { name: 'Serverless Computing', level: 75 },
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS/Cloud', level: 87 },
        { name: 'Docker', level: 85 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma/Design', level: 80 },
        { name: 'CI/CD', level: 83 },
        { name: 'Webpack', level: 82 },
        { name: 'Jest/Testing', level: 88 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'SEO Best Practices', level: 80 },
      ]
    },
    soft: {
      title: 'Leadership & Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 92 },
        { name: 'Strategic Planning', level: 88 },
        { name: 'Client Communication', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Mentoring', level: 85 },
        { name: 'Time Management', level: 90 },
        { name: 'Adaptability', level: 93 },
        { name: 'Collaboration', level: 95 },
        { name: 'Critical Thinking', level: 90 },
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-24 bg-dark-slate">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-neon-accent text-dark-slate'
                    : 'glass-card text-platinum hover:glow-border'
                }`}
              >
                {skillCategories[category as keyof typeof skillCategories].title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="glass-card p-8 hover:glow-border transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-center text-gradient mb-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-platinum">{skill.name}</span>
                    <span className="text-neon-accent text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-dark-charcoal rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-neon-accent to-gold h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
