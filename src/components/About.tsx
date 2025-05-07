import React, { useEffect, useRef } from 'react';
import { Brain, Paintbrush, Code, FlaskRound as Flask, Rocket, Zap } from 'lucide-react';
import Section from '../layouts/Section';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const dnaStrands = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Decode',
      description: 'We deep-dive into your business logic, users, and industry'
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: 'Design',
      description: 'Every line, button, and flow is tailor-made, pixel-perfect'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Develop',
      description: 'Clean, scalable, and efficient code that aligns with your DNA'
    },
    {
      icon: <Flask className="h-6 w-6" />,
      title: 'Distill',
      description: 'Testing, refining, and optimizing until it\'s frictionless'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Deploy',
      description: 'Fast, safe, and scalable launches with zero stress'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Dynamic',
      description: 'Evolve as you grow — continuous support and innovation'
    }
  ];

  return (
    <Section id="about" className="bg-white py-20" ref={aboutRef}>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold text-[#1f4051] mb-6">
            Our Development DNA
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-600">
            Every line of code we write carries our unique genetic markers of quality, innovation, and precision.
          </p>
        </div>

        {/* DNA Double Helix Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary-500 to-accent transform -translate-x-1/2"></div>

          {dnaStrands.map((strand, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative mb-24 ${
                index % 2 === 0 ? 'text-right' : 'text-left'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div 
                className={`inline-block ${
                  index % 2 === 0 ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'
                }`}
                style={{
                  [index % 2 === 0 ? 'marginRight' : 'marginLeft']: '50%',
                }}
              >
                <div className={`bg-white rounded-xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300 relative ${
                  index % 2 === 0 ? 'hover:-translate-x-2' : 'hover:translate-x-2'
                }`}>
                  {/* DNA Connection Lines */}
                  <div className={`absolute top-1/2 ${
                    index % 2 === 0 ? 'left-full' : 'right-full'
                  } w-8 md:w-16 h-0.5 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-accent to-primary-500`}></div>

                  {/* DNA Node */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? 'left-full ml-7 md:ml-15' : 'right-full mr-7 md:mr-15'
                  } w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg`}>
                    <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping"></div>
                  </div>

                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                      <div className="p-3 bg-primary-50 rounded-lg text-accent">
                        {strand.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-700">{strand.title}</h3>
                    </div>
                  </div>
                  <p className={`text-gray-600 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {strand.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 mt-16 p-8 bg-primary-50 rounded-xl border border-primary-100">
          <h3 className="text-2xl font-semibold text-[#1f4051] mb-4 text-center">Our Mission</h3>
          <p className="text-primary-600 text-center max-w-3xl mx-auto">
            "Empowering businesses through innovative AI solutions - We don't just write code, we architect digital transformations that redefine possibilities."
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;