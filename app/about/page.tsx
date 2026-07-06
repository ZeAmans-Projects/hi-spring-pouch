import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 to-white py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              About Hi Spring
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Purified Drinking Water
              <span className="text-blue-700">
                {" "}You Can Trust
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Hi Spring is a premium drinking water brand proudly
              manufactured by MGF Industries PLC. Our commitment
              is to provide safe, refreshing, high-quality drinking
              water through advanced purification technology,
              hygienic manufacturing and reliable nationwide
              distribution.

            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/Gallery/finished production.PNG"
              alt="About Hi Spring"
              width={550}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

          </div>

        </div>

      </section>

      {/* Company Story */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-4xl">

            <h2 className="text-5xl font-black text-gray-900">

              Our Story

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Hi Spring was created to meet Ethiopia's growing need
              for dependable, premium-quality drinking water.
              Backed by the manufacturing excellence of MGF
              Industries PLC, our facilities combine modern water
              purification systems, strict quality assurance and
              sustainable production practices.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              Every bottle reflects our dedication to purity,
              consistency and customer satisfaction, serving
              households, offices, hotels, hospitals, schools and
              industrial clients across Ethiopia.

            </p>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10">

          <div className="rounded-[35px] bg-white p-12 shadow-lg">

            <h3 className="text-3xl font-black text-blue-700">

              Our Mission

            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              To provide safe, refreshing and affordable drinking
              water through advanced purification technology,
              responsible manufacturing and exceptional customer
              service.

            </p>

          </div>

          <div className="rounded-[35px] bg-white p-12 shadow-lg">

            <h3 className="text-3xl font-black text-blue-700">

              Our Vision

            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              To become Ethiopia's most trusted drinking water
              brand while expanding into regional and international
              markets through innovation, quality and sustainability.

            </p>

          </div>

        </div>

      </section>
      {/* Why Choose Hi Spring */}

<section className="py-28 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
          Why Choose Hi Spring
        </span>

        <h2 className="mt-8 text-5xl font-black text-gray-900">

          Trusted Quality For
          <span className="text-blue-700">
            {" "}Every Drop
          </span>

        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">

          Hi Spring combines modern purification technology,
          hygienic manufacturing and reliable distribution to
          deliver premium drinking water throughout Ethiopia.

        </p>

        <div className="mt-10 space-y-6">

          <div className="rounded-3xl bg-white p-6 shadow-lg">

            <h3 className="text-2xl font-bold text-blue-700">
              Advanced Purification
            </h3>

            <p className="mt-3 text-gray-600 leading-8">

              Reverse Osmosis and modern treatment systems ensure
              safe, refreshing drinking water.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">

            <h3 className="text-2xl font-bold text-blue-700">
              Strict Quality Control
            </h3>

            <p className="mt-3 text-gray-600 leading-8">

              Every production batch undergoes laboratory testing
              and continuous quality monitoring.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">

            <h3 className="text-2xl font-bold text-blue-700">
              Reliable Distribution
            </h3>

            <p className="mt-3 text-gray-600 leading-8">

              Our logistics network ensures timely delivery to
              homes, businesses and institutions.

            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex justify-center">

        <Image
          src="/images/Factory/factory.PNG"
          alt="Hi Spring Factory"
          width={650}
          height={800}
          className="rounded-[35px] shadow-2xl object-cover"
        />

      </div>

    </div>

  </div>

</section>


          {/* Explore More */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Learn More
            </span>

            <h2 className="mt-8 text-5xl font-black text-gray-900">

              Explore More About Hi Spring

            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-600 max-w-3xl mx-auto">

              Discover our commitment to sustainability,
              quality standards and international business
              as we continue delivering premium drinking
              water across Ethiopia and beyond.

            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {/* Sustainability */}

            <Link href="/sustainability">

              <div className="h-full rounded-[35px] bg-slate-50 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div className="text-5xl">
                  🌱
                </div>

                <h3 className="mt-6 text-3xl font-black text-blue-700">

                  Sustainability

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Learn how Hi Spring protects natural
                  resources through responsible manufacturing,
                  efficient production and environmentally
                  conscious operations.

                </p>

              </div>

            </Link>

            {/* Certifications */}

            <Link href="/certifications">

              <div className="h-full rounded-[35px] bg-slate-50 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div className="text-5xl">
                  📜
                </div>

                <h3 className="mt-6 text-3xl font-black text-blue-700">

                  Certifications

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Discover our commitment to quality,
                  hygienic manufacturing and continuous
                  improvement.

                </p>

              </div>

            </Link>

            {/* Export */}

            <Link href="/export">

              <div className="h-full rounded-[35px] bg-slate-50 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div className="text-5xl">
                  🌍
                </div>

                <h3 className="mt-6 text-3xl font-black text-blue-700">

                  Export

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Discover how Hi Spring serves international
                  markets through reliable supply,
                  modern production and trusted partnerships.

                </p>

              </div>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}