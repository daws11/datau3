
import { ArrowRight, Database, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Business with
                <span className="text-blue-600 block">Data & AI Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We empower organizations to unlock the full potential of their data through expert consulting, 
                robust data foundations, and cutting-edge AI implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                  <Database className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Foundation</h3>
                  <p className="text-gray-600">Build robust, scalable data infrastructure that grows with your business</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Brain className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Solutions</h3>
                  <p className="text-gray-600">Implement intelligent systems that drive innovation and efficiency</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <TrendingUp className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Growth</h3>
                  <p className="text-gray-600">Accelerate growth through data-driven insights and strategies</p>
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
