/**
 * Certified Penetration Testing course page.
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
import { JsonLd } from "@/components/seo/JsonLd";
import { courseSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Certified Penetration Testing Professional",
  description:
    "CPENT certification training in Douala. Learn to pen test IoT and OT systems, write your own exploits and pivot into hidden network segments.",
};

const modules: TimelineModule[] = [
  {
    team: [
      "/assets/images/tools/penetration.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours Of Praticals",
    title: "Introduction to Penetration Testing and Methodologies",
    instructors: "Introduction to Penetration Testing and Methodologies",
    desc: "Cover the fundamentals of penetration testing, including penetration teating approaches, strategies, Methodologies, techniques, and varius guidelines and recommendations for penetration teating",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/penetration.png",
      "/assets/images/tools/security.png",
    ],
    time: "3hours of practicals",
    title: "Penetration Testing Scoping and Engagement",
    instructors: "Penetration Testing Scoping and Engagement",
    desc: "Learn the different stages and elements of scoping and engagement in penetration testing",
  },
  {
    team: ["/assets/images/tools/security.png"],
    time: "5 Hours of Practicals",
    title: "Open-Source Intelligence(OSINT)",
    instructors: "Open-Source Intelligence(OSINT)",
    desc: "Learn how to use techniques and tools to gather intelligence about the target from publicity available sources such as the World Wide Web (WWW), through website analysis, by using tools/frameworks/scripts, and so on.",
  },
  {
    team: ["/assets/images/tools/social-engineering.png"],
    time: "6 Hours Of Praticals",
    title: "Social Engineering Penetration Testing",
    instructors: "Social Engineering Penetration Testing",
    desc: "Learn different social engineering techniques and perform social engineering penetration testing on a target organization",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/network.png"],
    time: "8 Hours Of Praticals",
    title: "Network Penetration Testing-Eternal",
    instructors: "Network Penetration Testing-Eternal",
    desc: "Learn how to implement a comprehensive Penetration Testing Methodology for assessing networks frrom outsiders' perspective. Learn the process attackers follow to exploit the assets using vulnerabilities from the outside of the network perimeter.",
  },
  {
    team: ["/assets/images/tools/network.png"],
    time: "6 Hours Of Praticals",
    title: "Network Penetration Testing -Internal",
    instructors: "Network Penetration Testing -Internal",
    desc: "Learn how to implement a comprehensive penetration testing Methodology for assessing networks from insider's Perspective",
  },
  {
    team: ["/assets/images/tools/network.png"],
    time: "4 Hours Of Praticals",
    title: "Network Penetration Testing-Perimeter Devices",
    instructors: "Network Penetration Testing-Perimeter Devices",
    desc: "Learn How to implement a comprehensive penetration testing Methodology for assessing the security of network perimeter devices, such as Firewalls, IDS Routers, and Switches.",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/security.png"],
    time: "4 Hours Of Praticals",
    title: "Web Application Penetration Testing",
    instructors: "Web Application Penetration Testing",
    desc: "Learn how to analyze web applications for various vulnerabilitie, including the Open Device Application Security Project (OWASP) Top 10, and determine the risk of exploitation.",
  },
  {
    team: ["/assets/images/tools/penetration.png"],
    time: "5 Hours Of Praticals",
    title: "Wireless Penetration Testing",
    instructors: "Wireless Penetration Testing",
    desc: "Learn how to test various components of wireless networks, such as WLAN, RFID devices, and NFC Technology devices",
  },
  {
    team: ["/assets/images/tools/iot.png"],
    time: "5 Hours Of Praticals",
    title: "IoT Penetration testing",
    instructors: "IoT Penetration testing",
    desc: "Understand various threats to internet of things (IoT) networks and learn how to audit security controls for various inherent IoT risks.",
    initiallyActive: true,
  },
  {
    team: ["/assets/images/tools/security.png"],
    time: "3 Hours of Practicals",
    title: "OT and SCADA Penetration Testing",
    instructors: "OT and SCADA Penetration Testing",
    desc: "Understand OT and SCADA concepts and learn the process of testing various components of OT and SCADA networks.",
  },
  {
    team: ["/assets/images/tools/cloud.png"],
    time: "4 Hours of Practicals",
    title: "Cloud Penetration Testing",
    instructors: "Cloud Penetration Testing",
    desc: "Understand various security threats and concerns in cloud computing and learn how to perform cloud penetration testing to determine the probability of exploitation.",
  },
  {
    team: ["/assets/images/tools/security.png"],
    time: "3 Hours Of Praticals",
    title: "Binary Analysis and Exploitation",
    instructors: "Binary Analysis and Exploitation",
    desc: "Understand the binary analysis Methodology and reverse engineer applications to identify vulnerable applications that may lead to the exploitation of an information system.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/penetration.png",
      "/assets/images/tools/security.png",
    ],
    time: "3 Hours Of Praticals",
    title: "Report Writing and Post Testing Actions",
    instructors: "Report Writing and Post Testing Actions",
    desc: "Learn how to document and analyze the results of a penetration test and recommend post-penetration test actions.",
  },
];

export default function CertifiedPenetrationTestingProfessionalPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Certified Testing Professional",
          description:
            "CPENT certification training. Learn to pen test IoT and OT systems, write your own exploits and pivot into hidden network segments.",
          slug: "certified-penetration-testing-professional",
          hours: 63,
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
                    <div className="heading-sub layout-02">CPENT</div>
                    {/* "Penetration" is missing from the source heading. */}
                    <h1 className="heading-title size-xl">
                      Certified Testing Professional (CPENT)
                    </h1>
                    <div className="heading-desc">
                      Perform effective penetration tests in an enterprise
                      network environment
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
                      src="/assets/images/cpent-banner.png"
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
                        EC-Council&rsquo;s Certified Penetration Testing
                        Professional (CPENT) program teaches you how to perform
                        an effective penetration test in an enterprise network
                        environment that must be attacked, exploited, evaded,
                        and defended. If you have only been working in flat
                        networks, CPENT&rsquo;s live practice range will teach
                        you to take your skills to the next level by teaching
                        you how to pen test IoT systems, OT systems, how to
                        write your own exploits, build your own tools, conduct
                        advanced binaries exploitation, double pivot to access
                        hidden networks, and also customize scripts/exploits to
                        get into the innermost segments of the network.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        The heart of the CPENT program is all about helping you
                        master your pen testing skills by putting them to use on
                        our live cyber ranges. The CPENT ranges were designed to
                        be dynamic in order to give you a real-world training
                        program, so just as targets and technology continue to
                        change in live networks, both the CPENT practice and
                        exam ranges will mimic this reality as our team of
                        engineers continue to add targets and defenses
                        throughout the CPENT course&rsquo;s lifetime.
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
