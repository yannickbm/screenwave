import React from 'react';
import { Github, Linkedin, Twitter, Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Screenwave</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming digital experiences through innovative screen technology solutions.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <FooterLinks
              links={[
                { href: '#', text: 'Display Solutions' },
                { href: '#', text: 'Digital Signage' },
                { href: '#', text: 'Touch Screens' },
                { href: '#', text: 'LED Walls' },
              ]}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <FooterLinks
              links={[
                { href: '#', text: 'About Us' },
                { href: '#', text: 'Careers' },
                { href: '#', text: 'News' },
                { href: '#', text: 'Contact' },
              ]}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <FooterLinks
              links={[
                { href: '#', text: 'Documentation' },
                { href: '#', text: 'Support' },
                { href: '#', text: 'Blog' },
                { href: '#', text: 'Partners' },
              ]}
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Screenwave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLinks({ links }: { links: Array<{ href: string; text: string }> }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}