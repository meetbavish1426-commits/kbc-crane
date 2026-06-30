"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServiceItem {
  slug: string;
  descImage1: string;
  title: string;
  shortDesc: string;
}

export default function MoreServicesSlider({
  services,
  currentSlug,
}: {
  services: ServiceItem[];
  currentSlug: string;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const items = services.filter((item) => item.slug !== currentSlug);

useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  let interval: NodeJS.Timeout;
  let scrollTimeout: NodeJS.Timeout;
  let isAutoScrolling = false;

  const startAutoScroll = () => {
    clearInterval(interval);

    interval = setInterval(() => {
      if (window.innerWidth >= 1024) return;

      const cards = Array.from(
        slider.querySelectorAll(".mobile-service-card")
      ) as HTMLElement[];

      if (!cards.length) return;

      // Current visible card find karo
      let currentIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, i) => {
        const distance = Math.abs(
          card.offsetLeft - slider.scrollLeft
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          currentIndex = i;
        }
      });

      // Next card
      const nextIndex =
        currentIndex >= cards.length - 1
          ? 0
          : currentIndex + 1;

      const nextCard = cards[nextIndex];

      isAutoScrolling = true;

      slider.scrollTo({
        left: nextIndex === 0 ? 0 : nextCard.offsetLeft - 20,
        behavior: "smooth",
      });
    }, 4500);
  };

  startAutoScroll();

  const handleScroll = () => {
    // Auto scroll na scroll event ignore karo
    if (isAutoScrolling) {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        isAutoScrolling = false;
      }, 700);

      return;
    }

    // User manually swipe kare
    clearInterval(interval);
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      startAutoScroll();
    }, 1000);
  };

  slider.addEventListener("scroll", handleScroll);

  return () => {
    clearInterval(interval);
    clearTimeout(scrollTimeout);
    slider.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section className="bg-white text-black py-14 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/70 font-bold">
            More From KBC Crane
          </p>

          <h2 className="mt-2 border-l-4 border-[#e51b23] pl-3 text-2xl md:text-4xl font-black uppercase">
            More Services
          </h2>
        </div>

        {/* Mobile + Tablet Slider */}
        <div
          ref={sliderRef}
          className="lg:hidden flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
        >
          {items.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              key={`${item.slug}-${index}`}
              className="mobile-service-card group min-w-[85%] sm:min-w-[55%] md:min-w-[45%] snap-start bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#e51b23] transition-all duration-500"
            >
              <div className="relative h-62.5 sm:h-70 overflow-hidden bg-gray-200">
                <Image
                  src={item.descImage1}
                  alt={item.title}
                  fill
                  sizes="85vw"
                  className="object-cover sm:transition-transform sm:duration-700 sm:group-hover:scale-110"
                />
              </div>

              <div className="p-5 sm:p-6 min-h-52.5">
                <h3 className="text-lg sm:text-xl font-black uppercase leading-tight group-hover:text-[#e51b23] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                 {item.shortDesc}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wide group-hover:text-[#e51b23]">
                  View Details
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Marquee */}
        <div className="hidden lg:block overflow-hidden">
          <div className="kbc-more-services-track">
            {[...items, ...items].map((item, index) => (
              <Link
                href={`/services/${item.slug}`}
                key={`${item.slug}-${index}`}
                className="group w-105 shrink-0 bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-black transition-all duration-500"
              >
                <div className="relative h-70 overflow-hidden bg-gray-200">
                  <Image
                    src={item.descImage1}
                    alt={item.title}
                    fill
                    sizes="420px"
                    className="object-cover sm:transition-transform sm:duration-700 sm:group-hover:scale-110"
                  />
                </div>

                <div className="p-7 min-h-52.5">
                  <h3 className="text-[24px] font-black uppercase leading-tight transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-black/60">
                    {item.shortDesc}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wide group-hover:text-[#e51b23]">
                    View Details
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}