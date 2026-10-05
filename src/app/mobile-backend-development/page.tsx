import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Reveal } from '@/components/ui/Reveal';
import { CourseTimeline, type TimelineModule } from '@/features/courses/components/CourseTimeline';

export const metadata: Metadata = {
  title: 'Mobile Backend Development',
  description:
    'Mobile backend development training in Douala. Build the APIs and databases behind mobile apps with JavaScript, Node.js, PostgreSQL and RESTful APIs, then work on real client projects.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/javascript.png', '/assets/images/tools/typescript.png'],
    time: '80 Hours of Practicals',
    title: 'JavaScript',
    practicalTools: 'JavaScript',
    desc: 'JavaScript is the most widely used programming language in the world and the language behind Node.js. This course takes you through the language in depth with over 4,000 coding exercises, using modern JavaScript (ES6 and later), including arrow functions, modules, promises and async/await, so you write code to today’s standards.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/nodejs.png', '/assets/images/tools/express.png'],
    time: '10 Hours of Practicals',
    title: 'Node.js',
    practicalTools: 'Node.js, npm',
    desc: 'Node.js lets you run JavaScript on the server, so you can build the backend of your mobile app with the language you already know. You will set up Node.js projects, manage packages with npm and build your first web server with Express.',
  },
  {
    icon: ['/assets/images/tools/postgres.png', '/assets/images/tools/mysql.png'],
    time: '40 Hours of Practicals',
    title: 'PostgreSQL',
    practicalTools: 'PostgreSQL',
    desc: 'PostgreSQL is a free and open-source relational database with over 35 years of active development. You will design tables and relationships, write SQL queries, enforce schemas and constraints on your data and use JSON columns when you need flexibility.',
  },
  {
    icon: ['/assets/images/tools/rest.png', '/assets/images/tools/http.png'],
    time: '40 Hours of Practicals',
    title: 'RESTful API',
    practicalTools: 'RESTful API',
    desc: 'A RESTful API is the interface that lets two systems exchange information over the internet, and it is how your mobile app talks to its backend. You will build APIs that connect your app to a database server, and integrate third-party services like PayPal, Coinbase, Facebook Login and many others.',
  },
];

export default function MobileBackendDevelopmentPage() {
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
                    <h1 className="heading-title size-xl">Mobile Backend Development</h1>
                    <div className="heading-desc">
                      Build the servers, APIs and databases that power your mobile apps
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
