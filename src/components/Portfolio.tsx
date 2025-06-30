import { useState } from 'react';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'CV Website',
      category: 'React / Vercel',
      type: 'frontend',
      description: 'A modern, minimal CV website to showcase your professional profile.',
      longDescription: 'A sleek and responsive CV website built with React and hosted on Vercel. Designed for professionals to present their experience, skills, and projects in a clean, modern format with smooth animations and interactive elements.',
      image: 'https://h.top4top.io/p_3467ut8ln1.png',
      tech: ['React', 'Vercel', 'Tailwind CSS', 'TypeScript'],
      results: ['100% responsive design', 'Fast loading times', 'SEO optimized'],
      liveUrl: 'https://silver-wbsite.vercel.app/',
      githubUrl: 'https://github.com/james-tiger/silver-wbsite',
      featured: true,
      rating: 5
    },
    {
      id: 2,
      title: 'Sidi Burger',
      category: 'TypeScript / Vercel',
      type: 'frontend',
      description: 'A stylish restaurant menu website for Sidi Burger.',
      longDescription: 'A visually engaging menu website for Sidi Burger, built with TypeScript and deployed on Vercel. Features a modern UI, smooth animations, and easy navigation for customers to explore the menu with an appetizing design.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      tech: ['TypeScript', 'Vercel', 'CSS3', 'JavaScript'],
      results: ['Increased customer engagement', 'Mobile-first design', 'Fast performance'],
      liveUrl: 'https://sidi-burger.vercel.app/',
      githubUrl: 'https://github.com/james-tiger/SidiBurger',
      featured: false,
      rating: 4
    },
    {
      id: 3,
      title: 'Rescobar',
      category: 'Python / Flask',
      type: 'fullstack',
      description: 'A creative gang-themed website built with Flask.',
      longDescription: 'Rescobar is a unique, gang-themed web application developed using Python Flask and hosted on PythonAnywhere. It features a bold design, dynamic content presentation, and server-side rendering for optimal performance.',
      image: 'https://e.top4top.io/p_3467agdm51.png',
      tech: ['Python', 'Flask', 'PythonAnywhere', 'HTML/CSS'],
      results: ['Dynamic content management', 'Server-side rendering', 'Secure authentication'],
      liveUrl: 'https://rescobar.pythonanywhere.com/',
      githubUrl: 'https://github.com/james-tiger/Rescobar',
      featured: true,
      rating: 5
    },
    {
      id: 4,
      title: 'JAMES STORE',
      category: 'HTML / GitHub Pages',
      type: 'frontend',
      description: 'A modern showcase site for bots and digital products.',
      longDescription: 'JAMES STORE is a clean, modern website for displaying bots and digital products. Built with HTML and hosted on GitHub Pages, it offers a simple and effective user experience with product showcases and detailed descriptions.',
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8959325/og_image/optimized/how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png',
      tech: ['HTML', 'GitHub Pages', 'CSS3', 'JavaScript'],
      results: ['Clean product showcase', 'Easy navigation', 'Fast loading'],
      liveUrl: 'https://james-tiger.github.io/JAMES-STORE/',
      githubUrl: 'https://github.com/james-tiger/JAMES-STORE',
      featured: false,
      rating: 4
    },
    {
      id: 5,
      title: 'SWAG Local Brand',
      category: 'Python / Flask',
      type: 'fullstack',
      description: 'A trendy e-commerce site for local fashion brands.',
      longDescription: 'AMES is a modern e-commerce platform for local clothing and fashion brands. Built with Python Flask and hosted on PythonAnywhere, it features a stylish design, shopping cart functionality, and smooth user experience for fashion enthusiasts.',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Flask', 'PythonAnywhere', 'SQLite'],
      results: ['E-commerce functionality', 'Payment integration', 'Inventory management'],
      liveUrl: 'https://ames.pythonanywhere.com/',
      githubUrl: 'https://github.com/james-tiger/AMES',
      featured: true,
      rating: 5
    },
    {
      id: 6,
      title: 'PDF to JSON Converter',
      category: 'JavaScript / HTML',
      type: 'tool',
      description: 'A simple tool to convert PDF files to JSON format.',
      longDescription: 'A lightweight web application that allows users to upload PDF files and convert them into JSON format. Built with JavaScript and HTML, it provides a straightforward interface for quick conversions with client-side processing.',
      image: 'https://scandocflow.com/wp-content/uploads/2024/02/pdf-to-json-1-e1707136925547.png',
      tech: ['HTML', 'JavaScript', 'CSS', 'PDF.js'],
      results: ['Client-side processing', 'No data upload required', 'Fast conversion'],
      liveUrl: 'https://james-tiger.github.io/pdf-to-json-converter/',
      githubUrl: 'https://github.com/james-tiger/AMES',
      featured: false,
      rating: 4
    },    
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'tool', label: 'Tools' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-24 bg-dark-charcoal/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-neon-accent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-platinum/80 max-w-3xl mx-auto mb-8">
              A showcase of my latest work, featuring modern web applications and creative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-accent to-gold mx-auto"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <button
                key={filterItem.key}
                onClick={() => setFilter(filterItem.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === filterItem.key
                    ? 'bg-neon-accent text-dark-slate shadow-lg'
                    : 'glass-card text-platinum hover:glow-border hover:text-neon-accent'
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </div>

          {/* Featured Projects Section */}
          {filter === 'all' && (
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-bold text-center text-gradient mb-8">
                ⭐ Featured Projects
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <div
                    key={`featured-${project.id}`}
                    className="glass-card p-6 hover:glow-border transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Featured badge */}
                    <div className="absolute top-4 right-4 bg-gold text-dark-slate px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={12} />
                      Featured
                    </div>

                    <div className="relative overflow-hidden rounded-lg mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="text-neon-accent" size={32} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-platinum mb-2">{project.title}</h3>
                        <p className="text-neon-accent text-sm font-medium">{project.category}</p>
                      </div>

                      <p className="text-platinum/80 text-sm leading-relaxed">{project.description}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < project.rating ? 'text-gold fill-gold' : 'text-platinum/30'}
                          />
                        ))}
                      </div>

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
                          <Eye size={16} />
                          <span className="text-sm">View Details</span>
                        </button>
                        <div className="flex gap-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-neon-accent/20 rounded-lg flex items-center justify-center text-neon-accent hover:bg-neon-accent hover:text-dark-slate transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card p-6 hover:glow-border transition-all duration-300 cursor-pointer group relative"
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

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-platinum mb-2">{selectedProject.title}</h3>
                  <p className="text-neon-accent font-medium">{selectedProject.category}</p>
                  {selectedProject.featured && (
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="text-gold fill-gold" size={16} />
                      <span className="text-gold text-sm font-medium">Featured Project</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-platinum hover:text-neon-accent transition-colors duration-300 text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gradient mb-3">About This Project</h4>
                    <p className="text-platinum/90 leading-relaxed">{selectedProject.longDescription}</p>
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
                </div>

                <div className="space-y-6">
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

                  <div className="flex gap-4 pt-6">
                    <a
                      href={selectedProject.liveUrl}
                      className="btn-primary flex items-center gap-2 flex-1 justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      View Live Project
                    </a>
                  </div>
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