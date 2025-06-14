
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
    <section id="home" className="pt-16 relative overflow-hidden min-h-screen flex items-center">
      <HeroHighlight containerClassName="bg-gradient-to-br from-gray-50 via-white to-gray-100 h-auto min-h-screen">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#10353B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="py-8 sm:py-12 lg:py-20 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
            <div className="text-center max-w-4xl mx-auto">
              <FadeInUpAnimation>
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#10353B]/10 rounded-full text-[#10353B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  Leading Data & AI Transformation
                </div>
              </FadeInUpAnimation>
              
              <FadeInUpAnimation delay={200}>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 lg:mb-8">
                  DataU3
                  <span className="block text-[#10353B] mt-1 sm:mt-2 lg:mt-4">
                    <Highlight className="text-black dark:text-white bg-gradient-to-r from-[#10353B]/20 to-blue-500/20 dark:from-[#10353B]/40 dark:to-blue-500/40">
                      Data to AI Success
                    </Highlight>
                  </span>
                </h1>
              </FadeInUpAnimation>
              
              <FadeInUpAnimation delay={400}>
                <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
                  Transform your enterprise with <Highlight className="text-black dark:text-white bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-400 dark:to-purple-400">15+ years of proven experience</Highlight> in delivering data and AI solutions across MEA & GCC regions.
                </p>
              </FadeInUpAnimation>
              
              <FadeInUpAnimation delay={600}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
                  <Button size="lg" className="bg-[#10353B] hover:bg-[#0a2a2f] text-white group shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#10353B] text-[#10353B] hover:bg-[#10353B] hover:text-white transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                    Learn More
                  </Button>
                </div>
              </FadeInUpAnimation>

              {/* Responsive Stats */}
              <FadeInUpAnimation delay={800}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4 sm:px-0">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center py-3 sm:py-4 border-b sm:border-b-0 last:border-b-0 sm:border-r sm:last:border-r-0 border-gray-200">
                      <div className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold text-[#10353B] mb-1 sm:mb-2">
                        {stat.display ? stat.display : (
                          <CountUpAnimation 
                            end={stat.number} 
                            suffix={stat.suffix}
                            duration={2000}
                          />
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-tight px-2 sm:px-0">{stat.label}</div>
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
