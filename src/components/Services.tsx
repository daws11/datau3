
import { Building, Cog, BarChart3, Lightbulb, Headphones, Settings, Search, Database, BookOpen, FolderOpen, Tag, FileText, TrendingUp, Users, Target, Zap, Monitor, CheckCircle, PieChart, Network, Brain, Code, Focus, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const dataFoundationServices = [
    {
      icon: Focus,
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
      icon: CheckCircle,
      title: "Data Governance",
      description: "Establishing comprehensive data governance frameworks and policies"
    },
    {
      icon: Lightbulb,
      title: "Data Strategy",
      description: "Strategic planning and roadmap development for data initiatives"
    },
    {
      icon: DollarSign,
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product & <span className="text-[#10353B]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions spanning from data foundation to advanced AI implementation
            </p>
          </div>
        </AnimatedSection>

        {/* Data Foundation - Split Layout with Background */}
        <div className="mb-32">
          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-r from-[#10353B] to-gray-800 rounded-3xl p-12 text-white mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Data <span className="text-gray-300">Foundation</span>
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Building robust data foundations that serve as the cornerstone for your AI transformation journey. 
                    Our comprehensive approach ensures your data is organized, governed, and ready for advanced analytics.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <Database className="h-16 w-16 text-white mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Enterprise Ready</h4>
                    <p className="text-gray-300">Scalable solutions for organizations of all sizes</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Data Management Services - Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {dataFoundationServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={300 + index * 100}>
                <div className="group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200">
                  <div className="w-12 h-12 bg-[#10353B] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h5>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Domain Services - Horizontal Cards */}
          <AnimatedSection delay={200}>
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Domain Services</h4>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6">
            {domainConsultingServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={300 + index * 100}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#10353B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h5>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* AI Solutions - Alternating Layout */}
        <div>
          <AnimatedSection delay={200}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                AI <span className="text-[#10353B]">Solutions</span>
              </h3>
              <div className="w-24 h-1 bg-[#10353B] mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>

          {/* ML & AI Services - Timeline Style */}
          <div className="mb-16">
            <AnimatedSection delay={200}>
              <h4 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
                Machine Learning & AI Professional Services
              </h4>
            </AnimatedSection>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>
              
              <div className="space-y-8">
                {mlAIServices.map((service, index) => (
                  <AnimatedSection key={service.title} delay={300 + index * 100}>
                    <div className="relative flex items-start space-x-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 w-16 h-16 bg-[#10353B] rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h5>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Agentic AI - Feature Cards */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
            <AnimatedSection delay={200}>
              <h4 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
                Agentic AI Solutions
              </h4>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agenticAIServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={300 + index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#10353B] to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
