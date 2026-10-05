import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Performance & Analytics',
  description:
    'A digital marketing course at Maxwell Training: set the right KPIs, build clear reports and dashboards, analyse your marketing data, run A/B tests and keep improving your campaigns for your business in Cameroon.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 1',
    title: 'KPIs',
    practicalTools: 'Google Analytics 4, Meta Business Suite, Excel/Google Sheets',
    desc: 'Choose the few numbers that really show whether your marketing works, such as reach, leads, conversion rate and cost per customer, and set clear targets for each one.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 2',
    title: 'Reporting Tools',
    practicalTools: 'Google Looker Studio, Google Analytics 4, Excel/Google Sheets',
    desc: 'Build simple dashboards that bring your data together in one place, so you and your team can see performance at a glance without digging through every platform.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 3',
    title: 'Data Analysis',
    practicalTools: 'Excel/Google Sheets (pivot tables, charts), Google Analytics 4',
    desc: 'Clean, sort and chart your marketing data to spot trends, compare campaigns and understand what drives results and what wastes your budget.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 4',
    title: 'A/B testing',
    practicalTools: 'Meta Ads Manager, Mailchimp/Brevo, Excel/Google Sheets',
    desc: 'Test two versions of an ad, email or landing page against each other, read the results correctly and keep the version that performs better.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/analytics.png'],
    time: 'Week 5',
    title: 'Iteration',
    practicalTools: 'Google Looker Studio, Excel/Google Sheets, Notion',
    desc: 'Turn your findings into action: adjust your campaigns, set new targets and build a regular review routine so your marketing improves month after month.',
    initiallyActive: true,
  },
];

export default function PerformanceAndAnalyticsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <section className="section opt200 spdb overflow-hidden">
            <div className="container">
              <div className="row flex-align-c">
                <div className="col-lg-6">
                  <div className="heading mb32">
                    <div className="heading-sub layout-02">Digital Marketing</div>
                    <h1 className="heading-title size-xl">Performance & Analytics</h1>
                    <div className="heading-desc">
                      Measure what matters and use your data to make every campaign better than the
                      last
                    </div>
                  </div>
                  <div className="button-wrap">
                    <Link
                      href="/contact"
                      className="button fullfield"
                      title="Enrol for this Course"
                    >
                      Enrol for this Course
                    </Link>
                  </div>
                  <p className="h3 color-dark w500 mt32">Phone: +237 672 149 730</p>
                </div>

                <div className="col-lg-6">
                  <div className="images opt200 layout-11">
                    <img className="img01" src="/assets/images/hc-01.png" alt="" />
                    <Reveal
                      as="img"
                      animation="animate__fadeInLeft"
                      className="img02"
                      src="/assets/images/hc-02.png"
                      alt=""
                    />
                    <img
                      className="img03 animate__jump"
                      src="/assets/images/marketing-banner.png"
                      alt=""
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      className="img04"
                      src="/assets/images/hc-04.png"
                      alt=""
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      className="img05"
                      src="/assets/images/hc-05.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section spdt">
            <div className="container">
              <div className="heading align-center">
                <h2 className="heading-title size-l">Course Description</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Many businesses in Cameroon run campaigns, boost posts and send emails
                        without ever checking what actually worked. They judge success by likes or
                        gut feeling, keep paying for what does not perform and never discover what
                        does. Without measurement, every marketing decision is a guess.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Performance & Analytics at Maxwell Training teaches you to replace guesswork
                        with evidence. You will set the right KPIs, build clear reports and
                        dashboards, analyse your data, run A/B tests and use what you learn to keep
                        improving. You will leave able to prove the value of your marketing and make
                        smarter decisions with every campaign.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CourseTimeline dateLine={['5th July', '6th July', '7th July']} modules={modules}>
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
