import { useState, useEffect } from "react";
import { ChevronLeft, Sparkles } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "هوش مصنوعی در خدمت تحول دیجیتال سازمان‌ها";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-sm font-medium">
              سرویس‌های هوش مصنوعی
            </span>
          </div>

          {/* Headline with Typing Effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="neon-text">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up stagger-2 text-pretty">
            شرکت داده‌پردازان بنیان آوا با بیش از یک دهه تجربه در طراحی و توسعه
            سامانه‌های ملی، اکنون با ارائه سرویس‌های هوش مصنوعی پیشرفته شامل
            تبدیل گفتار به متن، دستیار هوشمند، تشخیص چهره، تشخیص پلاک خودرو و
            پشتیبانی هوشمند، همراه مطمئن سازمان‌ها در مسیر آینده دیجیتال است.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up stagger-3">
            <a
              href="#ai-services"
              className="btn-neon group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 flex items-center gap-2"
            >
              مشاهده سرویس‌ها
              <ChevronLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-neon bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              درخواست مشاوره
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in stagger-4">
            {[
              { label: "سال تجربه", value: "+10" },
              { label: "پروژه ملی", value: "+100" },
              { label: "کارشناس متخصص", value: "+500" },
              { label: "رضایت مشتریان", value: "%95" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
