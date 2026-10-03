import { Search } from "lucide-react";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="empty-state" role="status">
      <Search aria-hidden="true" className="size-6" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
