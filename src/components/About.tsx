
import { Award, Users, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { number: "100+", label: "Successful Projects" },
    { number: "20+", label: "Years Experience" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional results through proven methodologies and deep technical expertise."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team, ensuring knowledge transfer and long-term success."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We leverage cutting-edge technologies and industry best practices to solve complex challenges."
    },
    {
      icon: Lightbulb,
      title: "Value",
      description: "We focus on delivering measurable business value and ROI through data-driven solutions."
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
              DataU3 is a leading data and AI consulting firm that helps organizations transform their business 
              through strategic data initiatives, modern technology platforms, and innovative AI solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines deep technical expertise with business acumen to deliver solutions that drive 
              measurable results, accelerate digital transformation, and create sustainable competitive advantages.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
