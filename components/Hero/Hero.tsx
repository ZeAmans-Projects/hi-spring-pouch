import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-700 font-semibold uppercase tracking-widest mb-4">
            Hi Spring
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Purified Natural Mineral Water from the Highlands of Ethiopia
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Safe, eco-friendly drinking water packaged in innovative Non-PVC
            Soft Bag Pouches for homes, businesses, institutions and export
            markets.
          </p>

          <div className="mt-10 flex gap-4">
  <Link href="/contact">
    <Button>Request a Quote</Button>
  </Link>

  <Link href="/about">
    <Button variant="secondary">
      Learn More
    </Button>
  </Link>
</div>
        </div>

        <div className="flex justify-center">
  <Image
    src="/images/hero/hero.png"
    alt="Hi Spring Natural Mineral Water"
    width={500}
    height={650}
    priority
    className="rounded-3xl drop-shadow-2xl"
  />
</div>

      </div>
    </section>
  );
}