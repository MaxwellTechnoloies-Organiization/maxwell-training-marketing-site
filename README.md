# Maxwell Training

Marketing site for Maxwell Training — a cyber security, software engineering
and digital marketing training company.

Sixteen pages: a homepage, an about page, a contact page with a working enquiry form, thirteen individual course pages.

---

## Quick start

```bash
npm install
cp .env.example .env.local 
npm run dev
```

http://localhost:3000

---

## Stack

| | |
|---|---|
| Framework | Next.js |
| Language | TypeScript |


No Tailwind, no CSS Modules, no CSS-in-JS. All styling comes from the theme.

---

## How styling works

### Three layers

**Bootstrap** supplies the 12-column grid — `container`, `row`, `col-lg-6`,
`g-0` — and a baseline reset. Its breakpoints are 576 / 768 / 992 / 1200 /
1400. Nothing else from Bootstrap is used; there is not a single
`data-bs-*` attribute in the codebase, and Bootstrap's JavaScript is never
loaded.

**`public/assets/css/style.css`** supplies everything visual. It's a
13,000-line stylesheet from the Sala theme, and it defines every
`heading`, `button fullfield`, `block-icon-box`, `images layout-11`,
`spdt` and `lg-mt32` you'll see in the JSX. It also bundles `animate.css`,
which is why animation classes work with no extra dependency.

**The components** contribute no styling of their own. They emit theme
class names. If you want to change how something looks, you're looking for
a rule in `style.css`, not a prop.

### Stylesheets load as `<link>` tags, not imports

In `src/app/layout.tsx`, in this order:

1. Line Awesome (icon font)
2. Bootstrap
3. Swiper
4. `style.css` — **last**

Two reasons this isn't an ES import.

**It would fail the build.** When you import CSS, the bundler resolves every
`url()` as a module. `style.css` has five references to
`../../sala/assets/images/*.html` — packaging artifacts pointing at files
that don't exist. Line Awesome adds eighteen more to `../fonts/`, which
resolve only because `css/` and `fonts/` sit as siblings. Unresolvable
`url()` is a build error, not a warning.

**Order is load-bearing.** Bootstrap and the theme both style `.btn`,
`.container`, `h1`–`h6`, `input` and `a`. Equal specificity means source
order decides, and the theme must win. Serving from `public/` and linking
in a fixed order makes that explicit.

Because the browser resolves relative paths against each stylesheet's own
URL, **`public/assets/` must not be reorganised.** The directory structure
is what makes those paths work.

### `src/app/overrides.css`

The only stylesheet written for this project. It holds rules that don't
exist in the theme — currently the marquee animation and an `.sr-only`
utility.

Keep it small. It's imported after the `<link>` tags so it wins ties, which
makes it an easy place to accumulate patches. If it passes ~20 lines,
something is being worked around that should be fixed properly.

---

## Theme class conventions

The theme is **desktop-first**. Prefixed classes apply *below* a breakpoint,
which is the opposite of most modern frameworks:

| Class | Meaning |
|---|---|
| `lg-mt32` | margin-top 32px **below** 992px |
| `lg-hidden` | display none **below** 992px |
| `lg-mb60` | margin-bottom 60px below 992px |
| `xs-mb10` | margin-bottom 10px below 576px |

Spacing shorthand:

| Class | Meaning |
|---|---|
| `spdt` / `spdb` / `spdtb` | 80px padding top / bottom / both |
| `opt120` / `opt160` / `opt200` | padding-top 120 / 160 / 200px |
| `opb200` | padding-bottom 200px |
| `pdr80` / `pdr100` / `pdl60` | padding right / left |
| `mt32` / `mb24` / `mb32` | margin top / bottom |
| `pt0` / `pb0` | zero padding |

Typography and colour:

| Class | Meaning |
|---|---|
| `size-l` / `size-xl` | heading title 40px / 56px |
| `w500` | font-weight 500 |
| `color-navy` | brand amber (`#f7b32b`, despite the name) |
| `heading-alway-white` | force white text regardless of scheme |
| `background-navy` / `background-yellow` | brand-coloured section |

A few classes in the markup do nothing and are kept for fidelity with the
theme's own markup: `oveflow-hidden` (misspelled), `col-0` (not a Bootstrap
class), `layout-12` (undefined in the theme).

---

## Project structure

