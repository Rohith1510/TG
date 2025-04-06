import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addHoverEffect(element: HTMLElement) {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'translateY(-10px)';
    element.style.transition = 'transform 0.3s ease';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translateY(0)';
  });
}