
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import FadeInUpAnimation from "@/components/FadeInUpAnimation";
import CountUpAnimation from "@/components/CountUpAnimation";

const Hero = () => {
  const stats = [
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Projects Delivered", suffix: "+" },
    { number: 1, label: "Regional Leader", suffix: "", display: "MEA/GCC" }
  ];

  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      <HeroHighlight containerClassName="bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#10353B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-12 sm:py-16 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <FadeInUpAnimation>
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#10353B]/10 rounded-full text-[#10353B] text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                  Leading Data & AI Transformation
                </div>
              </FadeInUpAnimation>
              
              <FadeInUpAnimation delay={200}>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
                  DataU3
                  <span className="block text-[#10353B] mt-2 sm:mt-4">
                    <Highlight className="text-black dark:text-white bg-gradient-to-r from-[#10353B]/20 to-blue-500/20 dark:from-[#10353B]/40 dark:to-blue-500/40">
                      Data to AI Success
                    </Highlight>
                  </span>
                </h1>
              </FadeInUpAnimation>
              
              <FadeInUpAnimation delay={400}>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
                  Transform your enterprise with <Highlight className="text-black dark:text-white bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-400 dark:to-purple-400">15+ years of proven experience</Highlight> in delivering data and AI solutions across MEA & GCC regions.
                </p>
              </FadeInUpAnimation>
              
              <FadeInUpAnimation delay={600}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
                  <Button size="lg" className="bg-[#10353B] hover:bg-[#0a2a2f] text-white group shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#10353B] text-[#10353B] hover:bg-[#10353B] hover:text-white transition-all duration-300 w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </FadeInUpAnimation>

              {/* Responsive Stats */}
              <FadeInUpAnimation delay={800}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-0">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center py-4 sm:py-0">
                      <div className="text-2xl sm:text-3xl font-bold text-[#10353B] mb-2">
                        {stat.display ? stat.display : (
                          <CountUpAnimation 
                            end={stat.number} 
                            suffix={stat.suffix}
                            duration={2000}
                          />
                        )}
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeInUpAnimation>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default Hero;
