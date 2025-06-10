
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

  const ServicesList = ({ services, title }) => (
    <div className="mb-16">
      <AnimatedSection delay={200}>
        <h4 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
          {title}
        </h4>
      </AnimatedSection>
      <div className="space-y-6">
        {services.map((service, index) => (
          <AnimatedSection key={service.title} delay={300 + index * 100}>
            <div className="flex items-start space-x-4 p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 bg-[#10353B] rounded-lg flex items-center justify-center flex-shrink-0">
                <service.icon className="h-6 w-6 text-white" />
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
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Data Foundation */}
        <div className="mb-20">
          <AnimatedSection delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 mb-16 text-center">
              Data <span className="text-[#10353B]">Foundation</span>
            </h3>
          </AnimatedSection>

          <ServicesList 
            services={dataFoundationServices} 
            title="Data Management Professional Services" 
          />
          
          <ServicesList 
            services={domainConsultingServices} 
            title="Domain Services" 
          />
        </div>

        {/* AI Solutions */}
        <div>
          <AnimatedSection delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 mb-16 text-center">
              AI <span className="text-[#10353B]">Solutions</span>
            </h3>
          </AnimatedSection>

          <ServicesList 
            services={mlAIServices} 
            title="Machine Learning & AI Professional Services" 
          />
          
          <ServicesList 
            services={agenticAIServices} 
            title="Agentic AI Solutions" 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
