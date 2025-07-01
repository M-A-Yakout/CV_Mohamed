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

  // SVG Circular Progress Helper
  const getLevelLabel = (level: number) => {
    if (level >= 90) return { label: 'Professional', color: 'text-green-400' };
    if (level >= 80) return { label: 'Advanced', color: 'text-yellow-400' };
    return { label: 'Basic', color: 'text-red-400' };
  };

  const CircularProgress = ({ value, size = 56, stroke = 6 }: { value: number, size?: number, stroke?: number }) => {
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <svg width={size} height={size} className="block mx-auto">
        <defs>
          <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffe7" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#23272f"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#skill-gradient)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-neon-accent font-bold text-lg"
        >
          {value}%
        </text>
      </svg>
    );
  };

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
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-neon-accent to-gold text-dark-slate scale-105'
                    : 'glass-card text-platinum hover:glow-border hover:scale-105'
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

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
                const { label, color } = getLevelLabel(skill.level);
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-dark-charcoal/60 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    <CircularProgress value={skill.level} />
                    <span className="mt-4 font-medium text-platinum text-center">{skill.name}</span>
                    <span className={`mt-2 text-sm font-semibold ${color}`}>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;