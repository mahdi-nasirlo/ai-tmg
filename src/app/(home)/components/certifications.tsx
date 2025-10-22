import { ShieldCheck, Lock, Server } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: ShieldCheck,
      title: 'گواهینامه‌های مرکز افتا',
      description: 'دارای گواهینامه‌های معتبر از مرکز ملی فضای تولید و تبادل اطلاعات',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'امنیت فیزیکی و محیط پیرامونی',
      description: 'مجوز پیاده‌سازی و اجرای استانداردهای امنیت فیزیکی',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'امن‌سازی زیرساخت‌ها',
      description: 'مجوز امن‌سازی و مقاوم‌سازی سامانه‌ها، زیرساخت‌ها و سرویس‌ها',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">مجوزها و گواهینامه‌ها</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              امنیت و اعتبار در سطح ملی
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              دارای کامل‌ترین مجوزها و گواهینامه‌های لازم برای ارائه خدمات امن و قابل اعتماد
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>

                {/* Bottom Border */}
                <div className={`absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '۱۰۰٪', label: 'رعایت استانداردها' },
                { value: 'ISO', label: 'گواهینامه‌های بین‌المللی' },
                { value: 'رتبه ۱', label: 'شورای عالی انفورماتیک' },
                { value: '۲۴/۷', label: 'پشتیبانی امنیتی' }
              ].map((badge, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {badge.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
