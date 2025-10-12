import { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ThumbsUp,
} from "lucide-react";

export default function Statistics() {
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        if (count <= 95) {
          setSatisfaction(count);
          count++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "+۱۰۰,۰۰۰",
      label: "کاربر فعال",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      value: "+۵۰۰,۰۰۰",
      label: "درخواست پردازش شده",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "%۳۵",
      label: "کاهش زمان پاسخگویی",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      value: "۴.۸/۵",
      label: "امتیاز رضایت مندی",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const features = [
    { icon: "🎯", title: "دقت بالا", value: "%۹۸" },
    { icon: "⚡", title: "سرعت پردازش", value: "< ۱s" },
    { icon: "🔒", title: "امنیت", value: "۱۰۰%" },
    { icon: "📱", title: "دسترسی ۲۴/۷", value: "فعال" },
  ];

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <BarChart3 className="w-5 h-5" />
          <span className="font-semibold">اطلاعات آماری</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          عملکرد سیستم‌های هوشمند ما
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          نتایج واقعی از پیاده‌سازی سرویس‌های هوش مصنوعی در سازمان‌های مختلف
        </p>
      </div>

      {/* Main Satisfaction Stat */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 shadow-2xl text-center card-hover">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ThumbsUp className="w-12 h-12 text-white" />
          </div>
          <div className="text-7xl md:text-8xl font-bold text-white mb-4 neon-text">
            {satisfaction}%
          </div>
          <p className="text-2xl text-white font-semibold mb-2">
            کاربران جواب سوال‌شان را به طور کامل گرفتند
          </p>
          <p className="text-white/80">
            بر اساس نظرسنجی از بیش از ۵۰,۰۰۰ تعامل با سیستم
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ویژگی‌های کلیدی سیستم
          </h4>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <div className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {feature.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              آماده‌اید تا تجربه این سرویس‌ها را داشته باشید؟
            </p>
            <a
              href="#contact"
              className="btn-neon inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl"
            >
              شروع همکاری
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
