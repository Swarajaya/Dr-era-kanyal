import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3");
}

export const CONTACT = {
  phone: "+91 9560011192",
  email: "erakanyalnegi@gmail.com",
  whatsapp: "https://wa.me/919560011192",
  phoneRaw: "+919560011192",
} as const;
