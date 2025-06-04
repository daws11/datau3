
import { Building, ShoppingCart, CreditCard, Plane, Car, Shield, Home } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Solutions = () => {
  const industries = [
    {
      icon: Building,
      title: "Public Sector",
      description: "Digital transformation solutions for government entities and public organizations"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Customer analytics, inventory optimization, and personalized shopping experiences"
    },
    {
      icon: CreditCard,
      title: "Financial Services",
      description: "Risk management, fraud detection, and regulatory compliance solutions"
    },
    {
      icon: Plane,
      title: "Aviation",
      description: "Operational efficiency, predictive maintenance, and passenger experience optimization"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Supply chain optimization, quality control, and predictive analytics"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Claims processing automation, risk assessment, and customer service enhancement"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property valuation, market analysis, and investment optimization solutions"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry <span className="text-[#10353B]">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industries with deep domain expertise
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={200 + index * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-[#10353B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
