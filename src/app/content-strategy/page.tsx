import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Content Strategy',
  description:
    'A digital marketing course at Maxwell Training: define your editorial line, tell stories that connect, plan ahead with an editorial calendar and choose the right content formats, from videos and carousels to articles, for your audience in Cameroon.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/socialmedia.png'],
    time: 'Week 1',
    title: 'Editorial Line',
    practicalTools: 'Notion, Google Docs, Canva (Brand Kit)',
    desc: 'Define what your brand talks about, the tone it uses and the content pillars it keeps coming back to, so every post sounds like you and serves a clear purpose.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/socialmedia.png'],
    time: 'Week 2',
    title: 'Storytelling',
    practicalTools: 'Google Docs, Canva, CapCut',
    desc: 'Learn simple story structures that turn your products, customers and behind-the-scenes moments into posts people remember, relate to and share.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/socialmedia.png'],
    time: 'Week 3',
    title: 'Editorial Calendar',
    practicalTools: 'Notion, Trello, Meta Business Suite',
    desc: 'Plan your content weeks in advance, balance your content pillars and schedule posts so you publish consistently without last-minute stress.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/socialmedia.png'],
    time: 'Week 4',
    title: 'Content Formats (video, carousel, articles)',
    practicalTools: 'CapCut, Canva, Buffer/Hootsuite',
    desc: 'Choose between short videos, carousels and articles based on your goal and platform, and learn what makes each format perform on TikTok, Instagram, Facebook and your website.',
    initiallyActive: true,
  },
];

export default function ContentStrategyPage() {
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
                    <h1 className="heading-title size-xl">Content Strategy</h1>
                    <div className="heading-desc">
                      Plan and publish content your audience actually wants to read, watch and share
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
                        Many businesses in Cameroon post on social media only when they remember to,
                        with no clear message and no plan. The result is a feed full of random
                        flyers and promotions that followers scroll straight past, and a brand
                        nobody recognises. Posting more is not the answer. Posting with purpose is.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Content Strategy at Maxwell Training shows you how. You will define your
                        editorial line, use storytelling to make your brand memorable, organise your
                        posts with an editorial calendar and choose the right formats, from short
                        videos and carousels to articles. You will leave with a content plan you can
                        follow week after week.
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
