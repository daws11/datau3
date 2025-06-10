
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInUpAnimation from "@/components/FadeInUpAnimation";
import CountUpAnimation from "@/components/CountUpAnimation";

const Hero = () => {
  const stats = [
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Projects Delivered", suffix: "+" },
    { number: 1, label: "Regional Leader", suffix: "", display: "MEA/GCC" }
  ];

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#10353B]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUpAnimation>
              <div className="inline-flex items-center px-4 py-2 bg-[#10353B]/10 rounded-full text-[#10353B] text-sm font-medium mb-8">
                Leading Data & AI Transformation
              </div>
            </FadeInUpAnimation>
            
            <FadeInUpAnimation delay={200}>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                DataU3
                <span className="block text-[#10353B] bg-gradient-to-r from-[#10353B] to-gray-600 bg-clip-text text-transparent mt-4">
                  Data to AI Success
                </span>
              </h1>
            </FadeInUpAnimation>
            
            <FadeInUpAnimation delay={400}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                Transform your enterprise with 15+ years of proven experience in delivering data and AI solutions across MEA & GCC regions.
              </p>
            </FadeInUpAnimation>
            
            <FadeInUpAnimation delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button size="lg" className="bg-[#10353B] hover:bg-[#0a2a2f] text-white group shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#10353B] text-[#10353B] hover:bg-[#10353B] hover:text-white transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </FadeInUpAnimation>

            {/* Minimalist Stats */}
            <FadeInUpAnimation delay={800}>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-[#10353B] mb-2">
                      {stat.display ? stat.display : (
                        <CountUpAnimation 
                          end={stat.number} 
                          suffix={stat.suffix}
                          duration={2000}
                        />
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInUpAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
