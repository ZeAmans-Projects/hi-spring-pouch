import Image from "next/image";

export default function GalleryPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-sky-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Gallery
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Explore Hi Spring, our facilities, products and commitment to quality.
          </p>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Image
            src="/images/about/MGF design.png"
            alt="MGF Building"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover w-full h-72"
          />

          <Image
            src="/images/about/design 2.png"
            alt="MGF Facility"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover w-full h-72"
          />

          <Image
            src="/images/hero/hero.png"
            alt="Hi Spring Product"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover w-full h-72"
          />

          <Image
            src="/images/Lifestyle/familyy.png"
            alt="Family"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover w-full h-72"
          />

          <Image
            src="/images/about/design 2.png"
            alt="About"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover w-full h-72"
          />

          <Image
            src="/images/hero/hero.png"
            alt="Hi Spring"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover w-full h-72"
          />

        </div>

      </section>

    </main>
  );
}