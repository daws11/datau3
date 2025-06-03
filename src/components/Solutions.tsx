
import { Database, Brain, Cloud, Zap, BarChart3, Cog } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Database,
      title: "Modern Data Platform",
      description: "Build a unified, cloud-native data platform that scales with your business and integrates all your data sources.",
      benefits: [
        "Unified data architecture",
        "Real-time data processing",
        "Scalable cloud infrastructure",
        "Self-service data access"
      ],
      technologies: ["Snowflake", "Databricks", "Azure Synapse", "AWS Redshift"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Platform",
      description: "Implement end-to-end ML platforms that accelerate model development, deployment, and monitoring.",
      benefits: [
        "MLOps automation",
        "Model lifecycle management",
        "Real-time inference",
        "AI governance"
      ],
      technologies: ["Azure ML", "AWS SageMaker", "MLflow", "Kubeflow"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Solutions",
      description: "Deploy sophisticated analytics capabilities that provide deep insights and predictive intelligence.",
      benefits: [
        "Predictive analytics",
        "Real-time dashboards",
        "Self-service BI",
        "Embedded analytics"
      ],
      technologies: ["Power BI", "Tableau", "Qlik", "Looker"]
    },
    {
      icon: Cloud,
      title: "Cloud Data Migration",
      description: "Seamlessly migrate your legacy systems to modern cloud platforms with minimal disruption.",
      benefits: [
        "Zero-downtime migration",
        "Cost optimization",
        "Enhanced performance",
        "Disaster recovery"
      ],
      technologies: ["Azure", "AWS", "Google Cloud", "Hybrid Cloud"]
    },
    {
      icon: Zap,
      title: "Real-time Data Streaming",
      description: "Enable instant insights with real-time data processing and streaming analytics capabilities.",
      benefits: [
        "Live data processing",
        "Event-driven architecture",
        "Stream analytics",
        "Real-time alerting"
      ],
      technologies: ["Apache Kafka", "Azure Event Hubs", "AWS Kinesis", "Apache Spark"]
    },
    {
      icon: Cog,
      title: "Data Integration Hub",
      description: "Create a centralized integration layer that connects all your systems and applications.",
      benefits: [
        "API-first integration",
        "Data synchronization",
        "Legacy system connectivity",
        "Microservices architecture"
      ],
      technologies: ["MuleSoft", "Azure Data Factory", "Informatica", "Talend"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology platforms and solutions that transform how you manage and utilize data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
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
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
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
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
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
