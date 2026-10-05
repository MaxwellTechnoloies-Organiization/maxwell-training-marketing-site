import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Channels & Visibility',
  description:
    'A digital marketing course at Maxwell Training: build a social media strategy, grow an email list, use blogging to get found on Google and learn how to combine digital and traditional marketing for your business in Cameroon.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/email-marketing.png'],
    time: 'Week 1',
    title: 'Social Media Strategy',
    practicalTools: 'Meta Business Suite, TikTok Studio, LinkedIn Pages',
    desc: 'Choose the platforms where your audience is most active, set a clear goal for each one and decide what and how often to post to grow a real, engaged following.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/email-marketing.png'],
    time: 'Week 2',
    title: 'Email/Newsletter',
    practicalTools: 'Mailchimp/Brevo, Canva, Google Forms',
    desc: 'Build an email list, design simple newsletters and write messages that keep your customers informed, engaged and coming back to buy again.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/email-marketing.png'],
    time: 'Week 3',
    title: 'Blogging',
    practicalTools: 'WordPress, Google Search Console, Ubersuggest',
    desc: 'Set up a blog, write articles around the questions your customers search for and apply basic SEO so your website gets found on Google.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/email-marketing.png'],
    time: 'Week 4',
    title: 'Digital Vs Traditional Marketing',
    practicalTools: 'Google Analytics, Meta Business Suite, Google Sheets',
    desc: 'Compare digital channels with radio, TV, print and billboards on cost, reach and measurable results, and learn how to combine both for the Cameroonian market.',
    initiallyActive: true,
  },
];

export default function ChannelsAndVisibilityPage() {
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
                    <h1 className="heading-title size-xl">Channels & Visibility</h1>
                    <div className="heading-desc">
                      Choose the right channels and get your business seen by the people who matter
                      most
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
                        Many businesses in Cameroon open an account on every platform, post a few
                        times and then go quiet. Others rely only on flyers, banners and word of
                        mouth, and miss the customers who now search and shop online. Being
                        everywhere is not a strategy. Being visible where your customers already are
                        is.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Channels & Visibility at Maxwell Training helps you choose and use the right
                        channels. You will build a social media strategy, grow and engage an email
                        list, use blogging to get found on Google and learn when digital beats
                        traditional marketing, and when the two work best together. You will leave
                        with a clear channel plan matched to your audience and budget.
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
