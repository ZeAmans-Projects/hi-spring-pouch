import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section className="bg-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}

        <div className="flex justify-center">

          <Image
            src="/images/About/family.PNG"
            alt="Hi Spring Family"
            width={650}
            height={650}
            className="rounded-3xl shadow-2xl object-cover"
          />

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="uppercase tracking-[0.3em] text-blue-700 font-bold mb-4">
            About Hi Spring
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

            Refreshing Every Home,
            <br />
            Office & Community

          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-9">

            Hi Spring is the bottled drinking water brand of MGF Industries PLC,
            established to provide Ethiopian families and businesses with
            dependable, hygienically purified drinking water that meets the
            highest standards of safety and quality.

          </p>

          <p className="mt-6 text-lg text-gray-700 leading-9">

            Every bottle is processed through our advanced purification system,
            carefully monitored throughout production, and packaged in our
            modern manufacturing facility before reaching your home or business.

          </p>

          {/* FEATURES */}

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="font-bold text-blue-700 text-lg">
                Safe Drinking Water
              </h3>

              <p className="mt-2 text-gray-600">
                Consistently purified for everyday consumption.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="font-bold text-blue-700 text-lg">
                Modern Facility
              </h3>

              <p className="mt-2 text-gray-600">
                Clean production with advanced equipment.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="font-bold text-blue-700 text-lg">
                Reliable Supply
              </h3>

              <p className="mt-2 text-gray-600">
                Serving homes, offices and institutions.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="font-bold text-blue-700 text-lg">
                Trusted Quality
              </h3>

              <p className="mt-2 text-gray-600">
                Quality controlled from purification to packaging.
              </p>

            </div>

          </div>

          <div className="mt-12">

            <Link href="/about">
              <Button>
                Learn More About Us
              </Button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}