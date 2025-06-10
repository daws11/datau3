
import { Building, ShoppingCart, CreditCard, Plane, Car, Shield, Home } from "lucide-react";
import FadeInUpAnimation from "@/components/FadeInUpAnimation";

const Solutions = () => {
  const industries = [
    { icon: Building, title: "Public Sector", color: "from-blue-500 to-blue-600" },
    { icon: ShoppingCart, title: "Retail", color: "from-purple-500 to-purple-600" },
    { icon: CreditCard, title: "Financial Services", color: "from-green-500 to-green-600" },
    { icon: Plane, title: "Aviation", color: "from-sky-500 to-sky-600" },
    { icon: Car, title: "Automotive", color: "from-orange-500 to-orange-600" },
    { icon: Shield, title: "Insurance", color: "from-red-500 to-red-600" },
    { icon: Home, title: "Real Estate", color: "from-teal-500 to-teal-600" }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUpAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-[#10353B]">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions across diverse industries with deep domain expertise
            </p>
          </div>
        </FadeInUpAnimation>

        {/* Minimalist Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.slice(0, 4).map((industry, index) => (
            <FadeInUpAnimation key={industry.title} delay={200 + index * 100}>
              <div className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.title}</h3>
              </div>
            </FadeInUpAnimation>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {industries.slice(4).map((industry, index) => (
            <FadeInUpAnimation key={industry.title} delay={400 + index * 100}>
              <div className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.title}</h3>
              </div>
            </FadeInUpAnimation>
          ))}
        </div>

        {/* Simple CTA */}
        <FadeInUpAnimation delay={600}>
          <div className="text-center">
            <div className="bg-[#10353B] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform?</h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
                Leverage our industry expertise to drive digital transformation in your sector.
              </p>
              <button className="bg-white text-[#10353B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg">
                Start Your Project
              </button>
            </div>
          </div>
        </FadeInUpAnimation>
      </div>
    </section>
  );
};

export default Solutions;
