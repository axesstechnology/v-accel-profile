import React, { useEffect, useRef } from 'react';
import { Code, Database, Bot, Cloud, Network } from 'lucide-react';
import Section from '../layouts/Section';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('opacity-100');
  //           entry.target.classList.remove('translate-y-10');
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (servicesRef.current) {
  //     const elements = servicesRef.current.querySelectorAll('.animate-on-scroll');
  //     elements.forEach((el) => observer.observe(el));
  //   }

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add(
              'opacity-100',
              'translate-y-0',
              'scale-100',
              'float-on-scroll'
            );
            el.classList.remove(
              'opacity-0',
              'translate-y-10',
              'scale-95'
            );
          }
        });
      },
      { threshold: 0.1 }
    );
  
    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
  
    return () => observer.disconnect();
  }, []);
  
  

  const services = [
    {
      icon: <Code className="h-10 w-10 text-accent" />,
      title: 'Custom Software Development',
      description: 'Rapid MVP Prototyping, Web and Mobile Apps, API Integrations & Microservices, Cloud-native Development',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['Rapid Prototyping', 'Web Applications', 'Mobile Apps', 'API Integration']
    },
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: 'SaaS Product Development',
      description: 'MVP to Enterprise SaaS Rollout, SSO & Payment Integrations, Built-in Analytics, AWS/GCP Cloud-Native Architecture',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['Multi-tenant Architecture', 'Payment Integration', 'Analytics Dashboard', 'Cloud Infrastructure']
    },
    {
      icon: <Bot className="h-10 w-10 text-accent" />,
      title: 'AI & ML Engineering',
      description: 'Custom AI Agents, Predictive Analytics, LLM Fine-tuning, Multimodal AI Solutions',
      image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['Custom AI Models', 'Predictive Analytics', 'NLP Solutions', 'Computer Vision']
    },
    {
      icon: <Cloud className="h-10 w-10 text-accent" />,
      title: 'DevOps, Cloud & SRE',
      description: 'End-to-End CI/CD, Kubernetes Orchestration, Multi-Region Cloud Scaling, AWS/Azure/GCP Expertise',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['CI/CD Pipeline', 'Cloud Migration', 'Infrastructure as Code', 'Monitoring & Alerts']
    }
  ];

  const microservicesService = {
    icon: <Network className="h-10 w-10 text-accent" />,
    title: 'Microservices Architecture',
    description: 'Event-Driven Systems, API Gateway & Service Mesh, Secure Deployments, Monolith Migration',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Service Mesh', 'API Gateway', 'Event-Driven', 'Secure Deployment'],
    roadmap: [
      {
        title: 'Service Decomposition',
        description: 'Breaking monoliths into microservices',
        icon: '🔄'
      },
      {
        title: 'API Gateway Integration',
        description: 'Unified access and security layer',
        icon: '🔐'
      },
      {
        title: 'Service Mesh Implementation',
        description: 'Robust service communication',
        icon: '🌐'
      }
    ]
  };

  return (
    <Section 
      id="services" 
      className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50" 
      ref={servicesRef}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold text-primary-700 mb-6">
            Our Services
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-primary-600">
            Comprehensive solutions tailored to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Main services grid - 4 columns */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group h-full"
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary-100 h-full flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="transform scale-150 text-white">{service.icon}</div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-primary-700 mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 mb-4 flex-grow">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center text-sm text-primary-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Microservices service with roadmap - 1 column */}
          <div className="lg:col-span-1">
            <div
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group h-full"
              style={{ transitionDelay: '500ms' }}
            >
              <div className="bg-white rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary-100 h-full">
                <div className="relative h-48">
                  <img
                    src={microservicesService.image}
                    alt={microservicesService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform scale-150 text-white gap-6">{microservicesService.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-3 group-hover:text-accent transition-colors ">
                    {microservicesService.title}
                  </h3>
                  <p className="text-primary-600 mb-6">{microservicesService.description}</p>
                  
                  {/* Vertical Roadmap */}
                  <div className="relative">
                    {microservicesService.roadmap.map((step, index) => (
                      <div key={index} className="relative pl-10 pb-8 last:pb-0">
                        {/* Vertical line */}
                        {index < microservicesService.roadmap.length - 1 && (
                          <div className="absolute left-[15px] top-[30px] bottom-0 w-0.5 bg-accent/20"></div>
                        )}
                        
                        {/* Step circle */}
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-50 border-2 border-accent flex items-center justify-center">
                          <span className="text-lg">{step.icon}</span>
                        </div>
                        
                        {/* Content */}
                        <div>
                          <h4 className="text-primary-700 font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-primary-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-6">
                    {microservicesService.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm text-primary-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full mr-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Services;