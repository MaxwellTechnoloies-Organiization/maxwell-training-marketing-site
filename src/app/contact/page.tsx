/**
 * Contact page. Phone and email cards, an embedded map of the Bonanjo
 * office, and the enquiry form.
 *
 * We'll use emailJs to submit to email to the office inbox.
 *
 * @author Awa Precious
 */

import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactForm } from "@/features/contact/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Enrol or get in touch with Maxwell Training. Call +237 672 149 730 or visit us at Air France Building, Bonanjo, Douala.",
};

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.896874255702!2d9.686191375671685!3d4.041462895932301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061136efc222e99%3A0x244fbba1dd5b43d4!2sMaxwell%20Technologies!5e0!3m2!1sen!2scm!4v1694522687971!5m2!1sen!2scm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="site-main">
        <section className="page-title">
          <div className="container">
            <div className="inner align-center">
              <h1 className="title">Enrol or Contact Us</h1>
              <div className="desc">
                Would you like to get in touch or enrol immediately? Kindly
                enter your details and we&rsquo;d be right with you.
              </div>
            </div>
          </div>
        </section>

        <div className="site-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="heading">
                    <h2 className="heading-title">By Call or Email.</h2>
                    <div className="heading-desc">
                      Reach out by calling or emailing us. Click on one of the
                      buttons below:
                    </div>
                  </div>

                  <div className="contact-boxs">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-box">
                          <a
                            href="tel:+237672149730"
                            title="Call us"
                            className="background-navy"
                          >
                            Call us<span>+237 672 149 730</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-box">
                          <a
                            href="mailto:contact@maxwelltraining.net"
                            title="Email us"
                            className="background-dark"
                          >
                            Email us<span>contact@maxwelltraining.net</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="heading">
                    <h2 className="heading-title">Pay Us a Visit</h2>
                    <div className="heading-desc">
                      2nd Floor, Air France Building Bonanjo - Douala
                    </div>
                  </div>

                  <iframe
                    src={MAP_EMBED}
                    title="Maxwell Technologies on Google Maps"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
