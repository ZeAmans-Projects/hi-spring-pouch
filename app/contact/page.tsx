import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Globe,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Contact Hi Spring
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Let's Build
              <span className="text-blue-700">
                {" "}Something Great Together
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Whether you're interested in wholesale supply,
              distribution, export partnerships or simply want
              to learn more about Hi Spring, our team is ready
              to assist you.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="flex items-center gap-3">

                <Phone className="text-blue-700" />

                <span className="font-semibold">
                  +251 94 144 5446
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-blue-700" />

                <span className="font-semibold">
                  HiSpring.MGF@gmail.com
                </span>

              </div>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/Gallery/team 1.png"
              alt="Hi Spring Team"
              width={650}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

          </div>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* Address */}

            <div className="rounded-[30px] bg-slate-50 p-8 shadow-lg">

              <MapPin
                className="text-blue-700"
                size={34}
              />

              <h3 className="mt-6 text-2xl font-bold">

                Address

              </h3>

              <p className="mt-4 leading-8 text-gray-600">

                Addis Ababa,
                Ethiopia

                <br />

                MGF Industries PLC

              </p>

            </div>

            {/* Phone */}

            <div className="rounded-[30px] bg-slate-50 p-8 shadow-lg">

              <Phone
  className="text-blue-700"
  size={34}
/>

<h3 className="mt-6 text-2xl font-bold">
  Phone
</h3>

<p className="mt-4 leading-8 text-gray-600">
  +251 (095) 465 5555
  <br />
  +251 (095) 435 5555
</p>

            </div>

            {/* Email */}

            <div className="rounded-[30px] bg-slate-50 p-8 shadow-lg">

              <Mail
                className="text-blue-700"
                size={34}
              />

              <h3 className="mt-6 text-2xl font-bold">

                Email

              </h3>

              <p className="mt-4 break-all leading-8 text-gray-600">

                HiSpring.info@gmail.com

              </p>

            </div>

            {/* Business */}

            <div className="rounded-[30px] bg-slate-50 p-8 shadow-lg">

              <Building2
                className="text-blue-700"
                size={34}
              />

              <h3 className="mt-6 text-2xl font-bold">

                Business

              </h3>

              <p className="mt-4 leading-8 text-gray-600">

                Corporate Supply

                <br />

                Distributor Partnership

                <br />

                Export Inquiry

              </p>

            </div>

          </div>

        </div>

      </section>
                  {/* Contact Form */}

      <section className="py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Send an Inquiry
            </span>

            <h2 className="mt-8 text-5xl font-black text-gray-900">

              We'd Love
              <span className="text-blue-700">
                {" "}To Hear From You
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-700">

              Complete the form and our team will respond as
              quickly as possible regarding wholesale orders,
              partnerships, export opportunities or general
              inquiries.

            </p>

          </div>

          {/* Right */}

          <div className="bg-white rounded-[35px] border border-gray-200 shadow-2xl p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
              />

              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
              />

              <textarea
                rows={7}
                placeholder="Tell us how we can help..."
                className="w-full rounded-2xl border-2 border-gray-300 px-5 py-4 text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-200 transition-all resize-none"
              />

              <Button>

                Send Inquiry

              </Button>

            </form>

          </div>

        </div>

      </section>

            {/* Business Opportunities */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              Business Opportunities
            </span>

            <h2 className="mt-8 text-5xl font-black text-gray-900">

              Partner With Hi Spring

            </h2>

            <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-9">

              We work with organizations, distributors, institutions,
              humanitarian agencies and international partners to
              deliver premium drinking water wherever it is needed.

            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {/* Corporate Supply */}

            <div className="rounded-[35px] bg-slate-50 border border-gray-200 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <Building2
                className="text-blue-700"
                size={42}
              />

              <h3 className="mt-6 text-3xl font-black text-gray-900">

                Corporate Supply

              </h3>

              <p className="mt-5 leading-8 text-gray-700">

                Reliable drinking water solutions for offices,
                hotels, hospitals, schools, factories and
                government institutions across Ethiopia.

              </p>

            </div>

            {/* Distribution */}

            <div className="rounded-[35px] bg-slate-50 border border-gray-200 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <Globe
                className="text-blue-700"
                size={42}
              />

              <h3 className="mt-6 text-3xl font-black text-gray-900">

                Distributor Partnership

              </h3>

              <p className="mt-5 leading-8 text-gray-700">

                Join our growing distribution network and help
                bring Hi Spring's premium drinking water to
                communities throughout Ethiopia.

              </p>

            </div>

            {/* Export */}

            <div className="rounded-[35px] bg-slate-50 border border-gray-200 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <Globe
                className="text-blue-700"
                size={42}
              />

              <h3 className="mt-6 text-3xl font-black text-gray-900">

                Export Opportunities

              </h3>

              <p className="mt-5 leading-8 text-gray-700">

                We are expanding into international markets and
                welcome importers, wholesalers and long-term
                distribution partners worldwide.

              </p>

            </div>
            
        </div>
    </div>    
        </section>    

                
            {/* Business Hours & Location */}

<section className="py-28 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">

    {/* Business Hours */}

    <div className="bg-white rounded-[35px] border border-gray-200 p-10 shadow-xl">

      <div className="flex items-center gap-4">

        <Clock
          className="text-blue-700"
          size={40}
        />

        <h2 className="text-4xl font-black text-gray-900">
          Business Hours
        </h2>

      </div>

      <div className="mt-10 space-y-6">

        <div className="flex justify-between border-b border-gray-200 pb-4">

          <span className="font-semibold text-gray-900">
            Monday – Friday
          </span>

          <span className="text-gray-800 font-semibold">
            8:00 AM – 5:00 PM
          </span>

        </div>

        <div className="flex justify-between border-b border-gray-200 pb-4">

          <span className="font-semibold text-gray-900">
            Saturday
          </span>

          <span className="text-gray-800 font-semibold">
            8:00 AM – 12:00 PM
          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-semibold text-gray-900">
            Sunday
          </span>

          <span className="text-gray-800 font-semibold">
            Closed
          </span>

        </div>

      </div>

    </div>

    {/* Location */}

    <div className="bg-white rounded-[35px] border border-gray-200 p-10 shadow-xl">

      <div className="flex items-center gap-4">

        <MapPin
          className="text-blue-700"
          size={40}
        />

        <h2 className="text-4xl font-black text-gray-900">
          Our Location
        </h2>

      </div>

      <p className="mt-8 text-lg leading-9 text-gray-800 font-medium">

        Addis Ababa, Ethiopia

        <br />

        MGF Industries PLC

      </p>

      {/* Google Map Placeholder */}

      <div className="mt-10 h-[320px] rounded-[25px] bg-blue-100 flex items-center justify-center">

        <div className="text-center">

          <MapPin
            className="mx-auto text-blue-700"
            size={60}
          />

          <p className="mt-5 text-2xl font-bold text-blue-700">
            Google Map
          </p>

          <p className="mt-3 text-gray-800 font-medium">

            Replace this with your Google Maps embed

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Call To Action */}

      <section className="py-24 bg-blue-700 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black">

            Ready to Work With Hi Spring?

          </h2>

          <p className="mt-8 text-xl leading-9 text-blue-100">

            Whether you're looking for wholesale supply,
            institutional partnerships, distribution opportunities,
            or future export collaboration, our team is ready
            to assist you.

          </p>

          <div className="mt-10">

            <Button>

              Contact Our Team

            </Button>

          </div>

        </div>

      </section>
      

    </main>
  );
}