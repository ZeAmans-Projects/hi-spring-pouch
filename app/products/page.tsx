import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ProductsPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 to-white py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Our Products
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Premium Drinking Water
              <span className="text-blue-700">
                {" "}For Every Environment
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Hi Spring provides purified drinking water produced
              using advanced purification technology and hygienic
              manufacturing practices to ensure consistent quality
              and freshness.

            </p>

            <div className="mt-10">

              <Link href="/contact">
                <Button>
                  Request Bulk Quote
                </Button>
              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/Hero/hero.PNG"
              alt="Hi Spring 19L Bottle"
              width={500}
              height={800}
              className="rounded-[35px] shadow-2xl object-contain"
              priority
            />

          </div>

        </div>

      </section>

      {/* Product Section */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div className="flex justify-center">

            <Image
              src="/images/Hero/hero.PNG"
              alt="19L Bottled Water"
              width={450}
              height={700}
              className="rounded-[35px] shadow-xl object-contain"
            />

          </div>

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

              Flagship Product

            </span>

            <h2 className="mt-8 text-5xl font-black text-gray-900">

              19L Bottled
              <span className="text-blue-700">
                {" "}Drinking Water
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Designed for homes, offices, hotels, hospitals,
              educational institutions and commercial facilities,
              our 19-litre bottled water provides a reliable
              hydration solution for daily use.

            </p>

          </div>

        </div>

      </section>
      {/* Technical Specifications */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center">

      <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
        Technical Specifications
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">

        Product Specifications

      </h2>

    </div>

    <div className="mt-16 overflow-hidden rounded-[30px] shadow-lg">

      <table className="w-full">

        <tbody>

          {[
            ["Product Name", "Hi Spring Natural Mineral Water"],
            ["Capacity", "19 Litres"],
            ["Water Type", "Purified Drinking Water"],
            ["Bottle Type", "Reusable Polycarbonate Bottle"],
            ["Usage", "Water Dispensers"],
            ["Target Customers", "Homes, Offices, Hotels, Schools, Hospitals"],
            ["Manufacturer", "MGF Industries PLC"],
            ["Country of Origin", "Ethiopia"],
          ].map(([title, value]) => (

            <tr
              key={title}
              className="border-b border-gray-200 bg-white"
            >

              <td className="font-bold text-blue-700 p-6 w-1/3">

                {title}

              </td>

              <td className="text-gray-700 p-6">

                {value}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</section>
{/* Key Features */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="text-center">

<h2 className="text-5xl font-black text-gray-900">

Why Customers Choose Hi Spring

</h2>

</div>

<div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
"Advanced Reverse Osmosis Purification",
"Hygienic Manufacturing",
"Laboratory Tested Quality",
"Suitable For Water Dispensers",
"Reliable Bulk Supply",
"Refreshing Taste"
].map((feature)=>(

<div
key={feature}
className="rounded-[30px] bg-slate-50 p-10 shadow-lg"
>

<h3 className="text-2xl font-bold text-blue-700">

{feature}

</h3>

</div>

))}

</div>

</div>

</section>
{/* Applications */}

<section className="py-28 bg-slate-50">

<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="text-center">

<h2 className="text-5xl font-black text-gray-900">

Ideal Applications

</h2>

</div>

<div className="mt-16 grid md:grid-cols-3 gap-8">

{[
"Offices",
"Homes",
"Hotels",
"Hospitals",
"Schools",
"Retail Stores"
].map((place)=>(

<div
key={place}
className="rounded-[30px] bg-white p-10 shadow-lg text-center"
>

<h3 className="text-2xl font-bold text-blue-700">

{place}

</h3>

</div>

))}

</div>

</div>

</section>
{/* Packaging */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>

<Image
src="/images/Gallery/loading.PNG"
alt="Packaging"
width={700}
height={500}
className="rounded-[35px] shadow-xl"
/>

</div>

<div>

<h2 className="text-5xl font-black text-gray-900">

Packaging &
<span className="text-blue-700">
{" "}Distribution
</span>

</h2>

<p className="mt-8 text-lg leading-9 text-gray-600">

Every bottle is securely packaged, stored and transported
using hygienic handling procedures to ensure freshness
until it reaches our customers.

</p>

</div>

</div>

</div>

</section>
{/* FAQ */}

<section className="py-28 bg-slate-50">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-center text-5xl font-black text-gray-900">

Frequently Asked Questions

</h2>

<div className="mt-16 space-y-8">

<div className="bg-white rounded-[25px] p-8 shadow-lg">

<h3 className="text-2xl font-bold text-blue-700">

Is the bottle reusable?

</h3>

<p className="mt-4 text-gray-600">

Yes. Our 19L bottles are designed for repeated hygienic use.

</p>

</div>

<div className="bg-white rounded-[25px] p-8 shadow-lg">

<h3 className="text-2xl font-bold text-blue-700">

Do you supply businesses?

</h3>

<p className="mt-4 text-gray-600">

Yes. We supply offices, hotels, hospitals, schools and commercial customers throughout Ethiopia.

</p>

</div>

<div className="bg-white rounded-[25px] p-8 shadow-lg">

<h3 className="text-2xl font-bold text-blue-700">

Can I request bulk orders?

</h3>

<p className="mt-4 text-gray-600">

Absolutely. Contact our sales team for bulk supply and distribution inquiries.

</p>

</div>

</div>

</div>

</section>
{/* CTA */}

<section className="py-28 bg-blue-700">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-5xl font-black text-white">

Need Bulk Drinking Water?

</h2>

<p className="mt-8 text-xl text-blue-100 leading-9">

Partner with Hi Spring for dependable, high-quality bottled
drinking water for your business, institution or organization.

</p>

<div className="mt-12">

<Link href="/contact">

<Button variant="secondary">

Request a Quote

</Button>

</Link>

</div>

</div>

</section>

    </main>
  );
}