import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ExportPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Export & B2B Partnerships
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Delivering premium Ethiopian natural mineral water to businesses,
            institutions and international markets.
          </p>

        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-4xl font-bold">
            Your Trusted Supply Partner
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Hi Spring supplies purified natural mineral water in innovative
            Non-PVC Soft Bag Pouches for wholesalers, retailers,
            humanitarian organizations, hospitals, institutions and
            export distributors.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our production systems are designed for consistent quality,
            reliable supply and international market requirements.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button>Become a Partner</Button>
            </Link>
          </div>

        </div>

        <div>
          <Image
            src="/images/about/design 2.png"
            alt="MGF Industries PLC"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>

      </section>

      {/* Markets */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900">
  Markets We Serve
</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700">
                Domestic Market
              </h3>

              <p className="mt-4 text-gray-600">
                Addis Ababa and regional Ethiopian markets through wholesalers,
                retailers and institutional buyers.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700">
                Export Markets
              </h3>

              <p className="mt-4 text-gray-600">
                Eritrea, Djibouti, Somalia and South Sudan with scalable supply
                capabilities.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700">
                Humanitarian Supply
              </h3>

              <p className="mt-4 text-gray-600">
                NGOs, refugee programs, emergency response teams and relief
                organizations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold">
            Let's Grow Together
          </h2>

          <p className="mt-6 text-gray-600">
            Contact our sales team to discuss distribution,
            wholesale purchasing or export opportunities.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button>Request a Quote</Button>
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}