
import { Building, Cog, BarChart3, Lightbulb, Headphones, Settings, Search, Database, BookOpen, FolderOpen, Tag, FileText, TrendingUp, Users, Target, Zap, Monitor, CheckCircle, PieChart, Network, Brain, Code } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const dataFoundationServices = [
    {
      icon: CheckCircle,
      title: "Data Quality",
      description: "Comprehensive data quality assessment and improvement frameworks"
    },
    {
      icon: Network,
      title: "Master Data Management",
      description: "Centralized management of critical business data across systems"
    },
    {
      icon: Database,
      title: "Data Catalogue",
      description: "Organized inventory and documentation of data assets"
    },
    {
      icon: FolderOpen,
      title: "Data Classification",
      description: "Systematic categorization and labeling of data for governance"
    },
    {
      icon: BookOpen,
      title: "Business Glossary",
      description: "Standardized definitions and terminology for business data"
    },
    {
      icon: Code,
      title: "Metadata Management",
      description: "Complete management of data about data across the organization"
    }
  ];

  const domainConsultingServices = [
    {
      icon: Building,
      title: "Data Governance",
      description: "Establishing comprehensive data governance frameworks and policies"
    },
    {
      icon: Lightbulb,
      title: "Data Strategy",
      description: "Strategic planning and roadmap development for data initiatives"
    },
    {
      icon: PieChart,
      title: "Data Monetization",
      description: "Unlocking business value and revenue opportunities from data assets"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "End-to-end data lifecycle management and optimization"
    }
  ];

  const mlAIServices = [
    {
      icon: Search,
      title: "Assessment",
      description: "AI readiness assessment and capability evaluation"
    },
    {
      icon: Lightbulb,
      title: "Proof of Concept",
      description: "Rapid prototyping and proof of concept development"
    },
    {
      icon: Monitor,
      title: "Implementation",
      description: "Full-scale AI and ML solution implementation"
    },
    {
      icon: Users,
      title: "Business Requirements",
      description: "Requirements gathering and business case development"
    },
    {
      icon: Target,
      title: "Use Cases Identification",
      description: "Strategic use case identification and prioritization"
    },
    {
      icon: Settings,
      title: "AI Audit & Support",
      description: "Ongoing support, monitoring, and optimization services"
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

        {/* Data Foundation */}
        <div className="mb-20">
          <AnimatedSection delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Data <span className="text-[#10353B]">Foundation</span>
            </h3>
          </AnimatedSection>

          {/* Data Management Professional Services */}
          <div className="mb-12">
            <AnimatedSection delay={200}>
              <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">
                Data Management Professional Services
              </h4>
            </AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {dataFoundationServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={300 + index * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h5>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Domain Services */}
          <div className="mb-12">
            <AnimatedSection delay={200}>
              <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">
                Domain Services
              </h4>
            </AnimatedSection>
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {domainConsultingServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={300 + index * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h5>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* AI Solutions */}
        <div>
          <AnimatedSection delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              AI <span className="text-[#10353B]">Solutions</span>
            </h3>
          </AnimatedSection>

          {/* Machine Learning & AI Professional Services */}
          <div className="mb-12">
            <AnimatedSection delay={200}>
              <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">
                Machine Learning & AI Professional Services
              </h4>
            </AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {mlAIServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={300 + index * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h5>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Agentic AI Solutions */}
          <div>
            <AnimatedSection delay={200}>
              <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">
                Agentic AI Solutions
              </h4>
            </AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-6">
              {agenticAIServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={300 + index * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h5>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
