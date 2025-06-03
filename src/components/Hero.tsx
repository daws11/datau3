
import { ArrowRight, Database, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                DataU3
                <span className="text-yellow-500 block">from Data to AI-enabled & Business success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With 15+ years of hands-on experience in delivering enterprise grade data products and AI solutions across the Middle East and GCC, we help enterprises transform from Data Management & Governance to AI-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                  <Brain className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agentic AI Solutions</h3>
                  <p className="text-gray-600">A structured pathway to Operationalize AI across your enterprise</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Database className="h-12 w-12 text-emerald-600 mb-4" />
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
