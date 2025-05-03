
import { useEffect, useState } from 'react';

const DynamicBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosaic-dark to-mosaic-dark/95"></div>
      
      {/* Floating hexagons */}
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            right: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 80}px`,
            height: `${30 + Math.random() * 80}px`,
            transform: `rotate(${Math.random() * 360}deg) translateY(${Math.sin(scrollPosition / 1000 + index) * 20}px) translateX(${(mousePosition.x - 0.5) * 10}px)`,
            transition: 'transform 3s ease-out',
          }}
        >
          <svg viewBox="0 0 120 120" fill="currentColor" className="text-mosaic-blue/30 w-full h-full">
            <path d="M60 0L110 30V90L60 120L10 90V30L60 0Z" />
          </svg>
        </div>
      ))}
      
      {/* Light rays */}
      <div 
        className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full blur-[100px] bg-mosaic-blue/5"
        style={{
          transform: `translateY(${scrollPosition * 0.05}px) translateX(${(mousePosition.x - 0.5) * -20}px)`,
        }}
      ></div>
      <div 
        className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] bg-mosaic-blue-light/5"
        style={{
          transform: `translateY(${-scrollPosition * 0.03}px) translateX(${(mousePosition.x - 0.5) * 20}px)`,
        }}
      ></div>
      
      {/* Particle mesh */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(120)].map((_, index) => {
          const size = 1 + Math.random() * 2;
          const opacity = 0.1 + Math.random() * 0.3;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          return (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animation: `pulse ${2 + Math.random() * 4}s infinite alternate`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateX(${(mousePosition.x - 0.5) * index % 5}px) translateY(${(mousePosition.y - 0.5) * index % 5}px)`,
              }}
            ></div>
          );
        })}
      </div>
      
      {/* Color transition based on scroll position */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-mosaic-blue-dark/5 to-mosaic-blue/2 opacity-30 mix-blend-multiply"
        style={{
          opacity: Math.min(0.3, scrollPosition / 3000),
        }}
      ></div>
    </div>
  );
};

export default DynamicBackground;
