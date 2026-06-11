export interface CaseStudy {
  id: string;
  image: string;
  title: string;
  description: string;
  tag: string;          
  metric?: string;      
  tags?: string[];     
}