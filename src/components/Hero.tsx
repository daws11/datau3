import { ArrowRight, Database, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Abstract Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Data Nodes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#10353B] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-[#10353B] rounded-full opacity-30"></div>
        <div className="absolute top-60 left-16 w-3 h-3 bg-[#10353B] rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute top-16 left-8 w-40 h-40 opacity-10" viewBox="0 0 100 100">
          <path d="M10,20 Q30,10 50,20 T90,20" stroke="#10353B" strokeWidth="1" fill="none" />
          <path d="M20,40 Q40,30 60,40 T100,40" stroke="#10353B" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="2" fill="#10353B" />
          <circle cx="50" cy="20" r="2" fill="#10353B" />
          <circle cx="80" cy="20" r="2" fill="#10353B" />
        </svg>
        
        {/* Right side graphics */}
        <div className="absolute top-32 right-20 w-6 h-6 border-2 border-[#10353B] opacity-20 rotate-45"></div>
        <div className="absolute top-52 right-40 w-4 h-4 border border-[#10353B] opacity-30 rotate-12"></div>
        <div className="absolute bottom-40 right-16 w-8 h-8 border-2 border-[#10353B] opacity-15 rounded-full"></div>
        
        {/* Data visualization bars */}
        <div className="absolute bottom-20 left-1/4 flex space-x-1 opacity-10">
          <div className="w-2 h-8 bg-[#10353B]"></div>
          <div className="w-2 h-12 bg-[#10353B]"></div>
          <div className="w-2 h-6 bg-[#10353B]"></div>
          <div className="w-2 h-16 bg-[#10353B]"></div>
          <div className="w-2 h-10 bg-[#10353B]"></div>
        </div>
        
        {/* Neural network pattern */}
        <svg className="absolute bottom-32 right-1/4 w-32 h-32 opacity-8" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="3" fill="#10353B" opacity="0.3" />
          <circle cx="50" cy="15" r="3" fill="#10353B" opacity="0.3" />
          <circle cx="80" cy="25" r="3" fill="#10353B" opacity="0.3" />
          <circle cx="35" cy="50" r="3" fill="#10353B" opacity="0.3" />
          <circle cx="65" cy="55" r="3" fill="#10353B" opacity="0.3" />
          <circle cx="50" cy="80" r="3" fill="#10353B" opacity="0.3" />
          <line x1="20" y1="20" x2="35" y2="50" stroke="#10353B" strokeWidth="1" opacity="0.2" />
          <line x1="50" y1="15" x2="65" y2="55" stroke="#10353B" strokeWidth="1" opacity="0.2" />
          <line x1="80" y1="25" x2="65" y2="55" stroke="#10353B" strokeWidth="1" opacity="0.2" />
          <line x1="35" y1="50" x2="50" y2="80" stroke="#10353B" strokeWidth="1" opacity="0.2" />
          <line x1="65" y1="55" x2="50" y2="80" stroke="#10353B" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                DataU3
                <span className="text-[#10353B] block">from Data to AI-enabled & Business success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With 15+ years of hands-on experience in delivering enterprise grade data products and AI solutions across the Middle East and GCC, we help enterprises transform from Data Management & Governance to AI-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#10353B] hover:bg-[#0a2a2f] text-white group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#10353B] text-[#10353B] hover:bg-gray-50">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                  <Brain className="h-12 w-12 text-[#10353B] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agentic AI Solutions</h3>
                  <p className="text-gray-600">A structured pathway to Operationalize AI across your enterprise</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Database className="h-12 w-12 text-[#10353B] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Foundation</h3>
                  <p className="text-gray-600">A Controlled Pipeline of Data Management & Governance to AI Production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
