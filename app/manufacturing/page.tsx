import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ManufacturingPage() {
  return (
    <main>
  

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-blue-50 to-white py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Manufacturing Excellence
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Every Drop Begins
              <span className="text-blue-700">
                {" "}With Precision
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Hi Spring is produced in a modern manufacturing
              facility where advanced purification technology,
              hygienic production practices and continuous quality
              monitoring work together to deliver safe,
              refreshing drinking water every day.

            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/Factory/factory.PNG"
              alt="Hi Spring Factory"
              width={650}
              height={800}
              className="rounded-[35px] shadow-2xl object-cover"
              priority
            />

          </div>

        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Our Manufacturing Philosophy
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">

              Designed Around
              <span className="text-blue-700">
                {" "}Quality & Safety
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Every stage of production follows carefully controlled
              procedures to ensure purity, hygiene and consistency.
              From water treatment to packaging and distribution,
              every process is designed to deliver premium drinking
              water our customers can trust.

            </p>

          </div>

        </div>

      </section>

      {/* ================= WATER TREATMENT ================= */}

      <section className="py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <Image
              src="/images/Gallery/PROCESS1.PNG"
              alt="Water Treatment Process"
              width={700}
              height={500}
              className="rounded-[35px] shadow-xl"
            />

            <div>

              <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
                Water Treatment
              </span>

              <h2 className="mt-6 text-4xl font-black text-gray-900">

                Advanced Purification Technology

              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Our treatment system combines modern purification
                technologies to remove impurities while producing
                clean, refreshing drinking water suitable for
                everyday consumption.

              </p>

              <ul className="mt-10 space-y-5">

                <li className="rounded-2xl bg-white p-5 shadow-sm font-semibold text-blue-700">
                  ✔ Multi-stage Filtration
                </li>

                <li className="rounded-2xl bg-white p-5 shadow-sm font-semibold text-blue-700">
                  ✔ Reverse Osmosis Purification
                </li>

                <li className="rounded-2xl bg-white p-5 shadow-sm font-semibold text-blue-700">
                  ✔ Continuous Water Quality Monitoring
                </li>

                <li className="rounded-2xl bg-white p-5 shadow-sm font-semibold text-blue-700">
                  ✔ Hygienic Processing Standards
                </li>

              </ul>

            </div>

          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
                Reverse Osmosis
              </span>

              <h2 className="mt-6 text-4xl font-black text-gray-900">

                Precision Water Purification

              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Reverse Osmosis is one of the key stages in our
                purification process, helping produce consistently
                high-quality drinking water while maintaining
                freshness and clarity.

              </p>

            </div>

            <Image
              src="/images/Gallery/PROCESS2.PNG"
              alt="Reverse Osmosis"
              width={700}
              height={500}
              className="rounded-[35px] shadow-xl"
            />

          </div>

        </div>

      </section>
            {/* ================= QUALITY CONTROL ================= */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
                Quality Control Laboratory
              </span>

              <h2 className="mt-6 text-5xl font-black text-gray-900">

                Every Batch Is
                <span className="text-blue-700">
                  {" "}Carefully Tested
                </span>

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Quality assurance is integrated throughout our
                manufacturing process. Our laboratory performs
                routine testing and continuous monitoring to verify
                that every production batch meets our internal
                quality standards before distribution.

              </p>

            </div>

            <Image
              src="/images/Gallery/qc lab.PNG"
              alt="Quality Control Laboratory"
              width={700}
              height={500}
              className="rounded-[35px] shadow-xl object-cover"
            />

          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-20 items-center">

            <Image
              src="/images/Gallery/qc.PNG"
              alt="Quality Inspection"
              width={700}
              height={500}
              className="rounded-[35px] shadow-xl object-cover"
            />

            <div>

              <h2 className="text-4xl font-black text-gray-900">

                Continuous Quality Monitoring

              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                From raw water through final packaging, multiple
                inspections help ensure consistency, hygiene and
                product reliability.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FILLING & PACKAGING ================= */}

      <section className="py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Automated Production
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">

              Filling, Sanitization &
              <span className="text-blue-700">
                {" "}Packaging
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Our automated production line is designed to maximize
              hygiene, efficiency and consistency throughout the
              bottling process.

            </p>

          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-10">

            <div className="rounded-[35px] overflow-hidden bg-white shadow-xl">

              <Image
                src="/images/Gallery/automatic filling line.PNG"
                alt="Automatic Filling Line"
                width={900}
                height={600}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-blue-700">

                  Automatic Filling

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Precision filling equipment ensures every bottle
                  is filled efficiently while maintaining strict
                  hygienic standards.

                </p>

              </div>

            </div>

            <div className="rounded-[35px] overflow-hidden bg-white shadow-xl">

              <Image
                src="/images/Gallery/production line.PNG"
                alt="Production Line"
                width={900}
                height={600}
                className="w-full h-72 object-contain bg-white"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-blue-700">

                  Production Line

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Every stage of production is carefully controlled
                  to deliver reliable product quality.

                </p>

              </div>

            </div>

            <div className="rounded-[35px] overflow-hidden bg-white shadow-xl">

              <Image
                src="/images/Gallery/sanitization.PNG"
                alt="Bottle Sanitization"
                width={900}
                height={600}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-blue-700">

                  Sanitization

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Bottles are thoroughly sanitized before filling to
                  maintain product safety and hygiene.

                </p>

              </div>

            </div>

            <div className="rounded-[35px] overflow-hidden bg-white shadow-xl">

              <Image
                src="/images/Gallery/clean and sanitized bottles.PNG"
                alt="Clean Bottles"
                width={900}
                height={600}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-blue-700">

                  Ready For Filling

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Sanitized bottles proceed directly to the filling
                  stage under controlled manufacturing conditions.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STORAGE & DISTRIBUTION ================= */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <Image
              src="/images/Gallery/storage.PNG"
              alt="Warehouse"
              width={700}
              height={500}
              className="rounded-[35px] shadow-xl object-cover"
            />

            <div>

              <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
                Storage & Distribution
              </span>

              <h2 className="mt-6 text-5xl font-black text-gray-900">

                Ready For Delivery

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Finished products are stored in an organized
                warehouse before being prepared for safe
                transportation and timely delivery across Ethiopia.

              </p>

            </div>

          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">

            <Image
              src="/images/Gallery/loading.PNG"
              alt="Loading"
              width={600}
              height={450}
              className="rounded-[30px] shadow-lg object-cover w-full h-72"
            />

            <Image
              src="/images/Gallery/truck.PNG"
              alt="Transportation"
              width={600}
              height={450}
              className="rounded-[30px] shadow-lg object-cover w-full h-72"
            />

            <Image
              src="/images/Gallery/delivered.PNG"
              alt="Delivery"
              width={600}
              height={450}
              className="rounded-[30px] shadow-lg object-cover w-full h-72"
            />

          </div>

        </div>

      </section>
            {/* ================= MANUFACTURING HIGHLIGHTS ================= */}

      <section className="py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Manufacturing Highlights
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">

              Why Our Production Process
              <span className="text-blue-700"> Stands Out</span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Every stage of production is built around quality,
              consistency and customer satisfaction.

            </p>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Advanced Purification",
                text: "Modern water treatment technologies produce consistently clean and refreshing drinking water.",
              },
              {
                title: "Reverse Osmosis",
                text: "Multi-stage purification improves water quality before bottling.",
              },
              {
                title: "Quality Laboratory",
                text: "Continuous laboratory testing verifies quality throughout production.",
              },
              {
                title: "Automated Filling",
                text: "Modern production equipment improves efficiency and consistency.",
              },
              {
                title: "Hygienic Packaging",
                text: "Every bottle is handled under carefully controlled production conditions.",
              },
              {
                title: "Reliable Distribution",
                text: "Finished products are securely stored and delivered across Ethiopia.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[30px] bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <h3 className="text-2xl font-black text-blue-700">

                  {item.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="py-28 bg-blue-700">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="inline-flex rounded-full bg-white/20 text-white px-5 py-2 font-semibold">

            Partner With Hi Spring

          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black text-white">

            Looking For A Reliable
            <br />
            Drinking Water Supplier?

          </h2>

          <p className="mt-8 text-xl leading-9 text-blue-100">

            Whether you are a distributor, hotel, office,
            hospital, school or retailer, Hi Spring provides
            dependable bottled drinking water backed by
            modern manufacturing and reliable delivery.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link href="/contact">

              <Button variant="secondary">

                Request a Quote

              </Button>

            </Link>

            <Link href="/gallery">

              <Button>

                View Our Gallery

              </Button>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}