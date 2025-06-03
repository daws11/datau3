
import { Users, BarChart3, Cog, Shield, Cloud, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Data Strategy & Consulting",
      description: "Strategic guidance to align your data initiatives with business objectives and accelerate digital transformation.",
      features: ["Data Strategy Development", "Digital Transformation Roadmap", "Data Governance Framework", "Change Management"]
    },
    {
      icon: Database,
      title: "Data Engineering & Architecture",
      description: "Build robust, scalable data infrastructure and pipelines that serve as the foundation for your data ecosystem.",
      features: ["Data Pipeline Development", "Cloud Data Architecture", "ETL/ELT Solutions", "Data Warehouse Design"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Business Intelligence",
      description: "Transform raw data into actionable insights through advanced analytics and interactive dashboards.",
      features: ["Business Intelligence Dashboards", "Advanced Analytics", "Predictive Modeling", "Self-Service Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud Data Solutions",
      description: "Migrate and optimize your data infrastructure on leading cloud platforms for scalability and performance.",
      features: ["Cloud Migration", "Multi-Cloud Strategy", "Cost Optimization", "Performance Tuning"]
    },
    {
      icon: Cog,
      title: "AI & Machine Learning",
      description: "Implement intelligent automation and machine learning solutions to drive innovation and efficiency.",
      features: ["ML Model Development", "AI-Powered Automation", "Computer Vision", "Natural Language Processing"]
    },
    {
      icon: Shield,
      title: "Data Governance & Security",
      description: "Establish comprehensive frameworks to ensure data quality, security, and regulatory compliance.",
      features: ["Data Quality Management", "Privacy & Compliance", "Security Framework", "Risk Assessment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data and AI services designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
