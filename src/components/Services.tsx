
import { Users, BarChart3, Cog, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Strategic Consulting",
      description: "Expert guidance to align your data strategy with business objectives and drive sustainable growth.",
      features: ["Data Strategy Development", "Digital Transformation", "Change Management", "ROI Optimization"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Transform raw data into actionable insights that empower informed decision-making across your organization.",
      features: ["Business Intelligence", "Predictive Analytics", "Custom Dashboards", "Performance Metrics"]
    },
    {
      icon: Cog,
      title: "Implementation Services",
      description: "End-to-end implementation of data solutions, from architecture design to deployment and optimization.",
      features: ["System Integration", "Process Automation", "Quality Assurance", "Performance Tuning"]
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Establish robust frameworks to ensure data quality, security, and compliance across your organization.",
      features: ["Data Quality Management", "Compliance & Security", "Privacy Protection", "Risk Assessment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting services designed to accelerate your data journey and maximize business value
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
