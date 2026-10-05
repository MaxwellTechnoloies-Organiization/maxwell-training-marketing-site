import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Target Audience & Positioning',
  description:
    'A digital marketing course at Maxwell Training: build buyer personas, segment your market, map your customer’s journey with the AIDA funnel and craft a value proposition that sets your business apart in Cameroon.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 1',
    title: 'Buyer Persona',
    practicalTools: 'Make My Persona (HubSpot), Google Forms, Miro/FigJam',
    desc: 'Turn real customer information into detailed buyer personas that capture their goals, frustrations, buying habits and the platforms they use every day.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 2',
    title: 'Market Segmentation',
    practicalTools: 'Meta Ads Manager (audience targeting), Google Trends, Google Sheets',
    desc: 'Split your market into groups by location, age, needs and behaviour, then choose the segments most worth your time and budget.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 3',
    title: 'Conversion Funnel (AIDA)',
    practicalTools: 'Miro/FigJam, Canva, Google Analytics',
    desc: 'Map how a stranger becomes a customer through Attention, Interest, Desire and Action, and plan the content and offers that move people from one stage to the next.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 4',
    title: 'Value Proposition',
    practicalTools: 'Value Proposition Canvas (Strategyzer), Miro/FigJam, Canva',
    desc: 'Write a clear, specific promise that shows your target customer why they should choose you, and test how it lands with real people before you use it.',
    initiallyActive: true,
  },
];

export default function TargetAudienceAndPositioningPage() {
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
                    <h1 className="heading-title size-xl">Target Audience & Positioning</h1>
                    <div className="heading-desc">
                      Know exactly who your customer is and give them a clear reason to choose you
                      over the competition
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
                        Many businesses in Cameroon try to sell to everyone and end up connecting
                        with no one. Their posts and ads speak in general terms, reach the wrong
                        people and never explain why anyone should pick them over the competition.
                        Without a clear picture of your ideal customer, even a great product
                        struggles to stand out.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Target Audience & Positioning at Maxwell Training shows you how to fix that.
                        You will build detailed buyer personas, segment your market, map your
                        customer’s path from first contact to purchase with the AIDA funnel and
                        craft a value proposition that sets you apart. You will leave knowing
                        exactly who you are speaking to and what to say to win them over.
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
