export interface CaseStudy {
  id: string;
  image: string;
  title: string;
  description: string;
  tag: string;          
  metric?: string;      
  tags?: string[];     
}

export interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  author: string;
  vehicle: string;
  initial: string;
}