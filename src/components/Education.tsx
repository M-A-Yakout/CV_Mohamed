import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Ural Federal University",
      degree: "Bachelor of Software Engineering",
      period: "2024 - 2027",
      description: "Magna Cum Laude, Focus on Full-Stack Development",
      logo: "https://www.qschina.cn/sites/default/files/profiles/logos/ural-federal-university-urfu_592560cf2aeae70239af505a_large.jpg"
    }
  ];

  const certifications = [
    {
      name: "Introduction",
      issuer: "Data Science and Machine Learning",
      date: "2024",
      credentialId: "cert-2585272",
      link: "https://stepik.org/cert/2585272?lang=en",
    },
    {
      name: "Formation of the future Central Committee",
      issuer: "Modern cosmonautics",
      date: "2024",
      credentialId: "cert-2427657",
      link: "https://stepik.org/cert/2427657?lang=en"
    },
    {
      name: "Far Eastern Federal University",
      issuer: "Python in examples and tasks",
      date: "2024",
      credentialId: "cert-2427361",
      link: "https://stepik.org/cert/2427361?lang=en"
    },
    {
      name: "Math and Python Workshop",
      issuer: "Solving Problems",
      date: "2024",
      credentialId: "cert-2424926",
      link: "https://stepik.org/cert/2424926?lang=en"
    },
    // Additional certifications can be added here
    {
      name: "Fundamentals of Networking",
      issuer: "Data Transmission and Switching in Computer Networks",
      date: "2025",
      credentialId: "D-Linkk",
      link: "https://www.dropbox.com/scl/fi/smt65hqfyyv7qqbjfpppt/NB1_-1.pdf?rlkey=91n1ylw6ioe2ne7xpgbx3bwo0&st=g03v7dhg&dl=0"
    },
    {
      name: "Programming Basics",
      issuer: "C# Programming Basics",
      date: "2024",
      credentialId: "436d377a-b2dd-4979-921c-7834d1d67253",
      link: "https://ulearn.me/Certificate/436d377a-b2dd-4979-921c-7834d1d67253/"
    },
    {
      name: "Fundamentals of project activities",
      issuer: "Project Management",
      date: "2024",
      credentialId: "02OPD-0123-4-330",
      link: "https://open.spbstu.ru/certificate/02OPD-0123-4-330.pdf"
    },    
    
    {
      name: "Information technology and services",
      issuer: "Ural Federal University",
      date: "2024",
      credentialId: "H6yzFEirf2eP2qwP_f81569cb86",
      link: "https://storage.yandexcloud.net/plp-certs-306e0eba5a/certificate-files/urfu/ITS/fall_2023/H6yzFEirf2eP2qwP_f81569cb86.pdf"
    },
    // Add more certifications as needed
    {
      name: "Soft Skills:Century Skills",
      issuer: "Ural Federal University",
      date: "2024",
      credentialId: "dStUvU8eZCyatzwH_5ed32b6ecab",
      link: "https://storage.yandexcloud.net/plp-certs-306e0eba5a/certificate-files/urfu/SoftSkills/fall_2024/dStUvU8eZCyatzwH_5ed32b6ecab.pdf"
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Education & Certifications
            </h2>
            <p className="text-xl text-platinum/80 max-w-3xl mx-auto">
              Academic background and professional certifications that shape my expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-neon-accent/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-neon-accent" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-platinum">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="glass-card group hover:glow-border transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/20">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-platinum mb-1">
                            {edu.degree}
                          </h4>
                          <div className="text-neon-accent font-medium mb-2">
                            {edu.institution}
                          </div>
                          <div className="text-sm text-platinum/60 mb-3">
                            {edu.period}
                          </div>
                          <p className="text-platinum/80 text-sm">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                  <Award className="text-gold" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-platinum">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card group hover:glow-border transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-platinum mb-1">
                            {cert.name}
                          </h4>
                          <div className="text-gold font-medium mb-1">
                            {cert.issuer}
                          </div>
                          <div className="text-sm text-platinum/60 mb-2">
                            Issued: {cert.date}
                          </div>
                          <div className="text-xs text-platinum/50">
                            ID: {cert.credentialId}
                          </div>
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-glass border border-white/20 rounded-lg flex items-center justify-center text-platinum/60 hover:text-neon-accent hover:border-neon-accent/50 transition-all duration-300"
                          title={`View certificate: ${cert.name}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-accent mb-2">1</div>
                <div className="text-platinum/60 text-sm">Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">9</div>
                <div className="text-platinum/60 text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-accent mb-2">3+</div>
                <div className="text-platinum/60 text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">100%</div>
                <div className="text-platinum/60 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
