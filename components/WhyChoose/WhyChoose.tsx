import {
  ShieldCheck,
  Droplets,
  Leaf,
  Globe,
} from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-blue-700 font-bold text-sm">
            WHY HI SPRING
          </p>

          <h2 className="mt-6 text-5xl font-black text-black">
            More Than Water.
            <br />
            A Better Way to Hydrate.
          </h2>

          <p className="mt-8 text-xl text-gray-700 leading-9">
            Hi Spring combines premium natural mineral water,
            innovative Non-PVC pouch packaging, and internationally
            recognized manufacturing standards to deliver a smarter,
            safer, and more sustainable drinking experience.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
              <ShieldCheck size={42} className="text-blue-700" />
            </div>

            <h3 className="mt-8 text-2xl font-extrabold text-blue-700">
              Certified Quality
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Produced under internationally recognized quality
              and food safety standards to ensure consistent
              excellence in every pouch.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <Leaf size={42} className="text-green-600" />
            </div>

            <h3 className="mt-8 text-2xl font-extrabold text-green-600">
              Eco-Friendly
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Innovative Non-PVC pouch packaging helps reduce
              material usage while supporting a cleaner future.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto rounded-full bg-cyan-100 flex items-center justify-center">
              <Droplets size={42} className="text-cyan-600" />
            </div>

            <h3 className="mt-8 text-2xl font-extrabold text-cyan-600">
              Pure Water
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Carefully processed and quality-tested to deliver
              refreshing, safe, and premium drinking water.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
              <Globe size={42} className="text-indigo-600" />
            </div>

            <h3 className="mt-8 text-2xl font-extrabold text-indigo-600">
              Export Ready
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Designed to serve wholesalers, institutions,
              humanitarian organizations, and international markets.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}