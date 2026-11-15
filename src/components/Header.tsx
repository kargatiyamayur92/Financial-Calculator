import { Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle: string;
  onMenu: () => void;
}

export default function Header({ title, subtitle, onMenu }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="icon-button menu-button"
          onClick={onMenu}
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
        <div className="heading">
          <h1 id="heading-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
