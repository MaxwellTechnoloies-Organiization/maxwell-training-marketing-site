import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  CourseTimeline,
  type TimelineModule,
} from "@/features/courses/components/CourseTimeline";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "10-week digital marketing training in Douala. SEO, paid advertising, social media, email marketing, analytics and Canva design, taught practically.",
};

const modules: TimelineModule[] = [
  {
    team: ["/assets/images/tools/handshake.png"],
    time: "Practicals not Applicable",
    title: "Week 1",
    instructors: "Introduction to Sales and Marketing",
    desc: "Introduction to Sales and Marketing",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/handshake.png"],
    time: "1 Week of Practice",
    title: "Week 2",
    instructors: "Website Design and Marketing",
    desc: "Website Design and Marketing",
  },
  {
    team: ["/assets/images/tools/seo2.png"],
    time: "1 Week of practice",
    title: "week 3",
    instructors: "Search Engine Optimization (SEO)",
    desc: "Search Engine Optimization (SEO)",
  },
  {
    team: ["/assets/images/tools/ppc.png"],
    time: "1 week of Practice",
    title: "Week 4",
    instructors: "Pay Per Click (PPP) Advertising",
    desc: "Pay Per Click (PPP) Advertising",
  },
  {
    team: ["/assets/images/tools/socialmedia.png"],
    time: "1 Week of practice",
    title: "Week 5",
    instructors: "Social Media Marketing,Sales Strategies and Planning",
    desc: "Social Media Marketing,Sales Strategies and Planning",
  },
  {
    team: ["/assets/images/tools/email-marketing.png"],
    time: "1 Week of Practice",
    title: "Week 6",
    instructors: "Email Marketing",
    desc: "Email Marketing",
  },
  {
    team: ["/assets/images/tools/marketing.png"],
    time: "1 Week of practice",
    title: "Week 7",
    instructors: "content marketing",
    desc: "content marketing",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/analytics.png"],
    time: "1 week of practice",
    title: "Week 8",
    instructors: "Analytics and Reporting",
    desc: "Analytics and Reporting",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/affiliate.png"],
    time: "1 Week of practice",
    title: "Week 9",
    instructors: "Affiliate Marketing",
    desc: "Affiliate Marketing",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/canva.png"],
    time: "1 Week of practice",
    title: "Week 10",
    instructors: "Graphic Design with Canva",
    desc: "Graphic Design with Canva",
    initiallyActive: true,
  },
];

export default function DigitalMarketingPage() {
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
                    <div className="heading-sub layout-02">Marketing</div>
                    <h1 className="heading-title size-xl">Digital Marketing</h1>
                    <div className="heading-desc">
                      Convert your online audience into high-paying customers
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
                      src="/assets/images/marketing-banner.png"
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
                        Creating a loyal online community and converting
                        audiences into customers is essential for the success
                        and stability of any business but not every entrepreneur
                        or business person is well versed in the craft of online
                        business or digital marketing. Coupled with the lack of
                        up-to-date professional courses that match the needs and
                        requirements of the digital business landscape in
                        Cameroon.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Our training at Maxwell Training explores how to handle,
                        manage and grow digital competence and business
                        footprints. You will get guided and equipped with the
                        skills and knowledge of the latest digital marketing
                        techniques to grow your business. You will learn to
                        develop effective digital marketing strategies, use
                        social media platforms to reach your target audience and
                        optimize your website for better conversions.
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
          />
        </div>
      </main>
    </>
  );
}
