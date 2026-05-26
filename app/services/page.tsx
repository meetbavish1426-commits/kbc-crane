import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crane Services",
  description:
    "KBC Crane provides crane rental, heavy lifting, machinery shifting, industrial loading and construction lifting services.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-[#111827] text-white pt-28 px-6">
      <h1 className="text-4xl font-bold text-yellow-400">Our Services</h1>
      <p className="mt-4 text-gray-300">
        Crane rental, heavy lifting, machinery shifting and industrial support.
      </p>
    </main>
  );
}