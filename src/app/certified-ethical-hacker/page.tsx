/**
 * Certified Ethical Hacker course page.
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
  title: "Certified Ethical Hacker",
  description:
    "CEH v12 training in Douala. 19 modules, 220+ hands-on labs and 3,500 hacking tools. The most in-demand ethical hacking certification in the world.",
};

const modules: TimelineModule[] = [
  {
    team: [
      "/assets/images/tools/hacking.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours Of Praticals",
    title: "Introduction to Ethical Hacking",
    instructors: "Introduction to Ethical Hacking",
    desc: "Cover the fundamentals of key issues in the information security world, including the basics of ethical hacking, information security controls, relevant laws, and standard procedures.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/foot.png",
      "/assets/images/tools/security.png",
    ],
    time: "3hours of practicals",
    title: "Foot Printing and Reconnaissance",
    instructors: "Foot Printing and Reconnaissance",
    desc: "Learn how to use the latest techniques and tools to perform foot printing and reconnaissance, a critical pre-attack phase of the ethical hacking process.",
  },
  {
    team: [
      "/assets/images/tools/foot.png",
      "/assets/images/tools/security.png",
    ],
    time: "5 Hours of Practicals",
    title: "Scanning Networks",
    instructors: "Scanning Networks",
    desc: "Learn different network scanning techniques and countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/gateway.png",
      "/assets/images/tools/security.png",
    ],
    time: "6 Hours Of Praticals",
    title: "Enumeration",
    instructors: "Enumeration",
    desc: "Learn various enumeration techniques, such as Border Gateway Protocol (BGP) and Network File Sharing (NFS) exploits, and associated countermeasures.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/foot.png",
      "/assets/images/tools/security.png",
    ],
    time: "8 Hours Of Praticals",
    title: "Vulnerability Analysis",
    instructors: "Vulnerability Analysis",
    desc: "Learn how to identify security loopholes in a target organization\u2019s network, communication infrastructure, and end systems. Different types of vulnerability assessment and vulnerability assessment tools.",
  },
  {
    team: [
      "/assets/images/tools/malware.png",
      "/assets/images/tools/security.png",
    ],
    time: "6 Hours Of Praticals",
    title: "Malware Threats",
    instructors: "Malware Threats",
    desc: "Learn different types of malware (Trojan, virus, worms, etc.), APT and fileless malware, malware analysis procedure, and malware countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/foot.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours Of Praticals",
    title: "Sniffing",
    instructors: "Sniffing",
    desc: "Learn about packet-sniffing techniques and how to use them to discover network vulnerabilities, as well as countermeasures to defend against sniffing attacks.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/social-engineering.png",
      "/assets/images/tools/security2.png",
    ],
    time: "4 Hours Of Praticals",
    title: "Social Engineering",
    instructors: "Social Engineering",
    desc: "Learn social engineering concepts and techniques, including how to identify theft attempts, audit human-level vulnerabilities, and suggest social engineering countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/foot.png",
      "/assets/images/tools/security.png",
    ],
    time: "5 Hours Of Praticals",
    title: "Denial-of-Service",
    instructors: "Denial-of-Service",
    desc: "Learn about different Denial of Service (DoS) and Distributed DoS (DDoS) attack techniques, as well as the tools used to audit a target and devise DoS and DDoS countermeasures and protections.",
  },
  {
    team: [
      "/assets/images/tools/security.png",
      "/assets/images/tools/hacking.png",
    ],
    time: "5 Hours Of Praticals",
    title: "Session Hijacking",
    instructors: "Session Hijacking",
    desc: "Understand the various session hijacking techniques used to discover network-level session management, authentication, authorization, and cryptographic weaknesses and associated countermeasures.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/firewall.png",
      "/assets/images/tools/security2.png",
    ],
    time: "3 Hours of Practicals",
    title: "Evading IDS, Firewalls, and Honeypots",
    instructors: "Evading IDS, Firewalls, and Honeypots",
    desc: "Get introduced to firewall, intrusion detection system (IDS), and honeypot evasion techniques; the tools used to audit a network perimeter for weaknesses; and countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/hacking.png",
      "/assets/images/tools/security.png",
    ],
    time: "4 Hours of Practicals",
    title: "Hacking Web Servers",
    instructors: "Hacking Web Servers",
    desc: "Learn about web server attacks, including a comprehensive attack methodology used to audit vulnerabilities in web server infrastructures and countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/hacking.png",
      "/assets/images/tools/security.png",
    ],
    time: "3 Hours Of Praticals",
    title: "Hacking Web Applications",
    instructors: "Hacking Web Applications",
    desc: "Learn about web application attacks, including a comprehensive web application hacking methodology used to audit vulnerabilities in web applications and countermeasures.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/sql-injection.png",
      "/assets/images/tools/security2.png",
    ],
    time: "3 Hours Of Praticals",
    title: "SQL Injection",
    instructors: "SQL Injection",
    desc: "Learn about SQL injection attacks, evasion techniques, and SQL injection countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/wireless.png",
      "/assets/images/tools/security.png",
    ],
    time: "3 Hours of Practicals",
    title: "Hacking Wireless Networks",
    instructors: "Hacking Wireless Networks",
    desc: "Understand different types of wireless technologies, including encryption, threats, hacking methodologies, hacking tools, Wi-Fi sedcurity tools, and countermeasures.",
  },
  {
    team: [
      "/assets/images/tools/cross-platform.png",
      "/assets/images/tools/security.png",
    ],
    time: "3 Hours Of Praticals",
    title: "Hacking Mobile Platforms",
    instructors: "Hacking Mobile Platforms",
    desc: "Learn Mobile platform attack vector, android and iOS hacking, mobile device management, mobile security guidelines, and security tools.",
  },
  {
    team: ["/assets/images/tools/iot.png", "/assets/images/tools/security.png"],
    time: "3 Hours Of Praticals",
    title: "IoT Hacking",
    instructors: "IoT Hacking",
    desc: "Learn different types of IoT and OT attacks, hacking methodology, hacking tools, and countermeasures.",
    initiallyActive: true,
  },
  {
    team: [
      "/assets/images/tools/cloud.png",
      "/assets/images/tools/security.png",
    ],
    time: "3 Hours of Practicals",
    title: "Cloud Computing",
    instructors: "Cloud Computing",
    desc: "Learn different cloud computing concepts, such as container technologies and server less computing, various cloud computing threats, attacks, hacking methodology, and cloud security techniques and tools.",
  },
  {
    team: [
      "/assets/images/tools/cryptography.png",
      "/assets/images/tools/security2.png",
    ],
    time: "3 Hours of Practicals",
    title: "Cryptography",
    instructors: "Cryptography",
    desc: "Learn about encryption algorithms, cryptography tools, Public Key Infrastructure (PKI), email encryption, disk encryption, cryptography attacks, and cryptanalysis tools.",
  },
];

export default function CertifiedEthicalHackerPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Certified Ethical Hacker (CEH)",
          description:
            "CEH v12 training with 19 modules, 220+ hands-on labs and 3,500 hacking tools.",
          slug: "certified-ethical-hacker",
          hours: 77,
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
                    <div className="heading-sub layout-02">C E H</div>
                    <h1 className="heading-title size-xl">
                      Certified Ethical Hacker (CEH)
                    </h1>
                    <div className="heading-desc">
                      The most in-demand ethical hacking certification in the
                      world
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
                      src="/assets/images/ceh-banner.png"
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
                        The C|EH&reg; v12 is a specialized and one-of-a-kind
                        training program to teach you everything you need to
                        know about ethical hacking with hands-on training, labs,
                        assessment, a mock engagement (practice), and global
                        hacking competition. The new learning framework covers
                        not only a comprehensive training program to prepare you
                        for the certification exam but also the industry&rsquo;s
                        most robust, in-depth, hands-on lab and practice range
                        experience.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        With over 220 hands-on labs conducted in our cyber range
                        environment, you will have the opportunity to practice
                        every learning objective on live machines and vulnerable
                        targets in the course. Pre-loaded with over 3,500
                        hacking tools and various operating systems, you will
                        gain unprecedented exposure and hands-on experience with
                        the most common security tools, latest vulnerabilities,
                        and widely used operating systems in the industry. Our
                        range is web accessible, making it easier for you to
                        learn and practice from anywhere.
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
