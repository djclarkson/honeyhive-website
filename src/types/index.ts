export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string | null;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface User {
  email: string;
  password: string;
}