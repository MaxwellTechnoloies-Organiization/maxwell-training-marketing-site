/**
 * Certified Incident Handler course page.
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
  title: "Certified Incident Handler",
  description:
    "EC-Council Certified Incident Handler training in Douala. Nine modules on detecting, containing and recovering from security incidents.",
};

const modules: TimelineModule[] = [
  {
    team: [
      "/assets/images/tools/handshake.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 01",
    instructors: "Module 01",
    desc: "Introduction to Incident Handling and Response",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/penetration.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 02",
    instructors: "Module 02",
    desc: "Incident Handling and Response Process",
  },
  {
    team: [
      "/assets/images/tools/security.png",
      "/assets/images/tools/hacking.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 03",
    instructors: "Module 03",
    desc: "Forensic Readiness and First Response",
  },
  {
    team: [
      "/assets/images/tools/malware.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 04",
    instructors: "Module 04",
    desc: "Handling and Responding to Malware Incidents",
  },
  {
    team: [
      "/assets/images/tools/email.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 05",
    instructors: "Module 05",
    desc: "Handling and Responding to Email Security Incidents",
  },
  {
    team: [
      "/assets/images/tools/network.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 06",
    instructors: "Module 06",
    desc: "Handling and Responding to Network Security Incidents",
  },
  {
    team: [
      "/assets/images/tools/http.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 07",
    instructors: "Module 07",
    desc: "Handling and Responding to Web Application Security Incidents",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/cloud.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 08",
    instructors: "Module 08",
    desc: "Handling and Responding to Cloud Security Incidents",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/penetration.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Module 09",
    instructors: "Module 09",
    desc: "Handling and Resonding to Insider Threats",
    initiallyActive: true,
  },
];

export default function CertifiedIncidentHandlerPage() {
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
                    <div className="heading-sub layout-02">E|CIH</div>
                    <h1 className="heading-title size-xl">
                      EC-Council Certified Incident Handler
                    </h1>
                    <div className="heading-desc">
                      Prepare to Handle and Respond to Security Incidents
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
                      src="/assets/images/ecih-banner.png"
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
                        Incident handling is a must for every organization for 3
                        reasons: to identify a malicious attack, to contain and
                        recover from an attack and because many organizations do
                        not have an incident response plan. E|CIH is a
                        specialist-level program that caters to mid-level to
                        high-level cybersecurity professionals. In order to
                        increase your chances of success, it is recommended that
                        you have at least 1 year of experience in the
                        cybersecurity domain. E|CIH members are ambitious
                        security professionals who work in Fortune 500
                        organizations globally.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        The E|CIH exam can be attempted after the completion of
                        the official E|CIH course taught either by any ECCouncil
                        Authorized Training Center (ATC) or by EC-Council
                        directly. Candidates that successfully pass the exam
                        will receive the E|CIH certificate and membership
                        privileges. Members are required to adhere to the
                        policies of EC-Council&rsquo;s Continuing Education
                        Policy
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
