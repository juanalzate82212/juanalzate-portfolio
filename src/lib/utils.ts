import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
    return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]+/g, "") // Replace non-alphanumeric characters with hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim() // Trim leading and trailing hyphens
}

export function formatDate(dateString: string, locale: 'es' | 'en'): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'es' ? 'es-CO': 'en-US', {
        month: 'short',
        year: 'numeric',
    });
}