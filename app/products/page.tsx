import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ProductsPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Hi Spring Products
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Premium purified natural mineral water packaged in innovative
            Non-PVC Soft Bag Pouches.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12">

        {/* 300ml */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

          <Image
            src="/images/hero/hero.png"
            alt="Hi Spring 300ml"
            width={300}
            height={420}
            className="mx-auto"
          />

          <h2 className="text-3xl font-bold mt-8">
            300 ml
          </h2>

          <p className="mt-4 text-gray-600">
            Compact, lightweight and convenient for schools,
            offices, events and daily hydration.
          </p>

          <div className="mt-8">
            <Button>Request a Quote</Button>
          </div>

        </div>

        {/* 500ml */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

          <Image
            src="/images/hero/hero.png"
            alt="Hi Spring 500ml"
            width={300}
            height={420}
            className="mx-auto"
          />

          <h2 className="text-3xl font-bold mt-8">
            500 ml
          </h2>

          <p className="mt-4 text-gray-600">
            Ideal for retailers, wholesalers, institutions,
            humanitarian organizations and export markets.
          </p>

          <div className="mt-8">
            <Button>Request a Quote</Button>
          </div>

        </div>

      </section>

    </main>
  );
}