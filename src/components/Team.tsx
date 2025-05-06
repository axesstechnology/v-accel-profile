// import React, { useEffect, useRef, useState } from 'react';
// import Section from '../layouts/Section';

// const Team: React.FC = () => {
//   const teamRef = useRef<HTMLDivElement>(null);

//   const teamMembers = [
//     {
//       name: 'Venkatesan J',
//       role: 'CEO & AI Architect',
//       bio: 'Visionary CEO of V Accel AI Dynamics, leading the company with over 8 years of expertise in AI-driven solutions.',
//       expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building', 'Business Strategy', 'Client Relations'],
//       // count: 1
//     },
//     {
//       name: 'Software Developers',
//       role: 'CTO & ML Engineer',
//       bio: "Passionate about transforming ideas into scalable, high-performance code that powers the future.",
//       expertise: ['Natural Language Processing', 'Computer Vision', 'Deep Learning'],
//       count: 10
//     },
//     {
//       name: 'AI Engineers',
//       role: 'Lead Data Scientist',
//       bio: "Building intelligent systems that push the boundaries of what's possible with data and machine learning.",
//       expertise: ['Data Science', 'Big Data', 'Statistical Analysis'],
//       count: 4
//     },
//     {
//       name: 'Software Testers',
//       role: 'UX/UI Designer',
//       bio: "Detail-oriented problem-solvers dedicated to ensuring flawless user experiences through rigorous testing and quality assurance.",
//       expertise: ['Quality Assurance Best Practices', 'Load & Stress Testing', 'Performance Testing'],
//       count: 8
//     }
//   ];

//   return (
//     <Section id="team" className="bg-gradient-to-b from-white to-gray-50 py-20" ref={teamRef}>
//       <div className="container mx-auto px-4">
//         {/* Simplified Heading Section */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Our Technical Squad
//           </h2>
//           <p className="text-lg text-gray-600">
//             Our diverse team of experts combines deep technical knowledge with industry experience to deliver exceptional AI solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {teamMembers.map((member, index) => (
//             <TeamCard key={index} member={member} delay={300 + index * 100} />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// const TeamCard = ({ member, delay }: { member: any; delay: number }) => {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setCount(0); // Reset the count when the card is in view
//           animateCount(member.count || 0);
//           entry.target.classList.add('opacity-100');
//           entry.target.classList.remove('translate-y-10');
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, [member.count]);

//   const animateCount = (target: number) => {
//     let current = 0;
//     const duration = 1000;
//     const stepTime = Math.max(Math.floor(duration / target), 20);

//     const interval = setInterval(() => {
//       current += 1;
//       setCount(current);
//       if (current >= target) clearInterval(interval);
//     }, stepTime);
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="opacity-0 translate-y-10 transition-all duration-700"
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between min-h-[360px]">
//         <div>
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
//               <p className="text-indigo-600 font-medium">{member.role}</p>
//             </div>
//           </div>

//           {/* Animated Count */}
//           {member.count !== undefined && (
//             <div className="text-5xl font-extrabold text-indigo-600 mb-4">{count}</div>
//           )}

//           <p className="text-gray-600 mb-6">{member.bio}</p>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</h4>
//           <div className="flex flex-wrap gap-2">
//             {member.expertise.map((skill: string, idx: number) => (
//               <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

import React, { useEffect, useRef, useState } from 'react';
import Section from '../layouts/Section';
import { FaLaptopCode, FaRobot, FaBug } from 'react-icons/fa';
import image from '../assets/MD_Final (1).png'

const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: 'Venkatesan J',
      role: 'CEO & AI Architect',
      bio: 'Visionary CEO of V Accel AI Dynamics, leading the company with over 8 years of expertise in AI-driven solutions.',
      bio2:' He is deeply passionate about harnessing the power of AI to create innovative solutions that meet evolving business needs.',
      expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building', 'Business Strategy', 'Client Relations'],
      image: image,
    },
    {
      name: 'Software Developers',
      count: 10,
      icon: <FaLaptopCode className="text-5xl text-indigo-600" />,
    },
    {
      name: 'AI Engineers',
      count: 4,
      icon: <FaRobot className="text-5xl text-indigo-600" />,
    },
    {
      name: 'Software Testers',
      count: 8,
      icon: <FaBug className="text-5xl text-indigo-600" />,
    },
  ];

  return (
    <Section id="team" className="bg-white text-white py-20" ref={teamRef}>
  {/* <div className="container mx-auto px-4"> */}
  <div className="container mx-auto px-4">
    {/* Simplified Heading Section */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Our Technical Squad
      </h2>
      <p className="text-lg text-black">
        Our diverse team of experts combines deep technical knowledge with industry experience to deliver exceptional AI solutions.
      </p>
    </div>
    {/* CEO Section */}
    <div className="flex flex-col md:flex-row items-center md:items-start md:gap-0 bg-white text-black">
  <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-0">
    {/* <img
      src={teamMembers[0].image}
      alt="CEO"
      className="object-cover pl-5 bg-transparent" style={{width: '400px', height: '450px'}}
    /> */}
    <img
  src={teamMembers[0].image}
  alt="CEO"
  className="object-cover rounded-3xl bg-transparent"
  style={{ width: '400px', height: '450px' }}
/>

  </div>
  <div className="w-full md:w-2/3 text-center md:text-left mt-8 pr-7">
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">{teamMembers[0].name}</h2>
    <p className="text-black text-lg font-semibold">{teamMembers[0].role}</p>
    <p className="text-black mb-4 mt-5">{teamMembers[0].bio}</p>
    <p className='text-black mb-4 mt-2'>{teamMembers[0].bio2}</p>
    <div>
      <h4 className="text-md font-semibold text-black mb-5 mt-7">Areas of Expertise:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {teamMembers[0].expertise.map((skill, idx) => (
          <span key={idx} className="px-0 py-2 text-indigo-700 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* Developer / AI Engineer / Tester Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {teamMembers.slice(1).map((member, index) => (
            <TeamCard key={index} member={member} delay={300 + index * 100} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const TeamCard = ({ member, delay }: { member: any; delay: number }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(member.count || 0);
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [member.count]);

  const animateCount = (target: number) => {
    let current = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, stepTime);
  };

  return (
<div
  ref={cardRef}
  className="opacity-0 translate-y-10 transition-all duration-700"
  style={{ transitionDelay: `${delay}ms` }}
>
  <div className="bg-transparent rounded-3xl p-8 transition-all duration-500 h-full flex flex-col justify-between min-h-[280px] transform hover:scale-105">
    <div className="flex justify-center items-center mb-6">
      {/* Add an icon or avatar */}
    </div>
    <div className="text-8xl font-extrabold text-black mb-2">{count}</div>
    <h3 className="text-xl font-semibold text-black">{member.name}</h3>
  </div>
</div>

  );
};

export default Team;