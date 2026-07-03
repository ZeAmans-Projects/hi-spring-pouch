export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-600 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">

          <div>
            <h2 className="text-6xl font-black">100%</h2>

            <p className="mt-4 text-blue-100 text-lg">
              Food Grade Packaging
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-black">ISO</h2>

            <p className="mt-4 text-blue-100 text-lg">
              International Standards
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-black">5+</h2>

            <p className="mt-4 text-blue-100 text-lg">
              Target Export Markets
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-black">24/7</h2>

            <p className="mt-4 text-blue-100 text-lg">
              Quality Commitment
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}