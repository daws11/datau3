
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
