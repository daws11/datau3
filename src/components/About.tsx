const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Successful Projects" },
    { number: "MEA/GCC", label: "Regional Focus" },
    { number: "24/7", label: "Support Available" }
  ];

  const focusAreas = [
    {
      title: "Scalable Data Foundations",
      description: "Building governed data pipelines, warehouses, and lakes optimized for AI readiness.",
      highlight: true
    },
    {
      title: "Production AI Systems",
      description: "Deploying machine learning models, agentic workflows, and LLM integrations that drive ROI.",
      highlight: true
    },
    {
      title: "Regional Expertise",
      description: "Tailoring solutions to MEA/GCC regulatory and infrastructure landscapes.",
      highlight: true
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Abstract Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Data pipeline visualization */}
        <svg className="absolute top-16 right-8 w-56 h-56 opacity-5" viewBox="0 0 200 200">
          <rect x="20" y="40" width="30" height="20" rx="5" fill="#10353B" />
          <rect x="70" y="30" width="30" height="20" rx="5" fill="#10353B" />
          <rect x="70" y="60" width="30" height="20" rx="5" fill="#10353B" />
          <rect x="120" y="45" width="30" height="20" rx="5" fill="#10353B" />
          <rect x="170" y="40" width="20" height="30" rx="5" fill="#10353B" />
          
          <path d="M50,50 L70,40 M50,50 L70,70 M100,40 L120,55 M100,70 L120,55 M150,55 L170,55" 
                stroke="#10353B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10353B" />
            </marker>
          </defs>
        </svg>
        
        {/* ML model layers */}
        <div className="absolute bottom-32 left-12 opacity-8">
          <div className="space-y-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
            </div>
            <div className="flex space-x-2 pl-4">
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
            </div>
            <div className="flex space-x-2 pl-8">
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
            </div>
            <div className="flex space-x-2 pl-12">
              <div className="w-3 h-3 bg-[#10353B] rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Data clusters */}
        <div className="absolute top-1/3 left-16 opacity-12">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 left-8 w-2 h-2 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-4 left-12 w-1.5 h-1.5 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-8 left-4 w-2 h-2 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-12 left-14 w-1.5 h-1.5 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-16 left-6 w-2 h-2 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-6 left-16 w-1.5 h-1.5 bg-[#10353B] rounded-full"></div>
            <div className="absolute top-14 left-10 w-2 h-2 bg-[#10353B] rounded-full"></div>
          </div>
        </div>
        
        {/* Analytics wave pattern */}
        <svg className="absolute bottom-16 right-20 w-40 h-24 opacity-10" viewBox="0 0 120 60">
          <path d="M0,30 Q15,10 30,30 T60,30 T90,30 T120,30" stroke="#10353B" strokeWidth="2" fill="none" />
          <path d="M0,35 Q15,20 30,35 T60,35 T90,35 T120,35" stroke="#10353B" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M0,40 Q15,25 30,40 T60,40 T90,40 T120,40" stroke="#10353B" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
        
        {/* Binary data pattern */}
        <div className="absolute top-20 left-1/3 opacity-8 text-[#10353B] text-xs font-mono">
          <div>01001001</div>
          <div>11010100</div>
          <div>00110101</div>
          <div>10101010</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            About us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With 15+ years of hands-on experience in delivering enterprise grade data products and AI 
              solutions across the Middle East and GCC, we've helped enterprises across MEA & GCC 
              transform from Data Management & Governance to AI-driven – deploying production-ready 
              solutions that deliver measurable impact.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our work focuses on:</h3>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <div key={area.title} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#10353B] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-[#10353B]">{area.title}:</span>
                      <span className="text-gray-600 ml-1">{area.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-lg text-gray-600 leading-relaxed">
              <span className="text-gray-900">From strategy to execution, </span>
              <span className="text-[#10353B] font-semibold">we transform data into your most valuable asset</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-[#10353B] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
