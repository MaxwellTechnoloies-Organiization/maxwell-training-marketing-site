import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  CourseTimeline,
  type TimelineModule,
} from "@/features/courses/components/CourseTimeline";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ethical Hacking Essentials (EHE)",
  description:
    "Ethical Hacking Essentials in Douala — the entry point into cyber security. 13 modules covering security fundamentals, password cracking and network attacks.",
};

const TEAM = [
  "/assets/images/tools/penetration.png",
  "/assets/images/tools/security.png",
];

const OUTLINE: Array<[string, string]> = [
  ["1 Hours of Practicals", "Information Security Fundamentals"],
  ["2 Hours of Practicals", "Ethical Hacking Fundamentals"],
  ["4 Hours of Practicals", "Understanding Hard Disks and File Systems"],
  [
    "3 Hours of Practicals",
    "Information Security Threats and Vulnerability Assessment",
  ],
  ["2 Hours of Practicals", "Password Cracking Techniques and Countermeasures"],
  [
    "2 Hours of Practicals",
    "Social Engineering Techniques and Countermeasures",
  ],
  ["4 Hours of Practicals", "Network Level Attacks and Countermeasures"],
  ["4 Hours of Practicals", "Web Application Attacks and Countermeasures"],
  ["1 Hours of Practicals", "Wireless Attacks and Countermeasures"],
  ["3 Hours of Practicals", "Mobile Attacks and Countermeasures"],
  ["4 Hours of Practicals", "IOT and OT Attacks and Countermeasures"],
  ["4 Hours of Practicals", "Cloud Computing Threats and Countermeasures"],
  ["4 Hours of Practicals", "Penetration Testing Fundamentals"],
];

const modules: TimelineModule[] = OUTLINE.map(([time, desc], index) => ({
  team: TEAM,
  time,
  title: `Module ${String(index + 1).padStart(2, "0")}`,
  instructors: desc,
  desc,
  initiallyActive: index === 0,
}));

export default function EthicalHackingEssentialsPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Ethical Hacking Essentials",
          description:
            "Ethical Hacking Essentials which is the entry point into cyber security. 13 modules covering security fundamentals, password cracking and network attacks.",
          slug: "ethical-hacking-essentials",
          hours: 38,
          level: "Intermediate",
        })}
      />
      <SiteHeader />

      <main id="main" className="site-main">
        <div className="site-content pt0 pb0">
          <section className="section opt200 spdb overflow-hidden">
            <div className="container">
              <div className="row flex-align-c">
                <div className="col-lg-6">
                  <div className="heading mb32">
                    <div className="heading-sub layout-02">EHE</div>
                    <h1 className="heading-title size-xl">
                      Ethical Hacking Essentials
                    </h1>
                    <div className="heading-desc">
                      The Fundamental Skills You Need to Get Into Cybersecurity
                    </div>
                  </div>
                  <div className="button-wrap">
                    {/* Source href was contact-01.html, which exists nowhere. */}
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
                      src="/assets/images/ehe-banner.png"
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
                        With this special EC-Council Essentials Series, our goal
                        is to implement a technician track to teach students and
                        adults of all ages baseline cybersecurity skills in the
                        areas of Network Defense, Ethical Hacking, and Digital
                        Forensics. Learning resources like videos and ebooks
                        will be available for free on our platform so we can
                        help you achieve your goals without worrying too much
                        about the cost of education.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        This course is built for high school students who want
                        to get an early start to their cybersecurity career and
                        master the fundamentals of security online,
                        college/university students Who want to prepare for a
                        cybersecurity career and aid their IT education and
                        working professionals Who want to get into a
                        cybersecurity field and don&rsquo;t know where to start
                        their education journey.
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
