import { useState } from 'react';
import { Scan, Car, CheckCircle, Upload } from 'lucide-react';

export default function FaceRecognition() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'face' | 'plate'>('face');

  const handleUpload = () => {
    setIsProcessing(true);
    setTimeout(() => {
      if (activeTab === 'face') {
        setResult({
          type: 'face',
          confidence: 98.5,
          matches: 1,
          identity: 'شناسایی موفق',
          time: '0.3 ثانیه'
        });
      } else {
        setResult({
          type: 'plate',
          plateNumber: '۱۲ ج ۳۴۵ ایران ۶۷',
          confidence: 99.2,
          vehicle: 'خودروی سواری',
          time: '0.2 ثانیه'
        });
      }
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <Scan className="w-5 h-5" />
          <span className="font-semibold">تشخیص چهره و پلاک خودرو</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          شناسایی بصری با هوش مصنوعی
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          سیستم تشخیص پیشرفته برای شناسایی چهره و پلاک خودرو با دقت بالا و سرعت بی‌نظیر
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setActiveTab('face');
              setResult(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'face'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Scan className="w-5 h-5" />
            تشخیص چهره
          </button>
          <button
            onClick={() => {
              setActiveTab('plate');
              setResult(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'plate'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Car className="w-5 h-5" />
            تشخیص پلاک
          </button>
        </div>
      </div>

      {/* Demo Interface */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-200">
          {/* Upload Area */}
          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-500 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                {activeTab === 'face' ? 'تصویر چهره را بارگذاری کنید' : 'تصویر پلاک خودرو را بارگذاری کنید'}
              </p>
              <button
                onClick={handleUpload}
                disabled={isProcessing}
                className="btn-neon mt-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
              >
                {isProcessing ? 'در حال پردازش...' : 'شروع تشخیص'}
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-900 text-lg">نتیجه تشخیص</h4>
                </div>

                {result.type === 'face' ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">وضعیت</div>
                      <div className="text-lg font-bold text-gray-900">{result.identity}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">میزان اطمینان</div>
                      <div className="text-lg font-bold text-green-600">{result.confidence}%</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">تطابق‌ها</div>
                      <div className="text-lg font-bold text-gray-900">{result.matches} مورد</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">زمان پردازش</div>
                      <div className="text-lg font-bold text-blue-600">{result.time}</div>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">شماره پلاک</div>
                      <div className="text-lg font-bold text-gray-900">{result.plateNumber}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">میزان اطمینان</div>
                      <div className="text-lg font-bold text-green-600">{result.confidence}%</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">نوع خودرو</div>
                      <div className="text-lg font-bold text-gray-900">{result.vehicle}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">زمان پردازش</div>
                      <div className="text-lg font-bold text-blue-600">{result.time}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
            {[
              { label: 'دقت تشخیص', value: '+%98' },
              { label: 'تصاویر پردازش شده', value: '+۱M' },
              { label: 'سرعت پردازش', value: '< 0.5s' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
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
