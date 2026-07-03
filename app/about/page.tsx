import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            About MGF Industries PLC
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Delivering innovative, sustainable, and high-quality hydration
            solutions for Ethiopia and international markets.
          </p>

        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <Image
            src="/images/about/MGF design.png"
            alt="MGF Industries PLC"
            width={600}
            height={500}
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Company Overview
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Building the Future of Sustainable Packaging
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            MGF Industries PLC is committed to producing premium purified
            natural mineral water using innovative Non-PVC Soft Bag
            Packaging that delivers affordability, safety and
            environmental responsibility.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our mission is to provide high-quality drinking water while
            reducing environmental impact through modern manufacturing
            technology and sustainable packaging.
          </p>

        </div>

      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-blue-700">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To become East Africa's leading provider of innovative,
              sustainable and trusted hydration solutions.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-blue-700">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Deliver safe drinking water through advanced technology,
              international quality standards and environmentally
              responsible packaging.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold">
          Partner with Hi Spring
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We welcome wholesalers, retailers, humanitarian organizations,
          institutions and export partners.
        </p>

        <div className="mt-10">
          <Button>Request Partnership</Button>
        </div>

      </section>

    </main>
  );
}