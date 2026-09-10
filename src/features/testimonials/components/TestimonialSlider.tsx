/**
 * Testimonial carousel. Advances on its own, one testimonial at a time,
 * showing that person's avatar alongside their quote. After the last
 * testimonial it returns to the first.
 *
 * Uses rewind rather than loop: loop mode clones slides, and Swiper's
 * React wrapper initialises those clones before mapped children have
 * committed, which leaves the wrap broken. rewind needs no clones.
 *
 * Autoplay is disabled under prefers-reduced-motion, and pauses on hover
 * so it can't move out from under someone reading.
 *
 * @author Awa Precious
 */

"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { testimonials } from "@/features/marketing/data/home";

import "swiper/css";
import "swiper/css/pagination";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function TestimonialSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);

  // Keep autoplay in sync if the OS preference changes mid-session.
  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION);

    const onChange = (event: MediaQueryListEvent) => {
      const swiper = swiperRef.current;
      if (!swiper?.autoplay) return;
      if (event.matches) swiper.autoplay.stop();
      else swiper.autoplay.start();
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const handleSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
    if (window.matchMedia(REDUCED_MOTION).matches) {
      swiper.autoplay?.stop();
    }
  };

  return (
    <section
      className="section has-icon icon-bottom-left background-yellow spdtb"
      id="sometestimonials"
    >
      <div className="container">
        <div className="heading heading-alway-white align-center">
          <h2 className="heading-title size-l">
            Hear from people we&rsquo;ve trained
          </h2>
        </div>

        <div className="block-testimonial layout-02">
          <div
            className="testimonial-gallery"
            style={{
              backgroundImage: "url('/assets/images/background-quote.png')",
            }}
          >
            <Swiper
              modules={[Autoplay, Pagination, A11y]}
              onSwiper={handleSwiper}
              className="view-swiper-slider"
              slidesPerView={1}
              spaceBetween={30}
              rewind
              speed={700}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              a11y={{
                prevSlideMessage: "Previous testimonial",
                nextSlideMessage: "Next testimonial",
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <div className="item">
                    <p style={{ color: "white" }}>{testimonial.quote}</p>
                    <div className="meta">
                      <div className="author">
                        <div className="avatar">
                          <img src={testimonial.avatar} alt="" />
                        </div>
                        <div className="info">
                          <div className="name" style={{ color: "white" }}>
                            {testimonial.name}
                          </div>
                          <div className="position" style={{ color: "white" }}>
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <img
        className="icon lg-hidden"
        src="/assets/images/asc6.png"
        alt="Image"
      />
    </section>
  );
}
