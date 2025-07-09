import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      title: 'Rapid Talk Sphere',
      category: 'Real-Time Chat / Supabase',
      description: 'A cutting-edge, real-time chat platform with instant messaging, authentication, and a sleek modern UI.',
      longDescription: 'Rapid Talk Sphere is a modern, real-time chat platform built with React, TypeScript, and Supabase. It offers instant messaging, secure authentication, user profiles, online status, typing indicators, and a beautiful UI powered by shadcn/ui, Radix UI, and Tailwind CSS. The app leverages TanStack Query for client-side caching and React Hook Form for robust form management, delivering a seamless and engaging chat experience.',
      image: 'https://g.top4top.io/p_3472am1fa1.png',
      tech: ['React', 'TypeScript', 'Supabase', 'shadcn/ui', 'Radix UI', 'Tailwind CSS', 'TanStack Query', 'React Hook Form'],
      results: [
        'Real-time messaging with Supabase subscriptions',
        'User authentication and profiles',
        'Online status and typing indicators',
        'Modern, responsive UI',
        'Client-side caching and robust forms'
      ],
      liveUrl: 'https://live-chat-indol.vercel.app/',
      githubUrl: 'https://github.com/james-tiger/Live_Chat' 
    },
    {
      id: 1,
      title: 'CV Website',
      category: 'React / Vercel',
      description: 'A modern, minimal CV website to showcase your professional profile.',
      longDescription: 'A sleek and responsive CV website built with React and hosted on Vercel. Designed for professionals to present their experience, skills, and projects in a clean, modern format.',
      image: 'https://h.top4top.io/p_3467ut8ln1.png',
      tech: ['React', 'Vercel'],
      results: [
        'Fully responsive design across all devices',
        'Modern and clean professional layout',
        'Fast loading with optimized performance',
        'Easy navigation and user-friendly interface',
        'Professional portfolio presentation'
      ],
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
      results: [
        'Interactive menu with high-quality food imagery',
        'Mobile-first responsive design',
        'Fast loading and smooth navigation',
        'Modern restaurant branding and styling',
        'User-friendly menu browsing experience'
      ],
      liveUrl: 'https://sidi-burger.vercel.app/',
      githubUrl: 'https://github.com/james-tiger/SidiBurger'
    },
    {
      id: 3,
      title: 'Rescobar',
      category: 'Python / Flask',
      description: 'A creative gang-themed website built with Flask.',
      longDescription: 'Rescobar is a unique, gang-themed web app developed using Python Flask and hosted on PythonAnywhere. It features a bold design and dynamic content presentation.',
      image: 'https://e.top4top.io/p_3467agdm51.png',
      tech: ['Python', 'Flask', 'PythonAnywhere'],
      results: [
        'Dynamic content rendering with Flask templates',
        'Bold and engaging thematic design',
        'Server-side routing and logic implementation',
        'Custom Python backend functionality',
        'Unique creative concept execution'
      ],
      liveUrl: 'https://rescobar.pythonanywhere.com/',
      githubUrl: 'https://github.com/james-tiger/Rescobar'
    },
    {
      id: 4,
      title: 'JAMES STORE',
      category: 'HTML / GitHub Pages',
      description: 'A modern showcase site for bots and digital products.',
      longDescription: 'JAMES STORE is a clean, modern website for displaying bots and digital products. Built with HTML and hosted on GitHub Pages, it offers a simple and effective user experience.',
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8959325/og_image/optimized/how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png',
      tech: ['HTML', 'GitHub Pages'],
      results: [
        'Clean product showcase layout',
        'GitHub Pages hosting integration',
        'Lightweight and fast loading',
        'Simple and intuitive navigation',
        'Effective digital product presentation'
      ],
      liveUrl: 'https://m-a-yakout.github.io/JAMES-STORE/',
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
      results: [
        'Modern e-commerce functionality',
        'Fashion-focused product display',
        'Flask-powered backend system',
        'Local brand promotion platform',
        'Stylish and trendy user interface'
      ],
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
      results: [
        'File upload and processing functionality',
        'PDF to JSON conversion capability',
        'Client-side processing for privacy',
        'Simple and intuitive user interface',
        'Quick and efficient file conversion'
      ],
      liveUrl: 'https://m-a-yakout.github.io/pdf-to-json-converter/',
      githubUrl: 'https://github.com/james-tiger/AMES'
    },    
    {
      id: 7,
      title: 'Deep Learning System for Speech Disorder Classification using MFCC and LSTM',
      category: 'Machine Learning / Python',
      description: 'Advanced speech disorder classification system using MFCC feature extraction and LSTM neural networks for Russian voice datasets.',
      longDescription: 'A comprehensive deep learning system designed for speech disorder classification using MFCC (Mel-Frequency Cepstral Coefficients) feature extraction and LSTM neural networks. The system analyzes Russian voice datasets to classify speech into four categories: normal speech, stuttering, dysarthria, and aphasia. Built with Google Colab integration and Gradio web interface for real-time testing.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'TensorFlow', 'LSTM', 'MFCC', 'Gradio', 'Google Colab', 'KaggleHub'],
      results: [
        'MFCC feature extraction for audio analysis',
        'LSTM neural networks for sequence classification',
        'Support for multiple audio formats (WAV, MP3, FLAC, M4A, OGG)',
        'Comprehensive model evaluation with accuracy metrics',
        'Gradio web interface for real-time testing',
        'Automatic dataset download via KaggleHub'
      ],
      liveUrl: 'https://github.com/james-tiger/Mel-Frequency-Cepstral-Coefficients-MFCCs-Long-Short-Term-Memory-LSTM-',
      githubUrl: 'https://github.com/james-tiger/Mel-Frequency-Cepstral-Coefficients-MFCCs-Long-Short-Term-Memory-LSTM-'
    },
    {
      id: 8,
      title: 'Healthcare Management & Monitoring Platform with AI Analytics',
      category: 'Full Stack / Healthcare',
      description: 'HIPAA-compliant healthcare platform with AI-powered clinical decision support and predictive analytics.',
      longDescription: 'An end-to-end healthcare management platform featuring patient registration, medical records, appointment scheduling, and AI-powered clinical decision support. Built with HIPAA compliance, AES-256 encryption, and role-based access control. Includes interactive dashboards for doctors and patients with real-time notifications and FHIR/HL7 integration.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'FHIR', 'HL7'],
      results: [
        'End-to-end health data management system',
        'AI-powered clinical decision support',
        'HIPAA-compliant with AES-256 encryption',
        'Role-based access control for security',
        'Interactive dashboards with real-time notifications',
        'Integration with FHIR and HL7 standards'
      ],
      liveUrl: 'https://github.com/james-tiger/project-health-gz',
      githubUrl: 'https://github.com/james-tiger/project-health-gz'
    },
    {
      id: 9,
      title: 'Discord Bot for User Interaction Tracking',
      category: 'Discord Bot / Node.js',
      description: 'Multifunctional Discord bot with Arabic language support and comprehensive user engagement analytics.',
      longDescription: 'A sophisticated Discord bot designed for user interaction tracking and engagement analytics. Features Arabic language support, tracks user interactions, image uploads, and session durations. Includes admin tools for data management and moderation with multi-role permissions and secure authentication flow.',
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80',
      tech: ['Node.js', 'Discord.js', 'JavaScript', 'SQLite', 'Arabic Language Support'],
      results: [
        'Arabic language support for server management',
        'User interaction and session tracking',
        'Admin tools for data management',
        'Fast response times under 100ms',
        'Secure authentication and data persistence',
        'Multi-role permissions system'
      ],
      liveUrl: 'https://github.com/james-tiger/bots',
      githubUrl: 'https://github.com/james-tiger/bots'
    },
    {
      id: 10,
      title: 'Modern API Backend for Healthcare Systems',
      category: 'Backend API / Node.js',
      description: 'RESTful API with GraphQL support, featuring JWT authentication, role-based access control, and CI/CD pipelines.',
      longDescription: 'A modern, secure API backend designed for healthcare systems with RESTful and GraphQL support. Features JWT + OAuth2 authentication, AES-256 encryption, and supports both PostgreSQL and MongoDB. Includes integrated CI/CD pipelines, audit logging, and predictive analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tech: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB', 'JWT', 'OAuth2', 'Docker', 'GitHub Actions'],
      results: [
        'RESTful API with GraphQL support',
        'JWT + OAuth2 secure authentication',
        'Database flexibility with PostgreSQL and MongoDB',
        'Integrated CI/CD pipelines via GitHub Actions',
        'Dockerized services for easy deployment',
        'Audit logging and predictive analytics'
      ],
      liveUrl: 'https://github.com/james-tiger/Project-python-API',
      githubUrl: 'https://github.com/james-tiger/Project-python-API'
    },
    {
      id: 11,
      title: 'C# Perfect Numbers Calculator',
      category: 'C# / Algorithm',
      description: 'Console application for finding and analyzing perfect numbers using three different algorithms with performance comparison.',
      longDescription: 'A comprehensive C# console application that implements three different algorithms for finding perfect numbers: brute force, optimized, and Euclid-Euler theorem. Features performance comparison between approaches, interactive menu-driven UI, and includes unit tests for correctness verification.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
      tech: ['C#', '.NET', 'Console Application', 'Unit Testing', 'Algorithm Design'],
      results: [
        'Three algorithm implementations for perfect numbers',
        'Performance comparison between approaches',
        'Interactive menu-driven console UI',
        'Unit tests for correctness verification',
        'Object-oriented design and clean architecture',
        'Mathematical background and performance benchmarks'
      ],
      liveUrl: 'https://github.com/james-tiger/PerfectNumbers_CHARP',
      githubUrl: 'https://github.com/james-tiger/PerfectNumbers_CHARP'
    },
    {
      id: 12,
      title: 'TypeScript QR Code Generator',
      category: 'TypeScript / Utility',
      description: 'Simple yet powerful QR code generator built with TypeScript for type safety and better developer experience.',
      longDescription: 'A clean and efficient QR code generator implemented in TypeScript, ensuring type safety and providing an excellent developer experience. The tool can be easily extended to support dynamic content encoding and is suitable for integration into web applications or standalone utilities.',
      image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?auto=format&fit=crop&w=800&q=80',
      tech: ['TypeScript', 'QR Code', 'JavaScript', 'Web Development'],
      results: [
        'Type-safe QR code generation',
        'Clean TypeScript implementation',
        'Extensible for dynamic content encoding',
        'Easy integration into web applications',
        'Modular structure for maintainability',
        'Suitable for standalone utilities'
      ],
      liveUrl: 'https://github.com/james-tiger/TypeScript-QrCode',
      githubUrl: 'https://github.com/james-tiger/TypeScript-QrCode'
    },
    {
      id: 13,
      title: 'E-commerce Storefront',
      category: 'Full Stack / E-commerce',
      description: 'Complete e-commerce website with secure authentication, product listings, and payment gateway integration.',
      longDescription: 'A full-featured e-commerce storefront built with modern web technologies. Features secure user authentication, comprehensive product listings, responsive design for mobile and desktop, seamless payment gateway integration, and secure checkout process with encryption and audit logging.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      tech: ['Node.js', 'React', 'Redux', 'Payment Gateway', 'MongoDB', 'Express'],
      results: [
        'Full-stack store with secure authentication',
        'Responsive UI for mobile and desktop',
        'Seamless payment gateway integration',
        'Secure checkout with encryption',
        'Order tracking and management system',
        'Modular codebase for easy extension'
      ],
      liveUrl: 'https://github.com/james-tiger/Store_website',
      githubUrl: 'https://github.com/james-tiger/Store_website'
    },
    {
      id: 14,
      title: 'Python Website Framework',
      category: 'Python / Web Framework',
      description: 'Rapid development framework built with Flask/Django for blogs, portfolios, and small business websites.',
      longDescription: 'A flexible Python-based website framework designed for rapid development of blogs, portfolios, and small business sites. Built using Flask or Django with clean, customizable templates, responsive design, easy database integration, and an admin dashboard for content management.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Flask', 'Django', 'SQLite', 'PostgreSQL', 'HTML/CSS'],
      results: [
        'Flask/Django framework for rapid development',
        'Clean, customizable responsive templates',
        'Easy database integration (SQLite, PostgreSQL)',
        'Admin dashboard for content management',
        'Deployable on Heroku, Vercel, or custom servers',
        'Great starting point for full-stack development'
      ],
      liveUrl: 'https://github.com/james-tiger/Project_website_python',
      githubUrl: 'https://github.com/james-tiger/Project_website_python'
    }
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
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-neon-accent hover:text-gold transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-platinum hover:text-neon-accent transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/></svg>
                      <span className="text-sm">GitHub</span>
                    </a>
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
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/></svg>
                    <span className="text-sm">GitHub</span>
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
