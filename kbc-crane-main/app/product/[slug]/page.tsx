import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductImageMotion from "./ProductImageMotion";
import FeatureSection from "./FeatureSection";
import Image from "next/image";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.shortDesc,
    keywords: [
      product.title,
      "Industrial Crane",
      "Crane Manufacturer",
      "Material Handling Equipment",
      "KBC Crane",
    ],

    openGraph: {
      title: product.title,
      description: product.shortDesc,
      images: [
        {
          url: product.image,
        },
      ],
    },

    alternates: {
      canonical: `https://kbccrane.com/product/${product.slug}`,
    },
  };
}

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
  <div className="w-full h-60 sm:h-105 md:h-130 lg:h-162.5 bg-white shadow-xl flex items-center justify-center overflow-hidden">
<Image
  src={product.image}
  alt={`${product.title} Crane`}
  width={1200}
  height={800}
  priority
  className="product-motion product-main-img w-full h-full object-contain p-3 sm:p-5"
/>
  </div>
</div>
      </section>

       <FeatureSection />
 

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

<div className="relative flex flex-col gap-4 lg:min-h-97.5">
  <div className="relative w-full h-57.5 sm:h-80 lg:absolute lg:right-0 lg:top-0 lg:w-[78%] lg:h-90">
    <Image
      src={product.descImage2}
      alt={`${product.title} Crane`}
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="product-motion product-desc-img object-cover shadow-xl"
    />
  </div>

  <div className="relative w-full h-52.5 sm:h-65 lg:absolute lg:left-0 lg:top-22.5 lg:w-[62%] lg:h-65">
    <Image
      src={product.descImage1}
      alt={`${product.title} Component`}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="product-motion product-desc-img product-desc-img-delay object-cover bg-white shadow-[0_15px_40px_rgba(0,0,0,0.16)] p-2"
    />
  </div>
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


