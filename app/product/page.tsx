import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | KBC Crane",
  description:
    "Explore KBC Crane fleet including hydra cranes, mobile cranes, tower cranes and EOT cranes for industrial lifting work.",
};

export default function Product() {
  return (
    <main className="min-h-screen bg-[#111827] text-white pt-28 px-6">
      <h1 className="text-4xl font-bold text-yellow-400">Our Products</h1>
      <p className="mt-4 text-gray-300">
        Hydra cranes, mobile cranes, tower cranes and EOT cranes.
      </p>
    </main>
  );
}