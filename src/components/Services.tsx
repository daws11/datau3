
import { Database, Brain, Lightbulb, Settings, CheckCircle, Target } from "lucide-react";
import FadeInUpAnimation from "@/components/FadeInUpAnimation";

const Services = () => {
  const mainServices = [
    {
      icon: Database,
      title: "Data Foundation",
      description: "Complete data management, governance, and quality frameworks for enterprise readiness",
      features: ["Data Quality", "Master Data Management", "Data Governance", "Business Glossary"]
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "End-to-end ML and AI implementation from assessment to production deployment",
      features: ["AI Assessment", "Proof of Concept", "Implementation", "Support & Optimization"]
    },
    {
      icon: Settings,
      title: "Agentic AI",
      description: "Intelligent automation and custom AI agents for business process optimization",
      features: ["Custom Agents", "Process Automation", "Sales Support", "Client Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUpAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#10353B]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions from data foundation to advanced AI implementation
            </p>
          </div>
        </FadeInUpAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <FadeInUpAnimation key={service.title} delay={200 + index * 200}>
              <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-[#10353B]/20 transition-all duration-500">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#10353B] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10353B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </FadeInUpAnimation>
          ))}
        </div>

        {/* Domain Services - Simplified */}
        <FadeInUpAnimation delay={600}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Domain Expertise</h3>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: CheckCircle, title: "Data Strategy" },
                  { icon: Lightbulb, title: "Data Monetization" },
                  { icon: Target, title: "AI Consulting" },
                  { icon: Settings, title: "Implementation" }
                ].map((item, index) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 bg-[#10353B] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUpAnimation>
      </div>
    </section>
  );
};

export default Services;
