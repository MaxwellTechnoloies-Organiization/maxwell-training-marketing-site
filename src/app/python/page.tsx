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

const TITLE = 'Python';
const DESCRIPTION = 'A data analytics course at Maxwell Training: clean and explore datasets with Python and pandas, visualise what you find, and write analysis scripts you can run again in Cameroon.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/python' },
};

const paragraphs: string[] = [
  'Every analyst eventually meets the file that Excel will not open, or the cleaning job that takes four hours of clicking and has to be repeated next month on new data.',
  'Python is where that work becomes a few lines you can run again. You will learn just enough of the language to be useful, load and inspect data with pandas, clean and reshape frames that are too large for a spreadsheet, explore and visualise what you find, and leave with scripts that rerun themselves.',
];

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 1',
    title: 'Python Basics For Analysts',
    practicalTools: 'Python, Jupyter Notebook',
    desc: 'Just enough language to be useful: variables, lists, dictionaries, loops and functions, written in a notebook so you see the result of every line as you type it.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 2',
    title: 'Loading And Inspecting Data With pandas',
    practicalTools: 'Python, pandas, Jupyter Notebook',
    desc: 'Read CSV, Excel and database tables into a DataFrame, then inspect what you actually have: shape, column types, missing values and the summary statistics of every field.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 3',
    title: 'Cleaning And Reshaping',
    practicalTools: 'Python, pandas',
    desc: 'Handle the work a spreadsheet struggles with: fix types and missing values, drop duplicates, split and combine columns, then group, pivot and merge frames into the table you need.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 4',
    title: 'Exploring And Visualising',
    practicalTools: 'Python, pandas, matplotlib',
    desc: 'Explore a dataset properly: distributions, trends over time, comparisons between groups, and the quick charts that tell you where to look next.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/code.png'],
    time: 'Week 5',
    title: 'Analysis You Can Run Again',
    practicalTools: 'Python, pandas, Jupyter Notebook',
    desc: 'Turn a one-off notebook into a script that runs next month on new data: functions, clear structure and output written to file, so the job stops being manual.',
    initiallyActive: true,
  },
];

export default function PythonPage() {
  return (
    <>
      <SiteHeader />

      <JsonLd
        data={courseSchema({
          name: TITLE,
          description: DESCRIPTION,
          slug: 'python',
          level: 'Beginner',
        })}
      />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <CourseHero
            hero={{
              sub: 'Data Analytics',
              title: TITLE,
              desc: 'Clean and explore the datasets that are too big for a spreadsheet',
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
