import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Open appropriate email provider's compose window
    const email = formData.email.trim().toLowerCase();
    const recipient = 'mohamed.ashraf.y.s.m@gmail.com';
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);
    let composeUrl = '';
    if (email.endsWith('@gmail.com')) {
      composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    } else if (email.endsWith('@yahoo.com')) {
      composeUrl = `https://compose.mail.yahoo.com/?to=${recipient}&subj=${subject}&body=${body}`;
    } else if (email.endsWith('@outlook.com') || email.endsWith('@hotmail.com') || email.endsWith('@live.com')) {
      composeUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`;
    } else if (email.endsWith('@icloud.com') || email.endsWith('@me.com') || email.endsWith('@mac.com')) {
      composeUrl = `https://mail.icloud.com/?to=${recipient}&subject=${subject}&body=${body}`;
    }
    if (composeUrl) {
      window.open(composeUrl, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-dark-slate">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8 hover:glow-border transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold text-gradient mb-6">
                  Get In Touch
                </h3>
                
                <p className="text-platinum/90 text-lg leading-relaxed mb-8">
                  Ready to discuss your next project or explore opportunities? 
                  I'd love to hear from you. Let's create something amazing together.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-accent/20 rounded-xl flex items-center justify-center">
                      <Mail className="text-neon-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-platinum font-medium">Email</p>
                      <p className="text-platinum/80">mohamed.ashraf.y.s.m@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-accent/20 rounded-xl flex items-center justify-center">
                      <Phone className="text-neon-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-platinum font-medium">Phone</p>
                      <p className="text-platinum/80">+201554437855</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-accent/20 rounded-xl flex items-center justify-center">
                      <MapPin className="text-neon-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-platinum font-medium">Location</p>
                      <p className="text-platinum/80">Alexandria, Egypt</p>
                    </div>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <a
                    href="https://www.dropbox.com/scl/fi/hhiqd8ll61g81u72ia2bo/CV_M_A.pdf?rlkey=zu4g3iu1bgqt7km35jnvx4idf&st=1ewfgw8f&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 animate-glow"
                    download
                  >
                    <Download size={20} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 hover:glow-border transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-platinum font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-charcoal/50 border border-white/20 rounded-xl text-platinum placeholder-platinum/50 focus:border-neon-accent focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-platinum font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-charcoal/50 border border-white/20 rounded-xl text-platinum placeholder-platinum/50 focus:border-neon-accent focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-platinum font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-charcoal/50 border border-white/20 rounded-xl text-platinum placeholder-platinum/50 focus:border-neon-accent focus:outline-none transition-colors duration-300"
                    placeholder="Project inquiry / Collaboration opportunity"
                  />
                </div>

                <div>
                  <label className="block text-platinum font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-charcoal/50 border border-white/20 rounded-xl text-platinum placeholder-platinum/50 focus:border-neon-accent focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
