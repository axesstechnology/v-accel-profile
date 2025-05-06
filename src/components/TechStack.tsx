import React, { useEffect, useRef } from 'react';
import Section from '../layouts/Section';

const TechStack: React.FC = () => {
  const techStackRef = useRef<HTMLDivElement>(null);

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

    if (techStackRef.current) {
      const elements = techStackRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const techStacks = [
    {
      title: 'Custom Software Development',
      subtitle: 'Revolutionize Your Operations: Transform with Software Tailored to Your Needs.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'Frontend',
          items: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TailwindCSS', 'Material UI']
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Express.js', 'NestJS', 'Django', 'FastAPI', 'Spring Boot']
        },
        {
          name: 'Mobile Apps',
          items: ['Flutter', 'React Native', 'Kotlin', 'Swift']
        },
        {
          name: 'APIs',
          items: ['REST', 'GraphQL', 'gRPC', 'WebSocket']
        },
        {
          name: 'Database',
          items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch']
        },
        {
          name: 'Cloud',
          items: ['AWS', 'Azure', 'GCP', 'DigitalOcean']
        },
        {
          name: 'Authentication',
          items: ['JWT', 'OAuth2', 'OpenID Connect', 'Keycloak']
        },
        {
          name: 'Hosting',
          items: ['AWS', 'GCP', 'Azure', 'Own VPS', 'Vercel', 'Netlify', 'Heroku']
        }
      ]
    },
    {
      title: 'SaaS Product Development',
      subtitle: 'Build Scalable, Multi-tenant SaaS Solutions',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'Web Framework',
          items: ['Next.js', 'Nuxt.js', 'SvelteKit', 'Remix', 'Astro']
        },
        {
          name: 'Billing & Payments',
          items: ['Stripe', 'PayPal', 'Square', 'Paddle', 'LemonSqueezy']
        },
        {
          name: 'Authentication/SSO',
          items: ['Auth0', 'Firebase Auth', 'Keycloak', 'Okta', 'Cognito']
        },
        {
          name: 'Backend APIs',
          items: ['REST', 'GraphQL', 'tRPC', 'WebSocket', 'Server-Sent Events']
        },
        {
          name: 'Database',
          items: ['PostgreSQL', 'MongoDB Atlas', 'Supabase', 'PlanetScale']
        },
        {
          name: 'Multi-Tenancy',
          items: ['Row-Level Security', 'Schema-Based', 'Database-Based']
        },
        {
          name: 'Deployment/Hosting',
          items: ['AWS', 'GCP', 'Azure', 'Vercel', 'Railway']
        },
        {
          name: 'Storage & CDN',
          items: ['S3', 'Cloudflare R2', 'Cloudinary', 'Bunny CDN']
        }
      ]
    },
    {
      title: 'AI & ML Engineering',
      subtitle: 'Cutting-edge AI Solutions for Modern Businesses',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'LLMs & Generative AI',
          items: ['GPT-4', 'Claude 3', 'Gemini', 'Mistral', 'Llama 2']
        },
        {
          name: 'Fine-Tuning Models',
          items: ['LoRA', 'QLoRA', 'PEFT', 'Full Fine-tuning']
        },
        {
          name: 'AI Development',
          items: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Transformers']
        },
        {
          name: 'Vector Databases',
          items: ['Pinecone', 'Weaviate', 'Milvus', 'Qdrant', 'ChromaDB']
        },
        {
          name: 'Computer Vision',
          items: ['TensorFlow', 'PyTorch', 'YOLO', 'Detectron2']
        },
        {
          name: 'NLP',
          items: ['spaCy', 'NLTK', 'Transformers', 'Stanford NLP']
        },
        {
          name: 'MLOps',
          items: ['MLflow', 'Weights & Biases', 'DVC', 'Kubeflow']
        },
        {
          name: 'AI Infrastructure',
          items: ['AWS SageMaker', 'Vertex AI', 'Azure ML', 'Lambda Labs']
        }
      ]
    },
    {
      title: 'DevOps & Cloud Engineering',
      subtitle: 'Automated, Scalable Infrastructure Solutions',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'CI/CD',
          items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD']
        },
        {
          name: 'Containerization',
          items: ['Docker', 'Kubernetes', 'Helm', 'Podman']
        },
        {
          name: 'Infrastructure as Code',
          items: ['Terraform', 'Pulumi', 'AWS CDK', 'Crossplane']
        },
        {
          name: 'Monitoring',
          items: ['Prometheus', 'Grafana', 'Datadog', 'New Relic']
        },
        {
          name: 'Cloud Platforms',
          items: ['AWS', 'Azure', 'GCP', 'DigitalOcean']
        },
        {
          name: 'Serverless',
          items: ['AWS Lambda', 'Cloud Functions', 'Azure Functions']
        },
        {
          name: 'Security',
          items: ['Vault', 'Secrets Manager', 'Snyk', 'SonarQube']
        }
      ]
    }
  ];

  return (
    <Section id="tech-stack" className="bg-gradient-to-b from-primary-50 to-white py-20" ref={techStackRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
            Our Technology Arsenal
          </h2>
          <p className="text-lg text-primary-600">
            Cutting-edge tools and frameworks we leverage to build your next breakthrough
          </p>
        </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {techStacks.map((stack, index) => (
    <div
      key={index}
      className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out group"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-48 flex-shrink-0">
          <img
            src={stack.image}
            alt={stack.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 flex items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{stack.title}</h3>
              <p className="text-accent">{stack.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex-grow">
          <div className="grid grid-cols-2 gap-8">
            {stack.categories.map((category, catIndex) => (
              <div key={catIndex} className="space-y-3">
                <h4 className="font-semibold text-primary-700 border-b border-primary-100 pb-2">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-sm text-primary-600 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </Section>
  );
};

export default TechStack;