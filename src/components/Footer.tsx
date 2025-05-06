import React from 'react';
import { BrainCircuit, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 max-w-xs">
            <div className="flex items-center mb-4">
              <BrainCircuit className="h-8 w-8 text-indigo-400 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
                V Accel
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Accelerating innovation through customized AI solutions designed for your unique business challenges.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} V Accel. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Team', 'Careers', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Machine Learning', 'Computer Vision', 'Conversational AI', 'Predictive Analytics'].map((item) => (
                  <li key={item}>
                    <a href={`#services`} className="text-gray-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest AI insights and company news.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 px-4 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 p-2 px-4 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>in Silicon Valley</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;