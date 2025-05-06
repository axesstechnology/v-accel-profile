import React, { useEffect, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Section from '../layouts/Section';

const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);

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

    if (teamRef.current) {
      const elements = teamRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Venkatesan J',
      role: 'CEO & AI Architect',
      bio: 'Visionary CEO of V Accel AI Dynamics, leading the company with over 8 years of expertise in AI-driven solutions. Committed to empowering teams and delivering innovative, high-impact technologies.',
      expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building','Business Strategy','Client Relations'],
      // social: {
      //   linkedin: '#',
      //   email: 'alex@vaccel.tech'
      // }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & ML Engineer',
      bio: 'PhD in Machine Learning with expertise in NLP and computer vision systems.',
      expertise: ['Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      // social: {
      //   linkedin: '#',
      //   email: 'sarah@vaccel.tech'
      // }
    },
    {
      name: 'Rajiv Patel',
      role: 'Lead Data Scientist',
      bio: 'Specialized in predictive analytics and large-scale data processing systems.',
      expertise: ['Data Science', 'Big Data', 'Statistical Analysis'],
      // social: {
      //   linkedin: '#',
      //   email: 'rajiv@vaccel.tech'
      // }
    },
    {
      name: 'Emma Zhang',
      role: 'UX/UI Designer',
      bio: 'Creates intuitive interfaces for complex AI systems with focus on accessibility.',
      expertise: ['User Experience', 'Interface Design', 'Design Systems'],
      // social: {
      //   linkedin: '#',
      //   email: 'emma@vaccel.tech'
      // }
    }
  ];

  return (
    <Section id="team" className="bg-gradient-to-b from-white to-gray-50 py-20" ref={teamRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-600">
            Our diverse team of experts combines deep technical knowledge with industry experience to deliver exceptional AI solutions.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </div>
                  <div className="flex space-x-2"> */}
                    {/* <a
                      // href={member.social.linkedin}
                      className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a> */}
                    {/* <a
                      // href={`mailto:${member.social.email}`}
                      className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      {/* Card wrapper with full height and flex layout */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-indigo-600 font-medium">{member.role}</p>
            </div>
            <div className="flex space-x-2">{/* Optional: Social icons */}</div>
          </div>

          <p className="text-gray-600 mb-6">{member.bio}</p>
        </div>
                
                {/* <p className="text-gray-600 mb-6">{member.bio}</p> */}
                
                {/* <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
                <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
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

export default Team;