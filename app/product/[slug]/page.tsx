import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductImageMotion from "./ProductImageMotion";
import {
  FaCog,
  FaMousePointer,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  

  return (
    <main className="bg-white text-[#111] overflow-hidden">
      <ProductImageMotion />
      {/* HERO */}
<section className="pt-16 sm:pt-20 pb-10 sm:pb-14 text-center"><div className="max-w-212.5 mx-auto px-4 sm:px-5">
  <div className="h-55 md:h-47.5 flex flex-col justify-center">
    
    <h1 className="text-[28px] sm:text-[36px] md:text-[44px] leading-tight font-extrabold text-[#e51b23]">
      {product.title}
    </h1>

    <div className="w-17.5 h-0.75 bg-[#e51b23] mx-auto my-5" />

    <p className="text-[13px] sm:text-[14px] leading-7 text-gray-600 max-w-180 mx-auto">
      {product.shortDesc}
    </p>

  </div>
</div>
 
<div className="max-w-295 mx-auto px-4 sm:px-5">
  <div className="w-full h-[240px] sm:h-[420px] md:h-[520px] lg:h-[650px] bg-white shadow-xl flex items-center justify-center overflow-hidden">
    <img
      src={product.image}
      alt={product.title}
      className="product-motion product-main-img w-full h-full object-contain p-3 sm:p-5"
    />
  </div>
</div>
      </section>

{/* FEATURES */}
<section className="bg-[#f5f6f8] py-12 sm:py-14">
  <div className="max-w-295 mx-auto px-5">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {[
        { icon: <FaCog />, title: "BEST MECHANICAL STRENGTH" },
        { icon: <FaMousePointer />, title: "EASY TO OPERATE" },
        { icon: <FaCheckCircle />, title: "HIGH QUALITY" },
        { icon: <FaChartLine />, title: "MARKET LEADING PRODUCT" },
      ].map((item) => (
        <div
          key={item.title}
          className="group bg-white rounded-xl p-4 sm:p-6 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="w-14.5 h-14.5 sm:w-16.5 sm:h-16.5 mx-auto rounded-full border-[3px] border-black flex items-center justify-center text-[20px] sm:text-[22px] group-hover:bg-[#e51b23] group-hover:text-white group-hover:border-[#e51b23] transition-all duration-300">
            {item.icon}
          </div>

          <p className="mt-4 text-[10px] sm:text-[11px] font-extrabold tracking-wide leading-4 text-black">
            {item.title}
          </p>
        </div>
      ))}
    </div>

    <div className="text-center mt-9">
      <a
        href="/contact"
        className="inline-flex items-center justify-center bg-[#e51b23] text-white text-[12px] font-bold px-10 py-4 min-w-47.5 hover:bg-black hover:-translate-y-1 transition-all duration-300"
      >
        CONTACT US
      </a>
    </div>
  </div>
</section>

      {/* DESCRIPTION */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-295 mx-auto px-4 sm:px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="relative pl-5 text-[24px] sm:text-[28px] leading-tight font-bold mb-6 sm:mb-8 before:absolute before:left-0 before:top-1 before:w-1.5 before:h-8 sm:before:h-8.75 before:bg-[#e51b23]">
              Product Description
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {product.description.map((text, index) => (
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
    src={product.descImage2}
    alt={product.title}
    className="product-motion product-desc-img w-full h-[230px] sm:h-[320px] lg:absolute lg:right-0 lg:top-0 lg:w-[78%] lg:h-[360px] object-cover shadow-xl"
  />

  <img
    src={product.descImage1}
    alt={`${product.title} component`}
    className="product-motion product-desc-img product-desc-img-delay w-full h-[210px] sm:h-[260px] lg:absolute lg:left-0 lg:top-[90px] lg:w-[62%] lg:h-[260px] object-cover bg-white shadow-[0_15px_40px_rgba(0,0,0,0.16)] p-2"
  />
</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f6f8] py-12 sm:py-16 text-center">
        <div className="max-w-190 mx-auto px-4 sm:px-5">
          <h2 className="text-[22px] sm:text-[26px] leading-tight font-extrabold tracking-wide">
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


