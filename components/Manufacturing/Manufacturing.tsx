import Image from "next/image";

export default function Manufacturing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Manufacturing Excellence
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Advanced Production for Safe Drinking Water
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Hi Spring is produced using modern purification and packaging
            technology designed to ensure safety, consistency, and product
            integrity throughout every stage of production.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our manufacturing process follows internationally recognized
            quality management systems to deliver purified natural mineral
            water that customers can trust.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/factory/machine.png"
            alt="Hi Spring Manufacturing"
            width={550}
            height={550}
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}