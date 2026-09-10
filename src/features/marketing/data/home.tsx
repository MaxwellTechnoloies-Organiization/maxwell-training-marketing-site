export interface SolutionItem {
  icon: string;
  title: string;
  desc: string;
}

export interface DomainCard {
  number: string;
  title: string;
  desc: React.ReactNode;
  href: string;
}

export interface Testimonial {
  quote: React.ReactNode;
  name: string;
  position: string;
  avatar: string;
}

export interface Certification {
  logo: string;
  alt: string;
  label: string;
}

export const solutionsLeft: SolutionItem[] = [
  {
    icon: "/assets/images/icons/one-on-one.svg",
    title: "One-on-one",
    desc: "Every learner is taught by and works with their own instructor",
  },
  {
    icon: "/assets/images/icons/work-based.svg",
    title: "Work-based",
    desc: "You learn by working on real projects",
  },
  {
    icon: "/assets/images/icons/practical.svg",
    title: "Practical",
    desc: "Up to 10,000 exercises to be completed by each learner",
  },
];

export const solutionsRight: SolutionItem[] = [
  {
    icon: "/assets/images/icons/employable.svg",
    title: "Employable",
    desc: "Every student is offered a paid internship, with the best offered full-time employment",
  },
  {
    icon: "/assets/images/icons/modern.svg",
    title: "Modern",
    desc: "Learn in an online lab environment with constant monitoring & feedback",
  },
  {
    icon: "/assets/images/icons/ai-supported.svg",
    title: "AI-supported",
    desc: "Behavioural tracking helps instructors understand and adapt with each learner",
  },
];

export const certificationsRowOne: Certification[] = [
  { logo: "/assets/images/ceh.png", alt: "Binance", label: "Certified Ethical Hacker" },
  { logo: "/assets/images/ehe.png", alt: "Optimism", label: "Ethical Hacking Essentials" },
  { logo: "/assets/images/dfe.png", alt: "Harmony", label: "Digital Forensics Essentials" },
  { logo: "/assets/images/nde.png", alt: "Polygon", label: "Network Defense Essentials" },
];

export const certificationsRowTwo: Certification[] = [
  { logo: "/assets/images/cpent.png", alt: "Binance", label: "Certified Penetration Testing Professional" },
  { logo: "/assets/images/cnd.png", alt: "Optimism", label: "Certified Network Defender" },
  { logo: "/assets/images/cscu.png", alt: "Harmony", label: "Certified Secure Computer User" },
  { logo: "/assets/images/chfi.png", alt: "Harmony", label: "Computer Hacking Forensic Investigator" },
  { logo: "/assets/images/ecih.png", alt: "Harmony", label: "EC-Council Certified Incident Handler" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "\"I have been at MAXWELL TRAINING for a while now and I must say I have seen amazing progress in all what I do. I am really impressed with great thinkers that provide solid advice, as well as professional tech skills. I must say MAXWELL TRAINING is one a million.\"",
    name: "Yisa Peter",
    position: "Ethical hacker",
    avatar: "/assets/images/peter-maxwell-training.jpg",
  },
  {
    quote: (
       <>
        {"\"I joined Maxwell Training with a lot of expectations. The journey so far has been very good."}
        <br />
        {"I'll advice anyone ready to embark on this journey that your background, be it arts, science, commercial, etc., is no hindrance because it will take only them, your effort and the hard work they put in to keep you going. Maxwell training is the best millieu for everyone as we are a big family.\""}
      </>
    ),
    name: "Rodrigue",
    position: "Ethical hacker",
    avatar: "/assets/images/rodrigue-maxwelltraining.jpg",
  },
  {
    quote:
      "\"I am a graduating student from SACRED HEART COLLEGE DOUALA, who had the privilege to be granted a scholarship by the enterprise MAXWELL TECHNOLOGIES. Their training methodology is quite optimal and the best I have ever seen. Here, the trainers give you the opportunity to work on projects so as to verify whether you can actually apply what you\u2019ve learned so far.\"",
    name: "TCHEMWE TCHEMWE FAREIL",
    position: "Software Engineer",
    avatar: "/assets/images/fareil-maxwelltraining.jpg",
  },
  {
    quote:
      "\"At Maxwell Technologies, we are not just given knowledge, but are taught how to apply it, which is what is needed in the field. I commend the system of training in Maxwell Training as it fits all whether you have a background in IT or not. The system is designed in a way to make everyone, even a beginner like I was, to understand and even become an expert at the end of the day.\"",
    name: "Barbara Nyowike",
    position: "Software Engineer",
    avatar: "/assets/images/babara-maxwelltraining.jpg",
  },
];