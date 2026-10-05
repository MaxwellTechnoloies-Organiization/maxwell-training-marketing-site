import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Reveal } from '@/components/ui/Reveal';
import { CourseTimeline, type TimelineModule } from '@/features/courses/components/CourseTimeline';

export const metadata: Metadata = {
  title: 'DevOps & Deployment',
  description:
    'DevOps and deployment training in Douala. Linux, Git and GitHub, Docker, CI/CD with GitHub Actions and cloud deployment, taught one-on-one in a real working environment.',
};

// Hours are suggestions: confirm with the trainer.
// Icon files below don't exist yet: add them to /assets/images/tools/ or point to existing images.
const modules: TimelineModule[] = [
  {
    icon: ['/assets/images/tools/linux.png', '/assets/images/tools/gnubash.png'],
    time: '20 Hours of Practicals',
    title: 'Linux & the Command Line',
    practicalTools: 'Linux (Ubuntu), Bash, SSH',
    desc: 'Most servers in the world run Linux. You will navigate the file system, manage users, permissions and processes, write simple Bash scripts to automate tasks and connect to remote servers securely with SSH.',
    initiallyActive: true,
  },
  {
    icon: ['/assets/images/tools/git.png', '/assets/images/tools/github.png'],
    time: '15 Hours of Practicals',
    title: 'Git & GitHub',
    practicalTools: 'Git, GitHub',
    desc: 'Track every change to your code, build features in branches, resolve merge conflicts and work as a team through pull requests and code reviews, just like professional development teams do.',
  },
  {
    icon: ['/assets/images/tools/docker.png', '/assets/images/tools/linux.png'],
    time: '25 Hours of Practicals',
    title: 'Docker & Containers',
    practicalTools: 'Docker, Docker Compose',
    desc: 'Package your applications and everything they need into containers that run the same way on every machine, and use Docker Compose to start a complete application with its database in a single command.',
  },
  {
    icon: ['/assets/images/tools/githubactions.png', '/assets/images/tools/github.png'],
    time: '20 Hours of Practicals',
    title: 'CI/CD Pipelines',
    practicalTools: 'GitHub Actions',
    desc: 'Automate your workflow so every push runs your tests, builds your application and deploys it, catching bugs early and shipping updates without manual steps.',
  },
  {
    icon: ['/assets/images/tools/nginx.png', '/assets/images/tools/docker.png'],
    time: '20 Hours of Practicals',
    title: 'Cloud Deployment & Monitoring',
    practicalTools: 'Nginx, AWS/DigitalOcean, Vercel/Render',
    desc: 'Deploy frontend and backend applications to the cloud, set up a domain with HTTPS behind an Nginx reverse proxy, manage environment variables and secrets, and use logs and monitoring to keep your applications healthy.',
  },
];

export default function DevOpsAndDeploymentPage() {
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
                    <div className="heading-sub layout-02">Software Engineering</div>
                    <h1 className="heading-title size-xl">DevOps & Deployment</h1>
                    <div className="heading-desc">
                      Ship your applications to the cloud quickly, reliably and automatically
                    </div>
                  </div>
                  <div className="button-wrap">
                    <Link
                      href="/contact"
                      className="button fullfield"
                      title="Enrol for this Course"
                    >
                      Enrol for this Course
                    </Link>
                  </div>
                  <p className="h3 color-dark w500 mt32">Phone: +237 672 149 730</p>
                </div>

                <div className="col-lg-6">
                  <div className="images opt200 layout-11">
                    <img className="img01" src="/assets/images/hc-01.png" alt="" />
                    <Reveal
                      as="img"
                      animation="animate__fadeInLeft"
                      className="img02"
                      src="/assets/images/hc-02.png"
                      alt=""
                    />
                    <img
                      className="img03 animate__jump"
                      src="/assets/images/web-banner.png"
                      alt=""
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      className="img04"
                      src="/assets/images/hc-04.png"
                      alt=""
                    />
                    <Reveal
                      as="img"
                      animation="animate__fadeInRight"
                      className="img05"
                      src="/assets/images/hc-05.png"
                      alt=""
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
                        Maxwell Engineering&rsquo;s software engineering training program is created
                        with a mission to raise world class coders developing software and apps
                        worthy of competing anywhere in the world.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        We&rsquo;ve already been able to train over 30 coders who&rsquo;ve executed
                        projects for some of the biggest brands in the country, including SONARA,
                        UBA Cameroon, Access Bank Cameroon, Media Plus, SCR Maya &amp; Cie, CHOCOCAM
                        TIGER BRANDS among others.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 lg-order-2">
                  <div className="pdr80 lg-mt15">
                    <div className="heading mb24">
                      <div className="heading-desc">
                        The training with Maxwell Engineering is fully customized to meet the pace
                        and competence of every learner. We don&rsquo;t bundle you up with other
                        trainees and deliver the same training rigidly as traditional education
                        methods do. You rather work one-on-one with a supervisor in a practical,
                        real-life working environment, who tailors all your lessons to your specific
                        competencies and needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CourseTimeline dateLine={['5th July', '6th July', '7th July']} modules={modules}>
            <div className="button-wrap mt32">
              <Link href="/contact" className="button fullfield" title="More Details">
                More Details
              </Link>
            </div>
          </CourseTimeline>
        </div>
      </main>
    </>
  );
}
