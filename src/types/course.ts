export interface TimelineModule {
  icon: string[];
  time: string;
  title: string;
  practicalTools: string;
  desc: string;
  initiallyActive?: boolean;
}

export interface CourseModule {
  team: string[];
  time: string;
  title: string;
  instructors: string;
  desc: string;
  initiallyActive: boolean;
}

export interface CourseHeroData {
  sub: string;
  title: string;
  desc: string;
  bannerImage: string;
  ctaHref: string;
  ctaLabel: string;
  ctaTitle: string;
  phone: string;
}

export interface Course {
  slug: string;
  pageTitle: string;
  hero: CourseHeroData | null;
  description: string[];
  dateLine: string[];
  modules: TimelineModule[];
  moreDetails: { href: string; label: string; title: string } | null;
}
