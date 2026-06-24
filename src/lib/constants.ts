export const SITE_CONFIG = {
    name: "Juan Alzate",
    role_es: "Ingenierio Informático Full Stack",
    role_en: "Full Stack Software Engineer",
    location: "Medellín, CO",
    email: "alzateg128@gmail.com",
    github: "https://github.com/juanalzate82212",
    linkedin: "https://www.linkedin.com/in/juanjosealzategarcia128/",
    instagram: 'https://www.instagram.com/juanalzat10/',
    url: "https://juanalzate.dev",
} as const;

export const TECH_STACK = [
    "Next.js",
    "TypeScript",
    "React",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Git",
    "Java"
] as const;

export const NAV_LINKS = [
    { key: "about", href: "/about" },
    { key: "projects", href: "/projects" },
    { key: "home", href: "/" },
    { key: "experience", href: "/experience" },
    { key: "services", href: "/services" },
    { key: "contact", href: "/contact" }
] as const;

export const NEXT_PAGE: Record<string, string> = {
    "/": "/about",
    "/about": "/projects",
    "/projects": "/experience",
    "/experience": "/services",
    "/services": "/contact",
    "/contact": "/",
};