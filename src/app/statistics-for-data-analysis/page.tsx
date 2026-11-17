import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { JsonLd } from '@/components/seo/JsonLd';
import { CourseHero } from '@/features/courses/components/CourseHero';
import { CourseDescription } from '@/features/courses/components/CourseDescription';
import {
  CourseTimeline,
  type TimelineModule,
} from '@/features/courses/components/CourseTimeline';
import { courseSchema } from '@/lib/schema';
import Link from 'next/link';

const TITLE = 'Statistics for Data Analysis';
const DESCRIPTION = 'A data analytics course at Maxwell Training: use statistics to interpret data, read spread, distributions and outliers, compare groups and judge correlation, sample size and confidence in Cameroon.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/statistics-for-data-analysis' },
};

const paragraphs: string[] = [
  'A figure on its own proves very little. An average hides the spread behind it, one unusual record can move a total nobody questions, and two numbers that rise together are routinely reported as one causing the other.',
  'Statistics for Data Analysis teaches the handful of ideas that stop those mistakes. You will describe a dataset properly, read distributions and outliers, compare groups without fooling yourself, separate correlation from cause, and judge when your sample is simply too small to conclude anything.',
];

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 1',
    title: 'Describing A Dataset',
    practicalTools: 'Excel/Google Sheets, Python (pandas)',
    desc: 'Averages, medians and modes, and when each one lies. Learn why the mean salary in a company of twenty tells you almost nothing without the spread reported beside it.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 2',
    title: 'Spread, Distributions And Outliers',
    practicalTools: 'Excel/Google Sheets, Python (pandas)',
    desc: 'Read how your figures are spread: range, variance and standard deviation, what a normal distribution looks like, and why a single unusual record can move a total nobody questions.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 3',
    title: 'Comparing Groups Properly',
    practicalTools: 'Excel/Google Sheets, Python',
    desc: 'Compare branches, products or months without fooling yourself. Learn how large a difference has to be, and how steady, before it is worth putting in a report.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 4',
    title: 'Correlation And Cause',
    practicalTools: 'Excel/Google Sheets, Python',
    desc: 'Measure how two figures move together, then practise the harder discipline: saying clearly what that does and does not prove about one causing the other.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 5',
    title: 'Sample Size And Confidence',
    practicalTools: 'Excel/Google Sheets, Python',
    desc: 'Work out when you have enough data to conclude anything. Read a confidence interval, recognise a sample too small to carry a decision, and say so plainly instead of guessing.',
    initiallyActive: true,
  },
];

export default function StatisticsForDataAnalysisPage() {
  return (
    <>
      <SiteHeader />

      <JsonLd
        data={courseSchema({
          name: TITLE,
          description: DESCRIPTION,
          slug: 'statistics-for-data-analysis',
          level: 'Beginner',
        })}
      />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <CourseHero
            hero={{
              sub: 'Data Analytics',
              title: TITLE,
              desc: 'The statistics that decide whether a number means anything',
              bannerImage: '/assets/images/marketing-banner.png',
              ctaHref: '/contact',
              ctaLabel: 'Enrol for this Course',
              ctaTitle: 'Enrol for this Course',
              phone: 'Phone: +237 672 149 730',
            }}
          />

          <CourseDescription paragraphs={paragraphs} />

          <CourseTimeline dateLine={[]} modules={modules}>
            <div className="button-wrap mt32">
              <Link href="/contact" className="button fullfield" title="More Details">
                More Details
              </Link>
            </div>
          </CourseTimeline>
        </div>
      </main>
    </>
  );
}
