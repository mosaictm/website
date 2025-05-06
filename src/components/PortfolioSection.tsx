import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// Assuming these imports resolve to string paths based on previous errors
import host from '@/imgs/1.jpg';
import estate from '@/imgs/2.jpg';
import lap from '@/imgs/3.jpg'; // Corrected double slash
import ProjectModal, {Project} from '@/components/ProjectModal'; // Import default and named Project type


// Define fade-in animation in your globals.css or tailwind.config.js if needed

const PortfolioSection = () => {
  const categories = ['الكل', 'مواقع ويب', 'تطبيقات جوال', 'فن رقمي'];
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Use Project type

  // Define project data - Using Project type
  const projects: Project[] = [
     {
      id: 1,
      title: "إدارة مستشفى",
      category: "مواقع ويب",
      description: "تطوير موقع ويب لإدارة مستشفى بميزات كاملة. يشمل النظام إدارة المرضى، المواعيد، الأطباء، الفواتير، والمخزون الطبي. يوفر لوحة تحكم شاملة للموظفين وتقارير مفصلة للإدارة.",
      image: host, // Use the imported string directly
      screenshots: [host, host, host], // Use strings directly
      liveLink: "https://example-hospital.com",
      tags: ["React", "Node.js", "لوحة تحكم"]
    },
    {
      id: 2,
      title: "بيع وشراء العقارات والممتلكات",
      category: "مواقع ويب",
      description: "موقع يمكن المستخدمين من إيجاد العقارات واستئجارها وبيعها وشرائها بسهولة. يتميز بخريطة تفاعلية، بحث متقدم، ونظام إدارة للمستخدمين والوكلاء العقاريين.",
      image: estate, // Use the imported string directly
      screenshots: [estate, host, lap], // Use strings directly
      liveLink: "https://example-realestate.com",
      tags: ["React", "Firebase", "Interactive Map"]
    },
    {
      id: 3,
      title: "نمذجة وتصميم لابتوب Lenovo Legion",
      category: "فن رقمي",
      description: "تصميم ونمذجة ثلاثية الأبعاد للابتوب Lenovo Legion، مع تحريك إعلاني قصير يبرز تفاصيل التصميم ومميزاته. تم العمل باستخدام Blender.",
      image: lap, // Use the imported string directly
      screenshots: [lap, host, estate], // Use strings directly
      liveLink: null,
      tags: ["نمذجة 3D", "Blender", "3D Art"]
    }
  ];

   const filteredProjects = activeCategory === 'الكل'
    ? projects
    : projects.filter(project => project.category === activeCategory);


  // Function to open the modal
  const handleShowProject = (project: Project) => { // Use Project type
    setSelectedProject(project);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

   // Add listener for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { // Added type
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);


  return (
    <>
      <section id="portfolio" className="bg-mosaic-dark py-20">
        <div className="container-section">
          <h2 className="section-title">أعمالنا</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-mosaic-blue text-white'
                    : 'bg-mosaic-dark/50 border border-mosaic-blue/30 hover:border-mosaic-blue/50 text-mosaic-gray'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* --- MODIFICATION START --- */}
            {filteredProjects.map((project) => {
                const bgImageUrl = project.image; // Already a string
                return (
                    <div
                      key={project.id}
                      // 1. Add flex flex-col to make the card a vertical flex container
                      className="group relative flex flex-col overflow-hidden rounded-lg bg-mosaic-dark/60 border border-mosaic-blue/10 hover:border-mosaic-blue/40 transition-all animate-fade-in"
                      style={{ animationDelay: `${(project.id % 3) * 150}ms` }}
                    >
                      {/* Project Image - Add flex-shrink-0 to prevent image shrinking */}
                      <div className="aspect-video overflow-hidden flex-shrink-0">
                          <div
                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                            style={{ backgroundImage: `url(${bgImageUrl})` }}
                          >
                            <div className="w-full h-full bg-gradient-to-t from-mosaic-dark to-transparent opacity-70"></div>
                          </div>
                      </div>

                      {/* Project Details */}
                      {/* 2. Add flex flex-col flex-grow to make details section fill remaining space vertically */}
                      <div className="pt-6 px-6 pb-4 relative flex flex-col flex-grow">
                          {/* Content Wrapper - This part will take up available space */}
                          <div className="flex-grow">
                              <span className="inline-block px-3 py-1 text-xs rounded-full bg-mosaic-blue/20 text-mosaic-blue mb-4">
                              {project.category}
                              </span>
                              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                              <p className="text-mosaic-gray text-sm mb-4 line-clamp-2">{project.description}</p>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, idx) => (
                                  <span key={idx} className="text-xs px-2 py-1 bg-mosaic-blue/10 text-mosaic-gray rounded">
                                  {tag}
                                  </span>
                              ))}
                              </div>
                          </div>

                          {/* Button Wrapper - 3. Add mt-auto to push the button to the bottom */}
                          <div className="mt-auto">
                              <Button
                                onClick={() => handleShowProject(project)}
                                className="w-full bg-mosaic-dark hover:bg-mosaic-blue border border-mosaic-blue/50 text-mosaic-blue hover:text-white transition-all"
                              >
                                عرض المشروع
                              </Button>
                          </div>
                      </div>
                    </div>
                );
             })}
             {/* --- MODIFICATION END --- */}
          </div>

          <div className="mt-12 text-center">
            <Button className="btn-outline text-lg">عرض جميع المشاريع</Button>
          </div>
        </div>
      </section>

      {/* Conditionally render the Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default PortfolioSection;