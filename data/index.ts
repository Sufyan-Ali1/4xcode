
import { Testimonial } from "@/types";
import { TeamMember } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "Diagnosed my air suspension fault in under an hour. Genuine parts, premium service. The workshop feels like a Formula 1 garage.",
    author: "Daniel R.",
    vehicle: "Range Rover Vogue",
    initial: "D",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "Booked online, got a quote within 30 minutes, car back the next day. They spotted issues my dealer missed. Highly recommend.",
    author: "Sarah M.",
    vehicle: "Range Rover Sport",
    initial: "S",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "Best Range Rover specialist I've used. Transparent pricing, honest advice and the car drives like new. Worth every penny.",
    author: "Omar K.",
    vehicle: "Defender 110",
    initial: "O",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "Brakes, fluids and a full diagnostic done in a day. The booking experience and communication were outstanding.",
    author: "Priya S.",
    vehicle: "Velar HSE",
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
