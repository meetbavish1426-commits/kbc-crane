"use client";

import { useEffect } from "react";

export default function ServiceMotion() {
  useEffect(() => {
    const elements = document.querySelectorAll(".service-card, .kbc-step-card, .kbc-product-img-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add("kbc-show");
            el.classList.add("show");
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}