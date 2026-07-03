import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold">
            Sustainability
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Better packaging. Lower environmental impact. Smarter hydration for everyone.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold">
            Water in a Pouch. A Better Choice.
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Hi Spring uses innovative Non-PVC Soft Bag Pouches that require
            less material than conventional rigid plastic bottles while
            remaining safe, durable and food-grade certified.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our goal is to reduce packaging waste while delivering
            affordable, high-quality drinking water across Ethiopia
            and neighboring export markets.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button>Partner With Us</Button>
            </Link>
          </div>
        </div>

        <div>
          <Image
  src="/images/Lifestyle/familyy.png"
  alt="Family enjoying Hi Spring Natural Mineral Water"
  width={900}
  height={600}
  className="w-full rounded-3xl shadow-2xl object-cover"
/>
        </div>
      </section>

      {/* Sustainability Highlights */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-700">
              Eco-Friendly
            </h3>

            <p className="mt-4 text-gray-600">
              Designed to reduce unnecessary plastic usage while maintaining product safety.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-700">
              Food-Grade Safe
            </h3>

            <p className="mt-4 text-gray-600">
              Manufactured using certified materials suitable for drinking water packaging.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-700">
              Future Focused
            </h3>

            <p className="mt-4 text-gray-600">
              Supporting a cleaner future through innovation and responsible manufacturing.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}