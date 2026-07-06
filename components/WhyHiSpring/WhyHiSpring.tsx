import {
  Droplets,
  ShieldCheck,
  Truck,
  Leaf,
  BadgeCheck,
  Building2,
} from "lucide-react";

export default function WhyHiSpring() {
  const features = [
    {
      icon: Droplets,
      title: "Pure Drinking Water",
      text: "Advanced Reverse Osmosis purification for clean, refreshing water every day.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Production",
      text: "Manufactured in a controlled environment using strict hygiene practices.",
    },
    {
      icon: Truck,
      title: "Reliable Distribution",
      text: "Consistent delivery to homes, offices, institutions and distributors.",
    },
    {
      icon: Leaf,
      title: "Environmentally Responsible",
      text: "Committed to sustainable operations and responsible resource management.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Focused",
      text: "Every production stage is monitored to maintain consistent product quality.",
    },
    {
      icon: Building2,
      title: "Trusted Business Partner",
      text: "Serving households, businesses and organizations across Ethiopia.",
    },
  ];

  return (
    <section className="py-28 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-white text-blue-700 px-5 py-2 font-semibold shadow">
            Why Choose Hi Spring
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            More Than Water.
            <span className="text-blue-700"> A Better Choice.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-9">
            We combine modern purification technology, dependable manufacturing
            and customer-focused service to deliver drinking water you can trust.
          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 shadow-md border border-blue-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-700" size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-700">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {feature.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}