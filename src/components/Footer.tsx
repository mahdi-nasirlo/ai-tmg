import { Brain, Phone, Mail, MapPin, ChevronLeft } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'خدمات هوش مصنوعی', href: '#ai-services' },
    { label: 'پروژه‌ها', href: '#projects' },
    { label: 'بلاگ تخصصی', href: '#blog' },
    { label: 'همکاری با ما', href: '#careers' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl neon-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">داده پردازان بنیان آوا</h3>
                <p className="text-white/70 text-sm">پیشگامان هوش مصنوعی</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              شرکت داده‌پردازان بنیان آوا با بیش از ۵۰۰ نیروی متخصص و تجربه اجرای بیش از ۱۰۰ پروژه ملی، یکی از شرکت‌های پیشرو در عرصه نرم‌افزار، شبکه و هوش مصنوعی است.
            </p>
            <a
              href="#ai-services"
              className="btn-neon inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl"
            >
              مشاهده خدمات
              <ChevronLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-left stagger-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              تماس با ما
            </h4>
            <div className="space-y-4">
              <a href="tel:02122222711" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-white/60">تلفن:</div>
                  <div className="font-medium">۰۲۱-۲۲۲۲۲۷۱۱</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <Phone className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <div className="text-sm text-white/60">فکس:</div>
                  <div className="font-medium">۰۲۱-۲۲۹۰۴۶۵۶</div>
                </div>
              </div>
              <a href="mailto:info@bonyanava.ir" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 mt-0.5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-white/60">ایمیل:</div>
                  <div className="font-medium">info@bonyanava.ir</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left stagger-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              دسترسی سریع
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address */}
        <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in">
          <div className="flex items-start gap-3 text-white/80 max-w-3xl">
            <MapPin className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
            <div>
              <div className="text-sm text-white/60 mb-1">آدرس:</div>
              <div className="leading-relaxed">
                تهران، اتوبان مدرس (شمال)، خیابان شهید دستگردی، خیابان فرید افشار، کوچه محیا، پلاک ۳
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div className="animate-fade-in">
              © ۱۴۰۳ داده پردازان بنیان آوا. تمامی حقوق محفوظ است.
            </div>
            <div className="flex gap-6 animate-fade-in">
              <a href="#" className="hover:text-white transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-white transition-colors">
                شرایط استفاده
              </a>
              <a href="#" className="hover:text-white transition-colors">
                سوالات متداول
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
