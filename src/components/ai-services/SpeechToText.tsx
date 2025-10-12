import { FileText, Bot } from "lucide-react";

export default function SpeechToText() {
  const transcription =
    "سلام، می‌خواستم در مورد سرویس‌های هوش مصنوعی شما اطلاعات بیشتری کسب کنم. آیا امکان ارائه مشاوره رایگان وجود دارد؟";
  const aiResponse =
    "سلام و درود. بله، ما مشاوره رایگان ارائه می‌دهیم. تیم ما آماده است تا نیازهای شما را بررسی کرده و بهترین راهکار را پیشنهاد دهد. لطفاً اطلاعات تماس خود را در فرم درخواست مشاوره ثبت کنید تا همکاران ما در اسرع وقت با شما تماس بگیرند.";

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <FileText className="w-5 h-5" />
          <span className="font-semibold">
            تبدیل گفتار به متن و دستیار هوشمند
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          پردازش گفتار با هوش مصنوعی
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          تبدیل آنی گفتار به متن با دقت بالا و پاسخگویی هوشمند توسط دستیار مجازی
        </p>
      </div>

      {/* Demo Interface */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-200">
          {/* Visualizer */}
          <div className="text-center mb-8">
            <div className="visualizer flex justify-center items-end h-24 mx-auto w-64">
              {[
                60, 50, 60, 70, 80, 50, 55, 58, 60, 44, 31, 44, 33, 23, 31, 44,
              ].map((height, i) => (
                <div
                  key={i}
                  className="bar w-4 mx-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-t"
                  style={{
                    height: `${height}px`,
                  }}
                ></div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 font-medium">نمونه پردازش صوتی</p>
          </div>

          {/* Results */}
          <div className="space-y-6 animate-slide-up">
            {/* Transcription */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-gray-900">متن پیاده‌شده:</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">{transcription}</p>
            </div>

            {/* AI Response */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg border border-green-200 animate-slide-up">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-gray-900">پاسخ دستیار هوشمند:</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">{aiResponse}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
            {[
              { label: "دقت", value: "%97" },
              { label: "سرعت پردازش", value: "< 1 ثانیه" },
              { label: "زبان‌های پشتیبانی شده", value: "۵+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Visualizer */}
      <style>{`
        .visualizer {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 96px;
        }
        .bar {
          width: 10px;
          background: linear-gradient(to bottom, #22c55e, #059669);
          border-radius: 4px 4px 0 0;
          transform-origin: bottom;
        }
      `}</style>
    </div>
  );
}
