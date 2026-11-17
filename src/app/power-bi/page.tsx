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

const TITLE = 'Power BI';
const DESCRIPTION = 'A data analytics course at Maxwell Training: build interactive reports in Power BI with Power Query, data models, DAX measures, slicers and scheduled refresh in Cameroon.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/power-bi' },
};

const paragraphs: string[] = [
  'The monthly report is usually a scramble: figures copied between spreadsheets for two days, emailed as a file that is out of date before it is opened, and the manager still asks for the one breakdown that was left out.',
  'Power BI teaches you to build the report once and let it update itself. You will shape data in Power Query, model your tables, write the measures a report runs on in DAX, lay out visuals with slicers and drill-through, then publish it on a scheduled refresh for the people who need it.',
];

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 1',
    title: 'Loading And Shaping Data With Power Query',
    practicalTools: 'Power BI (Power Query)',
    desc: 'Connect to files and databases, then clean and reshape the data on the way in, so every refresh arrives in the right form without anyone repeating the work by hand.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 2',
    title: 'Data Models And Relationships',
    practicalTools: 'Power BI (model view, relationships)',
    desc: 'Join your tables into a model that answers questions correctly: fact and dimension tables, one-to-many relationships, and the date table every time-based report needs.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 3',
    title: 'Measures With DAX',
    practicalTools: 'Power BI (DAX, calculated measures)',
    desc: 'Write the calculations a report runs on: totals, averages, month-on-month change and share of total, as measures that respond to whatever the reader filters.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 4',
    title: 'Building Interactive Reports',
    practicalTools: 'Power BI (visuals, slicers, drill-through)',
    desc: 'Lay out a report that answers the question at a glance and lets the reader dig in: slicers for period and branch, drill-through to detail, and visuals that stay readable.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 5',
    title: 'Publishing, Refresh And Sharing',
    practicalTools: 'Power BI Service',
    desc: 'Publish to the service, set a scheduled refresh, share with the people who need it and control who sees what, so the report keeps working after you hand it over.',
    initiallyActive: true,
  },
];

export default function PowerBiPage() {
  return (
    <>
      <SiteHeader />

      <JsonLd
        data={courseSchema({
          name: TITLE,
          description: DESCRIPTION,
          slug: 'power-bi',
          level: 'Beginner',
        })}
      />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <CourseHero
            hero={{
              sub: 'Data Analytics',
              title: TITLE,
              desc: 'Build interactive reports your managers can answer their own questions with',
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
