import { useState } from 'react';
import { Package, Clock, CheckCircle, AlertCircle, Search } from 'lucide-react';

export default function OrderStatus() {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!orderId) return;

    setIsSearching(true);
    setTimeout(() => {
      setOrderData({
        id: orderId,
        status: 'در حال پردازش',
        estimatedTime: '۲ روز',
        problem: 'فرایند ثبت نام در سامانه دولتی',
        progress: 65,
        updates: [
          { time: '۱۰:۳۰', status: 'درخواست ثبت شد', completed: true },
          { time: '۱۱:۱۵', status: 'در حال بررسی', completed: true },
          { time: '۱۴:۲۰', status: 'در حال پردازش', completed: false },
          { time: 'منتظر', status: 'تکمیل', completed: false }
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
          <Package className="w-5 h-5" />
          <span className="font-semibold">پشتیبانی و وضعیت سفارش‌ها</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          پیگیری هوشمند درخواست‌ها
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          سیستم پیگیری خودکار برای مدیریت و نظارت بر وضعیت سفارش‌ها و درخواست‌های شما
        </p>
      </div>

      {/* Search Interface */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-200">
          {/* Search Box */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-3">کد پیگیری سفارش:</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="مثال: ORD-2024-12345"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                onClick={handleSearch}
                disabled={isSearching || !orderId}
                className="btn-neon bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-50 flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                {isSearching ? 'در حال جستجو...' : 'جستجو'}
              </button>
            </div>
          </div>

          {/* Order Details */}
          {orderData && (
            <div className="space-y-6 animate-slide-up">
              {/* Status Overview */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Package className="w-4 h-4" />
                      وضعیت سفارش
                    </div>
                    <div className="text-xl font-bold text-gray-900">{orderData.status}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      زمان تخمینی
                    </div>
                    <div className="text-xl font-bold text-orange-600">{orderData.estimatedTime}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <AlertCircle className="w-4 h-4" />
                      جزئیات مشکل
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{orderData.problem}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>پیشرفت</span>
                    <span className="font-bold">{orderData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${orderData.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-6">تاریخچه بروزرسانی‌ها</h4>
                <div className="space-y-4">
                  {orderData.updates.map((update: any, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        update.completed
                          ? 'bg-green-100'
                          : index === 2
                          ? 'bg-orange-100 animate-pulse'
                          : 'bg-gray-100'
                      }`}>
                        <CheckCircle className={`w-5 h-5 ${
                          update.completed
                            ? 'text-green-600'
                            : index === 2
                            ? 'text-orange-600'
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{update.status}</div>
                        <div className="text-sm text-gray-500">{update.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Help Text */}
          {!orderData && (
            <div className="text-center text-gray-500 py-8">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p>کد پیگیری خود را وارد کنید تا وضعیت سفارش را مشاهده کنید</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
