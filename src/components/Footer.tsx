
import { Button } from '@/components/ui/button';
import logo from '@/imgs/logoDarkTheme.svg'

const Footer = () => {
  return (
    <footer className="bg-mosaic-dark/95 border-t border-mosaic-blue/10 py-12 scroll-snap-start scroll-mt-[-1rem] pt-16 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-glow">
                <img src={logo} alt="" />
              </div>
              <span className="text-lg font-bold text-white">Mosaic Team</span>
            </div>
            <p className="text-mosaic-gray text-sm mb-6">
              فريق متخصص في تطوير المواقع، تطبيقات الجوال، والفن الرقمي المبتكر.
            </p>
            <div className="tagline-container mb-4">
              <p className="tagline-text">Your Vision, Our Solution</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية', id: 'home' },
                { name: 'من نحن', id: 'about' },
                { name: 'خدماتنا', id: 'services' },
                { name: 'أعمالنا', id: 'portfolio' },
                { name: 'تواصل معنا', id: 'contact' }
              ].map((item, index) => (
                <li key={index} className="transition-all duration-200 hover:translate-x-2">
                  <a 
                    href={`#${item.id}`} 
                    className="text-mosaic-gray hover:text-mosaic-blue transition-colors duration-200 text-sm flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-mosaic-blue rounded-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                'تصميم وتطوير مواقع الويب',
                'تطوير تطبيقات الجوال',
                'الفن الرقمي والإنفوجرافيك',
                'تحسين محركات البحث',
                'الهوية البصرية'
              ].map((item, index) => (
                <li key={index} className="transition-all duration-200 hover:translate-x-2">
                  <a 
                    href="#services" 
                    className="text-mosaic-gray hover:text-mosaic-blue transition-colors duration-200 text-sm flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-mosaic-blue rounded-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">النشرة البريدية</h4>
            <p className="text-mosaic-gray text-sm mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والعروض.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-mosaic-dark border border-mosaic-blue/20 focus:border-mosaic-blue rounded-r-none rounded-l-md px-4 py-2 w-1/2 md:w-full text-sm focus:outline-none"
              />
              <Button className="rounded-r-md rounded-l-none bg-mosaic-blue hover:bg-mosaic-blue-dark border-mosaic-blue">
                اشتراك
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-mosaic-blue/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mosaic-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mosaic Team. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex space-x-4 space-x-reverse">
            <Button 
              variant="link" 
              className="text-mosaic-gray hover:text-mosaic-blue text-sm p-0"
              onClick={() => {
                document.getElementById("privacy-policy")?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              سياسة الخصوصية
            </Button>
            <Button 
              variant="link" 
              className="text-mosaic-gray hover:text-mosaic-blue text-sm p-0"
              onClick={() => {
                document.getElementById("terms-conditions")?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              الشروط والأحكام
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
