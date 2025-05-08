import React, { useEffect, useRef, useState } from 'react';
import { Send, PhoneCall, Mail, MapPin ,ThumbsUp, Frown} from 'lucide-react';
import Section from '../layouts/Section';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwDV-feEg9VmZMVu1hVBkSF-q1y-u4_MVUx6BAVKKj_97ZASb4UF5piSO6HXmbRSQpnAA/exec', {
        method: 'POST',
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // With mode: "no-cors", we can't access response details
      // But if we reached this point without an error being thrown, consider it a success
      setFormStatus({
        submitted: true,
        success: true,
        message: `we'll contact you in a short while.`,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error submitting the form. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <PhoneCall className="h-6 w-6 text-accent" />,
      title: 'Call Us',
      details: ['+91 76038 46245'],
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: 'Email Us',
      details: ['info@v-accel.ai'],
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Visit Us',
      details: ['GF-04, Tidel Park', 'Taramani, Chennai - 600113'],
    },
  ];

  return (
    <Section id="contact" className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20" ref={contactRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold text-accent mb-6">
          Let's Connect!
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-300">
          We’re excited to collaborate with you on your fantastic project
            {/* Have a project in mind or want to learn more about our services? We'd love to hear from you */}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 min-h-[640px] flex items-center justify-center">
          {formStatus.submitted ? (
                <div className={`text-center text-2xl p-8 ${formStatus.success ? 'text-accent' : 'text-red-400'}`}>
                  {/* <div className="text-5xl mb-4 color-accent">{formStatus.success ? '👍' : '😓'}</div> */}
                  
                  <div
  className={`flex justify-center mb-6 transition-transform duration-500 ${
    formStatus.success
      ? 'text-green-500 hover:text-green-600 animate-bounce'
      : 'text-red-500 hover:text-red-600 animate-pulse'
  }`}
>
  {formStatus.success ? (
    <ThumbsUp size={48} strokeWidth={2.5} />
  ) : (
    <Frown size={48} strokeWidth={2.5} />
  )}
</div>


                  <h3 className="text-2xl font-semibold mb-2">
                    {formStatus.success ? 'Thank You!' : 'Something went wrong'}
                  </h3>
                  <p>{formStatus.message}</p>
                  {!formStatus.success && (
                    <button
                      className="mt-4 px-4 py-2 bg-accent text-primary-900 rounded-md"
                      onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                    >
                      Try Again
                    </button>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-white"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 bg-accent hover:bg-accent-dark text-primary-900 rounded-lg flex items-center justify-center font-medium transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white border border-white/20 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white/5 p-3 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200 mb-1">{item.title}</h4>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-white">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;