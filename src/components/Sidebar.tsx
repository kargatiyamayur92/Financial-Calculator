import type { ComponentType } from "react";
import {
  Activity,
  BarChart3,
  Calculator,
  ChartNoAxesCombined,
  Landmark,
  Wallet,
  X,
  PieChart,
  CalendarDays,
} from "lucide-react";
import type { CalculatorId } from "../types";
import { calculators } from "../data/calculators";

interface SidebarProps {
  active: CalculatorId;
  onNavigate: (id: CalculatorId) => void;
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  active,
  onNavigate,
  mobileOpen,
  onClose,
}: SidebarProps) {
  const iconMap: Record<
    string,
    ComponentType<{ size?: number; strokeWidth?: number }>
  > = {
    sip: ChartNoAxesCombined,
    lumpsum: Wallet,
    emi: Calculator,
    compound: Activity,
    fd: Landmark,
    rd: CalendarDays,
    inflation: BarChart3,
    swp: PieChart,
  };

  const nav = [
    ...calculators.map((item) => ({
      label: item.title,
      id: item.id,
      icon: iconMap[item.id] ?? Calculator,
    })),
  ];

  return (
    <>
      {mobileOpen && (
        <button
          className="sidebar-backdrop"
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}
      <aside className={`sidebar ${mobileOpen ? "sidebar--open" : "sidebar--open-leptop"}`}>
        <div className="brand">
          <div className="brand-mark">
            <span>F</span>
          </div>
          <div className="brand-copy">
            <strong>
              fincalc<span>.</span>
            </strong>
            <small>STUDIO</small>
          </div>
          <button
            className="icon-button sidebar-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="workspace-label">WORKSPACE</div>
        <nav className="nav-list">
          {nav.map(({ label, id, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item ${active === id ? "nav-item--active" : ""}`}
              onClick={() => {
                onNavigate(id);
                onClose();
              }}
            >
              <Icon size={18} strokeWidth={1.9} />
              <span>{label}</span>
              {active === id && <span className="active-dot" />}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
