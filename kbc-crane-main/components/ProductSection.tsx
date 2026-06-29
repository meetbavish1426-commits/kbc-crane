import Link from "next/link";

interface Product {
  title: string;
  img: string;
  slug: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({
  title,
  products,
}: ProductSectionProps) {
  return (
    <section className="mt-16">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
  <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-extrabold uppercase font-heading">
    {title}
  </h2>

  <div className="flex-1 h-px bg-linear-to-r from-[#d9b7b3] to-transparent" />
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-6">
          {products.map((item) => (
          <Link
            key={item.slug}
            href={`/product/${item.slug}`}
            className="group text-center"
          >
            <div className="w-40 h-32.5 mx-auto border border-[#5b403f]/60 rounded-xl bg-white p-1.5 overflow-hidden shadow-sm transition-all duration-400 group-hover:shadow-xl group-hover:border-[#c9121f]/40 group-hover:-translate-y-2 relative">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#c9121f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl flex items-end justify-center pb-3">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider font-heading flex items-center gap-1">
                  View <span className="text-sm">→</span>
                </span>
              </div>
            </div>

            {/* <p className="mt-3 text-[10px] font-bold uppercase font-heading tracking-wide group-hover:text-[#c9121f] transition-colors duration-300">
              {item.title}
            </p> */}
            <p className="mt-3 text-[9px] sm:text-[10px] font-bold uppercase font-heading tracking-wide group-hover:text-[#c9121f] transition-colors duration-300 leading-tight px-1 wrap-break-word">
  {item.title}
</p>
          </Link>
        ))}
      </div>
    </section>
  );
}