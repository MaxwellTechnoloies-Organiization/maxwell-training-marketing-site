import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="site-main">
        <section className="page-title">
          <div className="container">
            <div className="inner align-center">
              <img
                src="/assets/images/404.png"
                alt=""
                style={{ maxWidth: 480, margin: "0 auto 24px" }}
              />
              <h1 className="title">
                Page <span>not found</span>
              </h1>
              <div className="desc">
                The page you&rsquo;re looking for doesn&rsquo;t exist or has
                moved. Try the menu above, or head back to the homepage.
              </div>
              <div className="button-wrap">
                <Link
                  href="/"
                  className="button fullfield xs-mb10"
                  title="Home"
                >
                  Back to Home
                </Link>
                <Link
                  href="/#somecertifications"
                  className="button borderline"
                  title="View courses"
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
