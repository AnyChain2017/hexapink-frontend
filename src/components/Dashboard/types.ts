import { JSX } from "react";

interface SidebarItemType {
  label: string;
  link: string;
  icon: JSX.Element;
  selectedIcon: JSX.Element;
}

export type { SidebarItemType };
