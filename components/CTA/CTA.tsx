import Link from "next/link";
import Button from "@/components/ui/Button";
import { PhoneCall, Truck } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-700 to-blue-900">

      <div className="max-w-6xl mx-auto px-8">

        <div className="rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-12 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="uppercase tracking-[0.3em] text-blue-100 font-semibold">
                Corporate & Wholesale
              </p>

              <h2 className="mt-5 text-5xl font-black text-white leading-tight">
                Looking for a Reliable
                <br />
                Water Supply Partner?
              </h2>

              <p className="mt-8 text-xl text-blue-100 leading-9">

                Whether you manage an office, hotel, school,
                hospital, retail store or distribution network,
                Hi Spring provides dependable drinking water
                solutions backed by quality manufacturing and
                reliable delivery.

              </p>

            </div>

            <div className="flex flex-col gap-6">

              <Link href="/contact">

                <Button>
                  Request a Quote
                </Button>

              </Link>

              <Link href="/contact">

                <Button variant="secondary">
                  Become a Distributor
                </Button>

              </Link>

              <div className="flex items-center gap-4 text-white mt-6">

                <PhoneCall size={26} />

                <span className="text-lg">
                  Call our sales team
                </span>

              </div>

              <div className="flex items-center gap-4 text-white">

                <Truck size={26} />

                <span className="text-lg">
                  Bulk delivery across Ethiopia
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}