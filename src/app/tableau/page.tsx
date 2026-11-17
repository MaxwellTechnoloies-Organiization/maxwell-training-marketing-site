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

const TITLE = 'Tableau';
const DESCRIPTION = 'A data analytics course at Maxwell Training: create dashboards and data stories in Tableau with calculated fields, parameters, filter actions and story points in Cameroon.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/tableau' },
};

const paragraphs: string[] = [
  'A dashboard that shows everything decides nothing. Plenty of businesses have a screen full of charts that nobody reads, because no one sequenced them into an argument anybody could follow.',
  'Tableau teaches you to build views that make the finding obvious. You will connect data and build your first worksheets, choose charts on purpose, add the calculations and parameters your data does not hold yet, link worksheets into dashboards, and sequence them into a story that ends in a recommendation.',
];

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 1',
    title: 'Connecting Data And First Views',
    practicalTools: 'Tableau (data sources, worksheets)',
    desc: 'Connect to files and databases, understand how Tableau splits dimensions from measures, and build your first views by dragging fields onto rows, columns and marks.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 2',
    title: 'The Right Chart For The Question',
    practicalTools: 'Tableau (marks, filters, sorting)',
    desc: 'Choose between bars, lines, maps and scatter plots on purpose, then sort, filter and colour them so the finding is obvious before anyone has read a single label.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 3',
    title: 'Calculations, Parameters And Sets',
    practicalTools: 'Tableau (calculated fields, parameters, table calculations)',
    desc: 'Add the figures your data does not hold yet: ratios, running totals, year-on-year change, and parameters that let a reader switch what they are looking at.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 4',
    title: 'Dashboards And Actions',
    practicalTools: 'Tableau (dashboards, filter actions, device layouts)',
    desc: 'Lay several worksheets onto one dashboard, link them with filter and highlight actions, and set device layouts so it holds up on a phone as well as a laptop.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 5',
    title: 'Data Stories For Decision-Makers',
    practicalTools: 'Tableau (story points), PowerPoint/Google Slides',
    desc: 'Sequence your dashboards into a story that walks a reader from the question to the finding to the recommendation, then present it and handle the questions that follow.',
    initiallyActive: true,
  },
];

export default function TableauPage() {
  return (
    <>
      <SiteHeader />

      <JsonLd
        data={courseSchema({
          name: TITLE,
          description: DESCRIPTION,
          slug: 'tableau',
          level: 'Beginner',
        })}
      />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <CourseHero
            hero={{
              sub: 'Data Analytics',
              title: TITLE,
              desc: 'Create dashboards and data stories that carry a decision',
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
