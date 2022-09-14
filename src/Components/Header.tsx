import { ListChecks } from "phosphor-react";
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <ListChecks color="#EDE7D9" size={32} />
      <label className="Text">Todo</label>
    </div>
  );
}
