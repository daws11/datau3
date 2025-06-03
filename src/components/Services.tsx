import { Building, Cog, BarChart3, Lightbulb, Headphones, Settings } from "lucide-react";

const Services = () => {
  const dataFoundationServices = [
    {
      icon: Building,
      title: "Governance",
      description: "Establishing comprehensive data governance frameworks and policies"
    },
    {
      icon: Cog,
      title: "Strategy",
      description: "Developing strategic roadmaps for data transformation initiatives"
    },
    {
      icon: Lightbulb,
      title: "Data Monetization",
      description: "Turning data assets into revenue-generating opportunities"
    },
    {
      icon: Settings,
      title: "Management",
      description: "Comprehensive data lifecycle and quality management solutions"
    },
    {
      icon: Cog,
      title: "Machine Learning",
      description: "Advanced ML solutions for predictive analytics and automation"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Transform data into actionable business intelligence and insights"
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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Abstract Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Data flow visualization */}
        <svg className="absolute top-16 left-8 w-48 h-48 opacity-5" viewBox="0 0 200 200">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10353B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
        
        {/* AI brain pattern */}
        <div className="absolute top-20 right-12 w-24 h-24 opacity-8">
          <div className="w-full h-full border-2 border-[#10353B] rounded-full relative">
            <div className="absolute top-2 left-6 w-2 h-2 bg-[#10353B] rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-4 w-1.5 h-1.5 bg-[#10353B] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-4 left-8 w-2 h-2 bg-[#10353B] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-[#10353B] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Data stream lines */}
        <div className="absolute bottom-32 left-16 opacity-10">
          <div className="w-32 h-1 bg-gradient-to-r from-[#10353B] to-transparent mb-2"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#10353B] to-transparent mb-2"></div>
          <div className="w-28 h-1 bg-gradient-to-r from-[#10353B] to-transparent"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
          <div className="w-6 h-6 border border-[#10353B] opacity-15 rotate-45 animate-pulse"></div>
        </div>
        <div className="absolute bottom-40 right-20">
          <div className="w-4 h-4 bg-[#10353B] opacity-20 rounded-full"></div>
        </div>
        
        {/* Circuit board pattern */}
        <svg className="absolute bottom-16 right-8 w-40 h-40 opacity-6" viewBox="0 0 100 100">
          <rect x="10" y="10" width="4" height="4" fill="#10353B" />
          <rect x="30" y="15" width="4" height="4" fill="#10353B" />
          <rect x="60" y="20" width="4" height="4" fill="#10353B" />
          <rect x="20" y="40" width="4" height="4" fill="#10353B" />
          <rect x="50" y="45" width="4" height="4" fill="#10353B" />
          <rect x="80" y="50" width="4" height="4" fill="#10353B" />
          <path d="M12,12 L32,17 M32,17 L62,22 M22,42 L52,47 M52,47 L82,52" stroke="#10353B" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Product & <span className="text-[#10353B]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions spanning from data foundation to advanced AI implementation
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Data <span className="text-[#10353B]">Foundation</span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {dataFoundationServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Agentic AI <span className="text-[#10353B]">Solutions</span>
          </h3>
          <div className="grid lg:grid-cols-5 gap-6">
            {agenticAIServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-[#10353B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
