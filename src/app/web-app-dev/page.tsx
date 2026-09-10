import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  CourseTimeline,
  type TimelineModule,
} from "@/features/courses/components/CourseTimeline";

export const metadata: Metadata = {
  title: "Fullstack Web Application Development",
  description:
    "Fullstack web development training in Douala. HTML, CSS, JavaScript, React, Node.js and MongoDB with 7,000+ coding exercises and a paid internship.",
};

const modules: TimelineModule[] = [
  {
    team: ["/assets/images/tools/html5.png", "/assets/images/tools/tag.png"],
    time: "80 Hours of Practicals",
    title: "HTML Mastery",
    instructors: "HTML",
    desc: "Everything to know about the Hypertext Markup Language, the most popular language for building applications in the world. This course comes with over 1,500 coding exercises and a 2-weeks internship at the end of your training.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/css.png",
      "/assets/images/tools/bootstrap.png",
    ],
    time: "80 Hours of Practicals",
    title: "CSS Mastery",
    instructors: "CSS",
    desc: "Everything to know about Cascading Style Sheet, the language for styling various sorts of applications. This course comes with over 1,500 coding exercises and a 2-weeks internship at the end of your training.",
  },
  {
    team: [
      "/assets/images/tools/javascript.png",
      "/assets/images/tools/typescript.png",
    ],
    time: "80 Hours of Practicals",
    title: "JavaScript",
    instructors: "Javascript",
    desc: "JavaScript is the most popular programming language in the world, and is mastered by virtually every web developer worldwide. This course exposes you to an in-depth study of the language with over 4,000 coding exercises. We also introduce students to EcmaScript 6, one of the latest variants of JavaScript, to permit them program using the latest standards of the language.",
  },
  {
    team: [
      "/assets/images/tools/react.png",
      "/assets/images/tools/angular.png",
    ],
    time: "40 Hours of Practicals",
    title: "React",
    instructors: "React",
    desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Node.js",
  },
  {
    team: [
      "/assets/images/tools/nodejs.png",
      "/assets/images/tools/express.png",
    ],
    time: "10 Hours of Practicals",
    title: "NodeJs",
    instructors: "NodeJs",
    desc: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
  },
  {
    team: [
      "/assets/images/tools/postgres.png",
      "/assets/images/tools/mysql.png",
    ],
    time: "40 Hours of Practicals",
    title: "PostgreSQL",
    instructors: "PostgreSQL",
    desc: "For introduction into data administration, PostgreSQL is a free and open-source relational database with over 35 years of active development. It uses SQL, enforces schemas and constraints on your data, and supports JSON columns when you need flexibility.",
  },
];

export default function WebAppDevPage() {
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
                    <div className="heading-sub layout-02">
                      Software Engineering
                    </div>
                    <h1 className="heading-title size-xl">
                      Web Application Development
                    </h1>
                    <div className="heading-desc">
                      Build robust, large-scale web applications using front end
                      and back end technologies
                    </div>
                  </div>
                  <div className="button-wrap">
                    <Link
                      href="/contact"
                      className="button fullfield"
                      title="Talk to an Expert"
                    >
                      Enrol for this Course
                    </Link>
                  </div>
                  <p className="h3 color-dark w500 mt32">
                    Phone. +237 672 149 730
                  </p>
                </div>

                <div className="col-lg-6">
                  <div className="images opt200 layout-11">
                    <img
                      className="img01"
                      src="/assets/images/hc-01.png"
                      alt="Image"
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInLeft"
                      className="img02"
                      src="/assets/images/hc-02.png"
                      alt="Image"
                    />
                    <img
                      className="img03 animate__jump"
                      src="/assets/images/web-banner.png"
                      alt="Image"
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      className="img04"
                      src="/assets/images/hc-04.png"
                      alt="Image"
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      className="img05"
                      src="/assets/images/hc-05.png"
                      alt="Image"
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
                        Maxwell Engineering&rsquo;s software engineering
                        training program is created with a mission to raise
                        world class coders developing software and apps worthy
                        of competing anywhere in the world.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        We&rsquo;ve already been able to train over 30 coders
                        who&rsquo;ve executed projects for some of the biggest
                        brands in the country, including SONARA, UBA Cameroon,
                        Access Bank Cameroon, Media Plus, SCR Maya &amp; Cie,
                        CHOCOCAM TIGER BRANDS among others.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        The training with Maxwell Engineering is fully
                        customized to meet the pace and competence of every
                        learner. We don&rsquo;t bundle you up with other
                        trainees and deliver the same training rigidly as
                        traditional education methods do. You rather work
                        one-on-one with a supervisor in a practical, real-life
                        working environment, who tailors all your lessons to
                        your specific competencies and needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CourseTimeline
            dateLine={["5th July", "6th July", "7th July"]}
            modules={modules}
          >
            <div className="button-wrap mt32">
              <Link
                href="/contact"
                className="button fullfield"
                title="More Details"
              >
                More Details
              </Link>
            </div>
          </CourseTimeline>
        </div>
      </main>
    </>
  );
}
