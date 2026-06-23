export interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  author: string;
  vehicle: string;
  initial: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  detail?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  meta_description: string;
  created_at: string;
}

export interface CaseStudySection {
  section_number: number;
  title: string;
  content?: string[];
  introduction?: string;
  challenges?: Array<{ title: string; description: string }>;
  key_factors?: string[];
  timeline?: Array<{ phase: string; description: string }>;
  features_table?: Array<{ feature: string; business_value: string }>;
  results_table?: Array<{
    area_of_performance: string;
    before_4xcode: string;
    after_4xcode: string;
  }>;
  testimonial?: { quote: string; author: string };
  takeaways?: string[];
  callout_box?:
    | string
    | { title: string; description: string; link_text: string };
  footer?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  heading: string;
  image: string;
  images?: string[];
  sections: CaseStudySection[];
}
