import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-4 gap-14">

        {/* Company */}

        <div>

          <Image
            src="/logos/logo.PNG"
            alt="Hi Spring Logo"
            width={170}
            height={70}
            className="mb-6"
          />

          <p className="leading-8 text-gray-400">

            Hi Spring is the premium bottled drinking water brand of
            MGF Industries PLC, delivering safe, hygienically purified
            drinking water for homes, businesses, institutions and
            distributors across Ethiopia.

          </p>

        </div>

        {/* Company Links */}

        <div>

          <h3 className="text-white text-xl font-bold mb-6">
            Company
          </h3>

          <ul className="space-y-4">

            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/manufacturing" className="hover:text-blue-400 transition">
                Manufacturing
              </Link>
            </li>

            <li>
              <Link href="/sustainability" className="hover:text-blue-400 transition">
                Sustainability
              </Link>
            </li>

            <li>
              <Link href="/certifications" className="hover:text-blue-400 transition">
                Certifications
              </Link>
            </li>

          </ul>

        </div>

        {/* Business */}

        <div>

          <h3 className="text-white text-xl font-bold mb-6">
            Business
          </h3>

          <ul className="space-y-4">

            <li>
              <Link href="/products" className="hover:text-blue-400 transition">
                Products
              </Link>
            </li>

            <li>
              <Link href="/export" className="hover:text-blue-400 transition">
                Export
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Get a Quote
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-white text-xl font-bold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-3">

              <MapPin className="text-blue-400 mt-1" size={20} />

              <p>Addis Ababa, Ethiopia</p>

            </div>

            <div className="flex items-start gap-3">

              <Mail className="text-blue-400 mt-1" size={20} />

              <p>HiSpring.info@gmail.com</p>

            </div>

            <div className="flex items-start gap-3">

              <Phone className="text-blue-400 mt-1" size={20} />

<p>
  +251 (095) 465 5555
  <br />
  +251 (095) 435 5555
</p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-8 py-7 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Hi Spring • MGF Industries PLC. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-4 md:mt-0">
            Purified & Bottled Drinking Water • Ethiopia
          </p>

        </div>

      </div>

    </footer>
  );
}