/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Layers,
  MessageSquare,
  Brain,
  Languages,
  Workflow,
  FileEdit,
  Calendar,
  Map,
  Bell,
  Headphones,
  ShoppingCart,
  Users,
  AlertTriangle,
  Mic,
  ScanFace,
  Car,
  Eye,
  Shield,
  FileSignature,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router";

interface Service {
  id: string;
  title: string;
  icon: any;
  description: string;
  tags?: string[];
  link: string;
}

interface Category {
  id: string;
  title: string;
  icon: any;
  color: string;
  services: Service[];
}

export default function ServicesModules() {
  const [activeCategory, setActiveCategory] = useState("general");

  const categories: Category[] = [
    {
      id: "general",
      title: "ماژول‌های عمومی",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          id: "workflow",
          title: "ماژول ورک‌فلو",
          icon: Workflow,
          description:
            "مدیریت و اتوماسیون فرآیندهای سازمانی با قابلیت طراحی گردش کار پیشرفته",
          tags: ["اتوماسیون", "مدیریت فرآیند"],
          link: "#/modules/workflow",
        },
        {
          id: "form-builder",
          title: "فرم‌ساز پیشرفته",
          icon: FileEdit,
          description:
            "ساخت فرم‌های دینامیک با امکان اعتبارسنجی و ارسال خودکار",
          tags: ["فرم", "داینامیک"],
          link: "#/modules/form-builder",
        },
        {
          id: "calendar",
          title: "ماژول تقویم",
          icon: Calendar,
          description:
            "مدیریت رویدادها و برنامه‌ریزی با پشتیبانی از تقویم شمسی و میلادی",
          tags: ["زمان‌بندی", "رویداد"],
          link: "#/modules/calendar",
        },
        {
          id: "map",
          title: "ماژول نقشه",
          icon: Map,
          description:
            "نمایش و مدیریت اطلاعات مکانی با قابلیت مسیریابی و جستجوی موقعیت",
          tags: ["مکان", "جغرافیا"],
          link: "#/modules/map",
        },
        {
          id: "notification",
          title: "مدیریت اعلان و نوتیفیکیشن",
          icon: Bell,
          description: "سیستم جامع ارسال و مدیریت اعلان‌ها در کانال‌های مختلف",
          tags: ["اعلان", "پوش"],
          link: "#/modules/notification",
        },
      ],
    },
    {
      id: "assistant",
      title: "سرویس‌های دستیار هوشمند",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          id: "chatbot-samen",
          title: "چت‌بات پشتیبانی ثامن",
          icon: Headphones,
          description:
            "دستیار هوشمند اختصاصی برای پاسخگویی به سوالات سامانه ثامن",
          tags: ["چت‌بات", "ثامن"],
          link: "#/services/chatbot-samen",
        },
        {
          id: "chatbot-trade",
          title: "پشتیبانی سامانه تجارت",
          icon: ShoppingCart,
          description: "پشتیبانی هوشمند برای فرآیندهای تجاری و معاملات",
          tags: ["تجارت", "معاملات"],
          link: "#/services/chatbot-trade",
        },
        {
          id: "chatbot-hr",
          title: "چت‌بات فرایند جذب و استخدام",
          icon: Users,
          description:
            "دستیار هوشمند برای مدیریت فرآیند استخدام و پاسخگویی به متقاضیان",
          tags: ["استخدام", "منابع انسانی"],
          link: "#/services/chatbot-hr",
        },
        {
          id: "fraud-detection",
          title: "پشتیبانی تراکنش‌های مشکوک",
          icon: AlertTriangle,
          description: "شناسایی و مدیریت تراکنش‌های مشکوک با هوش مصنوعی",
          tags: ["امنیت", "تشخیص کلاهبرداری"],
          link: "#/services/fraud-detection",
        },
        {
          id: "cargo-support",
          title: "پشتیبانی درگاه ملی حمل بار",
          icon: Layers,
          description:
            "دستیار هوشمند برای پاسخگویی به سوالات درگاه ملی حمل بار",
          tags: ["حمل و نقل", "لجستیک"],
          link: "#/services/cargo-support",
        },
      ],
    },
    {
      id: "ai",
      title: "سرویس‌های هوش مصنوعی",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          id: "speech-to-text",
          title: "تبدیل صوت به متن",
          icon: Mic,
          description:
            "تبدیل گفتار به متن با دقت بالا و پشتیبانی از زبان فارسی",
          tags: ["صوت", "پردازش گفتار"],
          link: "#/services/speech-to-text",
        },
        {
          id: "face-recognition",
          title: "تشخیص چهره",
          icon: ScanFace,
          description:
            "شناسایی و تطبیق چهره با دقت بالا برای کنترل دسترسی و امنیت",
          tags: ["بیومتریک", "امنیت"],
          link: "#/services/face-recognition",
        },
        {
          id: "plate-recognition",
          title: "تشخیص پلاک خودرو",
          icon: Car,
          description: "شناسایی خودکار پلاک خودروها با دقت بالا",
          tags: ["پلاک", "خودرو"],
          link: "#/services/plate-recognition",
        },
        {
          id: "vehicle-detection",
          title: "تشخیص ماشین و مدل",
          icon: Car,
          description: "شناسایی نوع، برند و مدل خودرو از روی تصویر",
          tags: ["خودرو", "شناسایی"],
          link: "#/services/vehicle-detection",
        },
        {
          id: "object-detection",
          title: "تشخیص اشیاء",
          icon: Eye,
          description: "شناسایی و دسته‌بندی اشیاء مختلف در تصاویر و ویدیوها",
          tags: ["بینایی ماشین", "شناسایی"],
          link: "#/services/object-detection",
        },
        {
          id: "weapon-detection",
          title: "تشخیص اسلحه",
          icon: Shield,
          description: "شناسایی خودکار اسلحه و ابزار خطرناک برای افزایش امنیت",
          tags: ["امنیت", "هشدار"],
          link: "#/services/weapon-detection",
        },
        {
          id: "signature-recognition",
          title: "تشخیص امضا",
          icon: FileSignature,
          description: "احراز هویت و تطبیق امضا با استفاده از یادگیری عمیق",
          tags: ["امضا", "احراز هویت"],
          link: "#/services/signature-recognition",
        },
      ],
    },
    {
      id: "language",
      title: "سرویس‌های زبانی",
      icon: Languages,
      color: "from-orange-500 to-red-500",
      services: [
        {
          id: "deepseek",
          title: "DeepSeek",
          icon: Sparkles,
          description:
            "مدل زبانی پیشرفته برای پردازش و تولید متن با کیفیت بالا",
          tags: ["LLM", "تولید متن"],
          link: "#/services/deepseek",
        },
        {
          id: "qwen",
          title: "Qwen",
          icon: Sparkles,
          description: "مدل زبانی چندزبانه با قابلیت‌های پیشرفته درک متن",
          tags: ["LLM", "چندزبانه"],
          link: "#/services/qwen",
        },
        {
          id: "llama",
          title: "LLaMA",
          icon: Sparkles,
          description: "مدل زبانی قدرتمند متن‌باز برای کاربردهای متنوع",
          tags: ["LLM", "متن‌باز"],
          link: "#/services/llama",
        },
        {
          id: "dorna",
          title: "Dorna",
          icon: Sparkles,
          description:
            "مدل زبانی فارسی بومی با درک عمیق از زبان و فرهنگ ایرانی",
          tags: ["LLM", "فارسی"],
          link: "#/services/dorna",
        },
        {
          id: "gpt",
          title: "GPT",
          icon: Sparkles,
          description: "مدل زبانی پیشرفته GPT برای گفتگوی طبیعی و هوشمند",
          tags: ["LLM", "گفتگو"],
          link: "#/services/gpt",
        },
      ],
    },
  ];

  const activeServices =
    categories.find((cat) => cat.id === activeCategory)?.services || [];
  const activeCategoryData = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
              <Layers className="w-5 h-5 text-blue-600" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm">
                ماژول‌ها و سرویس‌ها
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              مستندات و راهنمای سرویس‌ها
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مجموعه کامل ماژول‌ها و سرویس‌های قابل ارائه برای پاسخگویی به
              نیازهای متنوع سازمان شما
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 animate-scale-in ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? "bg-white/20"
                      : "bg-gray-100"
                  }`}
                >
                  {category.services.length}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeServices.map((service, index) => (
              <a
                key={service.id}
                href={service.link}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-transparent transition-all duration-500 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Neon glow background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activeCategoryData?.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Animated border glow */}
                {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activeCategoryData?.color} blur-xl opacity-60`}
                  ></div>
                </div> */}

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${activeCategoryData?.color} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title with neon effect */}
                  <NavLink to="/service/test">
                    <h3 className="text-xl font-bold text-gray-900 mb-3  group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                  </NavLink>

                  {/* Description */}
                  <p className="min-h-12 text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Tags with neon effect */}
                  {service.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${activeCategoryData?.color} group-hover:shadow-lg`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* View More Link with arrow animation */}
                  <div
                    className={`flex items-center gap-2 text-sm font-semibold text-gray-500 transition-all duration-300 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${activeCategoryData?.color}`}
                  >
                    <span>مشاهده جزئیات</span>
                    <ChevronLeft className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${activeCategoryData?.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${activeCategoryData?.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                ></div>

                {/* Scan line effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                به دنبال سرویس خاصی هستید؟
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                تیم ما آماده است تا سرویس‌های سفارشی‌سازی شده متناسب با نیازهای
                منحصر به فرد سازمان شما را طراحی و پیاده‌سازی کند
              </p>
              <a
                href="#contact"
                className="btn-neon inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl"
              >
                درخواست سرویس سفارشی
                <ChevronLeft className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
