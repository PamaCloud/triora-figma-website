export type ServiceIconName =
  | "globe"
  | "code"
  | "phone"
  | "sparkles"
  | "cloud"
  | "arrow"
  | "shopping"
  | "plug"
  | "search"
  | "megaphone"
  | "chart"
  | "shield";

export interface Service {
  title: string;
  description: string;
  icon: ServiceIconName;
}

export interface CaseStudy {
  category: string;
  metric: string;
  title: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export interface Course {
  title: string;
  number: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}
