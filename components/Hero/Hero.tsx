import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="uppercase tracking-[0.3em] text-blue-700 font-bold mb-5">
            Hi Spring Natural Mineral Water
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

            Purified & Bottled
            <br />
            Natural Mineral Water
            <br />
            from Ethiopia

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-700">

            Hygienically purified using advanced Reverse Osmosis technology and
            bottled in our modern production facility to deliver safe,
            refreshing drinking water for homes, businesses, institutions and
            wholesale partners across Ethiopia.

          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm">
    <p className="font-bold text-blue-700">
      ✓ Advanced Reverse Osmosis Purification
    </p>
  </div>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm">
    <p className="font-bold text-blue-700">
      ✓ Hygienically Produced
    </p>
  </div>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm">
    <p className="font-bold text-blue-700">
      ✓ Ideal for Water Dispensers
    </p>
  </div>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm">
    <p className="font-bold text-blue-700">
      ✓ Reliable Bulk Supply
    </p>
  </div>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm sm:col-span-2">
    <p className="font-bold text-blue-700 text-center">
      ✓ Cost-Effective Daily Hydration
    </p>
  </div>

</div>
          <div className="mt-12 flex flex-wrap gap-5">

            <Link href="/contact">
              <Button>
                Request Bulk Quote
              </Button>
            </Link>

            <Link href="/products">
              <Button variant="secondary">
                Explore Products
              </Button>
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <Image
  src="/images/Hero/hero.PNG"
  alt="Hi Spring Natural Mineral Water"
  width={620}
  height={900}
  priority
  className="w-full max-w-[560px] h-auto rounded-[40px] overflow-hidden object-contain shadow-2xl hover:scale-[1.02] transition-all duration-500"
/>

        </div>

      </div>

    </section>
  );
}