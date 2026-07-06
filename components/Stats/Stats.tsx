export default function Stats() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-blue-700 font-bold mb-4">
            Trusted Manufacturing
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Clean Water. Modern Technology. Reliable Supply.
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Every bottle of Hi Spring is purified, hygienically processed,
            quality tested and packaged inside our modern production facility
            to ensure consistent freshness and safety.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-sm hover:shadow-xl transition">

            <h3 className="text-5xl font-extrabold text-blue-700">
              100%
            </h3>

            <p className="mt-4 text-xl font-semibold text-gray-900">
              Purified Water
            </p>

            <p className="mt-3 text-gray-600">
              Advanced Reverse Osmosis purification process.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 text-center border border-gray-200 hover:shadow-xl transition">

            <h3 className="text-5xl font-extrabold text-blue-700">
              19L
            </h3>

            <p className="mt-4 text-xl font-semibold text-gray-900">
              Bulk Bottle Size
            </p>

            <p className="mt-3 text-gray-600">
              Perfect for homes, offices, hotels and institutions.
            </p>

          </div>

          <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-sm hover:shadow-xl transition">

            <h3 className="text-5xl font-extrabold text-blue-700">
              24/7
            </h3>

            <p className="mt-4 text-xl font-semibold text-gray-900">
              Quality Monitoring
            </p>

            <p className="mt-3 text-gray-600">
              Continuous production monitoring and hygiene control.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 text-center border border-gray-200 hover:shadow-xl transition">

            <h3 className="text-5xl font-extrabold text-blue-700">
              B2B
            </h3>

            <p className="mt-4 text-xl font-semibold text-gray-900">
              Wholesale Supply
            </p>

            <p className="mt-3 text-gray-600">
              Reliable delivery for distributors and businesses.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}