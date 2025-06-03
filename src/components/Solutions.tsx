
import { Database, Brain, Cloud, Zap } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Database,
      title: "Data Foundation Platform",
      description: "Build a robust, scalable data infrastructure that serves as the backbone for all your data initiatives.",
      benefits: [
        "Unified data architecture",
        "Real-time data processing",
        "Scalable cloud infrastructure",
        "Advanced security protocols"
      ],
      technologies: ["Azure", "AWS", "Snowflake", "Databricks"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes and unlock new business opportunities.",
      benefits: [
        "Predictive modeling",
        "Process automation",
        "Intelligent recommendations",
        "Anomaly detection"
      ],
      technologies: ["TensorFlow", "PyTorch", "Azure ML", "MLOps"]
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate your data infrastructure to the cloud and optimize for performance and cost.",
      benefits: [
        "Reduced operational costs",
        "Enhanced scalability",
        "Improved performance",
        "Better disaster recovery"
      ],
      technologies: ["Azure", "AWS", "GCP", "Kubernetes"]
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Enable instant insights with real-time data processing and analytics capabilities.",
      benefits: [
        "Live dashboards",
        "Instant alerts",
        "Stream processing",
        "Edge computing"
      ],
      technologies: ["Apache Kafka", "Stream Analytics", "Power BI", "Tableau"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Data Foundation & AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology solutions that transform how you collect, process, and utilize data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Key Benefits</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
