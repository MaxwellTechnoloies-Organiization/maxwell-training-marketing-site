/**
 * Certified Network Defender course page.
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
  title: "Certified Network Defender",
  description:
    "CND v2 training in Douala. 20 modules covering network defence, endpoint security, threat intelligence and incident response. Mapped to the NICE Framework.",
};

const TIME = "1 Hour of Practicals";

const INACTIVE = new Set([1, 2, 3, 4, 5]);

const SUBJECTS: string[] = [
  "Network Attacks and Defense Strategies",
  "Administrative Network Security",
  "Technical Network Security",
  "Network Perimeter Security",
  "Endpoint Security-Windows Systems",
  "Endpoint Security-Linux Systems",
  "Endpoint Security-Mobile Devices",
  "Endpoint Security-IoT Devices",
  "Administrative Application Security",
  "Data Security",
  "Enterprise Virtual Network Security",
  "Enterprise Cloud Network Security",
  "Network Traffic Monitoring and Analysis",
  "Network Traffic Monitoring and Analysis",
  "Network Logs Monitoringand Analysis",
  "Incident Response and Forensic Investigation",
  "Business Continuity and Disaster Recovery",
  "Risk Anticipation with Risk Management",
  "Threat Assessment with Attack Surface Analysis",
  "Threat Prediction with Cyber Threat Intelligence",
];

const modules: TimelineModule[] = SUBJECTS.map((desc, index) => ({
  team: [
    "/assets/images/tools/penetration.png",
    "/assets/images/tools/security.png",
  ],
  time: TIME,
  title: `Module ${String(index + 1).padStart(2, "0")}`,
  instructors: SUBJECTS[index],
  desc,
  initiallyActive: !INACTIVE.has(index),
}));

export default function CertifiedNetworkDefenderPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Certified Network Defender",
          description:
            "CND v2 training with 20 modules covering network defence, endpoint security, threat intelligence and incident response.",
          slug: "certified-network-defender",
          hours: 20,
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
                    <div className="heading-sub layout-02">CND</div>
                    <h1 className="heading-title size-xl">
                      Certified Network Defender
                    </h1>
                    <div className="heading-desc">
                      Created based on a through job task analysis.
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
                      src="/assets/images/cnd-banner.png"
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
                        Cybersecurity now dominates the priorities of every
                        enterprise striving to adapt to a post-COVID world.
                        Forced to go remote, their workers&rsquo; identities and
                        devices are the new security perimeter. In fact,
                        cybersecurity for business is now as critical as
                        internet access itself. The Certified Network Defender
                        v2 program has been upgraded and loaded with
                        battle-ready ammunition to help Blue Teams defend and
                        win the war against network breaches.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        CND v2 is based on the cybersecurity education framework
                        and work role task analysis presented by the National
                        Infocomm Competency Framework (NICF). The program is
                        also mapped to the Department of Defense (DoD) roles for
                        system/network administrators as well as global work
                        roles and responsibilities laid out by the revised NICE
                        Framework 2.0
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
