import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Reveal } from '@/components/ui/Reveal';
import { CourseTimeline, type TimelineModule } from '@/features/courses/components/CourseTimeline';

export const metadata: Metadata = {
  title: 'Frontend Web Development',
  description:
    'Frontend web development training in Douala. HTML, CSS, JavaScript and Angular with 7,000+ coding exercises and a paid internship.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/html5.png', '/assets/images/tools/tag.png'],
    time: '80 Hours of Practicals',
    title: 'HTML Mastery',
    practicalTools: 'HTML',
    desc: 'Everything you need to know about HTML, the markup language behind every web page. You will build well-structured, accessible pages with text, media, links, forms and tables. This course comes with over 1,500 coding exercises and a 2-week internship at the end of your training.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/css.png', '/assets/images/tools/bootstrap.png'],
    time: '80 Hours of Practicals',
    title: 'CSS Mastery',
    practicalTools: 'CSS',
    desc: 'Everything you need to know about CSS, the language for styling web applications. You will build layouts with Flexbox and Grid, make your pages responsive on every screen size and speed up your work with Bootstrap. This course comes with over 1,500 coding exercises and a 2-week internship at the end of your training.',
  },
  {
    icon: ['/assets/images/tools/javascript.png', '/assets/images/tools/typescript.png'],
    time: '80 Hours of Practicals',
    title: 'JavaScript',
    practicalTools: 'JavaScript',
    desc: 'JavaScript is the most widely used programming language in the world and a core skill for every web developer. This course takes you through the language in depth with over 4,000 coding exercises, using modern JavaScript (ES6 and later), including arrow functions, modules, promises and async/await, so you write code to today’s standards.',
  },
  {
    icon: ['/assets/images/tools/angular.png', '/assets/images/tools/typescript.png'],
    time: '40 Hours of Practicals',
    title: 'Angular',
    practicalTools: 'Angular, TypeScript',
    desc: 'Angular is a free, open-source framework maintained by Google for building large-scale web applications with TypeScript. You will learn components, templates, data binding, services and dependency injection, signals and routing, and connect your applications to real APIs with Angular’s HttpClient to build complete single-page applications.',
  },
];

export default function FrontendWebDevPage() {
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
                    <h1 className="heading-title size-xl">Frontend Web Development</h1>
                    <div className="heading-desc">
                      Build fast, responsive and interactive user interfaces with HTML, CSS,
                      JavaScript and Angular
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
                      src="/assets/images/web-banner.png"
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
                        worthy of competing anywhere in the world.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        We&rsquo;ve already been able to train over 30 coders who&rsquo;ve executed
                        projects for some of the biggest brands in the country, including SONARA,
                        UBA Cameroon, Access Bank Cameroon, Media Plus, SCR Maya &amp; Cie, CHOCOCAM
                        TIGER BRANDS among others.
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
