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
    <main className="bg-white text-[#111]">
      <ServiceMotion />
      {/* HERO */}
      <section className="pt-20 pb-14 text-center">
        <div className="max-w-212.5 mx-auto px-5">
          <h1 className="text-[34px] md:text-[42px] font-extrabold text-[#e51b23] tracking-wide">
            {service.title}
          </h1>

          <div className="w-17.5 h-0.75 bg-[#e51b23] mx-auto mt-4 mb-8" />

          <p className="text-[14px] leading-7 text-gray-600">
            {service.shortDesc}
          </p>
        </div>

        <div className="max-w-295 mx-auto px-5 mt-12">
<img
  src={service.image}
  alt={service.title}
  className="service-motion service-hero-img w-full h-80 sm:h-112.5 lg:h-180 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
/>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f5f6f8] py-12">
        <div className="max-w-295 mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <FaCog />, title: "BEST MECHANICAL STRENGTH" },
              { icon: <FaMousePointer />, title: "EASY TO OPERATE" },
              { icon: <FaCheckCircle />, title: "HIGH QUALITY" },
              { icon: <FaChartLine />, title: "MARKET LEADING PRODUCT" },
            ].map((item) => (
             <div key={item.title} className="service-motion service-pop group">
                <div className="w-15.5 h-15.5 mx-auto rounded-full border-[3px] border-black flex items-center justify-center text-[22px] group-hover:bg-[#e51b23] group-hover:text-white group-hover:border-[#e51b23] transition-all duration-300">
                  {item.icon}
                </div>
                <p className="mt-5 text-[11px] font-bold tracking-wide">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/contact"
              className="inline-block bg-[#e51b23] text-white text-[12px] font-bold px-10 py-4 hover:bg-black transition-all duration-300"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20">
        <div className="max-w-295 mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="relative pl-5 text-[28px] font-bold mb-8 before:absolute before:left-0 before:top-1 before:w-1.5 before:h-8.75 before:bg-[#e51b23]">
              Our Services
            </h2>

            <div className="space-y-6">
              {service.description.map((text, index) => (
                <p
                  key={index}
                  className="text-[14px] leading-8 text-gray-600"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="relative min-h-97.5">
<img
  src={service.descImage2}
  alt={service.title}
  className="service-motion service-slide-right absolute right-0 top-0 w-[78%] h-90 object-cover shadow-xl"
/>

<img
  src={service.descImage1}
  alt={`${service.title} component`}
  className="service-motion service-slide-left absolute left-0 top-22.5 w-[62%] h-65 object-cover bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-2"
/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f6f8] py-16 text-center">
        <div className="max-w-190 mx-auto px-5">
          <h2 className="text-[26px] font-extrabold tracking-wide">
            ENGINEERED FOR PERFORMANCE
          </h2>

          <p className="text-[14px] leading-7 text-gray-600 mt-5">
            KBC Sales & Service is a leading manufacturer of heavy lifting
            solutions. Our products are engineered for maximum safety and
            performance in the most demanding environments.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-[#e51b23] text-white text-[12px] font-bold px-10 py-4 hover:bg-black transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </main>
  );
}