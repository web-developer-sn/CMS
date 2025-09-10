// Main State
export interface HeaderData {
  home: HomeSection;
  header: HeaderSection;
  footer: FooterSection;
}

// ----------------------------
// HOME SECTION INTERFACE
// ----------------------------
export interface HomeSection {
  hero?: {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  about?: {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  programs?: {
    heading?: string;
    items?: ProgramItem[];
  };
  ctaBanner?: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

export interface ProgramItem {
  title?: string;
  description?: string;
  linkText?: string;
  href?: string;
}

// ----------------------------
// HEADER SECTION INTERFACE
// ----------------------------
export interface HeaderSection {
  logo?: {
    src?: string;
    alt?: string;
    name?: string;
  };
  navLinks?: NavLink[];
  applyButton?: {
    label?: string;
    href?: string;
  };
}

export interface NavLink {
  label?: string;
  href?: string;
}

// ----------------------------
// FOOTER SECTION INTERFACE
// ----------------------------
export interface FooterSection {
  collegeInfo: {
    name: string;
    logo: string;
    description: string;
  };
  quickLinks: FooterLink[];
  contact: {
    address?: string;
    phone?: string;
    email?: string;
  };
  social: SocialLink[];
}

export interface FooterLink {
  label?: string;
  href?: string;
}

export interface SocialLink {
  platform?: string;
  icon?: string;
  href?: string;
}
