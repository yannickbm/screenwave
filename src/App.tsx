import React from 'react';
import { Waves, Monitor, Zap, Users, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.2),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Waves className="w-20 h-20 mx-auto mb-8 text-blue-400" />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Screenwave
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transforming digital experiences through innovative screen technology solutions
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Monitor className="w-10 h-10 text-blue-400" />}
              title="Advanced Display Solutions"
              description="Cutting-edge screen technology optimized for clarity and performance"
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-blue-400" />}
              title="Energy Efficient"
              description="Eco-friendly solutions that reduce power consumption"
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-blue-400" />}
              title="Expert Support"
              description="24/7 technical assistance from our experienced team"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
              title="Corporate Display Solutions"
              description="Enterprise-grade display systems for modern workplaces"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1600"
              title="Digital Signage Networks"
              description="Connected display networks for retail and advertising"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/50 to-transparent border border-blue-800/50 hover:border-blue-600/50 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-blue-100/80">{description}</p>
    </div>
  );
}

function ProjectCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100/80">{description}</p>
      </div>
    </div>
  );
}

export default App;