import { useState } from "react";
import {
  ArrowRight,
  Book,
  Code,
  Zap,
  CheckCircle,
  Terminal,
  FileCode,
  Lightbulb,
  Download,
  ExternalLink,
  Play,
  Copy,
  Check,
} from "lucide-react";

export default function ServiceDetail() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "docs" | "examples" | "api"
  >("overview");
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const serviceData = {
    title: "ماژول ورک‌فلو",
    category: "ماژول‌های عمومی",
    version: "2.5.0",
    lastUpdate: "1403/09/15",
    description:
      "سیستم جامع مدیریت و اتوماسیون فرآیندهای سازمانی با قابلیت طراحی گردش کار پیشرفته، مدیریت وظایف، نوتیفیکیشن خودکار و گزارش‌گیری دقیق",
    features: [
      {
        title: "طراحی بصری گردش کار",
        description: "رابط کاربری drag & drop برای طراحی آسان فرآیندهای پیچید",
      },
      {
        title: "اتوماسیون هوشمند",
        description: "تعریف قوانین و شرایط برای اجرای خودکار مراحل",
      },
      {
        title: "مدیریت سطوح دسترسی",
        description: "کنترل دقیق دسترسی کاربران در هر مرحله از فرآیند",
      },
      {
        title: "نوتیفیکیشن چندکاناله",
        description: "ارسال اعلان از طریق ایمیل، SMS و پوش نوتیفیکیشن",
      },
      {
        title: "گزارش‌گیری پیشرفته",
        description: "تولید گزارش‌های جامع از عملکرد و زمان اجرای فرآیندها",
      },
      {
        title: "یکپارچه‌سازی API",
        description: "اتصال آسان به سیستم‌های خارجی از طریق RESTful API",
      },
    ],
    installation: `npm install @bonyanava/workflow-engine

# یا با yarn
yarn add @bonyanava/workflow-engine`,
    quickStart: `import { WorkflowEngine } from '@bonyanava/workflow-engine';

// ایجاد نمونه ورک‌فلو
const engine = new WorkflowEngine({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// تعریف یک فرآیند ساده
const workflow = {
  id: 'approval-process',
  name: 'فرآیند تایید',
  steps: [
    {
      id: 'step1',
      type: 'task',
      assignee: 'manager@company.com',
      action: 'review'
    },
    {
      id: 'step2',
      type: 'condition',
      rules: { approved: true }
    }
  ]
};

// اجرای ورک‌فلو
await engine.execute(workflow);`,
    examples: [
      {
        title: "ایجاد ورک‌فلو ساده",
        language: "javascript",
        code: `const simpleWorkflow = await engine.createWorkflow({
  name: 'درخواست مرخصی',
  description: 'فرآیند تایید مرخصی کارکنان',
  steps: [
    {
      id: 'submit',
      type: 'form',
      title: 'ثبت درخواست',
      fields: ['startDate', 'endDate', 'reason']
    },
    {
      id: 'manager_review',
      type: 'approval',
      assignee: 'manager',
      timeout: '2d'
    },
    {
      id: 'hr_review',
      type: 'approval',
      assignee: 'hr',
      condition: 'duration > 5'
    }
  ]
});`,
      },
      {
        title: "اضافه کردن شرط به ورک‌فلو",
        language: "javascript",
        code: `workflow.addCondition({
  id: 'check_amount',
  rules: [
    {
      field: 'amount',
      operator: 'greater_than',
      value: 10000000,
      action: 'require_ceo_approval'
    }
  ]
});

// اجرای شرطی
if (workflow.evaluate(data)) {
  await workflow.nextStep();
}`,
      },
      {
        title: "مدیریت رویدادها",
        language: "javascript",
        code: `// گوش دادن به رویدادها
engine.on('workflow:started', (data) => {
  console.log('ورک‌فلو شروع شد:', data.workflowId);
});

engine.on('step:completed', (data) => {
  console.log('مرحله تکمیل شد:', data.stepId);
  // ارسال نوتیفیکیشن
  sendNotification(data.nextAssignee);
});

engine.on('workflow:completed', (data) => {
  console.log('ورک‌فلو کامل شد:', data.result);
});`,
      },
    ],
    apiEndpoints: [
      {
        method: "POST",
        endpoint: "/api/v1/workflows",
        description: "ایجاد ورک‌فلو جدید",
        params: "{ name, description, steps[] }",
      },
      {
        method: "GET",
        endpoint: "/api/v1/workflows/:id",
        description: "دریافت اطلاعات ورک‌فلو",
        params: "workflowId",
      },
      {
        method: "POST",
        endpoint: "/api/v1/workflows/:id/execute",
        description: "اجرای ورک‌فلو",
        params: "{ data, context }",
      },
      {
        method: "GET",
        endpoint: "/api/v1/workflows/:id/status",
        description: "وضعیت اجرای ورک‌فلو",
        params: "workflowId",
      },
    ],
  };

  const handleCopyCode = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group mb-4"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            بازگشت به لیست سرویس‌ها
          </a>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full mb-3">
                <span className="text-blue-300 text-sm">
                  {serviceData.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 neon-text">
                {serviceData.title}
              </h1>
              <p className="text-white/80 text-lg max-w-3xl">
                {serviceData.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-right">
              <div className="text-white/60 text-sm">
                نسخه:{" "}
                <span className="text-white font-semibold">
                  {serviceData.version}
                </span>
              </div>
              <div className="text-white/60 text-sm">
                آخرین بروزرسانی:{" "}
                <span className="text-white">{serviceData.lastUpdate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10 bg-black/10 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "overview", label: "نمای کلی", icon: Book },
              { id: "docs", label: "مستندات", icon: FileCode },
              { id: "examples", label: "نمونه کدها", icon: Code },
              { id: "api", label: "API Reference", icon: Terminal },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as "overview" | "docs" | "examples" | "api"
                  )
                }
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all relative group ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 neon-glow"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fade-in">
              {/* Features Grid */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  ویژگی‌های کلیدی
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 card-hover animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Neon glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300"></div>

                      <div className="relative">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Neon border on hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <button className="btn-neon group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  دانلود مستندات PDF
                </button>
                <button className="btn-neon group flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20">
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  مشاهده در GitHub
                </button>
                <button className="btn-neon group flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-green-500/50">
                  <Play className="w-5 h-5" />
                  امتحان آنلاین
                </button>
              </div>
            </div>
          )}

          {/* Documentation Tab */}
          {activeTab === "docs" && (
            <div className="space-y-8 animate-fade-in">
              {/* Installation */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Download className="w-7 h-7 text-blue-400" />
                  نصب و راه‌اندازی
                </h2>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-white/10">
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {serviceData.installation}
                  </pre>
                </div>
              </div>

              {/* Quick Start */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-yellow-400" />
                  شروع سریع
                </h2>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-white/10 relative group">
                  <button
                    onClick={() => handleCopyCode(-1, serviceData.quickStart)}
                    className="absolute left-4 top-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {copiedCode === -1 ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/70" />
                    )}
                  </button>
                  <pre className="text-blue-300 whitespace-pre-wrap pr-12">
                    {serviceData.quickStart}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Examples Tab */}
          {activeTab === "examples" && (
            <div className="space-y-6 animate-fade-in">
              {serviceData.examples.map((example, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                    {example.title}
                  </h3>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-white/10 relative">
                    <button
                      onClick={() => handleCopyCode(index, example.code)}
                      className="absolute left-4 top-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors z-10"
                    >
                      {copiedCode === index ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-white/70" />
                      )}
                    </button>
                    <pre className="text-purple-300 whitespace-pre-wrap pr-12">
                      {example.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* API Tab */}
          {activeTab === "api" && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal className="w-8 h-8 text-green-400" />
                API Endpoints
              </h2>
              {serviceData.apiEndpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                    <span
                      className={`inline-flex px-3 py-1 rounded-lg font-mono text-sm font-bold ${
                        endpoint.method === "GET"
                          ? "bg-green-500/20 text-green-400 border border-green-400/30"
                          : endpoint.method === "POST"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-purple-300 font-mono text-sm flex-1 group-hover:text-purple-200">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <p className="text-white/70 mb-2">{endpoint.description}</p>
                  <div className="text-sm text-white/50">
                    پارامترها:{" "}
                    <code className="text-cyan-400">{endpoint.params}</code>
                  </div>

                  {/* Neon glow on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)]"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
