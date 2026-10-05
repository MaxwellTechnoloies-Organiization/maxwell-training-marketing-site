import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Reveal } from '@/components/ui/Reveal';
import { CourseTimeline, type TimelineModule } from '@/features/courses/components/CourseTimeline';

export const metadata: Metadata = {
  title: 'Mobile Frontend Development',
  description:
    'Mobile app development training in Douala. Build cross-platform Android and iOS apps with Dart and Flutter, then work on real client projects.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/dart.png', '/assets/images/tools/code.png'],
    time: '120 Hours of Practicals',
    title: 'Dart',
    practicalTools: 'Dart',
    desc: 'This course introduces and expands into Dart, the programming language developed by Google that powers Flutter. With Dart, building mobile, web and desktop applications becomes seamless. Prior programming knowledge isn’t necessary, but you will find it easier if you are already familiar with an object-oriented language.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/flutter.png', '/assets/images/tools/cross-platform.png'],
    time: '120 Hours of Practicals',
    title: 'Flutter',
    practicalTools: 'Flutter',
    desc: 'Flutter is Google’s open-source UI toolkit for building apps for Android, iOS, the web, Windows, macOS and Linux from a single codebase. Unlike Dart, Flutter is not a programming language but a software development kit written in Dart. You will build interfaces with widgets, manage state, handle navigation and connect your apps to backend APIs.',
  },
];

export default function MobileFrontendDevelopmentPage() {
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
                    <div className="heading-sub layout-02">Software Engineering</div>
                    <h1 className="heading-title size-xl">Mobile Frontend Development</h1>
                    <div className="heading-desc">
                      Build beautiful, high-performance apps for Android and iOS from a single
                      Flutter codebase
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
                      src="/assets/images/mobile-banner.png"
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
                        Maxwell Engineering&rsquo;s software engineering training program is created
                        with a mission to raise world class coders developing software and apps
                        worthy of competing anywhere in the world. We&rsquo;ve already been able to
                        train over a dozen coders who&rsquo;ve executed projects for some of the
                        biggest brands in the country, including SONARA, UBA Cameroon, Access Bank
                        Cameroon, Media Plus, SCR Maya &amp; Cie, CHOCOCAM TIGER BRANDS among
                        others.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        The training with Maxwell Engineering is fully customized to meet the pace
                        and competence of every learner. We don&rsquo;t bundle you up with other
                        trainees and deliver the same training rigidly as traditional education
                        methods do. You rather work one-on-one with a supervisor in a practical,
                        real-life working environment, who tailors all your lessons to your specific
                        competencies and needs.
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
