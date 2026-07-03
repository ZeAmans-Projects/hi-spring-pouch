import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Contact Hi Spring
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            We'd love to hear from wholesalers, retailers, institutional buyers,
            humanitarian organizations, and export partners.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16">

        {/* Contact Information */}
        <div>

          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Contact our team for wholesale orders, export inquiries,
            partnership opportunities, or general questions.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <h3 className="font-semibold text-lg">Company</h3>
              <p className="text-gray-600">
                MGF Industries PLC
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-600">
                Addis Ababa, Ethiopia
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">
                info@hispring.com
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Company"
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full border rounded-xl px-4 py-3"
            />

            <Button>Send Message</Button>

          </form>

        </div>

      </section>

    </main>
  );
}