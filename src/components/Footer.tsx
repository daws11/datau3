
import { Database, Brain, BarChart3, Shield } from "lucide-react";

const Footer = () => {
  const services = [
    "Strategic Consulting",
    "Data Architecture",
    "AI Implementation",
    "Cloud Migration",
    "Analytics & BI",
    "Data Governance"
  ];

  const solutions = [
    "Data Foundation",
    "Machine Learning",
    "Real-time Analytics",
    "Predictive Modeling",
    "Process Automation",
    "Business Intelligence"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DataU3</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering organizations to unlock the full potential of their data through expert consulting 
              and innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5" />
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
          <p>&copy; 2024 DataU3. All rights reserved. Built with precision and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
