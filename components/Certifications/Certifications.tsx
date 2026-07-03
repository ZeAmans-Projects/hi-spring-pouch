import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Certifications() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            TRUST & COMPLIANCE
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Certified to International Standards
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Hi Spring is manufactured under internationally recognized quality,
            food safety, and compliance systems to ensure every pouch meets the
            highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700">
              ISO 9001:2015
            </h3>

            <p className="mt-4 text-gray-600">
              Quality Management System
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700">
              ISO 22000
            </h3>

            <p className="mt-4 text-gray-600">
              Food Safety Management
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700">
              BRC Global Standard
            </h3>

            <p className="mt-4 text-gray-600">
              International manufacturing certification
            </p>
          </div>

        </div>

        <div className="text-center mt-12">
          <Link href="/certifications">
            <Button>View All Certifications</Button>
          </Link>
        </div>

      </div>
    </section>
  );
}