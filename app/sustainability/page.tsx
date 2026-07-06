import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 to-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Sustainability
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Building A Better Future
              <span className="text-blue-700">
                {" "}
                Through Responsible Growth
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              At Hi Spring, we strive to operate responsibly by maintaining
              efficient manufacturing practices, delivering safe drinking
              water, and supporting the communities we serve.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Gallery/rurals.png"
              alt="Community Support"
              width={650}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Commitment */}

      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Our Commitment
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
              Sustainability Starts With Responsibility
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600 max-w-4xl mx-auto">
              We continuously work to improve our production processes while
              maintaining high standards of quality, hygiene and operational
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}

      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-[35px] bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-black text-blue-700">
                Responsible Manufacturing
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                Modern production practices help us maintain efficient
                operations while consistently delivering high-quality drinking
                water.
              </p>
            </div>

            <div className="rounded-[35px] bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-black text-blue-700">
                Water Quality
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                Our purification and quality monitoring processes help ensure
                safe, reliable drinking water for our customers.
              </p>
            </div>

            <div className="rounded-[35px] bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-black text-blue-700">
                Community Impact
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                We are proud to contribute to communities by providing
                dependable access to quality drinking water.
              </p>
            </div>

            <div className="rounded-[35px] bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-black text-blue-700">
                Continuous Improvement
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                We remain committed to improving our facilities, technologies
                and customer service as we continue to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <Image
            src="/images/Gallery/rurals 2.png"
            alt="Community"
            width={650}
            height={700}
            className="rounded-[35px] shadow-xl object-cover"
          />

          <div>
            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Community
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
              Supporting The Communities We Serve
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Access to clean drinking water plays an important role in everyday
              life. Hi Spring is proud to serve homes, businesses and
              communities throughout Ethiopia with dependable bottled drinking
              water.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28 bg-blue-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white">
            Together We Can Build A Healthier Future
          </h2>

          <p className="mt-8 text-xl text-blue-100 leading-9">
            Learn more about Hi Spring or contact us to discuss partnerships,
            distribution opportunities and bulk supply.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <Link href="/contact">
              <Button variant="secondary">Contact Us</Button>
            </Link>

            <Link href="/about">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}