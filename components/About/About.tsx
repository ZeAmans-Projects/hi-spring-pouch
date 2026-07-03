import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative h-[550px]">

          <Image
            src="/images/about/MGF design.png"
            alt="MGF Industries PLC"
            width={500}
            height={550}
            className="rounded-3xl shadow-2xl"
          />

          <Image
            src="/images/about/design 2.png"
            alt="MGF Industries PLC Building"
            width={260}
            height={300}
            className="absolute bottom-0 right-0 rounded-2xl border-8 border-white shadow-xl"
          />

        </div>

        <div>

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            About MGF Industries PLC
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Manufacturing Safe, Innovative & Sustainable Hydration Solutions
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            MGF Industries PLC is an Ethiopian manufacturer committed to
            delivering high-quality purified natural mineral water through
            innovative, environmentally responsible packaging solutions.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Through the Hi Spring brand, we combine advanced manufacturing,
            international quality standards, and sustainable packaging to
            serve households, businesses, humanitarian organizations, and
            export markets across East Africa.
          </p>

          <div className="mt-10">
  <Link href="/about">
    <Button>Learn More About Us</Button>
  </Link>
</div>

        </div>

      </div>
    </section>
  );
}