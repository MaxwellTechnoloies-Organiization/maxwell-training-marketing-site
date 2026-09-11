/**
 * Site header: logo, hamburger, and the primary navigation.
 *
 * Above 992px the menu is an inline bar with hover dropdowns. Below, it
 * becomes a slide-in panel with inline accordion submenus, dismissed by
 * the close button, the overlay, or Escape.
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
import Image from "next/image";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { primaryNav } from "@/features/marketing/data/navigation";

export interface SiteHeaderProps {
  /** Homepage renders the dark scheme over the hero image. */
  isHome?: boolean;
}

export function SiteHeader({ isHome = false }: SiteHeaderProps) {
  const onScroll = useStickyHeader();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Reset on navigation, during render rather than in an effect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
    setOpenIndex(null);
  }

  // Scroll lock and Escape. Synchronising with the document — no state set.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const scheme = isHome ? "sala-dark-scheme" : "sala-white-scheme";
  const logo = isHome ? "Maxwell_Training_Logo.png" : "maxwell-training.svg";
  const logoHeight = isHome ? 78 : 43;

  return (
    <>
      <button
        type="button"
        className={`menu-overlay${isMenuOpen ? " is-active" : ""}`}
        aria-label="Close menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />

      <header
        id="header"
        className={[
          "site-header is-transparent is-sticky",
          scheme,
          onScroll ? "on-scroll" : "",
          isMenuOpen ? "menu-is-open" : "",
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
                      aria-label="Open menu"
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
                      height={logoHeight}
                      alt="Maxwell Training"
                      priority
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
                    <span className="menu-action__brand">Menu</span>
                    <button
                      type="button"
                      className="item menu-close"
                      aria-label="Close menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <i className="las la-times" aria-hidden="true" />
                    </button>
                  </div>

                  <ul>
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

                      const isHighlighted = isCurrent || hasActiveChild;
                      const isExpanded = openIndex === i;

                      return (
                        <li
                          key={item.label}
                          className={[
                            i >= 2 ? "is-normal-menu" : "",
                            hasSub ? "has-sub-menu" : "",
                            isExpanded ? "is-open" : "",
                            isHighlighted ? "current-menu-item" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          <Link
                            href={item.href}
                            aria-current={isCurrent ? "page" : undefined}
                            aria-expanded={hasSub ? isExpanded : undefined}
                            onClick={(event) => {
                              if (!hasSub) return;
                              event.preventDefault();
                              // Desktop opens submenus on hover via theme CSS.
                              if (window.innerWidth >= 992) return;
                              setOpenIndex(isExpanded ? null : i);
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
                              className={`sub-menu${isExpanded ? " open" : ""}`}
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
                                      child.href === pathname
                                        ? "page"
                                        : undefined
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

                  <div className="menu-foot">
                    <a href="tel:+237672149730" className="menu-foot__cta">
                      <i className="las la-phone-alt" aria-hidden="true" />
                      +237 672 149 730
                    </a>
                    <Link href="/contact" className="menu-foot__enrol">
                      Enrol Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
