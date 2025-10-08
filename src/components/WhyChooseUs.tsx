import { Award, Clock, Shield, Users, TrendingUp, Database } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'بیش از یک دهه تجربه در اجرای پروژه‌های ملی',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'دارنده رتبه ۱ شورای عالی انفورماتیک',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'ارائه خدمات بدون وقفه و پشتیبانی مداوم',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'تیم متخصص با بیش از ۵۰۰ نفر نیروی فنی مجرب',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'رعایت کامل محرمانگی و امنیت اطلاعات مشتریان',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'تحلیل و طراحی بیش از ۸۰ سامانه ملی',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              چرا داده پردازان بنیان آوا؟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              با اعتماد بیش از صدها سازمان دولتی و خصوصی، ما را به عنوان شریک مطمئن خود در مسیر تحول دیجیتال انتخاب کنید
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-relaxed">
                  {feature.title}
                </h3>

                {/* Decorative Line */}
                <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                آماده شروع پروژه جدید هستید؟
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                تیم متخصصان ما آماده است تا بهترین راهکارهای فناوری را برای سازمان شما ارائه دهد
              </p>
              <a
                href="#contact"
                className="btn-neon inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl"
              >
                تماس با ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
