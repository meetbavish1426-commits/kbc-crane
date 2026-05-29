"use client";
import Link from "next/link";
import ProductSection from "@/components/ProductSection";
import { motion } from "framer-motion";


const cranes = [
  { title: "SINGLE GIRDER EOT CRANE", img: "/assets/single-girder-EOT-crane.webp", slug: "eot-crane" },
  { title: "DOUBLE GIRDER EOT CRANE", img: "/assets/double-girder-crane.webp", slug: "double-girder-crane" },
  { title: "JIB CRANE", img: "/assets/jib-crane01.webp", slug: "jib-crane" },
  { title: "GANTRY / GOLIATH CRANE", img: "/assets/goliath-crane.webp", slug: "goliath-crane" },
  { title: "LIGHT CRANE SYSTEM", img: "/assets/light-crane-system.jpeg", slug: "light-crane" },
  { title: "SEMI GANTRY CRANE", img: "/assets/semi-gantry-crane.webp", slug: "semi-gantry-crane" },
  { title: "UNDERSLUNG CRANE", img: "/assets/underslung-crane.jpeg", slug: "underslung-crane" },
];
const hoists = [
  { title: "ELECTRIC CHAIN HOIST", img: "/assets/electric-chain-hoist02.jpg", slug: "electric-chain-hoist" },
  { title: "ELECTRIC WIRE ROPE HOIST", img: "/assets/electric-wire-rope.jpeg", slug: "electric-wire-hoist" },
  { title: "HEAVY DUTY CRAB", img: "/assets/heavy-duty-crab.jpeg", slug: "heavy-duty-crab" },
  { title: "EXPLOSION PROOF HOIST", img: "/assets/explosion-proof-wire-rope-hoist.jpg", slug: "explosion-proof-hoist" },
  { title: "CURVATURE TYPE HOIST", img: "/assets/curvature-type-wire-rope-hoist02.jpeg", slug: "curvature-type-hoist" },
  { title: "HOIST FOR GOODS LIFT", img: "/assets/hoist-for-goods-lift.jpeg", slug: "hoist-for-goods-lift" },
];
const customize = [
  { title: "GRABBING CRANES", img: "/assets/crane-components.webp", slug: "grabbing-cranes" },
  { title: "STEEL PLANT CRANE", img: "/assets/crane-accessories.webp", slug: "steel-plant-crane" },
  { title: "HOT METAL CRANE", img: "/assets/crane-spare-parts.webp", slug: "hot-metal-crane" },
  { title: "POWER PLANT CRANE", img: "/assets/crane-control-systems.webp", slug: "power-plant-crane" },
  { title: "FOUNDRY APPLICATION CRANE", img: "/assets/crane-safety-equipment.webp", slug: "foundry-crane" },
  { title: "COIL HANDLING CRANE", img: "/assets/crane-maintenance-services.webp", slug: "coil-handling-crane" },
  { title: "BRIDGE CRANE", img: "/assets/crane-retrofitting-solutions.webp", slug: "bridge-crane" },
  { title: "CURVED CRANE", img: "/assets/crane-inspection-services.webp", slug: "curved-crane" },
  { title: "FLAME PROOF CRANE", img: "/assets/crane-training-programs.webp", slug: "flame-proof-crane" },
];
const components = [
  { title: "DSL SHROUDED BUSBAR", img: "/assets/crane-motors.webp", slug: "dsl-shrouded-busbar" },
  { title: "HEAVY DUTY BUSBAR", img: "/assets/crane-gearboxes.webp", slug: "heavy-duty-busbar" },
  { title: "FESTOON SYSTEM", img: "/assets/crane-brakes.webp", slug: "festoon-system" },
  { title: "WIRELESS RADIO REMOTE", img: "/assets/crane-wheels.webp", slug: "wireless-radio-remote" },
  { title: "CRANE LIMIT SWITCH", img: "/assets/crane-hooks.webp", slug: "crane-limit-switch" },
  { title: "BRAKER", img: "/assets/crane-control-panels.webp", slug: "braker" },
  { title: "CABLE & CABLE TROLLY", img: "/assets/crane-sensors.webp", slug: "cable-trolley" },
  { title: "PENDANT STATION", img: "/assets/crane-limit-switches.webp", slug: "pendant-station" },
  { title: "RUBBER & SPRING BUFFER", img: "/assets/crane-cables.webp", slug: "rubber-spring" },
  { title: "ANTI COLLISION DRIVER", img: "/assets/crane-pendants.webp", slug: "anti-collision-driver" },
  { title: "RAIL CLAMPS", img: "/assets/crane-remote-controls.webp", slug: "rail-clamps" },
  { title: "WIRE ROPE", img: "/assets/crane-safety-devices.webp", slug: "wire-rope" }
];


export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fdf5f3] text-[#160d0d]">
      {/* PAGE BODY */}
      <section className="pt-6 lg:pt-8">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 xl:px-12 py-12">
          {/* HERO CARD */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#cdb9b5] bg-white overflow-hidden min-h-[430px] shadow-sm">
            {/* LEFT CONTENT */}
 <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 flex flex-col justify-center min-w-0">
  <p className="text-[8px] sm:text-[9px] tracking-[0.24em] sm:tracking-[0.32em] uppercase font-extrabold text-[#c00018] mb-4">
    Industrial Catalog 2024
  </p>

  <h2 className="text-[34px] min-[390px]:text-[38px] sm:text-[46px] md:text-[54px] lg:text-[50px] xl:text-[58px] leading-[0.98] font-extrabold uppercase tracking-[-0.04em] mb-6 break-words">
    Heavy Lifting
    <br />
    Solutions
  </h2>

  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] sm:leading-[28px] text-[#625251] max-w-[520px] mb-8">
    Precision-engineered crane components and lifting machinery designed for
    maximum durability and safety in the most demanding industrial environments.
  </p>

  <Link
    href="/contact"
    className="w-full sm:w-[205px] h-[54px] sm:h-[57px] bg-[#220f0f] text-white text-[12px] font-extrabold flex items-center justify-center hover:bg-[#c00018] transition"
  >
    REQUEST QUOTE
  </Link>
</div>

            {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, y: 80, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
  className="relative h-[260px] sm:h-[340px] lg:h-[430px] overflow-hidden bg-[#f8f8f8]"
>
  <motion.img
    src="/assets/mainproduct.png"
    alt="Heavy Lifting Solutions"
    className="w-full h-full object-contain lg:object-cover"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
</motion.div>
</div>
          {/* PRODUCT CATEGORIES */}
          <ProductSection title="Cranes" products={cranes} />

          <ProductSection
            title="Electric Hoists"
            products={hoists}
          />

          <ProductSection
            title="Customize Crane"
            products={customize}
          />

          <ProductSection
            title="Crane Components"
            products={components}
          />
        </div>
        
      </section>
    
    </main>
  );
}
