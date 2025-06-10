
import { Building, ShoppingCart, CreditCard, Plane, Car, Shield, Home } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Solutions = () => {
  const industries = [
    {
      icon: Building,
      title: "Public Sector",
      description: "Digital transformation solutions for government entities and public organizations",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Customer analytics, inventory optimization, and personalized shopping experiences",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CreditCard,
      title: "Financial Services",
      description: "Risk management, fraud detection, and regulatory compliance solutions",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Plane,
      title: "Aviation",
      description: "Operational efficiency, predictive maintenance, and passenger experience optimization",
      color: "from-sky-500 to-sky-600"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Supply chain optimization, quality control, and predictive analytics",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Claims processing automation, risk assessment, and customer service enhancement",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property valuation, market analysis, and investment optimization solutions",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry <span className="text-[#10353B]">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Delivering specialized solutions across diverse industries with deep domain expertise
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#10353B] to-gray-400 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        {/* Featured Industries - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {industries.slice(0, 2).map((industry, index) => (
            <AnimatedSection key={industry.title} delay={200 + index * 200}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform translate-x-8 -translate-y-8`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Remaining Industries - Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(2).map((industry, index) => (
            <AnimatedSection key={industry.title} delay={400 + index * 100}>
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={600}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#10353B] to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Leverage our industry expertise to unlock new opportunities and drive digital transformation in your sector.
              </p>
              <button className="bg-white text-[#10353B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Discuss Your Project
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Solutions;
