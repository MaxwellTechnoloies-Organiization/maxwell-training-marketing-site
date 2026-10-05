import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'SEO & Acquisition',
  description:
    'A digital marketing course at Maxwell Training: optimise your website for Google, run paid search campaigns, build quality backlinks and measure your results with Google Analytics 4 and Search Console.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/seo2.png'],
    time: 'Week 1',
    title: 'SEO (On-page/off-page)',
    practicalTools: 'Google Search Console, Semrush/Ubersuggest',
    desc: 'Optimise your pages with the right keywords, titles, descriptions and loading speed, and learn the off-page signals that make Google trust and rank your website.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/seo2.png'],
    time: 'Week 2',
    title: 'SEA (Paid advertising)',
    practicalTools: 'Google Ads, Google Keyword Planner, Google Analytics 4',
    desc: 'Create Google Ads search campaigns, choose keywords and budgets, and write ads that appear at the top of the results when customers search for what you sell.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/seo2.png'],
    time: 'Week 3',
    title: 'Backlinking',
    practicalTools: 'Ahrefs Backlink Checker, Ubersuggest, Google Business Profile',
    desc: 'Earn links from trusted websites, directories and partners, and learn which links boost your ranking and which ones can hurt it.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/seo2.png'],
    time: 'Week 4',
    title: 'Measurement Tools',
    practicalTools: 'Google Analytics 4, Google Search Console, Looker Studio',
    desc: 'Track where your visitors come from, what they do on your site and which keywords and campaigns bring in real customers, then use that data to improve.',
    initiallyActive: true,
  },
];

export default function SEOAndAcquisitionPage() {
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
                    <h1 className="heading-title size-xl">SEO & Acquisition</h1>
                    <div className="heading-desc">
                      Get found on Google and bring the right visitors to your website, through both
                      free and paid search
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
                        Many businesses in Cameroon have a website that almost nobody visits. It
                        does not show up when customers search on Google, and when they do pay for
                        ads, they cannot tell which franc actually brought in a sale. A website that
                        cannot be found and results that cannot be measured mean money left on the
                        table.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        SEO & Acquisition at Maxwell Training shows you how to bring the right
                        visitors to your site. You will optimise your pages for search, run paid
                        Google Ads campaigns, build backlinks that strengthen your ranking and track
                        your results with Google Analytics 4 and Search Console. You will leave
                        knowing how to attract traffic and prove what it is worth.
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
