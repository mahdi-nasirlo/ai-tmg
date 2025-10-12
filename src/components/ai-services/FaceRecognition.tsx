import { Camera, CheckCircle, Eye, Scan } from "lucide-react";

export default function FaceRecognition() {
  const faceFeatures = [
    "تشخیص در زمان واقعی با سرعت بالا",
    "دقت بیش از ۹۸٪ در شرایط مختلف نوری",
    "قابلیت تشخیص با ماسک و عینک",
    "پایگاه داده قابل مقیاس تا میلیون‌ها چهره",
  ];

  const plateFeatures = [
    "تشخیص انواع پلاک ایرانی و بین‌المللی",
    "کارایی بالا در شب و شرایط نامساعد",
    "استخراج و ذخیره اطلاعات خودکار",
    "یکپارچگی با سیستم‌های کنترل دسترسی",
  ];

  const applications = [
    { title: "مراکز امنیتی", desc: "کنترل دسترسی و احراز هویت" },
    { title: "پارکینگ‌های هوشمند", desc: "مدیریت خودکار تردد خودروها" },
    { title: "سیستم‌های حضور و غیاب", desc: "ثبت دقیق و بدون تماس" },
  ];

  return (
    <div className="py-16 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <Eye className="w-5 h-5" />
          <span className="font-semibold">تشخیص تصویری</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          قدرت بینایی ماشین
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          سیستم‌های پیشرفته تشخیص چهره و پلاک خودرو برای امنیت و مدیریت هوشمند
        </p>
      </div>

      {/* Main Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Face Recognition Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 card-hover animate-fade-in">
          <div className="relative flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Camera className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">تشخیص چهره</h3>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            سیستم تشخیص چهره با دقت بالا برای احراز هویت، حضور و غیاب هوشمند
          </p>

          <div className="space-y-3 mb-6">
            {faceFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-600 text-sm font-semibold">
                نمونه تشخیص
              </span>
              <Eye className="text-blue-500" size={20} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-purple-200 flex items-center justify-center shadow-sm h-28"
                >
                  <Camera className="text-blue-400" size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* License Plate Recognition Card */}
        <div
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 card-hover animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
              <Scan className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">تشخیص پلاک</h3>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            سیستم هوشمند تشخیص پلاک خودرو برای پارکینگ‌ها، راهبندها و سیستم‌های
            ترافیکی
          </p>

          <div className="space-y-3 mb-6">
            {plateFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle
                  className="text-pink-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-pink-600 text-sm font-semibold">
                نمونه پلاک شناسایی شده
              </span>
              <Scan className="text-pink-500" size={20} />
            </div>
            <div className="bg-white rounded-lg p-6 border border-pink-200 text-center shadow-sm h-28">
              <div
                className="text-3xl font-black text-gray-900 tracking-wider mb-2"
                style={{ fontFamily: "monospace" }}
              >
                ۱۲ الف ۳۴۵ - ۶۷
              </div>
              <div className="text-sm text-pink-600 font-semibold">تهران</div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div
        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          کاربردهای صنعتی
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 card-hover text-center"
            >
              <h4 className="text-gray-900 font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
