export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export type HeaderVariant = "default" | "alt";
