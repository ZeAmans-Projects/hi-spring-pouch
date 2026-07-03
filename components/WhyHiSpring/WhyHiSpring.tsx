export default function WhyHiSpring() {
  const features = [
    {
      title: "Eco-Friendly Packaging",
      description:
        "Innovative Non-PVC Soft Bag Pouches that reduce plastic usage and are highly recyclable.",
    },
    {
      title: "Premium Water Quality",
      description:
        "Purified natural mineral water sourced from the Ethiopian Highlands under strict quality standards.",
    },
    {
      title: "Affordable Value",
      description:
        'A smarter choice for families and businesses — "Pay Less, Get More."',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Hi Spring?
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hi Spring combines premium drinking water with innovative,
            environmentally responsible packaging to deliver a safer,
            smarter, and more sustainable hydration experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}