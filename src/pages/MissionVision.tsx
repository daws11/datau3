
import { Flag, Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Vision and <span className="text-[#10353B]">Mission</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering organizations to unlock the full potential of their data
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision Section */}
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#10353B] rounded-xl flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower organizations to unlock the full potential of their data by bridging the gap between 
                    data and Business impact
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Mission Section */}
            <AnimatedSection delay={400}>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#10353B] rounded-xl flex items-center justify-center mr-4">
                    <Flag className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the trusted partner for organizations navigating the journey from data to AI, transforming 
                    raw data into actionable insights and intelligent solutions that drive business success.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Visual Element - Mountain Illustration */}
          <AnimatedSection delay={600}>
            <div className="mt-20 text-center">
              <div className="relative inline-block">
                <div className="w-96 h-64 mx-auto relative">
                  {/* Mountain SVG */}
                  <svg className="w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background mountains */}
                    <path d="M0 200 L100 120 L200 160 L300 100 L400 140 L400 250 L0 250 Z" fill="#10353B" opacity="0.8"/>
                    <path d="M50 220 L150 140 L250 180 L350 120 L400 160 L400 250 L0 250 Z" fill="#10353B" opacity="0.6"/>
                    <path d="M100 240 L200 160 L300 200 L400 180 L400 250 L0 250 Z" fill="#10353B" opacity="0.4"/>
                    
                    {/* Main mountain with path */}
                    <path d="M120 240 L200 80 L280 240 Z" fill="#10353B"/>
                    <path d="M200 80 Q220 140 240 200" stroke="#FFC107" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                    
                    {/* Flag at peak */}
                    <circle cx="200" cy="80" r="4" fill="#FFC107"/>
                    <rect x="202" y="75" width="20" height="12" fill="#FFC107"/>
                    <line x1="200" y1="80" x2="200" y2="65" stroke="#333" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="mt-8 text-gray-600">
                  <p className="text-lg italic">
                    "Bridging the gap between data potential and business impact"
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionVision;
