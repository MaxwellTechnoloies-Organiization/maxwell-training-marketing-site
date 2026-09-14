/**
 * Contact strip above the header. Scrolls away with the page — the
 * header is the only fixed element.
 *
 * @author Awa Precious
 */


const PHONE_DISPLAY = "+237 672 149 730";
const PHONE_HREF = "tel:+237672149730";
const EMAIL = "contact@maxwelltechnologiesplc.com";

const SOCIALS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/237655421621",
    icon: "lab la-whatsapp",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100094109372893&mibextid=D4KYlr",
    icon: "lab la-facebook-f",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/maxwell.training?igshid=NzZlODBkYWE4Ng==/",
    icon: "lab la-instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/maxwell-training/",
    icon: "lab la-linkedin-in",
  },
];

export function TopBanner() {
  return (
    <div className="top-banner">
      <div className="container-fluid">
        <div className="top-banner__inner">
          <div className="top-banner__contact">
            <a href={PHONE_HREF} className="top-banner__link">
              <i className="las la-phone-alt" aria-hidden="true" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="top-banner__link top-banner__link--email"
            >
              <i className="las la-envelope" aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
          </div>

          <nav className="top-banner__socials" aria-label="Social media">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="top-banner__social"
              >
                <i className={social.icon} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
