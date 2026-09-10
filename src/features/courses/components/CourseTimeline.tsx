"use client";

import { useState, type ReactNode } from "react";

export interface TimelineModule {
  team: string[];
  time: string;
  title: string;
  instructors: string;
  desc: string;
  initiallyActive?: boolean;
}

export interface CourseTimelineProps {
  dateLine: string[];
  modules: TimelineModule[];
  children?: ReactNode;
}

export function CourseTimeline({
  dateLine,
  modules,
  children,
}: CourseTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isActive = (index: number) =>
    activeIndex === null
      ? Boolean(modules[index].initiallyActive)
      : activeIndex === index;

  return (
    <section className="section spdt">
      <div className="container">
        <div className="heading align-center">
          <h2 className="heading-title size-l">Course Outline</h2>
        </div>

        <div className="block-timeline layout-02">
          {dateLine.length > 0 && (
            <div className="date-line" role="tablist">
              {dateLine.map((date, index) => {
                const selected =
                  activeIndex === null ? index === 0 : activeIndex === index;

                return (
                  <a
                    href="#"
                    key={date}
                    role="tab"
                    aria-selected={selected}
                    className={selected ? "is-active" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveIndex(index);
                    }}
                  >
                    {date}
                  </a>
                );
              })}
            </div>
          )}

          {modules.map((module, index) => (
            <div
              className={`item${isActive(index) ? " is-active" : ""}`}
              key={`${module.title}-${index}`}
            >
              <div className="inner">
                {module.team.length > 0 && (
                  <div className="team">
                    {module.team.map((avatar) => (
                      <img src={avatar} alt="Avatar" key={avatar} />
                    ))}
                  </div>
                )}
                <div className="time">{module.time}</div>
                <h3 className="title">{module.title}</h3>
                <div className="twitter">{module.instructors}</div>
                <div className="desc">{module.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
