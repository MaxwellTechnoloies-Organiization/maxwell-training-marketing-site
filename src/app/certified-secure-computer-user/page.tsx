/**
 * Certified Secure Computer User course page.
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
  title: "Certified Secure Computer User",
  description:
    "CSCU training in Douala for non-IT professionals. Protect against identity theft, phishing, malware and data loss across devices, email and the cloud.",
};

const TEAM = [
  "/assets/images/tools/penetration.png",
  "/assets/images/tools/security.png",
];

const TIME = "30 Minutes of Practicals";

/** [module label, subject, carried .is-active in the source] */
const OUTLINE: Array<[string, string, boolean]> = [
  ["Module 01", "INTRODUCTION TO DATA SECURITY", true],
  ["Module 02", "SECURING OPERATING SYSTEMS", false],
  ["Module 03", "MALWARE AND ANTIVIRUS", false],
  ["Module 04", "INTERNET SECURITY", true],
  ["Module 05", "SECURITY ON SOCIAL NETWORKING SITES", false],
  ["Module 06", "SECURING EMAIL COMMUNICATIONS", false],
  ["Module 07", "SECURING MOBILE DEVICES", true],
  ["Module 08", "SECURING THE CLOUD", false],
  ["Module 09", "SECURING NETWORK CONNECTIONS", false],
  ["Module 10", "DATA BACKUP AND DISASTER RECOVERY", true],
  ["Module 11", "SECURING IOT DEVICES AND GAMING CONSOLES", false],
  ["Module 12", "SECURE REMOTE WORK", false],
];

const modules: TimelineModule[] = OUTLINE.map(
  ([title, desc, initiallyActive]) => ({
    team: TEAM,
    time: TIME,
    title,
    instructors: desc,
    desc,
    initiallyActive,
  }),
);

export default function CertifiedSecureComputerUserPage() {
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
                    <div className="heading-sub layout-02">CSCU</div>
                    <h1 className="heading-title size-xl">
                      Certified Secure Computer User
                    </h1>
                    <div className="heading-desc">
                      The appropriate certification for on-I.T. students and
                      corporate workers
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
                      src="/assets/images/cscu-banner.png"
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
                        The C SCU program is designed to educate students on the
                        safe operation of computers, devices, and networks by
                        focusing on the more practical aspects of networking and
                        security, allowing them to expand their skills. Students
                        will develop a fundamental understanding of computer,
                        device, and network security issues, including identity
                        theft, credit card fraud, online banking phishing scams,
                        malware, loss of sensitive information, and social
                        engineering. This certification is an excellent
                        complement to educational offerings for knowledge
                        workers and end-users interested in becoming secure
                        power users.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        Students will learn to: identify the risk associated
                        with various cyber threats, secure different operating
                        systems, install and configure antiviruses, implement
                        basic security measures when online, back up data and
                        perform disaster recovery, implement various email
                        security measures, safeguard mobile devices from various
                        attacks, secure their cloud accounts, secure network
                        connections, secure IOT devices and gaming consoles,
                        secure remote work and implement appropriate security
                        measures associated with online social networking.
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
