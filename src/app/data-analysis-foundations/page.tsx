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

const TITLE = 'Data Analysis Foundations';
const DESCRIPTION = 'A data analytics course at Maxwell Training: learn what data analysis is, turn business questions into an analysis plan, and clean and organise records into a first complete analysis in Cameroon.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/data-analysis-foundations' },
};

const paragraphs: string[] = [
  'Most people meet data analysis as a pile of spreadsheets and a vague instruction to “look into the numbers”. Without a way to frame the question, the work turns into hours of scrolling that ends in an opinion nobody can check.',
  'Data Analysis Foundations gives you the groundwork the rest of the training builds on. You will learn how data is structured, how to turn a business question into a plan you can measure, how to get records out of the tools a company already runs, and how to clean them into something you can analyse.',
];

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 1',
    title: 'What Data Analysis Actually Is',
    practicalTools: 'Excel/Google Sheets, Notion',
    desc: 'Learn the shape of the work before the tools: rows, columns, fields and records, the difference between raw data and an answer, and the questions an analyst is actually paid to settle.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 2',
    title: 'Turning Questions Into An Analysis Plan',
    practicalTools: 'Notion, Excel/Google Sheets',
    desc: 'Take a vague request such as “sales are down” and turn it into something measurable: which figure, which period, compared against what, and what evidence would settle it either way.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 3',
    title: 'Getting Data Out Of Your Tools',
    practicalTools: 'Excel/Google Sheets, CSV exports, accounting software exports',
    desc: 'Pull records out of the systems a business already runs, bring them together into one workbook, and recognise the export problems that will bite you later.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 4',
    title: 'Cleaning And Organising Records',
    practicalTools: 'Excel/Google Sheets (Text to Columns, Remove Duplicates)',
    desc: 'Fix duplicates, blank cells, inconsistent names and numbers stored as text, then lay the result out as a table that formulas and pivot tables can actually read.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 5',
    title: 'Your First Complete Analysis',
    practicalTools: 'Excel/Google Sheets, PowerPoint/Google Slides',
    desc: 'Run an analysis end to end on a real dataset: plan it, clean it, summarise it, chart it, and write up what you found in a single page a manager can act on.',
    initiallyActive: true,
  },
];

export default function DataAnalysisFoundationsPage() {
  return (
    <>
      <SiteHeader />

      <JsonLd
        data={courseSchema({
          name: TITLE,
          description: DESCRIPTION,
          slug: 'data-analysis-foundations',
          level: 'Beginner',
        })}
      />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <CourseHero
            hero={{
              sub: 'Data Analytics',
              title: TITLE,
              desc: 'Where every analyst starts: the shape of the work, before the tools',
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
