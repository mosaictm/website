
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import host from '@/imgs/1.png'
import estate from '@/imgs/2.png'
import lap from '@/imgs//3.jpeg'

const PortfolioSection = () => {
  // Portfolio categories
  const categories = ['الكل', 'مواقع ويب', 'تطبيقات جوال', 'فن رقمي'];
  const [activeCategory, setActiveCategory] = useState('الكل');
  
  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: "إدارة مستشفى",
      category: "مواقع ويب",
      description: "تطوير موقع ويب لإدارة مستشفى بميزات كاملة",
      image: host,
      tags: ["React", "Node.js", "لوحة تحكم"]
    },
    {
      id: 2,
      title: "بيع وشراء العقارات والممتلكات",
      category: "مواقع ويب",
      description: "موقع يمكن الممستخدمين من إيجاد العقارات واستئجارها وبيعها وشرائها",
      image: estate,
      tags: ["React", "Firebase", "Interactive Map"]
    },
    {
      id: 3,
      title: "نمذجة وتصميم لابتوب Lenovo Legion",
      category: "فن رقمي",
      description: "تصميم ونمذجة وتحريك إعلاني ",
      image: lap,
      tags: ["نمذجة 3D", "Blender", "3D Art"]
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'الكل' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
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
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg bg-mosaic-dark/60 border border-mosaic-blue/10 hover:border-mosaic-blue/40 transition-all animate-fade-in"
              style={{ animationDelay: `${(project.id % 3) * 150}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-mosaic-dark to-transparent opacity-70"></div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6 relative">
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
                
                <Button className="w-full bg-mosaic-dark hover:bg-mosaic-blue border border-mosaic-blue/50 text-mosaic-blue hover:text-white transition-all">
                  عرض المشروع
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-outline text-lg">عرض جميع المشاريع</Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
