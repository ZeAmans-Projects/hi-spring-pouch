import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Building2,
  Hotel,
  School,
  Hospital,
  Store,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function WhyChoose() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* PRODUCT */}

          <div className="relative flex justify-center">

            <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            <Image
  src="/images/Hero/hero.PNG"
  alt="Hi Spring 19L Water"
  width={520}
  height={900}
  className="w-full max-w-[460px] h-auto rounded-[32px] object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500"
  priority
/>

          </div>

          {/* CONTENT */}

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

              Our Flagship Product

            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Premium
              <span className="text-blue-700">
                {" "}19L Bottled
              </span>

              <br />

              Drinking Water

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Designed for offices, hotels, factories, schools,
              hospitals and households, our 19L bottled drinking
              water provides a dependable hydration solution backed
              by modern purification technology and reliable
              distribution.

            </p>

            <div className="mt-10 space-y-4">

  {[
    "Advanced Reverse Osmosis Purification",
    "Hygienically Produced",
    "Ideal for Water Dispensers",
    "Reliable Bulk Supply",
    "Cost-Effective Daily Hydration",
  ].map((item) => (
    <div
      key={item}
      className="flex items-center gap-4 rounded-2xl bg-blue-50 border border-blue-200 px-5 py-4 shadow-sm hover:bg-blue-100 hover:shadow-md transition-all duration-300"
    >
      <CheckCircle2 className="text-blue-700 w-6 h-6 flex-shrink-0" />

      <span className="text-blue-800 font-bold text-lg">
        {item}
      </span>
    </div>
  ))}

</div>

            <div className="mt-12 flex gap-5">

              <Link href="/contact">
                <Button>
                  Request Bulk Quote
                </Button>
              </Link>

              <Link href="/products">
                <Button variant="secondary">
                  Product Details
                </Button>
              </Link>

            </div>

          </div>

        </div>

        {/* Industries */}

<div className="mt-28">

  <div className="text-center">

    <h3 className="text-4xl font-black text-gray-900">
      Perfect For Every Industry
    </h3>

    <p className="mt-5 text-lg text-gray-600">
      Trusted hydration solutions for every environment.
    </p>

  </div>

  <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

    <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8 text-center shadow-md hover:bg-blue-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <Building2 className="mx-auto text-blue-700" size={42} />

      <h4 className="mt-5 text-xl font-bold text-blue-700">
        Offices
      </h4>

    </div>

    <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8 text-center shadow-md hover:bg-blue-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <Hotel className="mx-auto text-blue-700" size={42} />

      <h4 className="mt-5 text-xl font-bold text-blue-700">
        Hotels
      </h4>

    </div>

    <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8 text-center shadow-md hover:bg-blue-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <School className="mx-auto text-blue-700" size={42} />

      <h4 className="mt-5 text-xl font-bold text-blue-700">
        Schools
      </h4>

    </div>

    <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8 text-center shadow-md hover:bg-blue-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <Hospital className="mx-auto text-blue-700" size={42} />

      <h4 className="mt-5 text-xl font-bold text-blue-700">
        Hospitals
      </h4>

    </div>

    <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8 text-center shadow-md hover:bg-blue-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <Store className="mx-auto text-blue-700" size={42} />

      <h4 className="mt-5 text-xl font-bold text-blue-700">
        Retail
      </h4>

    </div>

  </div>

</div>

      </div>

    </section>
  );
}