import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'CV Website',
      category: 'React / Vercel',
      description: 'A modern, minimal CV website to showcase your professional profile.',
      longDescription: 'A sleek and responsive CV website built with React and hosted on Vercel. Designed for professionals to present their experience, skills, and projects in a clean, modern format.',
      image: 'https://h.top4top.io/p_3467ut8ln1.png', // Custom CV sample image
      tech: ['React', 'Vercel'],
      results: [],
      liveUrl: 'https://silver-wbsite.vercel.app/',
      githubUrl: 'https://github.com/james-tiger/silver-wbsite'
    },
    {
      id: 2,
      title: 'Sidi Burger',
      category: 'TypeScript / Vercel',
      description: 'A stylish restaurant menu website for Sidi Burger.',
      longDescription: 'A visually engaging menu website for Sidi Burger, built with TypeScript and deployed on Vercel. Features a modern UI and easy navigation for customers to explore the menu.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      tech: ['TypeScript', 'Vercel'],
      results: [],
      liveUrl: 'https://sidi-burger.vercel.app/',
      githubUrl: 'https://github.com/james-tiger/SidiBurger'
    },
    {
      id: 3,
      title: 'Rescobar',
      category: 'Python / Flask',
      description: 'A creative gang-themed website built with Flask.',
      longDescription: 'Rescobar is a unique, gang-themed web app developed using Python Flask and hosted on PythonAnywhere. It features a bold design and dynamic content presentation.',
      image: 'https://e.top4top.io/p_3467agdm51.png', // Custom Rescobar image
      tech: ['Python', 'Flask', 'PythonAnywhere'],
      results: [],
      liveUrl: 'https://rescobar.pythonanywhere.com/',
      githubUrl: 'https://github.com/james-tiger/Rescobar'
    },
    {
      id: 4,
      title: 'JAMES STORE',
      category: 'HTML / GitHub Pages',
      description: 'A modern showcase site for bots and digital products.',
      longDescription: 'JAMES STORE is a clean, modern website for displaying bots and digital products. Built with HTML and hosted on GitHub Pages, it offers a simple and effective user experience.',
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8959325/og_image/optimized/how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png', // Custom Discord bot image
      tech: ['HTML', 'GitHub Pages'],
      results: [],
      liveUrl: 'https://james-tiger.github.io/JAMES-STORE/',
      githubUrl: 'https://github.com/james-tiger/JAMES-STORE'
    },
    {
      id: 5,
      title: 'AMES Local Brand',
      category: 'Python / Flask',
      description: 'A trendy e-commerce site for local fashion brands.',
      longDescription: 'AMES is a modern e-commerce platform for local clothing and fashion brands. Built with Python Flask and hosted on PythonAnywhere, it features a stylish design and smooth shopping experience.',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Flask', 'PythonAnywhere'],
      results: [],
      liveUrl: 'https://ames.pythonanywhere.com/',
      githubUrl: 'https://github.com/james-tiger/AMES'
    },
    {
      id: 6,
      title: 'PDF to JSON Converter',
      category: 'JavaScript / HTML',
      description: 'A simple tool to convert PDF files to JSON format.',
      longDescription: 'A lightweight web application that allows users to upload PDF files and convert them into JSON format. Built with JavaScript and HTML, it provides a straightforward interface for quick conversions.',
      image: 'https://scandocflow.com/wp-content/uploads/2024/02/pdf-to-json-1-e1707136925547.png',
      tech: ['HTML', 'JavaScript', 'CSS'],
      results: [],
      liveUrl: 'https://james-tiger.github.io/pdf-to-json-converter/',
      githubUrl: 'https://github.com/james-tiger/AMES'
    },    
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card p-6 hover:glow-border transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-slate/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-neon-accent font-medium">View Details</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-platinum mb-2">{project.title}</h3>
                    <p className="text-neon-accent text-sm font-medium">{project.category}</p>
                  </div>

                  <p className="text-platinum/80 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neon-accent/20 text-neon-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-platinum/20 text-platinum text-xs rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button className="flex items-center gap-2 text-neon-accent hover:text-gold transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span className="text-sm">View Live</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-platinum mb-2">{selectedProject.title}</h3>
                  <p className="text-neon-accent font-medium">{selectedProject.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-platinum hover:text-neon-accent transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-6">
                <p className="text-platinum/90 leading-relaxed">{selectedProject.longDescription}</p>

                <div>
                  <h4 className="text-xl font-semibold text-gradient mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-neon-accent/20 text-neon-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gradient mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-3 text-platinum/90">
                        <div className="w-2 h-2 bg-neon-accent rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-6">
                  <a
                    href={selectedProject.liveUrl}
                    className="btn-primary flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    View Live Project
                  </a>
                  <a
                    href="https://www.dropbox.com/scl/fi/xx0gx3r6ybse3y9avhi0t/cv.pdf?rlkey=aczl47jyzoxr5w8yeopecmhti&st=x7dgwm8v&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                    download
                  >
                    <span className="text-sm">Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
