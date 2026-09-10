import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-item footer-about">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/images/maxwell-training.svg"
                        width={200}
                        alt="Maxwell Training"
                      />
                    </Link>
                  </div>
                  <p>
                    Providing training adapted to market needs by putting
                    learners on the job as they learn.
                  </p>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer-item footer-menu">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <Link href="/about-company" title="About us">
                        About us
                      </Link>
                    </li>
                    <li>
                      <a href="#" title="Blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <Link href="/contact" title="Contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer-item footer-menu">
                  <h6>Resources</h6>
                  <ul>
                    <li>
                      <Link href="/#somecertifications" title="Certifications">
                        Certifications
                      </Link>
                    </li>
                    <li>
                      <Link href="/#sometestimonials" title="Testimonials">
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/#freetrial" title="Free Trial">
                        Free Trial
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer-item footer-menu">
                  <h6>Social Media</h6>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100094109372893&mibextid=D4KYlr"
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/maxwell.training?igshid=NzZlODBkYWE4Ng==/"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/maxwell-training/"
                        title="Linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-item footer-newsletter">
                  <h6>Newsletter</h6>
                  <p>
                    Subcribe our newsletter and stay up to date about the
                    company
                  </p>
                  <div className="newsletter">
                    <div className="field-input">
                      <input type="email" placeholder="Email address" />
                    </div>
                    <div className="field-submit">
                      <button type="button">Subcribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="inner flex flex-content-sb flex-align-c">
            <div className="copyright">
              © {currentYear}{" "}
              <a
                className="training"
                href="https://www.maxwelltechnologiesplc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Maxwell Technologies{" "}
              </a>
              . All rights reserved
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link href="/privacy-policy" title="Terms">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" title="Privacy Policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
