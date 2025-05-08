import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Brain, Shield, Wand2, Scale, Repeat2, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const customFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "🧠 AI-Infused Logic",
      description: "We don't just build — we think with your software."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "🛡️ Zero Template Policy",
      description: "Every module is crafted ground-up, no generic kits."
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "🪄 Experience-Driven Design",
      description: "Built around user behavior, not developer convenience."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "🔄 Scalability Embedded",
      description: "Your MVP today can be your platform tomorrow."
    }
  ];

  return (
    <div
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto mt-16">
          <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            What Makes Our Code
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              "Custom"?
            </span>
          </h1>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {customFeatures.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4 text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
  {customFeatures.map((feature, index) => (
    <div
      key={index}
      className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 h-64 flex flex-col">
        <div className="flex items-center justify-center mb-4 text-accent flex-shrink-0">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 flex-shrink-0">{feature.title}</h3>
        <p className="text-gray-300 flex-grow">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-primary-800 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Custom Journey
            </a>
            {/* <a
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our DNA
            </a> */}
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 text-accent hover:text-accent-light transition-colors" />
        </a>
      </div> */}
    </div>
  );
};

export default Hero;