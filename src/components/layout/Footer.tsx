import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github }
];

const Footer = () => {
  return (
    <footer className="bg-surface/50 border-t border-white/5 pt-20 pb-8">
      <div className="grid-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <Logo />
            <p className="mt-6 mb-8 max-w-md">
              Crafting digital experiences that transcend boundaries through innovative design and development solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full glassmorphism text-text-secondary hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-text-secondary hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-text-secondary hover:text-white transition-colors">Team</a></li>
              <li><a href="#projects" className="text-text-secondary hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-text-secondary">vvastcore10@gmail.com</li>
              <li className="text-text-secondary">+91-8928090554</li>
              <li className="text-text-secondary">Pune, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nova Designs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</a>
            <a href="/tnc" className="text-text-secondary hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;