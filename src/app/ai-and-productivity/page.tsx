import { Metadata } from 'next';
import { CourseTimeline, TimelineModule } from '@/features/courses/components/CourseTimeline';
import { SiteHeader } from '@/components/layout/SiteHeader';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'AI & Productivity',
  description:
    'A digital marketing course at Maxwell Training: write effective AI prompts, automate repetitive marketing tasks and use AI assistants to create on-brand content faster for your business in Cameroon.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 1',
    title: 'Prompt Engineering',
    practicalTools: 'ChatGPT, Claude, Gemini',
    desc: 'Learn to write clear prompts with the right context, examples and format, so AI tools give you useful, accurate results instead of generic answers.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 2',
    title: 'Workflow Automation',
    practicalTools: 'Google Sheets, WhatsApp Business',
    desc: 'Connect your apps so routine tasks like capturing leads, logging orders and sending follow-ups happen automatically, freeing up hours every week.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/handshake.png'],
    time: 'Week 3',
    title: 'AI Assistants for content creation',
    practicalTools: 'ChatGPT, Claude, Midjourney/Canva Magic Studio',
    desc: 'Use AI to brainstorm ideas, draft captions and articles and create visuals, then edit the results so they sound like your brand and stay accurate.',
    initiallyActive: true,
  },
];

export default function AIAndProductivityPage() {
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
                    <h1 className="heading-title size-xl">AI & Productivity</h1>
                    <div className="heading-desc">
                      Use AI to get more marketing work done in less time, without losing your
                      brand’s voice
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
                        Many business owners and marketers in Cameroon spend hours writing captions,
                        designing visuals and repeating the same tasks by hand. AI tools can take
                        much of that load off, but used without the right skills they produce
                        generic, inaccurate content that does more harm than good.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        AI & Productivity at Maxwell Training shows you how to use these tools
                        properly. You will learn prompt engineering to get better results from AI,
                        automate repetitive workflows and use AI assistants to create content faster
                        while keeping it on-brand. You will leave with practical AI habits that save
                        you time every week.
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
