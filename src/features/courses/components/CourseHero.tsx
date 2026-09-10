import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { CourseHeroData } from "@/types/course";

export interface CourseHeroProps {
  hero: CourseHeroData;
}

export function CourseHero({ hero }: CourseHeroProps) {
  return (
    <section className="section opt200 spdb overflow-hidden">
      <div className="container">
        <div className="row flex-align-c">
          <div className="col-lg-6">
            <div className="heading mb32">
              <div className="heading-sub layout-02">{hero.sub}</div>
              <h1 className="heading-title size-xl">{hero.title}</h1>
              <div className="heading-desc">{hero.desc}</div>
            </div>
            <div className="button-wrap">
              <Link
                href={hero.ctaHref}
                className="button fullfield"
                title={hero.ctaTitle}
              >
                {hero.ctaLabel}
              </Link>
            </div>
            <p className="h3 color-dark w500 mt32">{hero.phone}</p>
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
                src={hero.bannerImage}
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
  );
}
