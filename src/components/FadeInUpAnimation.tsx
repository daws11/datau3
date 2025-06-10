
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FadeInUpAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeInUpAnimation: React.FC<FadeInUpAnimationProps> = ({ 
  children, 
  delay = 0, 
  className = '' 
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  );
};

export default FadeInUpAnimation;
