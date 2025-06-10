import { useState } from "react";
import { Menu, X, Home, Briefcase, Building, Target, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { useScroll, useMotionValueEvent } from "motion/react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  // Track scroll to hide/show main navbar when floating navbar is visible
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setIsFloatingVisible(false);
      } else {
        let direction = current! - scrollYProgress.getPrevious()!;
        if (direction < 0) {
          setIsFloatingVisible(true);
        } else {
          setIsFloatingVisible(false);
        }
      }
    }
  });

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Products & Services", href: "/#services", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Industry Experience", href: "/#solutions", icon: <Building className="h-4 w-4" /> },
    { name: "Mission & Vision", href: "/mission-vision", icon: <Target className="h-4 w-4" /> },
    { name: "About", href: "/#about", icon: <User className="h-4 w-4" /> },
    { name: "Contact", href: "/#contact", icon: <Phone className="h-4 w-4" /> },
  ];

  const floatingNavItems = navItems.map(item => ({
    name: item.name,
    link: item.href,
    icon: item.icon,
  }));

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={floatingNavItems} />

      {/* Original Fixed Navigation - Hidden when floating nav is visible */}
      <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 transition-opacity duration-300 ${isFloatingVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/66767321-c5d7-43bc-9f1a-cc1edd2be2c4.png" 
                  alt="DataU3" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 hover:text-[#10353B] px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-gray-700 hover:text-[#10353B] px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-[#10353B] hover:bg-[#0a2a2f] text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#10353B] p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 hover:text-[#10353B] block px-3 py-2 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-[#10353B] block px-3 py-2 text-base font-medium"
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <Button className="w-full mt-4 bg-[#10353B] hover:bg-[#0a2a2f] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
