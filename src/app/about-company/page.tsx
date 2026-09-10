/**
 * About page: mission, statistics, and the three learning problems the
 * company positions itself against.
 *
 * The problem icons live in /assets/images/icons/.
 *
 * @author Awa Precious
 */

import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Maxwell Training builds skills through work-based, one-on-one instructions. Learn by doing on real projects, with a paid internship for every student.",
};

const problems = [
  {
    icon: "/assets/images/icons/zero-focus.svg",
    title: "Zero focus on the learner",
    desc: "Education is hardly customized to the skills and background of each learner. Grouping learners in classes means their abilities and competencies are assumed",
  },
  {
    icon: "/assets/images/icons/lack-of-love.svg",
    title: "Lack of Love",
    desc: "Many are the students passionate about computer systems and technology, but who can\u2019t learn or practice them because computer sciences are restricted to certain backgrounds. It thus becomes hard to do it even if you love it",
  },
  {
    icon: "/assets/images/icons/math-envy.svg",
    title: "Math Envy",
    desc: "Just like a lot of science is taught, computer science is delivered to learners today within a cloud of several difficult tools, terms and techniques. This is why anyone from another background would find it complex fitting in.",
  },
];

const stats: Array<{
  value: number;
  suffix: string;
  title: string;
  localize?: boolean;
}> = [
  { value: 2022, suffix: "", title: "Year Started", localize: false },
  { value: 75, suffix: "+", title: "graduates" },
  { value: 200, suffix: "+", title: "enrolled" },
  { value: 50, suffix: "+", title: "employed" },
];

export default function AboutCompanyPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="site-main">
        <div className="site-content pb0">
          <section
            className="section background-cover-right opt120 spdb"
            style={{ backgroundImage: "url(/assets/images/hcs-02.png)" }}
          >
            <div className="container">
              <div className="row flex-align-c">
                <div className="col-lg-6">
                  <div className="heading mb32">
                    <h2 className="heading-title size-xl">
                      About Maxwell <br />
                      <span className="color-navy no-underline">Training</span>
                    </h2>
                    <div className="heading-desc">
                      The only real work-based training and certification
                      program you might ever find
                    </div>
                  </div>
                  <div className="button-wrap mt32">
                    <Link
                      href="/contact"
                      className="button fullfield xs-mb10"
                      title="Try it free"
                    >
                      Enrol Now
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="images lg-mt32 layout-03">
                    <div className="inner">
                      <img
                        className="img01 animate__jump"
                        src="/assets/images/hcs-01.png"
                        alt="Image"
                      />
                      <img
                        className="img21"
                        src="/assets/images/hcs-03.png"
                        alt="Image"
                      />
                      <img
                        className="img22"
                        src="/assets/images/hcs-04.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-text spdt">
            <div className="container">
              <div className="row flex-align-c">
                <div className="col-lg-6">
                  <div className="text-left pdr80">
                    <h2>Our Mission</h2>
                    <p>
                      To provide training adapted to market needs by putting our
                      learners on the job as they learn.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-right pdr80">
                    <p>
                      We are not a school so our training methodology differs
                      from the traditional school system. We do not bundle up
                      learners and expect them to move at the same pace. We
                      rather offer self-paced learning and one-on-one practical
                      sessions supervised by a a field expert, while students
                      work on real-life projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="section spdtb">
            <div className="container">
              <div className="block-counter layout-02">
                <div className="row">
                  {stats.map((stat) => (
                    <div key={stat.title} className="col-lg-3 col-sm-6">
                      <div className="counter-box">
                        <div className="number">
                          <Counter value={stat.value} />
                          {stat.suffix && (
                            <span className="suffix">{stat.suffix}</span>
                          )}
                        </div>
                        <div className="title">{stat.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="section spdtb">
            <div className="container">
              <div className="heading align-center">
                <div className="heading-title size-l">
                  Learn Computer Sciences differently.
                </div>
                <h2 className="heading-desc">
                  We&rsquo;ve been learning with difficulties for so long.
                  Listen-watch-read-understand-memorize isn&rsquo;t optimal.
                  Fast, slow, experienced and inexperienced learners all taught
                  the same things the same way at the same pace? All that
                  changes here.
                </h2>
              </div>
            </div>

            <div className="linear-gradient-08 spdtb">
              <div className="container">
                <div className="row flex-align-c">
                  <div className="col-lg-6">
                    <div className="heading">
                      <h2 className="heading-title size-l">
                        Today&rsquo;s Learning Problems
                      </h2>
                      <div className="heading-desc">
                        We&rsquo;ve identified 3 key issues common in
                        today&rsquo;s computer science learning curve and we are
                        poised at solving them:
                      </div>
                    </div>

                    <div className="block-icon-box layout-16">
                      {problems.map((problem) => (
                        <div key={problem.title} className="item">
                          <div className="icon">
                            <img src={problem.icon} alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title">{problem.title}</h4>
                            <p className="desc">{problem.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      src="/assets/images/hvr-03.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div
            className="section-banner layout-03"
            style={{
              backgroundImage:
                "url(/assets/images/maxwell-training-change.jpg)",
            }}
          >
            <div className="container">
              <div className="content">
                <div className="heading heading-alway-white align-center">
                  <h2 className="heading-title">
                    Maxwell Training is changing <br /> the way we learn.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
