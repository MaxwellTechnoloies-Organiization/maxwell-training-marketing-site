/**
 * Site header: logo, hamburger, and the primary navigation.
 *
 * One menu serves both breakpoints — above 992px it's an inline bar, below
 * it becomes a full-screen panel. The theme CSS handles that transition;
 * this component only manages open state and submenu depth, translating
 * the root list by -100% per level.
 *
 * `isHome` switches to the dark scheme and PNG logo for the homepage,
 * where the header sits over a dark hero image.
 *
 * Menu state resets on navigation during render rather than in an effect,
 * to avoid a second render pass.
 *
 * @author Awa Precious
 */

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { primaryNav } from "@/features/marketing/data/navigation";
import type { NavItem } from "@/types/navigation";
import Image from "next/image";

export interface SiteHeaderProps {
  isHome?: boolean;
  items?: NavItem[];
  sticky?: boolean;
}

export function SiteHeader({ isHome = false }: SiteHeaderProps) {
  const onScroll = useStickyHeader();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
    setOpenIndex(null);
  }

  const scheme = isHome ? "sala-dark-scheme" : "sala-white-scheme";
  const logo = isHome ? "Maxwell_Training_Logo.png" : "maxwell-training.svg";
  const depth = openIndex === null ? 0 : 1;

  useEffect(() => {
    if (!isMenuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <header
      id="header"
      className={[
        "site-header is-transparent is-sticky",
        scheme,
        onScroll ? "on-scroll" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container-fluid">
        <div className="row flex-align-c inner">
          <div className="col-lg-3 col-6">
            <div className="header-left flex flex-align-c">
              <div className="canvas-menu">
                <div className="icon">
                  <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-menu"
                    onClick={() => setIsMenuOpen(true)}
                    className="burger"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>

              <div className="logo">
                <Link href="/">
                  <Image
                    src={`/assets/images/${logo}`}
                    className="logo"
                    width={200}
                    height={50}
                    alt="Maxwell Training"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-0">
            <div className="header-center">
              <div
                id="main-menu"
                className={`main-menu${isMenuOpen ? " is-active" : ""}`}
              >
                <div className="menu-action">
                  <button
                    type="button"
                    className="item menu-back"
                    aria-label="Back"
                    style={{ display: depth > 0 ? "inline-block" : "none" }}
                    onClick={() => setOpenIndex(null)}
                  >
                    <i className="las la-arrow-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="item menu-close"
                    aria-label="Close menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="las la-times" aria-hidden="true" />
                  </button>
                </div>

                <ul data-depth={depth}>
                  {primaryNav.map((item, i) => {
                    const hasSub = Boolean(item.children?.length);

                    const isCurrent =
                      item.href !== "#" &&
                      (pathname === item.href ||
                        (item.href !== "/" &&
                          pathname.startsWith(`${item.href}/`)));

                    const hasActiveChild = Boolean(
                      item.children?.some((child) => child.href === pathname),
                    );

                    const isMenuOpen = isCurrent || hasActiveChild;

                    return (
                      <li
                        key={item.label}
                        className={[
                          i >= 2 ? "is-normal-menu" : "",
                          hasSub ? "has-sub-menu" : "",
                          isMenuOpen ? "current-menu-item" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <Link
                          href={item.href}
                          aria-current={isCurrent ? "page" : undefined}
                          aria-haspopup={hasSub || undefined}
                          aria-expanded={hasSub ? openIndex === i : undefined}
                          onClick={(event) => {
                            if (!hasSub) return;
                            // Parent items href="#" and exist only to open
                            // their submenu.
                            event.preventDefault();
                            setOpenIndex(i);
                          }}
                        >
                          {item.label}
                          {hasSub && (
                            <span
                              className="toggle-sub-menu"
                              aria-hidden="true"
                            />
                          )}
                        </Link>

                        {hasSub && (
                          <ul
                            className={`sub-menu${openIndex === i ? " open" : ""}`}
                          >
                            {item.children!.map((child) => (
                              <li
                                key={child.label}
                                className={
                                  child.href === pathname
                                    ? "current-menu-item"
                                    : undefined
                                }
                              >
                                <Link
                                  href={child.href}
                                  aria-current={
                                    child.href === pathname ? "page" : undefined
                                  }
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
