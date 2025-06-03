import { Building, ShoppingCart, CreditCard, Plane, Car, Shield } from "lucide-react";

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
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Abstract Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Data visualization charts */}
        <svg className="absolute top-12 left-4 w-32 h-32 opacity-8" viewBox="0 0 100 100">
          <path d="M10,80 Q20,60 30,70 T50,50 T70,40 T90,30" stroke="#10353B" strokeWidth="2" fill="none" />
          <circle cx="10" cy="80" r="2" fill="#10353B" />
          <circle cx="30" cy="70" r="2" fill="#10353B" />
          <circle cx="50" cy="50" r="2" fill="#10353B" />
          <circle cx="70" cy="40" r="2" fill="#10353B" />
          <circle cx="90" cy="30" r="2" fill="#10353B" />
        </svg>
        
        {/* Matrix-style data rain */}
        <div className="absolute top-16 right-8 opacity-10">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-1">
              <div className="w-1 h-4 bg-[#10353B]"></div>
              <div className="w-1 h-2 bg-[#10353B]"></div>
              <div className="w-1 h-6 bg-[#10353B]"></div>
              <div className="w-1 h-3 bg-[#10353B]"></div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="w-1 h-3 bg-[#10353B]"></div>
              <div className="w-1 h-5 bg-[#10353B]"></div>
              <div className="w-1 h-2 bg-[#10353B]"></div>
              <div className="w-1 h-4 bg-[#10353B]"></div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="w-1 h-2 bg-[#10353B]"></div>
              <div className="w-1 h-7 bg-[#10353B]"></div>
              <div className="w-1 h-3 bg-[#10353B]"></div>
              <div className="w-1 h-1 bg-[#10353B]"></div>
            </div>
          </div>
        </div>
        
        {/* Network connections */}
        <svg className="absolute bottom-20 left-1/4 w-48 h-48 opacity-6" viewBox="0 0 150 150">
          <circle cx="30" cy="30" r="4" fill="#10353B" opacity="0.4" />
          <circle cx="75" cy="20" r="4" fill="#10353B" opacity="0.4" />
          <circle cx="120" cy="40" r="4" fill="#10353B" opacity="0.4" />
          <circle cx="50" cy="80" r="4" fill="#10353B" opacity="0.4" />
          <circle cx="100" cy="90" r="4" fill="#10353B" opacity="0.4" />
          <circle cx="75" cy="130" r="4" fill="#10353B" opacity="0.4" />
          
          <line x1="30" y1="30" x2="75" y2="20" stroke="#10353B" strokeWidth="1" opacity="0.3" />
          <line x1="75" y1="20" x2="120" y2="40" stroke="#10353B" strokeWidth="1" opacity="0.3" />
          <line x1="30" y1="30" x2="50" y2="80" stroke="#10353B" strokeWidth="1" opacity="0.3" />
          <line x1="50" y1="80" x2="100" y2="90" stroke="#10353B" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="90" x2="75" y2="130" stroke="#10353B" strokeWidth="1" opacity="0.3" />
          <line x1="120" y1="40" x2="100" y2="90" stroke="#10353B" strokeWidth="1" opacity="0.3" />
        </svg>
        
        {/* AI processing nodes */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="w-8 h-8 border-2 border-[#10353B] opacity-15 rounded-lg relative">
            <div className="absolute inset-1 bg-[#10353B] opacity-20 rounded"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#10353B] opacity-40 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Data flow arrows */}
        <div className="absolute bottom-40 right-12 opacity-12">
          <svg width="60" height="20" viewBox="0 0 60 20">
            <path d="M5,10 L50,10 M45,5 L50,10 L45,15" stroke="#10353B" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        {/* Hexagonal pattern */}
        <div className="absolute top-40 right-1/3 opacity-10">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon points="20,2 35,12 35,28 20,38 5,28 5,12" stroke="#10353B" strokeWidth="1" fill="none" />
            <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" stroke="#10353B" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industry <span className="text-[#10353B]">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={industry.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 bg-[#10353B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <industry.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
