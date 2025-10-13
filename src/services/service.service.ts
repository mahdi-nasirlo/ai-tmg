import React from "react";

type BlogModule = {
  default: React.ComponentType;
  title?: string;
  date?: string;
  category: string;
  categorySlug: string;
  icon: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
  description: string;
  tags: string[];
};

const modules = import.meta.glob("@content/services/*.mdx", {
  eager: true,
}) as Record<string, BlogModule>;

const services = Object.entries(modules).map(([path, mod]) => {
  const Component = mod.default;

  return { path, Component, ...mod };
});

export { services };
