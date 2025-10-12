import { useState } from "react";
import { Mic, FileText, Bot, Play, Pause } from "lucide-react";

export default function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleRecording = () => {
    setIsRecording(!isRecording);

    if (!isRecording) {
      setTimeout(() => {
        setTranscription(
          "سلام، می‌خواستم در مورد سرویس‌های هوش مصنوعی شما اطلاعات بیشتری کسب کنم. آیا امکان ارائه مشاوره رایگان وجود دارد؟"
        );
        setTimeout(() => {
          setAiResponse(
            "سلام و درود. بله، ما مشاوره رایگان ارائه می‌دهیم. تیم ما آماده است تا نیازهای شما را بررسی کرده و بهترین راهکار را پیشنهاد دهد. لطفاً اطلاعات تماس خود را در فرم درخواست مشاوره ثبت کنید تا همکاران ما در اسرع وقت با شما تماس بگیرند."
          );
        }, 1500);
      }, 2000);
    } else {
      setTranscription("");
      setAiResponse("");
    }
  };

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <Mic className="w-5 h-5" />
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
          {/* Recording Control */}
          <div className="text-center mb-8">
            <button
              onClick={handleRecording}
              className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 ${
                isRecording
                  ? "bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-xl card-hover"
              }`}
            >
              {isRecording ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white" />
              )}
            </button>
            <p className="text-gray-600 mt-4 font-medium">
              {isRecording ? "در حال ضبط..." : "کلیک کنید تا ضبط شروع شود"}
            </p>
          </div>

          {/* Results */}
          {transcription && (
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
              {aiResponse && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg border border-green-200 animate-slide-up">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-gray-900">
                      پاسخ دستیار هوشمند:
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{aiResponse}</p>
                </div>
              )}
            </div>
          )}

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
    </div>
  );
}
