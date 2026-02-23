import { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import Plasma from '@/components/Plasma';

const Hero = () => {
  const [heroInView, setHeroInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setHeroInView(entries[0]?.isIntersecting ?? true);
      },
      { threshold: 0.05, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Plasma background – pointer-events-none so scroll never gets stuck */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Plasma
          color="#6366f1"
          speed={1}
          direction="forward"
          scale={1}
          opacity={0.9}
          mouseInteractive={true}
          paused={!heroInView}
        />
      </div>
      {/* Dark overlay – no backdrop-blur to keep scroll smooth */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" aria-hidden />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 text-center relative z-10 pointer-events-auto">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-44 h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden">
                <img
                  src="/Nitish-joshi-profile.jpeg"
                  alt="Nitish Joshi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Nitish</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Joshi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Backend Software Developer
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Backend Software Developer with 1+ years of experience contributing to Java-based RESTful systems and relational
            database-driven applications. Experienced in Spring Boot APIs, optimizing MySQL queries, and resolving production
            issues in real-world billing and workflow systems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <span>📧 nitishjoshi04@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱 +353 894 980 613</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍 Dublin, Ireland</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Learn More About Me
            <ArrowDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;