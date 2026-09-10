import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  CourseTimeline,
  type TimelineModule,
} from "@/features/courses/components/CourseTimeline";

export const metadata: Metadata = {
  title: "Web Design Training",
  description:
    "Learn to build websites without coding. WordPress, graphic design, SEO and hosting — practical training in Douala, Cameroon.",
};

const modules: TimelineModule[] = [
  {
    team: ["/assets/images/tools/webdesign.png"],
    time: "20 Hours of Practicals",
    title: "Principles of Beautiful Designs",
    instructors: "Principles of Beautiful Designs",
    desc: "",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/graphicdesign.png"],
    time: "120 Hours of Practicals",
    title: "Graphic Design for Web",
    instructors: "Graphic Design for Web",
    desc: "",
  },
  {
    team: ["/assets/images/tools/wordpress.png"],
    time: "80 Hours Practicals",
    title: "Content Management Systems Wordpress",
    instructors: "Content Management Systems Wordpress",
    desc: "",
  },
  {
    team: ["/assets/images/tools/seo.png"],
    time: "10 Hours of Practicals",
    title: "Web Design and SEO",
    instructors: "Web Design and SEO",
    desc: "",
  },
  {
    team: ["/assets/images/tools/emailmarketing.png"],
    time: "40 Hours Practicals",
    title: "Web Design and Email Marketing",
    instructors: "Web Design and Email Marketing",
    desc: "",
  },
  {
    team: ["/assets/images/tools/socialmedia.png"],
    time: "40 Hours of Practicals",
    title: "Web Design and Social Media Marketing",
    instructors: "Web Design and Social Media Marketing",
    desc: "",
  },
  {
    team: ["/assets/images/tools/hosting.png"],
    time: "40 Hours of Practicals",
    title: "Hosting and Deployment",
    instructors: "Hosting and Deployment",
    desc: "",
  },
];

export default function WebDesignPage() {
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
                    <h1 className="heading-title size-xl">Web Design</h1>
                    <div className="heading-desc">
                      Blend your creativity with IT to produce user friendly
                      websites without coding
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
                        The Web Design training is a course designed to bring IT
                        skills closer to everyone who would love to build
                        websites in IT.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        The course is designed to welcome learners from every
                        field regardless of whether or not they know prior
                        knowledge in IT.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        At the end, trainees will be able to build
                        personal/portfolio websites, business websites,
                        blog/news/magazine websites and even e-commerce
                        websites.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Our training comes with tons of exercises and practical
                        work on real projects to have you master what
                        you&rsquo;re learning
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
