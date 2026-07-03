import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Certifications() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-700 text-sm font-bold uppercase tracking-[0.35em]">
            TRUST & COMPLIANCE
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-black">
            Certified to International Standards
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-700 max-w-3xl mx-auto">
            Every Hi Spring pouch is manufactured under internationally
            recognized quality, food safety, and compliance systems.
            Our certifications reflect our commitment to delivering
            safe, reliable, and premium natural mineral water to
            consumers, businesses, institutions, and export partners.
          </p>

        </div>

        {/* Certification Cards */}
        <div className="grid gap-8 mt-20 md:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-blue-700">
              ISO 9001:2015
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              International Quality Management System ensuring
              consistent manufacturing excellence and customer
              satisfaction.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-blue-700">
              ISO 22000
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Food Safety Management System protecting product
              quality from source to consumer.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-blue-700">
              BRC Global Standard
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Globally recognized certification demonstrating
              compliance with rigorous food manufacturing standards.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <Link href="/certifications">
            <Button>
              View All Certifications
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}