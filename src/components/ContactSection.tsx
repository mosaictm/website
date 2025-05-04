
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليكم في أقرب وقت ممكن.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="bg-mosaic-dark py-20">
      <div className="container-section">
        <h2 className="section-title">تواصل معنا</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-mosaic-dark/50 border border-mosaic-blue/10 rounded-lg p-6 md:p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                    className="bg-mosaic-dark/70 border-mosaic-blue/20 focus:border-mosaic-blue focus:ring-mosaic-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="bg-mosaic-dark/70 border-mosaic-blue/20 focus:border-mosaic-blue focus:ring-mosaic-blue"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  رقم الجوال
                </label>
                <Input
                  dir='ltr'
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+963 XXX XXX XXX"
                  className="bg-mosaic-dark/70 border-mosaic-blue/20 focus:border-mosaic-blue text-right focus:ring-mosaic-blue"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="bg-mosaic-dark/70 border-mosaic-blue/20 focus:border-mosaic-blue focus:ring-mosaic-blue"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <p className="text-mosaic-gray mb-8">
                نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم اللازم. لا تتردد في التواصل معنا من خلال أي من القنوات التالية.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-mosaic-blue/10 flex items-center justify-center text-mosaic-blue ml-4">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                    <a href="mailto:contact@mosaic-tm.com" className="text-mosaic-blue hover:underline">
                      contact@mosaic-tm.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-mosaic-blue/10 flex items-center justify-center text-mosaic-blue ml-4">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">رقم الهاتف</h4>
                    <a href="tel:+963968167947" className="text-mosaic-blue hover:underline" dir='ltr'>
                      +963 968 167 947
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-mosaic-blue/10 flex items-center justify-center text-mosaic-blue ml-4">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">العنوان</h4>
                    <p className="text-mosaic-gray">
                      سوريا، دمشق
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">تابعنا على</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-mosaic-blue/10 flex items-center justify-center text-mosaic-blue hover:bg-mosaic-blue hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </a>
                
                <a 
                  href="https://www.instagram.com/mosaictm_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mosaic-blue/10 flex items-center justify-center text-mosaic-blue hover:bg-mosaic-blue hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-mosaic-blue/10 flex items-center justify-center text-mosaic-blue hover:bg-mosaic-blue hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
