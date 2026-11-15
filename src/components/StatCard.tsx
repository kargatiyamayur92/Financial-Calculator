import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  tone: "green" | "violet" | "amber" | "blue";
}

export default function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  tone,
}: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <span>{label}</span>
        <div className={`stat-icon stat-icon--${tone}`}>
          <Icon size={18} />
        </div>
      </div>
      <strong className="stat-value">{value}</strong>
      <div className="stat-detail">
        <span className="detail-dot" /> {detail}
      </div>
    </article>
  );
}
