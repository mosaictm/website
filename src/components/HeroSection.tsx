import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import logoCropped from '@/imgs/logoPNG.png';

const HeroSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();
  // Use a single ref for the logo container, the visibility check applies to the container
  const { ref: logoContainerRef, isVisible: logoVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="home" className="relative min-h-screen bg-transparent flex items-center">
      {/* Background elements (unchanged) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-mosaic-blue/20 rounded-full blur-[100px] animate-pulse-light parallax-element"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-mosaic-blue-light/20 rounded-full blur-[80px] animate-pulse-light"
             style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hexagon patterns (unchanged) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-20 animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M60 0L110 30V90L60 120L10 90V30L60 0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-40 animate-float-slow" style={{ animationDelay: '1s' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
            <path d="M60 0L110 30V90L60 120L10 90V30L60 0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <svg width="60" height="60" viewBox="0 0 120 120" fill="none">
            <path d="M60 0L110 30V90L60 120L10 90V30L60 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Container with the grid layout */}
      <div className="container-section relative z-10"> {/* Ensure container has relative positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Column */}
          <div
            ref={textRef}
             // Added relative and z-10 to ensure text is on top
            className={`relative z-10 order-2 md:order-1 transition-all duration-1000 delay-300 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">نحوّل رؤيتك إلى</span>
              <span className="text-mosaic-blue-light"> تجربة رقمية مذهلة</span>
            </h1>
            <p className="text-lg text-mosaic-gray mb-8">
              فريق متخصص في تطوير المواقع الإلكترونية، تطبيقات الجوال، والفن الرقمي المبتكر. نقدم حلولاً مخصصة تناسب احتياجاتك الفريدة.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary text-lg relative overflow-hidden group">
                <span className="relative z-10">تواصل معنا</span>
                <span className="absolute inset-0 bg-mosaic-blue-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="border-mosaic-gray text-mosaic-gray hover:bg-mosaic-gray/10 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">تعرّف علينا</span>
                <span className="absolute inset-0 bg-mosaic-gray/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Button>
            </div>
            <div className="mt-8">
              <div className="tagline-container mb-4">
                <p className="tagline-text">Your Vision, Our Solution</p>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                {['ويب', 'جوال', 'فن رقمي'].map((service, index) => (
                  <div
                    key={index}
                    className="service-item"
                    style={{
                      transitionDelay: `${700 + index * 200}ms`,
                      opacity: textVisible ? 1 : 0,
                      transform: textVisible ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <div className="service-indicator"></div>
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo Column */}
          <div
            ref={logoContainerRef} // Apply ref to the container
            // Added relative and default z-index (or z-0) for this grid cell
            className={`relative z-0 order-1 md:order-2 hidden md:flex justify-center items-center transition-all duration-1000 ${ // Added items-center
              logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
            }`}
          >
            {/* --- This is the main visual logo --- */}
            <div className="relative w-80 h-80 md:w-80 md:h-80 animate-float-slow parallax-element z-0"> {/* Explicit z-0 */}
              <img src={logoCropped} alt="Mosaic Logo" className="w-full h-full object-contain scale-[1.5]" />
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-mosaic-blue/20 rounded-full blur-lg animate-pulse-light"></div>
              <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-24 h-24 bg-mosaic-blue/30 rounded-full blur-xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* --- This is the large background logo --- */}
            {/* Added absolute positioning *within the grid cell*, inset-0, and -z-10 */}
            <div className="absolute inset-0 flex justify-center items-center w-full h-full animate-float-slow parallax-element -z-10 pointer-events-none">
              {/* Wrapped the image and its decoratives in a relative div for positioning */}
              <div className="relative w-80 h-80"> {/* Control size here */}
                  <img src={logoCropped} alt="Mosaic Logo Background" className="w-full h-full object-contain scale-[8] opacity-15" />
                  {/* Decorative elements for the background logo */}
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-mosaic-blue/20 rounded-full blur-lg animate-pulse-light"></div>
                  <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-24 h-24 bg-mosaic-blue/30 rounded-full blur-xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>

        </div> {/* End Grid */}
      </div> {/* End Container */}
    </section>
  );
};

export default HeroSection;