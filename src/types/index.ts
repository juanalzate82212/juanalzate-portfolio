export interface TProject {
  id: string;
  slug: string;
  title_es: string;
  title_en: string;
  short_desc_es: string;
  short_desc_en: string;
  long_desc_es: string | null;
  long_desc_en: string | null;
  tech_stack: string[];
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  status: "published" | "draft";
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface TExperience {
  id: string;
  company: string;
  role_es: string;
  role_en: string;
  description_es: string | null;
  description_en: string | null;
  start_date: string;
  end_date: string | null;
  company_url: string | null;
  display_order: number;
  created_at: string;
}

export interface TCertification {
  id: string
  name_es: string
  name_en: string
  issuer: string
  issue_date: string
  credential_url: string | null
  display_order: number
  created_at: string
}

export interface TService {
  id: string
  title_es: string
  title_en: string
  description_es: string
  description_en: string
  icon: string
  display_order: number
}

export interface TContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  created_at: string
}

export type Locale = "es" | "en";

export interface IContactForm {
    name: string
    email: string
    subject: string
    message: string
    honeypot?: string
}
