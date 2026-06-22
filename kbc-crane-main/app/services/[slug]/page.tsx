import { services } from "@/data/services";
import { notFound } from "next/navigation";
import MoreServicesSlider from "./MoreServicesSlider";
import Link from "next/link";
import Image from "next/image";
import {
  FaDownload,
  FaPhoneAlt,
  FaTools,
  FaShieldAlt,
  FaBolt,
  FaUserCog,
  FaClipboardCheck,
  FaIndustry,
} from "react-icons/fa";
import ServiceMotion from "./ServiceMotion";
 

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-[#f7f8fb] text-[#111] overflow-hidden">
      <ServiceMotion />;
      {/* HERO */}
      <section className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-5 sm:px-8 lg:px-10 pt-28 pb-16">
          <p className="text-[#f4b41a] text-[11px] sm:text-sm uppercase tracking-[0.22em] sm:tracking-[0.25em] font-black mb-4">
            Understanding Your Needs
          </p>

          <h1 className="text-white text-[36px] sm:text-[54px] lg:text-[72px] font-black leading-[1.05] max-w-[780px]">
            {service.title}
          </h1>

          <p className="mt-6 max-w-[620px] text-white/80 text-sm sm:text-base leading-7">
            {service.shortDesc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/assets/brochure.pdf"
              className="inline-flex items-center justify-center gap-3 bg-[#e51b23] text-white px-6 sm:px-7 py-4 font-bold uppercase text-xs tracking-wide hover:bg-[#b91218] transition-all duration-300"
            >
              <FaDownload />
              Download Brochure
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#111] px-6 sm:px-7 py-4 font-bold uppercase text-xs tracking-wide hover:bg-[#f4b41a] transition-all duration-300"
            >
              <FaPhoneAlt />
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-14 sm:py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-14 items-center">
<div className="relative h-[280px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-white shadow-xl kbc-product-img-reveal">
  <Image
    src={service.descImage1}
    alt={service.title}
    fill
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-cover"
  />
</div>

          <div>
            <p className="text-[#e51b23] font-black uppercase tracking-[0.18em] text-xs mb-4">
              Our Services
            </p>

            <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-black leading-tight text-[#111827]">
              {service.title}
            </h2>

            <div className="w-20 sm:w-24 h-1 bg-[#e51b23] mt-5 mb-7 sm:mb-8" />

            <div className="space-y-5 sm:space-y-6 text-[#4b5563] text-[15px] sm:text-base leading-8">
              <p>
                {service.description}
              </p>
            </div>

            <a
              href="/assets/brochure.pdf"
              className="mt-8 sm:mt-9 inline-flex items-center justify-center gap-3 bg-[#e51b23] text-white px-7 sm:px-8 py-4 font-bold rounded-sm shadow-lg shadow-red-900/20 hover:bg-[#b91218] hover:-translate-y-1 transition-all duration-300"
            >
              <FaDownload />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* KBC CRANE ADVANTAGE */}
      <section className="py-14 sm:py-16 md:py-24 bg-[#f7f8fb]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[#e51b23] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-xs font-black mb-3">
              KBC Crane Advantage
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111]">
              What Sets Us Apart
            </h2>

            <p className="mt-4 text-[#666] max-w-[650px] mx-auto text-sm sm:text-base leading-7">
              Delivering reliable, safe and efficient crane service solutions
              for industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: <FaBolt />, title: "Fast Response Time", desc: "Quick support to reduce downtime and keep operations running." },
              { icon: <FaUserCog />, title: "Certified Engineers", desc: "Experienced crane service professionals for every project." },
              { icon: <FaShieldAlt />, title: "Safety Compliance", desc: "Service process focused on safe and reliable crane operation." },
              { icon: <FaTools />, title: "Genuine Spare Parts", desc: "Reliable parts and components for long lasting performance." },
              { icon: <FaClipboardCheck />, title: "Detailed Inspection", desc: "Complete checking and reporting before final handover." },
              { icon: <FaIndustry />, title: "Industrial Expertise", desc: "Strong experience in heavy duty crane service applications." },
            ].map((item, index) => (
              <div
                key={index}
 className="kbc-step-card group bg-white p-6 sm:p-7 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#e51b23] transition-all duration-300"
               >
                <div className="w-13 h-13 sm:w-14 sm:h-14 bg-[#e51b23]/10 text-[#e51b23] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#e51b23] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#111] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-[#666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY RECOVERY */}
      <section className="bg-white py-14 sm:py-16 md:py-[95px]">
        <div className="max-w-[1230px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden bg-[#3d1d18] min-h-[300px] md:min-h-[340px] px-7 sm:px-10 lg:px-[54px] py-12 sm:py-14 lg:py-[70px]">
            <div className="absolute right-[-95px] sm:right-[-70px] bottom-[-120px] sm:bottom-[-105px] w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rotate-45 bg-white/10" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-9 md:gap-10">
              <div>
                <h2 className="text-white uppercase italic font-black leading-[1.05] tracking-[-1px] text-[40px] sm:text-[58px] md:text-[72px]">
                  Emergency
                  <br />
                  Recovery
                </h2>

                <p className="mt-6 sm:mt-7 max-w-[650px] text-white text-base sm:text-lg leading-8">
                  Have any questions or need immediate technical consultation
                  for your fleet?
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-fit md:mr-[25px] inline-flex items-center justify-center bg-white text-[#e51b23] px-8 sm:px-[45px] py-4 sm:py-[18px] font-black uppercase tracking-[0.06em] text-sm hover:bg-[#e51b23] hover:text-white transition-all duration-300"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MORE SERVICES */}
      <MoreServicesSlider services={services} currentSlug={service.slug} />
    </main>
  );
}