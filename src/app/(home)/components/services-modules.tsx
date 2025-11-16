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
import Link from "next/link";
import { useGetAllServices } from "@/constance/services/service/service.hook";

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
}

export default function ServicesModules() {
  const { data } = useGetAllServices();

  const [activeCategory, setActiveCategory] = useState("general");

  const icons = {
    Workflow,
    FileEdit,
    Calendar,
    Bell,
    Headphones,
    ShoppingCart,
    Users,
    AlertTriangle,
    Layers,
    Mic,
    ScanFace,
    Eye,
    Shield,
    FileSignature,
    Languages,
    Sparkles,
    Car,
  } as const;

  type IconName = keyof typeof icons;

  const categories: Category[] = [
    {
      id: "general",
      title: "ماژول‌های عمومی",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "assistant",
      title: "سرویس‌های دستیار هوشمند",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "ai",
      title: "سرویس‌های هوش مصنوعی",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "language",
      title: "سرویس‌های زبانی",
      icon: Languages,
      color: "from-orange-500 to-red-500",
    },
  ];

  const activeServices =
    data?.filter((cat) => cat.category === activeCategory) || [];

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
                  {data?.filter((i) => i.category == category.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeServices?.map((service, index) => {
              const Icon = icons?.[service.icon as IconName];

              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-transparent transition-all duration-500 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="absolute top-4 left-4 z-20">
                    {service.isActive ? (
                      <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-700">
                          فعال
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs font-semibold text-red-700">
                          غیرفعال
                        </span>
                      </div>
                    )}
                  </div>

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
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>

                    {/* Title with neon effect */}
                    <Link href={`/service/${service.documentId}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3  group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="min-h-12 text-gray-600 text-sm leading-relaxed text-pretty line-clamp-3 mb-4 group-hover:text-gray-700 transition-colors">
                      {service.summery}
                    </p>

                    {/* Tags with neon effect */}
                    {service.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${activeCategoryData?.color} group-hover:shadow-lg`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View More Link with arrow animation */}
                    <Link
                      href={`/service/${service.documentId}`}
                      className={`flex items-center gap-2 text-sm font-semibold text-gray-500 transition-all duration-300 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${activeCategoryData?.color}`}
                    >
                      <span>مشاهده جزئیات</span>
                      <ChevronLeft className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
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
                </div>
              );
            })}
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
