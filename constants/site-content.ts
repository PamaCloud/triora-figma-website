import type {
  CaseStudy,
  Course,
  NavigationLink,
  ProcessStep,
  Service,
} from "@/types";
import { assets } from "@/constants/assets";

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Training", href: "#training" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const proofPoints = [
  { title: "End-to-end", detail: "Strategy to support" },
  { title: "Cloud-ready", detail: "Built to scale" },
  { title: "Business-first", detail: "Outcomes over output" },
  { title: "One partner", detail: "Product + growth" },
];

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Editorial, conversion-led websites that make your brand feel established from the first interaction.",
    icon: "globe",
  },
  {
    title: "Custom Web Applications",
    description:
      "Secure, intuitive platforms tailored to your workflows, customers, and growth goals.",
    icon: "code",
  },
  {
    title: "Mobile App Development (Android & iOS)",
    description:
      "Polished native and cross-platform experiences designed for everyday use.",
    icon: "phone",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-backed product design with elegant systems, clear journeys, and usable interfaces.",
    icon: "sparkles",
  },
  {
    title: "Multi-Cloud & DevOps Solutions",
    description:
      "Reliable infrastructure, automation, and delivery pipelines across leading cloud platforms.",
    icon: "cloud",
  },
  {
    title: "Cloud Migration",
    description:
      "Low-risk migration plans that modernize systems while protecting business continuity.",
    icon: "arrow",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Fast, scalable storefronts that simplify operations and turn attention into revenue.",
    icon: "shopping",
  },
  {
    title: "API Development & Integration",
    description:
      "Well-documented APIs and seamless integrations that keep your tools connected.",
    icon: "plug",
  },
  {
    title: "Google Ads Management",
    description:
      "Intent-led campaigns engineered for qualified traffic, efficient spend, and measurable returns.",
    icon: "search",
  },
  {
    title: "Meta Ads Management",
    description:
      "Creative, audience, and optimization systems that help brands scale demand.",
    icon: "megaphone",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Compounding visibility through technical SEO, content strategy, and performance marketing.",
    icon: "chart",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Proactive monitoring, improvements, and responsive support after launch.",
    icon: "shield",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    category: "Corporate Websites",
    metric: "+41% qualified enquiries",
    title: "A global presence, rebuilt for clarity",
    image: assets.portfolio.corporate,
    alt: "Corporate website redesign from the TrioraLabs portfolio",
    featured: true,
  },
  {
    category: "E-Commerce Stores",
    metric: "2.4× conversion rate",
    title: "A storefront designed to convert",
    image: assets.portfolio.ecommerce,
    alt: "E-commerce storefront project from the TrioraLabs portfolio",
    featured: true,
  },
  {
    category: "SaaS Platforms",
    metric: "38% faster workflows",
    title: "Complex operations, made effortless",
    image: assets.portfolio.saas,
    alt: "SaaS platform project from the TrioraLabs portfolio",
  },
  {
    category: "Mobile Applications",
    metric: "4.8 average rating",
    title: "Everyday utility in every tap",
    image: assets.portfolio.mobile,
    alt: "Mobile application project from the TrioraLabs portfolio",
  },
  {
    category: "Marketing Campaigns",
    metric: "-32% cost per lead",
    title: "Performance creative with purpose",
    image: assets.portfolio.campaign,
    alt: "Digital marketing campaign project from the TrioraLabs portfolio",
  },
];

export const reasons = [
  {
    title: "Modern Technology Stack",
    description:
      "Proven tools selected for performance, security, and long-term maintainability.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Foundations that support today’s needs and tomorrow’s growth without costly rework.",
  },
  {
    title: "Fast Delivery",
    description:
      "Focused sprints, visible progress, and practical decisions that keep momentum high.",
  },
  {
    title: "Dedicated Support",
    description:
      "A responsive partner who stays close before, during, and after every launch.",
  },
  {
    title: "Business-Focused Solutions",
    description:
      "Every technical decision connects back to a clear commercial objective.",
  },
];

export const courses: Course[] = [
  { number: "01", title: "MERN Stack Development" },
  { number: "02", title: "Multi-Cloud & DevOps" },
  { number: "03", title: "Mobile App Development" },
  { number: "04", title: "React.js Development" },
  { number: "05", title: "Node.js Backend Development" },
  { number: "06", title: "Cloud Engineering" },
  { number: "07", title: "Git & CI/CD" },
  { number: "08", title: "Industry Project Training" },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We align on your users, goals, constraints, and what success should look like.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "We turn insight into a focused roadmap, architecture, and experience direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design and engineering move together in transparent, testable delivery cycles.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We prepare content, quality, analytics, infrastructure, and a confident rollout.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We monitor, learn, and improve so your digital product keeps creating value.",
  },
];
