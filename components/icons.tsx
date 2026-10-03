import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Cloud,
  Code2,
  Globe2,
  Headphones,
  Menu,
  Megaphone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Smartphone,
  X,
  Zap,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/types";

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  globe: Globe2,
  code: Code2,
  phone: Smartphone,
  sparkles: Sparkles,
  cloud: Cloud,
  arrow: ArrowDownRight,
  shopping: ShoppingBag,
  plug: Workflow,
  search: Search,
  megaphone: Megaphone,
  chart: BarChart3,
  shield: ShieldCheck,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon aria-hidden="true" className={className} strokeWidth={1.6} />;
}

export {
  ArrowRight,
  ArrowUpRight,
  Headphones,
  Menu,
  X,
  Zap,
};
