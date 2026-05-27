"use client";

import { useEffect } from "react";

export default function ServiceMotion() {
  useEffect(() => {
    const items = document.querySelectorAll(".service-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-show");
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}