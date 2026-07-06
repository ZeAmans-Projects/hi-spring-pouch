import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CertificationsPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 to-white py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Certifications & Quality
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Quality You Can
              <span className="text-blue-700"> Trust</span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              At Hi Spring, every stage of production follows carefully
              controlled procedures designed to deliver safe, consistent
              and reliable drinking water.

            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/Gallery/qc lab.PNG"
              alt="Quality Laboratory"
              width={650}
              height={750}
              className="rounded-[35px] shadow-2xl object-cover"
              priority
            />

          </div>

        </div>

      </section>

      {/* Commitment */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">

            Our Commitment To Quality

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            We continuously monitor our production process and maintain
            strict hygiene standards throughout manufacturing to help
            ensure dependable product quality.

          </p>

        </div>

      </section>

      {/* Three Cards */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[30px] p-10 shadow-lg">

              <h3 className="text-2xl font-black text-blue-700">

                Quality Control

              </h3>

              <p className="mt-5 leading-8 text-gray-600">

                Continuous monitoring throughout production helps
                maintain consistent product quality.

              </p>

            </div>

            <div className="bg-white rounded-[30px] p-10 shadow-lg">

              <h3 className="text-2xl font-black text-blue-700">

                Hygienic Manufacturing

              </h3>

              <p className="mt-5 leading-8 text-gray-600">

                Production is carried out under hygienic conditions
                using modern equipment and controlled procedures.

              </p>

            </div>

            <div className="bg-white rounded-[30px] p-10 shadow-lg">

              <h3 className="text-2xl font-black text-blue-700">

                Continuous Improvement

              </h3>

              <p className="mt-5 leading-8 text-gray-600">

                We continually improve our operations and manufacturing
                practices to better serve our customers.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Future Certifications */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/Gallery/qc.PNG"
            alt="Quality Inspection"
            width={650}
            height={700}
            className="rounded-[35px] shadow-xl object-cover"
          />

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

              Future Certifications

            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">

              Growing With International Standards

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              As Hi Spring continues to grow, we remain committed to
              strengthening our quality systems and pursuing recognized
              industry standards where appropriate.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-blue-700">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-black text-white">

            Want To Learn More?

          </h2>

          <p className="mt-8 text-xl leading-9 text-blue-100">

            Contact our team to learn more about our manufacturing,
            quality assurance and production process.

          </p>

          <div className="mt-12">

            <Link href="/contact">

              <Button variant="secondary">

                Contact Us

              </Button>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}