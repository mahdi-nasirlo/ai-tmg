import { useState, useEffect } from 'react';
import { Headphones, Brain, Activity, Users, MessageSquare } from 'lucide-react';

export default function SmartSupport() {
  const [activeCalls, setActiveCalls] = useState(45);
  const [queueUsers, setQueueUsers] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls(prev => prev + Math.floor(Math.random() * 3) - 1);
      setQueueUsers(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const models = [
    { name: 'GPT', status: 'فعال', icon: '🧠', color: 'from-green-500 to-emerald-500' },
    { name: 'LLaMA', status: 'در حال یادگیری', icon: '🦙', color: 'from-yellow-500 to-orange-500' },
    { name: 'Dorna', status: 'آماده به کار', icon: '🕊️', color: 'from-blue-500 to-cyan-500' },
    { name: 'DeepSeek', status: 'فعال', icon: '🌀', color: 'from-purple-500 to-pink-500' }
  ];

  const features = [
    { title: 'پشتیبانی هوشمند درگاه ملی حمل بار', icon: '🚛' },
    { title: 'پشتیبانی هوشمند تراکنش‌های مشکوک', icon: '🔍' },
    { title: 'پشتیبانی هوشمند ثامن', icon: '🏛️' },
    { title: 'پشتیبانی هوشمند مدیریت تردد', icon: '🚦' }
  ];

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <Headphones className="w-5 h-5" />
          <span className="font-semibold">پشتیبانی هوشمند</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          پشتیبانی هوشمند نسل جدید
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          سیستم از مدل‌های هوش مصنوعی و زبانی پیشرفته برای تحلیل احساسات مشتری، مسیریابی خودکار تماس‌ها و پاسخگویی هوشمند استفاده می‌کند
        </p>
      </div>

      {/* Dashboard */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Live Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">وضعیت زنده</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">تماس‌های فعال</span>
                  <MessageSquare className="w-4 h-4 text-white/60" />
                </div>
                <div className="text-3xl font-bold text-white mt-2 animate-count-up">{activeCalls}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">صف انتظار</span>
                  <Users className="w-4 h-4 text-white/60" />
                </div>
                <div className="text-3xl font-bold text-white mt-2 animate-count-up">{queueUsers}</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Models */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-6 h-6 text-purple-600" />
              <h4 className="text-xl font-bold text-gray-900">مدل‌های هوش مصنوعی فعال</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{model.icon}</div>
                    <div>
                      <h5 className="font-bold text-gray-900">{model.name}</h5>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color} animate-pulse`}></div>
                        <span className="text-sm text-gray-600">{model.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h5 className="font-bold text-gray-900 text-sm leading-relaxed">{feature.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