```
public/
  assets/
    css/style.css        # theme stylesheet — the site's visual design
    libs/                # bootstrap, swiper, line-awesome
    images/
src/
  app/
    layout.tsx           # root layout: stylesheets, footer, chrome
    overrides.css        
    page.tsx             # homepage
    not-found.tsx        # 404
    api/contact/route.ts # enquiry form endpoint
  components/
    layout/              # SiteHeader, SiteFooter, SiteChrome
    ui/                  # Reveal, Counter
  features/
    courses/             # CourseTimeline
    contact/             # ContactForm
    marketing/           # InfiniteMarquee, CoursesNewsletter, nav + home data
    testimonials/        # TestimonialSlider
  hooks/                 # scroll behaviour
  lib/                   # mailer
  types/
```

### Content lives in its page file

Each page holds its own copy — hero text, description paragraphs, and for
course pages a `modules` array. There's no shared content store and no CMS.

Course pages with many uniform modules build the array from compact tuples
rather than repeating object literals — see `certified-network-defender`.

---

## Behaviour worth knowing

**The header and back-to-top are direction-aware.** They appear only while
scrolling *up*. This is intentional, not a bug, **DO NOT** "fix" it without
asking.

**The header is absolutely positioned and transparent.** Pages clear it with
top padding on their first section (`opt120`, `opt200`, `pdt180`). A new
page without that padding will have content sitting under the logo.

**The homepage header uses the dark scheme.** `<SiteHeader isHome />` swaps
to white text and the PNG logo, because the hero behind it is a dark
photograph. Every other page uses the default.

**Never render a preloader element.** The theme's CSS defines
`.preload` as a fixed white overlay at `z-index: 9999999`. Nothing in this
codebase removes it, so adding one gives you a blank white screen.

**The course date-line is decorative.** Clicking a date activates the module
at the same index. With three dates and up to twenty modules, only the first
three are reachable. It behaves this way by design of the theme component.

**Fonts are not loaded.** `style.css` asks for Poppins and Covered By Your
Grace; neither is provided, so the site renders in system sans-serif. Adding
`next/font/google` is a small, worthwhile change — see Remaining work.

---

## React conventions

Enforced throughout; please keep them.

**No `setState` inside `useEffect` for prop or state synchronisation.**
`SiteHeader` resets its menu on route change by comparing `pathname` to a
`lastPathname` state value during render, not in an effect.

**Direct DOM mutation for high-frequency animation.** `Counter` writes
`node.textContent` inside `requestAnimationFrame` and never re-renders
during the count. `Reveal` toggles classes with `classList`.

**Every effect cleans up.** Observers disconnected, listeners removed,
animation frames cancelled.

**Scroll hooks gate their state behind a ref**, so `setState` fires only
when the boolean flips — not once per frame.

**`prefers-reduced-motion` is respected** in `Reveal`, `Counter`,
`InfiniteMarquee` and the back-to-top scroll.

**Plain `<img>`, not `next/image`.** The theme targets bare `img` selectors
and sets its own sizing; `next/image` injects wrapper styles that conflict.
Moving to `next/image` per-image is a reasonable optimisation, but verify
each layout when you do.

---

## Contact form

`POST /api/contact` → validation → `src/lib/mailer.ts` → SMTP.

`.env.local`:

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_TO=contact@maxwelltechnologiesplc.com
CONTACT_FROM="MaxTrain <contact@maxwelltechnologiesplc.com>"
SITE_URL=https://maxwelltraining.net
```

The route validates required fields and email format, escapes HTML before
building the email body, and includes a honeypot field. It returns 400 with
an error list on validation failure and 500 if the send itself fails, so the
form's status message reflects what actually happened.

SPF and DKIM must be configured for the sending domain or messages will land
in spam.

Note the site advertises two addresses: the contact page's "Email us" button
opens `contact@maxwelltraining.net`, while form submissions are sent to
`contact@maxwelltechnologiesplc.com`.

---

## Redirects

`next.config.ts` maps a set of legacy URLs to their current equivalents —
`.php` extensions and five retired duplicate pages. These URLs are present in
search indexes and inbound links. **Do not remove them.**

---

## Remaining work

- [ ] Configure SMTP and test the enquiry form end to end
- [ ] Load Poppins and Covered By Your Grace via `next/font/google`
- [ ] Write the privacy policy page
- [ ] Add meta descriptions

---

## Author

Awa Precious (September, 2026)