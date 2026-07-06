import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import About from "@/components/About/About";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Manufacturing from "@/components/Manufacturing/Manufacturing";
import WhyHiSpring from "@/components/WhyHiSpring/WhyHiSpring";
import CTA from "@/components/CTA/CTA";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Manufacturing />
      <WhyChoose />
      <WhyHiSpring />
      <CTA />
      <Gallery />
    {/* Core Values */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
        Our Values
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">

        What Drives Us

      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">

        Every bottle of Hi Spring reflects our commitment to quality,
        innovation, integrity and customer satisfaction.

      </p>

    </div>

    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="rounded-[30px] bg-slate-50 p-10 shadow-lg">

        <h3 className="text-2xl font-black text-blue-700">

          Quality

        </h3>

        <p className="mt-5 text-gray-600 leading-8">

          We maintain rigorous quality standards from purification
          to packaging.

        </p>

      </div>

      <div className="rounded-[30px] bg-slate-50 p-10 shadow-lg">

        <h3 className="text-2xl font-black text-blue-700">

          Innovation

        </h3>

        <p className="mt-5 text-gray-600 leading-8">

          We continuously improve our technology and processes to
          deliver better products.

        </p>

      </div>

      <div className="rounded-[30px] bg-slate-50 p-10 shadow-lg">

        <h3 className="text-2xl font-black text-blue-700">

          Sustainability

        </h3>

        <p className="mt-5 text-gray-600 leading-8">

          Responsible manufacturing and efficient use of resources
          guide every decision we make.

        </p>

      </div>

      <div className="rounded-[30px] bg-slate-50 p-10 shadow-lg">

        <h3 className="text-2xl font-black text-blue-700">

          Trust

        </h3>

        <p className="mt-5 text-gray-600 leading-8">

          Building long-term relationships through reliability,
          transparency and excellent service.

        </p>

      </div>

    </div>

  </div>

</section>
    </>
    
  );
}