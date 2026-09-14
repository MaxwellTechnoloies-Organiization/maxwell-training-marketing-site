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
  title: "Digital Forensic Essentials",
  description:
    "Digital Forensics Essentials training in Douala. 12 modules and 28 live labs covering Windows, Linux, network, malware and dark web forensics.",
};

const TEAM = [
  "/assets/images/tools/penetration.png",
  "/assets/images/tools/security.png",
];

const TIME = "1 Hours of Practicals";

const OUTLINE: Array<[string, string]> = [
  ["Module 01", "Computer Forensics Fundamentals"],
  ["Module 02", "Computer Forensics Investigation Process"],
  ["Module 03", "Understanding Hard Discs and File Systems"],
  ["Module 04", "Data Acquisition and Duplication"],
  ["Module 05", "Defeating Anti-Forensics Techniques"],
  ["Module 06", "Windows Forensics"],
  ["Module 07", "Linux and Mac Forensics"],
  ["Module 08", "Network Forensics"],
  ["Module 09", "Investigating Web Attacks"],
  ["Module 10", "Dark Forensics"],
  ["Module 11", "Investigating Email Crimes"],
  ["Module 12", "Malware Forensics"],
];

const modules: TimelineModule[] = OUTLINE.map(([title, desc], index) => ({
  team: TEAM,
  time: TIME,
  title,
  instructors: desc,
  desc,
  initiallyActive: index === 0,
}));

export default function DigitalForensicsEssentialsPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Digital Forensics Essentials",
          description:
            "Digital Forensics Essentials training with 12 modules and 28 live labs covering Windows, Linux, network, malware and dark web forensics.",
          slug: "digital-forensics-essentials",
          hours: 12,
          level: "Beginner",
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
                    <div className="heading-sub layout-02">DFE</div>
                    <h1 className="heading-title size-xl">
                      Digital Forensics Essentials (DFE)
                    </h1>
                    <div className="heading-desc">
                      The ideal entry point for all students interested in
                      understanding digital forensics.
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
                      src="/assets/images/dfe-banner.png"
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
                        For those with an interest in pursuing a career in
                        Digital Forensics, you&rsquo;ve found the one essentials
                        course designed with your needs in mind. Digital
                        Forensics Essentials is the ideal entry point for all
                        students interested in understanding digital forensics.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        This course will introduce students to Computer
                        Forensics Fundamentals as well as the Computer Forensics
                        Investigation Process. Plan to learn about Dark Web,
                        Windows, Linux, Malware Forensics and so much more! With
                        28 live labs you won&rsquo;t find a more robust,
                        hands-on, entry-level digital forensics course anywhere.
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
