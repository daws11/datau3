import { Database, Brain, BarChart3, Shield, Cloud, Cog } from "lucide-react";

const Footer = () => {
  const dataFoundationServices = [
    "Governance",
    "Strategy", 
    "Data Monetization",
    "Management",
    "Machine Learning",
    "Analytics & Insights"
  ];

  const agenticAIServices = [
    "Accounting & Taxation",
    "Governance & Management",
    "Sales Support",
    "Client Support",
    "Custom Agent"
  ];

  const industries = [
    "Public Sector",
    "Retail",
    "Financial Services",
    "Aviation",
    "Automotive",
    "Insurance",
    "Real Estate"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DataU3</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              From Data to AI-enabled & Business success. Transforming enterprises across MEA & GCC 
              with 15+ years of experience in data and AI solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#10353B] rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-[#10353B] rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-[#10353B] rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Data Foundation</h4>
            <ul className="space-y-2">
              {dataFoundationServices.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Agentic AI Solutions</h4>
            <ul className="space-y-2">
              {agenticAIServices.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-gray-400 text-sm">
              <p>info@datau3.com</p>
              <p>+971 XX XXX XXXX</p>
              <p>6th Meydan Grandstand, Nad AL Sheba, Meydan, Dubai, UAE</p>
              <p>www.datau3.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DataU3. All rights reserved. From Data to AI-enabled & Business success.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
