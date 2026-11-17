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

const TITLE = 'Excel & SQL';
const DESCRIPTION = 'A data analytics course at Maxwell Training: clean, organise and analyse data in Excel, then query databases with SQL using SELECT, GROUP BY and JOIN to build reports in Cameroon.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/excel-and-sql' },
};

const paragraphs: string[] = [
  'Excel and SQL are what employers mean when they ask whether you can work with data. Excel is where most business records still live, and SQL is how you reach the ones that have outgrown a spreadsheet.',
  'Excel & SQL takes you from structured tables and lookups through to querying a database directly. You will master the formulas and pivot tables that summarise thousands of rows, then write SQL that filters, groups and joins tables so you are never limited by what somebody else exported for you.',
];

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 1',
    title: 'Excel For Real Business Data',
    practicalTools: 'Excel/Google Sheets (tables, references, named ranges)',
    desc: 'Work the way analysts do: structured tables, absolute and relative references, named ranges, and the keyboard work that makes a thousand-row file quick instead of painful.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 2',
    title: 'Formulas, Lookups And Pivot Tables',
    practicalTools: 'Excel/Google Sheets (XLOOKUP, SUMIFS, pivot tables)',
    desc: 'Join data across sheets, summarise thousands of rows by product, branch or month, and build the pivot tables that answer most business questions in seconds.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/mysql.png'],
    time: 'Week 3',
    title: 'Querying Databases With SQL',
    practicalTools: 'MySQL/PostgreSQL (SELECT, WHERE, ORDER BY)',
    desc: 'Ask a database directly for what you need. Filter, sort and limit records so you stop waiting on somebody else to send you an export.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/mysql.png'],
    time: 'Week 4',
    title: 'Grouping And Joining Tables',
    practicalTools: 'MySQL/PostgreSQL (GROUP BY, HAVING, JOIN)',
    desc: 'Aggregate records into the totals a report needs, then combine customers, orders and products across tables to answer questions no single table can.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 5',
    title: 'From Query To Report',
    practicalTools: 'Excel/Google Sheets, MySQL/PostgreSQL',
    desc: 'Close the loop: query the database, bring the result into Excel, build the summary, and set it up so next month is a refresh rather than a rebuild.',
    initiallyActive: true,
  },
];

export default function ExcelAndSqlPage() {
  return (
    <>
      <SiteHeader />

      <JsonLd
        data={courseSchema({
          name: TITLE,
          description: DESCRIPTION,
          slug: 'excel-and-sql',
          level: 'Beginner',
        })}
      />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <CourseHero
            hero={{
              sub: 'Data Analytics',
              title: TITLE,
              desc: 'The two tools every analyst job asks for',
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
