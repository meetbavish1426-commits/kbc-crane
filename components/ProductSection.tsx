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
      <div className="flex items-center gap-6 mb-10">
        <h2 className="text-[34px] font-extrabold uppercase">
          {title}
        </h2>

        <div className="flex-1 h-px bg-[#d9b7b3]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-10">
        {products.map((item) => (
          <Link
            key={item.slug}
            href={`/product/${item.slug}`}
            className="group text-center"
          >
            <div className="w-[130px] h-[105px] mx-auto border border-[#5b403f] rounded-[8px] bg-[#fff7f4] p-[6px]">
              <div className="w-full h-full overflow-hidden rounded-[4px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <p className="mt-3 text-[10px] font-bold uppercase">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}