
import { Building, Cog, BarChart3, Lightbulb, Headphones, Settings, Search, Database, BookOpen, FolderOpen, Tag, FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const dataFoundationServices = [
    {
      icon: Search,
      title: "Data Quality",
      description: "Comprehensive data quality assessment and improvement frameworks"
    },
    {
      icon: BarChart3,
      title: "Master Data Management",
      description: "Centralized management of critical business data across systems"
    },
    {
      icon: Database,
      title: "Data Catalogue",
      description: "Organized inventory and documentation of data assets"
    },
    {
      icon: Tag,
      title: "Data Classification",
      description: "Systematic categorization and labeling of data for governance"
    },
    {
      icon: BookOpen,
      title: "Business Glossary",
      description: "Standardized definitions and terminology for business data"
    },
    {
      icon: FileText,
      title: "Metadata Management",
      description: "Complete management of data about data across the organization"
    }
  ];

  const agenticAIServices = [
    {
      icon: BarChart3,
      title: "Accounting & Taxation",
      description: "AI-powered financial management and tax compliance solutions"
    },
    {
      icon: Building,
      title: "Governance & Management",
      description: "Intelligent governance frameworks and automated management systems"
    },
    {
      icon: Headphones,
      title: "Sales Support",
      description: "AI-driven sales enablement and customer engagement solutions"
    },
    {
      icon: Headphones,
      title: "Client Support",
      description: "Automated customer service and support optimization"
    },
    {
      icon: Settings,
      title: "Custom Agent",
      description: "Tailored AI agents designed for specific business requirements"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product & <span className="text-[#10353B]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions spanning from data foundation to advanced AI implementation
            </p>
          </div>
        </AnimatedSection>

        <div className="mb-16">
          <AnimatedSection delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Data <span className="text-[#10353B]">Foundation</span>
            </h3>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {dataFoundationServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={300 + index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div>
          <AnimatedSection delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Agentic AI <span className="text-[#10353B]">Solutions</span>
            </h3>
          </AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-6">
            {agenticAIServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={300 + index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
