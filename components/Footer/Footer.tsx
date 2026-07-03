import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-black text-white">
            Hi Spring
          </h2>

          <p className="mt-6 leading-8">
            A brand of MGF Industries PLC committed to delivering
            premium drinking water through quality, innovation,
            and sustainable manufacturing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-3">

            <li><Link href="/">Home</Link></li>

            <li><Link href="/products">Products</Link></li>

            <li><Link href="/about">About Us</Link></li>

            <li><Link href="/contact">Contact</Link></li>

          </ul>
        </div>

        {/* Business */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Business
          </h3>

          <ul className="mt-6 space-y-3">

            <li><Link href="/export">Export</Link></li>

            <li><Link href="/sustainability">Sustainability</Link></li>

            <li><Link href="/certifications">Certifications</Link></li>

          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-bold text-white">
            Contact
          </h3>

          <div className="mt-6 space-y-3">

            <p>Addis Ababa, Ethiopia</p>

            <p>MGF Industries PLC</p>

            <p>info@hispring.com</p>

            <p>+251 XX XXX XXXX</p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 Hi Spring. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed by MGF Industries PLC
          </p>

        </div>

      </div>

    </footer>
  );
}