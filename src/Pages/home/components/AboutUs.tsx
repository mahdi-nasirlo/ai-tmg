import { Building2, ChevronLeft } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">درباره ما</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              پیشگامان فناوری اطلاعات و هوش مصنوعی در ایران
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in-right">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                شرکت داده‌پردازان بنیان آوا از دهه ۸۰ فعالیت خود را با اخذ مجوز رسمی از شورای عالی انفورماتیک آغاز نمود و تاکنون به عنوان یکی از شرکت‌های پیشرو در زمینه فناوری اطلاعات مشغول به فعالیت است.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                ارائه خدمات فنی شامل طراحی، مشاوره، نصب و راه‌اندازی شبکه توسط کارشناسان مجرب، همراه با عرضه نوآوری‌ها و فناوری‌های نوین، باعث شده شرکت به عنوان یکی از بزرگ‌ترین و قابل اعتمادترین بازیگران این حوزه شناخته شود.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#ai-services"
                  className="btn-neon group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl"
                >
                  مشاهده خدمات
                  <ChevronLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="btn-neon inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
                >
                  درخواست مشاوره
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl card-hover">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: '🏆', title: 'رتبه ۱', subtitle: 'شورای عالی انفورماتیک' },
                      { icon: '📊', title: '+۸۰', subtitle: 'سامانه ملی' },
                      { icon: '👥', title: '+۵۰۰', subtitle: 'کارشناس متخصص' },
                      { icon: '⭐', title: '%۹۵', subtitle: 'رضایت مشتریان' }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center card-hover border border-white/20"
                      >
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <div className="text-2xl font-bold text-white mb-1">{item.title}</div>
                        <div className="text-white/80 text-sm">{item.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
