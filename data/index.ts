import { Testimonial } from "@/types";
import { TeamMember } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "4xCode delivered our SaaS MVP in 6 weeks — clean architecture, great UX, and zero hand-holding needed. They've become our go-to engineering partner.",
    author: "James T.",
    title: "Founder, FinTech Startup",
    initial: "J",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "The AI pipeline they built cut our data processing time by 80%. Senior engineers, clear communication, and they actually hit the deadline.",
    author: "Aisha M.",
    title: " CTO, E-commerce Platform",
    initial: "A",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "We replaced three freelancers with 4xCode and never looked back. The quality of code, the speed, and the product thinking are all outstanding.",
    author: "Liam R.",
    title: " Product Lead, B2B SaaS",
    initial: "L",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "From discovery to launch in under two months. The team understood our domain quickly and shipped a product our users actually love.",
    author: "Priya N",
    title: " CEO, HealthTech Scale-up",
    initial: "P",
  },
];
// team data
export const TEAM: TeamMember[] = [
  {
    initials: "VC",
    name: "Vic",
    role: "CEO & Co-Founder",
    detail:
      "Holds a Master of Business Administration (MBA) with a specialization in Business Strategy and Management. As CEO & Co-Founder of 4xCode, he leads the company's vision, business strategy, client partnerships, and overall growth. He focuses on building long-term relationships, driving innovation, and ensuring every project aligns with both business objectives and exceptional delivery standards.",
  },
  {
    initials: "MA",
    name: "Muhammad Ali ",
    role: "CTO & Co-Founder ",
    detail:
      "A Computer Engineer with a Master's degree in Computer Engineering and over 7 years of industry experience in AI and software engineering, Muhammad Ali co-founded 4xCode and leads its technical architecture across SaaS platforms, web applications, and AI systems. He oversees core engineering decisions across the company, ensuring scalable, high-performance solutions while driving innovation in applied AI and modern software development. ",
  },
];
