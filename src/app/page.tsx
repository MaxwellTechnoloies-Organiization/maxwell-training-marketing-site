/**
 * Homepage.
 *
 * Seven sections: hero, Our Solution, Trainings & Certifications, free
 * trial banner, testimonials, certifications marquee, closing CTA.
 *
 * Uses <SiteHeader isHome /> for the dark scheme, since the header sits
 * over a dark hero photograph.
 *
 * @author Awa Precious
 */

import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMarquee } from "@/features/marketing/components/InfiniteMarquee";
import { TestimonialSlider } from "@/features/testimonials/components/TestimonialSlider";
import {
  solutionsLeft,
  solutionsRight,
  certificationsRowOne,
  certificationsRowTwo,
  type SolutionItem,
} from "@/features/marketing/data/home";

export const metadata: Metadata = {
  title: "Maxwell Training | Home",
};

function IconBoxColumn({ items }: { items: SolutionItem[] }) {
  return (
    <div className="block-icon-box layout-05">
      {items.map((item) => (
        <div className="icon-box" key={item.title}>
          <div className="inner">
            <div className="icon">
              <i>
                <img src={item.icon} alt="" />
              </i>
            </div>
            <div className="content">
              <h3 className="title">{item.title}</h3>
              <div className="desc">{item.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const LEARNING_PLATFORM_URL = "https://learn.maxwelltraining.cm";
  return (
    <>
      <SiteHeader isHome />

      <main id="main" className="site-main">
        <div className="site-content pt0">
          <section
            className="section background-overlay background-full pdt180 oveflow-hidden"
            style={{
              backgroundImage: "url(/assets/images/maxwell-training-bg.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <Reveal
                    animation="animate__fadeInLeft"
                    className="heading heading-alway-white"
                  >
                    <div className="heading-sub">Welcome</div>
                    <h1 className="heading-title size-xl">
                      Learn Tech Skills Faster <br /> And More Effectively
                    </h1>
                    <div className="heading-desc">
                      Maxwell Training has as mission to provide training
                      adapted to market needs by putting learners on the job as
                      they learn{" "}
                    </div>
                  </Reveal>
                  <Reveal
                    animation="animate__fadeInLeft"
                    className="hero-cta mt32"
                  >
                    <Link
                      href="/contact"
                      className="button fullfield"
                      title="Enrol now"
                    >
                      Enrol Now
                    </Link>

                    <span className="hero-cta__aside">
                      <span>Already enrolled?</span>
                      <a
                        href={LEARNING_PLATFORM_URL}
                        className="button borderline-white hero-cta__button"
                        title="Continue learning"
                      >
                        Continue Learning
                        <i
                          className="las la-long-arrow-alt-right"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                  </Reveal>
                </div>
                <div className="col-lg-6">
                  <div className="images align-right layout-01 lg-mt32">
                    <Reveal
                      as="img"
                      animation="animate__fadeInUp"
                      delay="0.5s"
                      className="img01"
                      src="/assets/images/asc1.png"
                      alt="Image"
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInUp"
                      className="img02"
                      src="/assets/images/maxwell-training-app.png"
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
                <div className="heading-sub color-navy">OUR SOLUTION</div>
                <h2 className="heading-title size-l">
                  BUILDING THE CHANGE WE WANT TO SEE IN EDUCATION AND LEARNING
                </h2>
              </div>
              <div className="row flex-align-c">
                <div className="col-lg-3">
                  <IconBoxColumn items={solutionsLeft} />
                </div>
                <div className="col-lg-6">
                  <div className="images layout-02 lg-mt60 lg-mb60">
                    <div className="inner">
                      <img
                        className="img01"
                        src="/assets/images/asc3.png"
                        alt="Image"
                      />
                      <Reveal
                        as="img"
                        animation="animate__fadeInLeft"
                        className="img02"
                        src="/assets/images/asc4.png"
                        alt="Image"
                      />
                      <Reveal
                        as="img"
                        animation="animate__fadeInRight"
                        className="img03"
                        src="/assets/images/asc5.png"
                        alt="Image"
                      />
                      <img
                        className="img04 lg-hidden"
                        src="/assets/images/asc6.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <IconBoxColumn items={solutionsRight} />
                </div>
              </div>
            </div>
          </section>

          <section className="section pt120 spdb" id="somecertifications">
            <div className="container">
              <div className="heading align-center">
                <div className="heading-sub color-navy">
                  TRAININGS &amp; CERTIFICATIONS
                </div>
                <h2 className="heading-title size-l">
                  WE TRAIN IN 3 DIFFERENT DOMAINS
                </h2>
              </div>
              <div className="block-icon-box align-center">
                <div className="row flex-align-c">
                  <div className="col-lg-4">
                    <div className="icon-box">
                      <div className="inner">
                        <div className="number">01.</div>
                        <div className="content">
                          <h3 className="title">Cyber Security</h3>
                          <div className="desc">
                            With international certifications vetted by <br />
                            EC-COUNCIL
                          </div>
                        </div>
                        <div className="button-wrap mt32">
                          <Link
                            href="/certified-ethical-hacker"
                            className="button fullfield xs-mb10"
                            title="Try it free"
                          >
                            View Course
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="icon-box">
                      <div className="inner">
                        <div className="number">02.</div>
                        <div className="content">
                          <h3 className="title">Software Engineering</h3>
                          <div className="desc">
                            Learn Programming in the most practical way and Work
                            on paid internships on large-scale projects
                          </div>
                        </div>
                        <div className="button-wrap mt32">
                          <Link
                            href="/web-application-development"
                            className="button fullfield xs-mb10"
                            title="Try it free"
                          >
                            View Course
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="icon-box">
                      <div className="inner">
                        <div className="number">03.</div>
                        <div className="content">
                          <h3 className="title"> Digital Marketing </h3>
                          <div className="desc">
                            Master how to grow and scale any business on the
                            digital space
                          </div>
                        </div>
                        <div className="button-wrap mt32">
                          <Link
                            href="/digital-marketing"
                            className="button fullfield xs-mb10"
                            title="Try it free"
                          >
                            View Course
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-banner layout-01 spdtb" id="freetrial">
            <div className="container">
              <div className="inner br10">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <img
                      src="/assets/images/maxwell-training-trial.png"
                      alt="Banner"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <div className="heading heading-alway-white mb24">
                        <h2 className="heading-title size-l">
                          GET A FREE TRIAL
                        </h2>
                        <div className="heading-desc">
                          Don&rsquo;t just take our word for it. Try our
                          training by taking a few lessons for free. We&rsquo;d
                          set up your account on our platform and one of our
                          instructors will start working with you right away!
                          This can be virtual as well as physical.
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span>4 Hours</span>
                          <p>Free training time</p>
                        </li>
                        <li>
                          <span>4 - 20</span>
                          <p>Exercises</p>
                        </li>
                      </ul>
                      <div className="button-wrap mt32">
                        <Link
                          href="/contact"
                          className="button borderline-white"
                          title="Book a Free Trial"
                        >
                          Book a Free Trial
                          <i
                            className="las la-long-arrow-alt-right"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TestimonialSlider />

          <section className="section spdt" id="partners">
            <div className="heading align-center">
              <h2 className="heading-title w500 size-l">
                Certifications on Offer
              </h2>
            </div>
            <InfiniteMarquee items={certificationsRowOne} />
            <InfiniteMarquee
              items={certificationsRowTwo}
              reverse
              className="mt20"
            />
          </section>

          <section
            className="section background-full layout-12 opt160 opb200"
            style={{
              backgroundImage:
                "url(/assets/images/maxwell-training-get-started.jpg)",
            }}
          >
            <div className="container">
              <div className="heading align-left heading-alway-white mb32">
                <h2 className="heading-title size-xl">
                  Join Up to 100 Learners
                  <br />
                  Already Benefiting from
                  <br />
                  Maxwell Training
                </h2>
                <div className="heading-desc">
                  Join us to day and get access to up to 10,000 exercises, work
                  experience, and
                  <br />
                  for the best of you, a full-time employment offer
                </div>
              </div>
              <div className="button-wrap">
                <Link
                  href="/contact"
                  className="button borderline-white"
                  title="Start Learning"
                >
                  <svg
                    className="las la-play-circle icon-before"
                    width="50px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="#000000"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="#000000"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Start Learning
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
