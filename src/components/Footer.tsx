
import { Database, Brain, BarChart3, Shield, Cloud, Cog } from "lucide-react";

const Footer = () => {
  const services = [
    "Data Strategy & Consulting",
    "Data Engineering",
    "Analytics & BI",
    "Cloud Data Solutions",
    "AI & Machine Learning",
    "Data Governance"
  ];

  const solutions = [
    "Modern Data Platform",
    "AI/ML Platform",
    "Advanced Analytics",
    "Cloud Migration",
    "Real-time Streaming",
    "Data Integration Hub"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DataU3</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering organizations to unlock the full potential of their data through strategic consulting, 
              modern technology platforms, and innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
                <Cloud className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p>hello@datau3.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DataU3. All rights reserved. Transforming businesses through data and AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
