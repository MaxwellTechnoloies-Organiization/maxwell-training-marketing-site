/**
 * Certified Hacking Forensic Investigator course page.
 *
 * Hero, two-paragraph description, and a module outline. Module content is
 * a local array rather than a shared store: pages own their copy so each
 * can be edited without touching the others.
 *
 * @author Awa Precious
 */

import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  CourseTimeline,
  type TimelineModule,
} from "@/features/courses/components/CourseTimeline";

export const metadata: Metadata = {
  title: "Computer Hacking Forensic Investigator",
  description:
    "CHFI v10 digital forensics training in Douala. Learn evidence collection, Windows and Linux forensics, malware analysis and dark web investigation.",
};

const TEAM = [
  "/assets/images/tools/penetration.png",
  "/assets/images/tools/security.png",
];

const TIME = "4 Hours of Practicals";

const INACTIVE = new Set([1, 2, 3, 4, 5]);

const SUBJECTS: string[] = [
  "Computer Forentics in Today's World",
  "Computer Forensics Investigation Process",
  "Understanding Hard Disks and File Systems",
  "Data Acquisition and Duplication",
  "Defeating Anti-Forensics Techniques",
  "Windows Forensics",
  "Linux and Mac Forensics",
  "Network Forensics",
  "Investing Web Attacks",
  "Dark Web Foensics",
  "Database Forensics",
  "Cloud Forensics",
  "Investigating Email Crimes",
  "Malware Forensics",
  "Mobile Forensics",
  "Iot Forensics",
];

const modules: TimelineModule[] = SUBJECTS.map((desc, index) => ({
  team: TEAM,
  time: TIME,
  title: `Module ${String(index + 1).padStart(2, "0")}`,
  instructors: SUBJECTS[index],
  desc,
  initiallyActive: !INACTIVE.has(index),
}));

export default function ComputerHackingForensicInvestigatorPage() {
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
                    <div className="heading-sub layout-02">CHFI</div>
                    {/* "Computer" is duplicated in the source heading. */}
                    <h1 className="heading-title size-xl">
                      Computer Computer Hacking Forensic Investigator CHFI
                    </h1>
                    <div className="heading-desc">
                      ANSI 17024 accredited Certification Program. When Hackers
                      are Smart, Investigators need to be Smarter
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
                      src="/assets/images/chfi-banner.png"
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
                        Every crime leaves a digital footprint, and we have the
                        skills to track those footprints. Every crime leaves a
                        digital trail and with EC Council&rsquo;s CHFI v10, you
                        will learn to unravel these pieces of evidence, decode
                        them and report them. From decoding a hack to taking
                        legal action against the perpetrators, you will be an
                        active respondent in times of cyber-breaches. With
                        organizations rapidly adopting new digital technologies
                        and cyberattacks being a prime risk factor*, it is no
                        surprise that computer forensics is the need of the
                        hour. The estimated growth of the worldwide forensics
                        market is projected at USD 9.7 billion by 2023*
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        CHFI v10 includes all the essentials of digital
                        forensics analysis and evaluation required for
                        today&rsquo;s digital world. From identifying the
                        footprints of a breach to collecting evidence for a
                        prosecution, CHFI v10 walks students through every step
                        of the process with experiential learning. This course
                        has been tested and approved by veterans and top
                        practitioners of the cyber forensics industry. CHFI v10
                        is engineered by industry practitioners for both
                        professionals and aspiring professionals alike from
                        careers including forensic analysts, cybercrime
                        investigators, cyber defense forensic analysts, incident
                        responders, information technology auditors, malware
                        analysts, security consultants, and chief security
                        officers.
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
