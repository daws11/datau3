
import { ArrowRight, Database, Brain, TrendingUp, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  const stats = [
    { icon: Star, number: "15+", label: "Years Experience" },
    { icon: Users, number: "100+", label: "Projects Delivered" },
    { icon: Award, number: "MEA/GCC", label: "Regional Leader" }
  ];

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#10353B]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#10353B]/10 rounded-full text-[#10353B] text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Leading Data & AI Transformation
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  DataU3
                  <span className="text-[#10353B] block bg-gradient-to-r from-[#10353B] to-gray-600 bg-clip-text text-transparent">
                    from Data to AI-enabled & Business success
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  With 15+ years of hands-on experience in delivering enterprise grade data products and AI solutions across the Middle East and GCC, we help enterprises transform from Data Management & Governance to AI-driven solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-[#10353B] hover:bg-[#0a2a2f] text-white group shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#10353B] text-[#10353B] hover:bg-[#10353B] hover:text-white transition-all duration-300">
                    Learn More
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-8">
                  {stats.map((stat, index) => (
                    <AnimatedSection key={stat.label} delay={300 + index * 100}>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <stat.icon className="w-5 h-5 text-[#10353B] mr-2" />
                          <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                        </div>
                        <span className="text-sm text-gray-600">{stat.label}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <div className="relative">
              {/* Main Cards */}
              <div className="space-y-6">
                <AnimatedSection delay={200}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#10353B] to-gray-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform translate-x-6 -translate-y-6"></div>
                    <Brain className="h-16 w-16 text-[#10353B] mb-6 relative z-10" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Agentic AI Solutions</h3>
                    <p className="text-gray-600 relative z-10">A structured pathway to Operationalize AI across your enterprise</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={400}>
                  <div className="bg-gradient-to-br from-[#10353B] to-gray-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Database className="h-16 w-16 text-white mb-6" />
                    <h3 className="text-xl font-bold mb-3">Data Foundation</h3>
                    <p className="text-gray-200">A Controlled Pipeline of Data Management & Governance to AI Production</p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Floating Elements */}
              <AnimatedSection delay={600}>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={800}>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
