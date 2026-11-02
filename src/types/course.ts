/**
 * Shared course types.
 *
 * `TimelineModule` is the canonical shape consumed by
 * `CourseTimeline`, which re-exports it so the existing
 * `@/features/courses/components/CourseTimeline` imports keep working.
 */

export interface TimelineModule {
  /** Tool badge image paths rendered above the module title. */
  icon: string[];
  time: string;
  title: string;
  practicalTools: string;
  desc: string;
  initiallyActive?: boolean;
}

/**
 * @deprecated Superseded by {@link TimelineModule}. Kept only so the
 * cyber security pages that still pass `team`/`instructors` continue to
 * type-check against their own literals.
 */
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
