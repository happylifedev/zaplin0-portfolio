import { Mail, Github, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Gmail',
      value: 'your.email@gmail.com',
      href: 'mailto:your.email@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      value: 'username#1234',
      href: 'https://discord.com',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@yourusername',
      href: 'https://t.me/yourusername',
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Get In Touch
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Let's discuss your next blockchain or AI project
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:scale-105 hover:glow-effect animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground break-all">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="glow-effect group">
            Send a Message
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
