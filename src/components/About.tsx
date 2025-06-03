
import { Award, Users, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Successful Projects" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional results through rigorous methodology and attention to detail."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as trusted partners in their data journey."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We leverage cutting-edge technologies to solve complex business challenges."
    },
    {
      icon: Lightbulb,
      title: "Insight",
      description: "We transform data into actionable insights that drive business value."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About DataU3
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a leading data consulting firm specializing in helping organizations unlock the full potential 
              of their data through strategic consulting, robust data foundations, and innovative AI solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experts combines deep technical expertise with business acumen to deliver solutions 
              that drive measurable results and sustainable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
