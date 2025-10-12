import SmartSupport from './ai-services/SmartSupport';
import SpeechToText from './ai-services/SpeechToText';
import FaceRecognition from './ai-services/FaceRecognition';
import OrderStatus from './ai-services/OrderStatus';
import Statistics from './ai-services/Statistics';

export default function AIServices() {
  return (
    <section id="ai-services" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm">
                سرویس‌های هوش مصنوعی
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              راهکارهای هوشمند برای آینده دیجیتال
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مجموعه کامل سرویس‌های هوش مصنوعی طراحی شده برای بهبود عملکرد و تجربه کاربری سازمان شما
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* AI Services Components */}
          <div className="space-y-32">
            <SmartSupport />
            <SpeechToText />
            <FaceRecognition />
            <OrderStatus />
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
}
