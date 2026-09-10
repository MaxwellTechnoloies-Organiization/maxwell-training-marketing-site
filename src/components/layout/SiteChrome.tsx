"use client";

import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export function SiteChrome() {
  const showBackToTop = useScrollVisibility(200);

  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="purchase-theme btn"
        href="https://wa.me/237672149730"
      >
        <i className="icon" aria-hidden="true">
          <img loading="lazy" src="/assets/images/whatsapp-icon.svg" alt="" />
        </i>
        Message Us
      </a>

      <a
        href="#"
        id="backtotop"
        className={`backtotop${showBackToTop ? " show" : ""}`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          });
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.52344 18.5234C5.3151 18.3151 5.3151 18.0938 5.52344 17.8594L13.7266 9.69531C13.9349 9.46094 14.1432 9.46094 14.3516 9.69531L22.5547 17.8594C22.763 18.0938 22.763 18.3151 22.5547 18.5234L21.7734 19.3047C21.5651 19.5391 21.3438 19.5391 21.1094 19.3047L14.0391 12.2344L6.96875 19.3047C6.73438 19.5391 6.51302 19.5391 6.30469 19.3047L5.52344 18.5234Z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </>
  );
}
