// src/components/ProjectModal.tsx
import React, { useState, useEffect, useCallback } from 'react'; // Added useState, useCallback
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Added Chevron icons
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import Autoplay plugin

// Define the structure of your project data for TypeScript
export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    screenshots?: string[];
    liveLink?: string | null;
    tags: string[];
  }

// Define the props expected by the ProjectModal component
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // --- Embla Carousel Setup ---
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, // Loop enabled, align slides to start
    [Autoplay({ delay: 4000, stopOnInteraction: true })] // Autoplay plugin
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Call on init
    emblaApi.on('select', onSelect); // Re-run when slide changes
    emblaApi.on('reInit', onSelect); // Re-run on re-initialization
    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);
  // --- End Embla Carousel Setup ---

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicks inside the modal from closing it
    e.stopPropagation();
  };

  if (!project) {
    return null;
  }

  console.log(project);
  

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  console.log("Modal Screenshots:", project?.screenshots);
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={handleOutsideClick}
    >
      {/* Modal Content Box */}
      <div
        // REMOVED h-full, added max-h-[95vh] for mobile safety
        className="bg-mosaic-dark w-full max-h-[95vh] sm:h-auto sm:max-h-[90vh] sm:max-w-3xl rounded-lg shadow-xl flex flex-col border border-mosaic-blue/20 overflow-hidden"
        onClick={handleContentClick}
      >
        {/* Close Button Row */}
        <div className="flex justify-start p-2 border-b border-mosaic-blue/10 flex-shrink-0">
          <button
            onClick={onClose}
            className="text-mosaic-gray hover:text-white p-1 rounded-full hover:bg-mosaic-blue/30 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Scrollable Content Area */}
        <div className="flex flex-col flex-grow overflow-y-auto">
          {/* Header */}
          <div className="p-6 flex-shrink-0">
            <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
            <p className="text-mosaic-gray text-sm">{project.description}</p>
          </div>

          {/* Body (Screenshots - Now Embla Carousel) */}
          <div className="px-6 pt-2 pb-6 flex-grow"> {/* Adjusted padding */}
            <h3 className="text-lg font-semibold mb-4 text-white">لقطات من المشروع</h3>

            {hasScreenshots ? (
              <div className="relative"> {/* Added relative positioning for buttons */}
                {/* Embla Carousel Structure */}
                <div className="overflow-hidden rounded-md border border-mosaic-blue/10" ref={emblaRef}>
                  <div className="flex"> {/* Embla container */}
                    {project.screenshots!.map((screenshotUrl, index) => (
                      <div className="flex-[0_0_100%] min-w-0 aspect-video" key={index}> {/* Embla slide */}
                        <img
                          src={screenshotUrl}
                          alt={`${project.title} Screenshot ${index + 1}`}
                          className="w-full h-full object-cover" // Ensure image covers slide area
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev Button */}
                 <button
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  aria-label="Previous Screenshot"
                 >
                  <ChevronLeft size={24} />
                 </button>

                 {/* Next Button */}
                 <button
                   className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                   onClick={scrollNext}
                   disabled={nextBtnDisabled}
                   aria-label="Next Screenshot"
                 >
                   <ChevronRight size={24} />
                 </button>

              </div>
            ) : (
              <p className="text-mosaic-gray italic">لا توجد لقطات متاحة.</p>
            )}
          </div>

          {/* Footer (Link) */}
          {project.liveLink && (
            <div className="p-6 border-t border-mosaic-blue/10 mt-auto flex-shrink-0">
               <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
               >
                  <Button className="w-full bg-mosaic-blue hover:bg-opacity-80 text-white">
                      زيارة الموقع التجريبي
                  </Button>
               </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;