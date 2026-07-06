import Image from "next/image";
import {
  Droplets,
  FlaskConical,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export default function Manufacturing() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
            Our Manufacturing Process
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-gray-900">
            Engineered For
            <span className="text-blue-700"> Purity.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every bottle of Hi Spring passes through a carefully controlled
            production process designed to ensure exceptional quality,
            hygiene, consistency and customer confidence.
          </p>

        </div>

        {/* ROW 1 */}

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/Factory/treatment.PNG"
            alt="Advanced Water Treatment"
            width={650}
            height={700}
            priority
            className="rounded-[35px] shadow-2xl hover:scale-[1.02] transition-all duration-500"
          />

          <div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <Droplets
                className="text-blue-700"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-4xl font-black text-gray-900">
              Advanced Water Treatment
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Our advanced purification system combines multiple treatment
              stages, including Reverse Osmosis technology, to remove
              impurities while delivering safe, refreshing drinking water
              with consistent quality.
            </p>

          </div>

        </div>

        {/* ROW 2 */}

        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <FlaskConical
                className="text-blue-700"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-4xl font-black text-gray-900">
              Continuous Quality Monitoring
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Every production stage is carefully monitored to ensure
              consistent purification, hygienic bottling and dependable
              product quality before every bottle reaches our customers.
            </p>

          </div>

          <Image
            src="/images/Factory/factory.PNG"
            alt="Hi Spring Manufacturing Facility"
            width={650}
            height={700}
            priority
            className="rounded-[35px] shadow-2xl hover:scale-[1.02] transition-all duration-500"
          />

        </div>

        {/* Bottom Cards */}

        <div className="mt-24 grid md:grid-cols-2 gap-8">

          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            <ShieldCheck
              className="text-blue-700"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold text-blue-700">
              Hygienic Manufacturing
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Our production environment follows strict hygiene practices,
              modern automation and continuous sanitation procedures to
              maximize product safety and consumer confidence.
            </p>

          </div>

          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            <PackageCheck
              className="text-blue-700"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold text-blue-700">
              Secure Packaging
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Every bottle is securely sealed, inspected and packaged to
              preserve freshness and ensure safe transportation throughout
              Ethiopia.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}