import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Fundamentals & Strategy',
  description:
    'A Digital marketing course at Maxwell Training: understand the digital ecosystem, define your customer’s problem, research your market, benchmark competitors and build a SWOT-based strategy for your business in Cameroon.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 1',
    title: 'Digital Ecosystem',
    practicalTools: 'Google Business Profile, Meta Business Suite, WhatsApp Business',
    desc: 'Learn how search engines, social media, websites, email and messaging apps work together, and find out where your customers actually spend their time online.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 2',
    title: 'Problem Definition',
    practicalTools: 'AnswerThePublic',
    desc: 'Pin down the exact problem your product or service solves and who has it, then turn that into a clear customer persona and value proposition.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 3',
    title: 'Market Research',
    practicalTools: 'Google Trends, Semrush/Ubersuggest',
    desc: 'Measure demand, discover what your audience is searching for and run simple surveys to test your assumptions against real data.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 4',
    title: 'Benchmarking',
    practicalTools: 'Semrush/Ubersuggest',
    desc: 'Study your competitors’ websites, social pages and ads to see what works in your market, and spot the gaps your business can own.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 5',
    title: 'SWOT Analysis',
    practicalTools: 'Google Sheets, Canva',
    desc: 'Bring your research together into a SWOT analysis and a one-page strategy with clear goals, a defined target audience and priority channels.',
    initiallyActive: true,
  },
];

export default function FundamentalsAndStrategiesPage() {
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
                    <h1 className="heading-title size-xl">Fundamentals & Strategy</h1>
                    <div className="heading-desc">
                      Build a digital marketing strategy grounded in real market data, before you
                      spend a single franc on ads
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
                        Many businesses in Cameroon jump straight into posting on social media or
                        paying for ads without a clear plan, and end up spending money on people who
                        never buy. The problem is rarely effort. It is missing foundations: knowing
                        who your customer is, what problem you solve for them and where you stand
                        against your competitors. On top of that, practical, up-to-date training
                        built for the Cameroonian digital market is hard to find.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Fundamentals & Strategy at Maxwell Training gives you those foundations. You
                        will learn how the digital ecosystem works, define the problem your business
                        solves, research your market with real data, benchmark your competitors and
                        turn it all into a SWOT analysis. You will leave with a clear, written
                        strategy to guide every campaign you run afterwards.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CourseTimeline dateLine={['5th July', '6th July', '7th July']} modules={modules} />
        </div>
      </main>
    </>
  );
}
