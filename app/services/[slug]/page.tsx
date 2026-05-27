import { services } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceMotion from "./ServiceMotion";
import {
  FaCog,
  FaMousePointer,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-white text-[#111] overflow-hidden">
      <ServiceMotion />

      {/* HERO */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 text-center">
        <div className="max-w-[850px] mx-auto px-4 sm:px-5">
          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-extrabold text-[#e51b23] tracking-wide leading-tight">
            {service.title}
          </h1>

          <div className="w-[70px] h-[3px] bg-[#e51b23] mx-auto mt-4 mb-6 sm:mb-8" />

          <p className="text-[13px] sm:text-[14px] leading-7 text-gray-600 max-w-[760px] mx-auto">
            {service.shortDesc}
          </p>
        </div>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-5 mt-8 sm:mt-12">
          <img
            src={service.image}
            alt={service.title}
            className="service-motion service-hero-img w-full h-[230px] sm:h-[420px] md:h-[520px] lg:h-[650px] object-cover shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f5f6f8] py-10 sm:py-12">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
            {[
              { icon: <FaCog />, title: "BEST MECHANICAL STRENGTH" },
              { icon: <FaMousePointer />, title: "EASY TO OPERATE" },
              { icon: <FaCheckCircle />, title: "HIGH QUALITY" },
              { icon: <FaChartLine />, title: "MARKET LEADING PRODUCT" },
            ].map((item) => (
              <div key={item.title} className="service-motion service-pop group">
                <div className="w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] mx-auto rounded-full border-[3px] border-black flex items-center justify-center text-[20px] sm:text-[22px] group-hover:bg-[#e51b23] group-hover:text-white group-hover:border-[#e51b23] transition-all duration-300">
                  {item.icon}
                </div>
                <p className="mt-4 sm:mt-5 text-[10px] sm:text-[11px] font-bold tracking-wide leading-5">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-9 sm:mt-10">
            <a
              href="/contact"
              className="inline-block bg-[#e51b23] text-white text-[12px] font-bold px-8 sm:px-10 py-4 hover:bg-black transition-all duration-300"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="relative pl-5 text-[24px] sm:text-[28px] font-bold mb-6 sm:mb-8 before:absolute before:left-0 before:top-1 before:w-[6px] before:h-[35px] before:bg-[#e51b23]">
              Our Services
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {service.description.map((text, index) => (
                <p
                  key={index}
                  className="text-[13px] sm:text-[14px] leading-7 sm:leading-8 text-gray-600"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col gap-4 lg:min-h-[390px]">
            <img
              src={service.descImage2}
              alt={service.title}
              className="service-motion service-slide-right w-full h-[230px] sm:h-[320px] lg:absolute lg:right-0 lg:top-0 lg:w-[78%] lg:h-[360px] object-cover shadow-xl"
            />

            <img
              src={service.descImage1}
              alt={`${service.title} component`}
              className="service-motion service-slide-left w-full h-[210px] sm:h-[260px] lg:absolute lg:left-0 lg:top-[90px] lg:w-[62%] lg:h-[260px] object-cover bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-2"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f6f8] py-12 sm:py-16 text-center">
        <div className="max-w-[760px] mx-auto px-4 sm:px-5">
          <h2 className="text-[22px] sm:text-[26px] font-extrabold tracking-wide">
            ENGINEERED FOR PERFORMANCE
          </h2>

          <p className="text-[13px] sm:text-[14px] leading-7 text-gray-600 mt-5">
            KBC Sales & Service is a leading manufacturer of heavy lifting
            solutions. Our products are engineered for maximum safety and
            performance in the most demanding environments.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-[#e51b23] text-white text-[12px] font-bold px-8 sm:px-10 py-4 hover:bg-black transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </main>
  );
}