import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Reveal } from '@/components/ui/Reveal';
import { CourseTimeline, type TimelineModule } from '@/features/courses/components/CourseTimeline';

export const metadata: Metadata = {
  title: 'Backend Web Development',
  description:
    'Backend web development training in Douala. Node.js, Express, REST APIs, PostgreSQL, authentication and deployment, taught one-on-one in a real working environment.',
};

const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/nodejs.png', '/assets/images/tools/express.png'],
    time: '10 Hours of Practicals',
    title: 'Node.js',
    practicalTools: 'Node.js, npm',
    desc: 'Node.js lets you run JavaScript on the server, so you can build your backend with the same language you use in the browser. You will set up Node.js projects, manage packages with npm and build your first web server with Express.',
    initiallyActive: true,
  },
  {
    // Hours are a suggestion: confirm with the trainer
    icon: ['/assets/images/tools/express.png', '/assets/images/tools/nodejs.png'],
    time: '30 Hours of Practicals',
    title: 'REST APIs with Express',
    practicalTools: 'Express, Postman',
    desc: 'Design and build REST APIs with routes, controllers, input validation and proper error handling, and test every endpoint with Postman so your web and mobile apps can rely on them.',
  },
  {
    icon: ['/assets/images/tools/postgres.png', '/assets/images/tools/mysql.png'],
    time: '40 Hours of Practicals',
    title: 'PostgreSQL',
    practicalTools: 'PostgreSQL',
    desc: 'PostgreSQL is a free and open-source relational database with over 35 years of active development. You will design tables and relationships, write SQL queries, enforce schemas and constraints on your data, use JSON columns when you need flexibility and connect the database to your Node.js API.',
  },
  {
    // Hours are a suggestion: confirm with the trainer
    icon: ['/assets/images/tools/nodejs.png', '/assets/images/tools/express.png'],
    time: '20 Hours of Practicals',
    title: 'Authentication & Security',
    practicalTools: 'JWT, bcrypt',
    desc: 'Add sign-up, login and role-based access to your applications with JSON Web Tokens, store passwords safely with bcrypt and protect your API against the most common web attacks.',
  },
  {
    // Hours are a suggestion: confirm with the trainer
    icon: ['/assets/images/tools/nodejs.png', '/assets/images/tools/postgres.png'],
    time: '10 Hours of Practicals',
    title: 'Deployment',
    practicalTools: 'Git/GitHub, Docker',
    desc: 'Put your application online: manage environment variables, package your API with Docker and deploy it with its database to the cloud, ready for real users.',
  },
];

export default function BackendWebDevPage() {
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
                    <h1 className="heading-title size-xl">Backend Web Development</h1>
                    <div className="heading-desc">
                      Build the servers, APIs and databases that power large-scale web applications
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
