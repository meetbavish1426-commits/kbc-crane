"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
 

export default function AboutUs() {
const statsRef = useRef<HTMLDivElement | null>(null);
const [startCount, setStartCount] = useState(false);
const [years, setYears] = useState(0);
const [projects, setProjects] = useState(0);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartCount(true);
      }
    },
    { threshold: 0.3 }
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!startCount) return;

  const duration = 2000;
  let startTime: number;

  const animate = (time: number) => {
    if (!startTime) startTime = time;

    const progress = Math.min((time - startTime) / duration, 1);

    setYears(Math.floor(progress * 10));
    setProjects(Math.floor(progress * 500));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [startCount]);

useEffect(() => {
  const images = document.querySelectorAll(".company-image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("company-show");
        }
      });
    },
    { threshold: 0.2 }
  );

  images.forEach((img) => observer.observe(img));

  return () => observer.disconnect();
}, []);

  return (
    <main className="bg-[#fff6f4] text-[#2b1f1f] overflow-hidden">
      <section className="relative min-h-130 sm:min-h-155 lg:min-h-180 overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/assets/about.webp"
          alt="KBC crane hero"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
        />

        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/30" />
 
        {/* Content */}
        <div className="relative z-10 max-w-295 mx-auto px-5 sm:px-6 lg:px-8 min-h-130 sm:min-h-155 lg:min-h-180 flex items-center">
          <div className="max-w-180 pl-5 sm:pl-7">
            <p className="text-[#c9121f] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.3em] mb-4 font-heading">About KBC Crane</p>
            <h2 className="text-white text-[34px] sm:text-[46px] md:text-[58px] lg:text-[64px] leading-[1.05] font-extrabold uppercase tracking-[-0.04em] mb-5 font-heading">
              Precision In <br className="hidden sm:block" />
              Every Lift.
            </h2>

            <p className="about-writing text-white/85 text-[14px] sm:text-[16px] md:text-[18px] leading-6.5 sm:leading-7.5 max-w-160">
              <span>KBC Sales & Service is a premier provider of heavy lifting</span>
              <span>solutions, specializing in crane maintenance, parts supply,</span>
              <span>and industrial equipment management.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-295 mx-auto px-5 md:px-7 grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-8">
 

 
    {/* LEFT CONTENT */}
    <div>
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9121f] font-bold mb-3 font-heading">Who We Are</p>
      <h2 className="text-[38px] leading-tight font-extrabold text-[#241819] mb-5 font-heading">
        Company Profile
      </h2>

      <div className="w-16 h-0.75 bg-[#c9121f] mb-7" />

      <p className="text-[15px] leading-8 text-[#4e4141] mb-6 max-w-155">
        KBC Sales & Service has carved a niche in the heavy machinery
        industry as a reliable partner for contractors and fleet managers.
        With over two decades of technical expertise, we offer comprehensive
        lifecycle support for hydraulic and crawler cranes.
      </p>

      <p className="text-[15px] leading-8 text-[#4e4141] mb-10 max-w-162.5">
        Our facility is equipped with state-of-the-art diagnostic tools and a
        massive inventory of genuine spares, ensuring minimal downtime for
        your operations. We deliver operational continuity for the most
        demanding infrastructure projects.
      </p>

      {/* STATS */}
      <div ref={statsRef} className="flex flex-wrap gap-6">
        <div className="group w-37.5 h-23.75 border-2 border-[#c9121f] bg-white rounded-lg flex flex-col justify-center px-6 transition-all duration-500 hover:bg-[#c9121f] hover:-translate-y-2 hover:shadow-2xl">
          <strong className="text-[28px] leading-none text-[#c9121f] font-extrabold group-hover:text-white transition font-heading">
            {years}+
          </strong>

          <span className="text-[10px] tracking-[0.18em] uppercase font-bold mt-3 text-[#241819] group-hover:text-white transition font-heading">
            Years Experience
          </span>
        </div>

        <div className="group w-37.5 h-23.75 border-2 border-[#c9121f] bg-white rounded-lg flex flex-col justify-center px-6 transition-all duration-500 hover:bg-[#c9121f] hover:-translate-y-2 hover:shadow-2xl">
          <strong className="text-[28px] leading-none text-[#c9121f] font-extrabold group-hover:text-white transition font-heading">
            {projects}+
          </strong>

          <span className="text-[10px] tracking-[0.18em] uppercase font-bold mt-3 text-[#241819] group-hover:text-white transition font-heading">
            Projects Served
          </span>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="group relative">

      {/* RED GLOW */}
      <div className="absolute -inset-3 bg-[#c9121f] opacity-10 blur-2xl rounded-[30px] group-hover:opacity-25 transition-all duration-700"></div>

      {/* IMAGE BORDER */}
      <div className="relative overflow-hidden rounded-[26px] border border-[#d9a9a1] bg-white p-3 shadow-xl">

        {/* TOP CORNER DESIGN */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-[6px] border-l-[6px] border-[#c9121f] rounded-tl-3xl z-20"></div>

        {/* BOTTOM CORNER DESIGN */}
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[6px] border-r-[6px] border-[#c9121f] rounded-br-3xl z-20"></div>

        {/* IMAGE */}
        <Image
          src="/assets/company.webp"
          alt="Company Profile"
          width={800}
          height={1050}
          className="
            company-image
            w-full
            h-105
            object-cover
            rounded-[18px]
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:rotate-1
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-[18px]"></div>

        {/* FLOATING TEXT */}
        <div className="absolute bottom-8 left-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-30">
          <h3 className="text-white text-2xl font-extrabold mb-2 font-heading">
            Industrial Excellence
          </h3>

          <p className="text-white/80 text-sm max-w-65 leading-6">
            Delivering high-performance crane solutions with precision,
            safety, and innovation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#fff1ef] py-7.5">
        <div className="max-w-295 mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 mb-6">
            <div className="bg-white border border-[#b9827c] min-h-57.5 p-9 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#c9121f] text-[24px] mb-7">◎</div>
              <h3 className="text-[24px] font-extrabold mb-3 font-heading">Our Mission</h3>
              <p className="text-[13px] leading-5.75 text-[#4d4141] max-w-205">To empower the construction and logistics industry with uncompromising lifting solutions through technical innovation, rapid-response maintenance, and a steadfast commitment to engineering precision. We strive to be the mechanical backbone of india&apos;s infrastructure development.</p>
            </div>
            <div className="bg-[#1a0a09] text-white min-h-57.5 p-9 border-l-[5px] border-[#c9121f] rounded-xl shadow-lg">
              <div className="text-[#c9121f] text-[27px] mb-8">◉</div>
              <h3 className="text-[23px] font-extrabold mb-3 font-heading">Our Vision</h3>
              <p className="text-[13px] leading-5.5 text-white/75">To lead the global heavy machinery service sector by setting new benchmarks in hydraulic efficiency and digital fleet management.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[345px_1fr] gap-6">
<div className="bg-[#ffd9d5] border border-[#c99b94] h-37.5 flex flex-col items-center justify-center text-center rounded-xl">
  <div className="text-[#c9121f] text-[35px] leading-none mb-2">✓</div>
  <p className="text-[8px] tracking-[0.18em] uppercase font-bold text-[#c9121f] font-heading">
    GST Registered
  </p>
  <h4 className="text-[#c9121f] text-[22px] font-extrabold leading-tight font-heading">
    GST Compliant
  </h4>
  <p className="text-[9px] tracking-[0.15em]">
    Registered Business with Valid GST Number
  </p>
</div>
            <div className="bg-white border border-[#d6bab4] h-37.5 px-9 flex items-center justify-between gap-8 rounded-xl shadow-sm">
              <div>
                <h3 className="text-[24px] font-extrabold mb-3 font-heading">Our Core Values</h3>
                <ul className="text-[13px] leading-6.25 text-[#4f4242]"><li><span className="text-[#c9121f] mr-2">⊙</span>Integrity in Engineering</li><li><span className="text-[#c9121f] mr-2">⊙</span>Safety-First Philosophy</li><li><span className="text-[#c9121f] mr-2">⊙</span>Operational Transparency</li></ul>
              </div>
              <div className="hidden sm:flex w-78.75 h-23.75 bg-[#ffdcd8] border border-[#e2bcb7] items-center justify-center rounded-lg"><div className="w-18 h-18 bg-white/55 grid grid-cols-2 gap-2 p-4 rounded-lg"><span className="bg-[#c9121f]/20 rounded-full" /><span className="bg-[#c9121f]/20 rounded-full" /><span className="bg-[#c9121f]/20 rounded-full" /><span className="bg-[#c9121f]/20 rounded-full" /></div></div>
            </div>
          </div>
        </div>
      </section>

<section className="bg-[#fff6f4] pt-9.5 pb-16.25 overflow-hidden">
  <div className="max-w-295 mx-auto px-5 md:px-7">
    <div className="text-center mb-12">
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9121f] font-bold mb-3 font-heading">Our Timeline</p>
      <h2 className="text-[32px] font-extrabold font-heading">
        Our Journey
      </h2>
      <div className="section-divider mt-4" />
    </div>

    <div className="relative max-w-225 mx-auto">
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#c9121f] via-[#ffd7d2] to-[#c9121f] md:-translate-x-1/2" />

      {[
        { year: "2016", title: "CRANE INDUSTRY EXPERIENCE", text: "Started working in the crane manufacturing line, gaining practical knowledge in crane systems, service, and industrial material handling.", side: "left" },
        { year: "2021", title: "FOUNDATION", text: "KBC Sales & Service was founded with a vision to provide reliable crane sales, service, and maintenance solutions.", side: "right" },
        { year: "2023", title: "GST CERTIFICATION", text: "Achieved GST registration, strengthening business credibility and professional operations.", side: "left" },
        { year: "2025", title: "PRODUCTION PLANT", text: "Established a dedicated production plant to support crane manufacturing, service expansion, and customized industrial solutions.", side: "right" },
      ].map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.08 }}
          className="relative grid grid-cols-1 md:grid-cols-2 min-h-30 mb-12 md:mb-0"
        >
          <div
            className={
              item.side === "left"
                ? "pl-16 md:pl-0 md:text-right md:pr-22"
                : "hidden md:block"
            }
          >
            {item.side === "left" && <TimelineContent {...item} />}
          </div>

          {/* Timeline dot with pulse */}
          <span className="absolute left-5 md:left-1/2 top-4.5 -translate-x-1/2 z-10">
            <span className="block w-4 h-4 bg-[#c9121f] rotate-45 shadow-md" />
            <span className="absolute inset-0 w-4 h-4 bg-[#c9121f] rotate-45 animate-ping opacity-20" />
          </span>

          <div
            className={
              item.side === "right"
                ? "pl-16 md:pl-22"
                : "hidden md:block"
            }
          >
            {item.side === "right" && <TimelineContent {...item} />}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-[#1a0a09] border-t-[5px] border-b-[5px] border-[#c9121f] py-12 text-center text-white">
        <div className="max-w-225 mx-auto px-7">
          <h2 className="text-[40px] md:text-[42px] leading-tight font-extrabold uppercase tracking-[-0.04em] mb-4 font-heading">Ready For The Next Lift?</h2>
          <p className="text-[15px] leading-6.25 text-white/70 mb-8">Contact our technical team today to discuss your fleet maintenance<br className="hidden md:block" /> requirements or spare part orders.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-57.5 h-14.25 bg-[#c9121f] rounded-md flex items-center justify-center text-[11px] tracking-[0.32em] uppercase font-bold hover:bg-white hover:text-[#c9121f] transition-all duration-300 font-heading">Request A Quote</Link>
            <Link href="/assets/brochure.pdf" className="w-63.75 h-14.25 border-2 border-white/50 rounded-md flex items-center justify-center text-[11px] tracking-[0.32em] uppercase font-bold hover:bg-white hover:text-[#1a0a09] transition-all duration-300 font-heading">Download Brochure</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

type TimelineContentProps = {
  year: string;
  title: string;
  text: string;
};

function TimelineContent({ year, title, text }: TimelineContentProps) {
  return (
    <div className="pt-1">
      <h3 className="text-[#c9121f] text-[22px] leading-none font-extrabold font-heading">{year}</h3>
      <p className="uppercase text-[8px] tracking-[0.08em] font-extrabold mb-2 font-heading">{title}</p>
      <p className="text-[12px] leading-5 text-[#4e4141] max-w-77.5 ml-auto">{text}</p>
    </div>
  );
}
