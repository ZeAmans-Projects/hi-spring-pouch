import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ExportPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 to-white py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              International Export
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Delivering Ethiopian
              <span className="text-blue-700"> Quality Worldwide</span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Hi Spring proudly supplies premium bottled drinking water
              beyond Ethiopia while continuously expanding our
              international distribution network.

            </p>

          </div>

          <Image
            src="/images/Gallery/loading.PNG"
            alt="Export Loading"
            width={700}
            height={750}
            className="rounded-[35px] shadow-2xl object-cover"
            priority
          />

        </div>

      </section>

      {/* Export Capabilities */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

              Export Capabilities

            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">

              Built For International Markets

            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-50 rounded-[30px] p-8">

              <h3 className="text-2xl font-black text-blue-700">

                Bulk Supply

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                Reliable large-volume production for international buyers.

              </p>

            </div>

            <div className="bg-slate-50 rounded-[30px] p-8">

              <h3 className="text-2xl font-black text-blue-700">

                Modern Production

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                Advanced purification and hygienic bottling processes.

              </p>

            </div>

            <div className="bg-slate-50 rounded-[30px] p-8">

              <h3 className="text-2xl font-black text-blue-700">

                Reliable Logistics

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                Organized storage, loading and transportation for export.

              </p>

            </div>

            <div className="bg-slate-50 rounded-[30px] p-8">

              <h3 className="text-2xl font-black text-blue-700">

                Long-Term Partnerships

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                Supporting distributors, wholesalers and international partners.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Global Expansion */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/Gallery/truck.PNG"
            alt="Transportation"
            width={700}
            height={750}
            className="rounded-[35px] shadow-xl object-cover"
          />

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

              Global Expansion

            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">

              Expanding Our International Reach

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              As demand for premium bottled drinking water continues
              to grow, Hi Spring is expanding its export network and
              building long-term partnerships across regional and
              international markets.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-blue-700">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-black text-white">

            Looking For An Export Partner?

          </h2>

          <p className="mt-8 text-xl text-blue-100 leading-9">

            Contact our export team to discuss distribution,
            wholesale supply and international business opportunities.

          </p>

          <div className="mt-12">

            <Link href="/contact">

              <Button variant="secondary">

                Contact Our Export Team

              </Button>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}