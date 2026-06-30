import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Crane Services",
  description:
    "Professional crane maintenance, AMC, modernization, repair and commissioning services.",
};
 

const services = [
  {
    title: "EOT Crane Annual Maintenance Contract",
    slug: "annual-maintenance",
    desc: "We understand that emergencies always approach unexpectedly. Our ensemble team is ready to provide 24/7 technical support for your lifting systems.",
    img: "/assets/annual-img.webp",
   
  },
  {
    title: "Crane Modernization",
    slug: "crane-modernization",
    desc: "Upgrade your existing cranes with the latest technology and features. Our crane modernization services include control system upgrades, energy-efficient solutions, and enhanced safety features to improve performance and extend the lifespan of your equipment.",
    img: "/assets/underslung-crane01.webp",
  },
  {
    title: "EOT Crane Repairing Services",
    slug: "eot-crane-repairing",
    desc: "We understand that emergencies always approach unexpectedly. Our ensemble team is ready to provide 24/7 technical support for your lifting systems.",
    img: "/assets/overhauling.webp",
  },
  {
    title: "EOT Crane Maintenance Service",
    slug: "eot-crane-service",
    desc: "Our comprehensive crane overhauling service includes complete refurbishment or replacement of electrical components, drives, and other critical components to improve the service life of your equipment.",
    img: "/assets/service02.webp",
  },
  {
    title: "Crane Modification & Relocation",
    slug: "crane-relocation",
    desc: "Our proactive crane maintenance services include regular inspections, preventive maintenance, and on-site repairs to ensure optimal performance and minimize downtime.",
    img: "/assets/bridge-crane02.webp",
  },
  {
    title: "EOT Crane Health Check-Up",
    slug: "eot-health-check-up",
    desc: "Upgrade your existing cranes with the latest technology and features. Our crane modernization services include control system upgrades, energy-efficient solutions, and enhanced safety features to improve performance and extend the lifespan of your equipment.",
    img: "/assets/health.webp",
  },
  {
    title: "Crane Capacity Upgrade",
    slug: "crane-capacity",
    desc: "Ensure the safety and reliability of your cranes with our comprehensive inspection and testing services. We conduct thorough assessments, load testing, and safety validations to identify potential issues and ensure compliance with industry standards.",
    img: "/assets/capacity-hero.webp",
  },
  {
    title: "EOT CRANE Erection and Commissioning",
    slug: "erection-commissioning",
    desc: "We understand that emergencies always approach unexpectedly. Our ensemble team is ready to provide 24/7 technical support for your lifting systems.",
    img: "/assets/eot-wire-rope-hoist.webp",
  },
  {
    title: "EOT Crane Remote Monitoring",
    slug: "remote-crane",
    desc: "Need to re-site a crane? We offer expert removal and installation services for Goliath, Overhead, and Swing Jib cranes across all terrains.",
    img: "/assets/remote-monitoring.webp",
  },
  {
    title: "EOT Crane Operator Training",
    slug: "operator-training",
    desc: "Save over 50% compared to replacement. Our engineering team provides high-degree analytical upgrades for existing fleet capacity.",
    img: "/assets/Training-hero.webp",
  },
  {
    title: "EOT Crane Rope Condition Monitoring",
    slug: "eot-crane-rope-condition",
    desc: "Our comprehensive crane overhauling service includes complete refurbishment or replacement of electrical components, drives, and other critical components to improve the service life of your equipment.",
    img: "/assets/rope-condition.webp",
  },
  {
    title: "Crane Overhauling",
    slug: "crane-overhauling",
    desc: "Upgrade your existing cranes with the latest technology and features. Our crane modernization services include control system upgrades, energy-efficient solutions, and enhanced safety features to improve performance and extend the lifespan of your equipment.",
    img: "/assets/service01.webp",
  },
  {
    title: "EOT Crane Relocation",
    slug: "eot-crane-relocation",
    desc: "Ensure the safety and reliability of your cranes with our comprehensive inspection and testing services. We conduct thorough assessments, load testing, and safety validations to identify potential issues and ensure compliance with industry standards.",
    img: "/assets/eot-wire-rope-hoist.webp",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-130 sm:min-h-155 lg:min-h-180 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/service-hero.webp')" }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-[#111] via-black/20 to-transparent" />

<div className="relative z-10 w-full max-w-300 mx-auto px-5 sm:px-8 lg:px-10 pb-12 md:pb-20 overflow-hidden">
  <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#c9121f] font-bold uppercase mb-4 font-heading">
    Understanding Your Needs
  </p>

  <h1 className="text-[38px] min-[390px]:text-[44px] sm:text-[58px] md:text-[74px] lg:text-[86px] font-black leading-[0.95] uppercase tracking-[-1px] max-w-[320px] sm:max-w-162.5 lg:max-w-190 font-heading">
    Crane <br /> Overhauling
  </h1>

   <p className="mt-6 max-w-140 text-sm sm:text-base leading-7 text-white/75 overflow-hidden">
  <span className="reveal-line block">
    Continually reintermediate integrated processes through technically
  </span>

  <span className="reveal-line block">
    sound intellectual capital. Holistically foster superior
  </span>

  <span className="reveal-line block">
    methodologies without market driven best practices.
  </span>
</p>

          <div className="flex gap-3 mt-8">
            <Link
              href="/assets/brochure.pdf"
              className="bg-[#c9121f] hover:bg-white hover:text-[#c9121f] transition-all duration-300 px-6 py-4 text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 rounded-md font-heading"
            >
              <FaDownload /> Brochure
            </Link>
 
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <div className="border-t-2 border-[#c9121f] pt-4 mb-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9121f] font-bold mb-4 font-heading">
                Overhaul Dynamics
              </p>

              <p className="text-[15px] md:text-lg leading-8 text-black max-w-162.5">
                Crane tech specialists ensure accurate identification of the
                measures to be taken to improve the service life of the
                equipment. Crane overhauling involves complete refurbishment or
                replacement of electrical components, drives and other critical
                components.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-5">
              {[
                "/assets/service01.webp",
                "/assets/service02.webp",
                "/assets/service03.webp",
              ].map((img, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-[#1a1a1a]"
                >
                  <Image
                    src={img}
                    alt="Crane overhaul"
                    width={800}
                    height={600}
                    className="h-22.5 sm:h-35 md:h-42.5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT INFO BOX */}
          <div className="bg-[#1a0a09] border border-black/10 p-6 md:p-8 lg:sticky lg:top-28 rounded-xl">
            <h3 className="text-2xl font-extrabold uppercase mb-5 font-heading">
              Service Highlights
            </h3>

            <ul className="space-y-4 text-sm text-white/70 leading-7">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9121f] mt-2.5 shrink-0" />
                Complete electrical and mechanical inspection
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9121f] mt-2.5 shrink-0" />
                Gearbox, motor, brake and panel checking
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9121f] mt-2.5 shrink-0" />
                Load testing and safety validation
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9121f] mt-2.5 shrink-0" />
                On-site repairing and emergency support
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#c9121f] px-6 py-4 text-xs font-bold uppercase rounded-md hover:bg-white hover:text-[#c9121f] transition-all duration-300 font-heading tracking-wider"
            >
              Contact Expert <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10 pb-16 md:pb-24">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9121f] font-bold font-heading">
            More From KBC Crane 
          </p>

          <h2 className="mt-2 border-l-4 border-[#c9121f] pl-3 text-2xl md:text-4xl text-black uppercase font-heading font-extrabold">
            More Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((item, index) => (
<div
  key={index}
  className="group bg-white border border-black/10 rounded-xl overflow-hidden hover:border-[#c9121f]/20 transition-all duration-500 card-hover h-full flex flex-col"
>
              <div className="relative h-57.5 md:h-65 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Red accent on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#c9121f] group-hover:w-full transition-all duration-500" />
              </div>

<div className="p-7 flex flex-col flex-1">
  <h3 className="text-lg md:text-xl font-extrabold text-black/90 uppercase mb-3 font-heading">
    {item.title}
  </h3>

  <p className="text-sm leading-7 text-gray-600 mb-5">
    {item.desc}
  </p>

  <Link
    href={`/services/${item.slug}`}
    className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold uppercase text-[#c9121f] hover:text-[#1a0a09] transition font-heading tracking-wider group/link"
  >
    Read More <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
  </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10 pb-20">
        <div className="relative overflow-hidden bg-[#1a0a09] px-7 py-10 md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between rounded-2xl">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold italic uppercase leading-tight font-heading">
              Emergency <br /> Recovery
            </h2>

            <p className="mt-5 max-w-120 text-sm md:text-base text-white/80 leading-7">
              Have any questions or need immediate technical consultation for
              your fleet?
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 lg:mt-0 inline-flex w-full sm:w-auto justify-center bg-white text-[#c9121f] px-10 py-4 text-xs font-extrabold uppercase rounded-md hover:bg-[#c9121f] hover:text-white transition-all duration-300 font-heading tracking-wider"
          >
            Contact Now
          </Link>

          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rotate-45 rounded-lg" />
          <div className="absolute -right-5 -top-5 w-24 h-24 bg-[#c9121f]/10 rotate-45 rounded-lg" />
        </div>
      </section>
    </main>
  );
}