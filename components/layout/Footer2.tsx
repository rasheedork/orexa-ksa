import Link from "next/link";


import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  Globe,
  Share2,
  Users,
} from "lucide-react";
const services = [
  "Office Fit-Out",
  "Office Renovation",
  "Office Furniture",
  "Glass Partitions",
  "Gypsum Ceiling",
  "MEP Works",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08111f] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* CTA */}
        <div className="-mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

                  
      <div className="absolute inset-0 bg-slate-950/80" />

              <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                  Request for Quotation
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                   Looking for reliable engineering materials?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Send us your BOQ,Technical specifications, required quantities, delivery
                  location, and project timeline. Our team will review your
                  requirements and provide a suitable solution.
                </p>


                {/* RFQ Requirements */}
                <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">

                  {[
                    "BOQ / Item List",
                    "Technical Specifications",
                    "Required Quantities",
                    "Delivery Location",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >

                      <div className="flex items-center gap-3">

                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                          {index + 1}
                        </span>

                        <span className="text-sm font-medium text-white">
                          {item}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>
              </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-bold">
              OREXA
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Premium office fit-out, renovation,
              interior design and commercial workspace
              solutions across Saudi Arabia.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
              >
               <FaLinkedinIn size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <div className="space-y-4">

              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Products",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="flex items-center gap-2 text-gray-300 transition hover:text-cyan-400"
                >
                  <ArrowUpRight size={16} />
                  {item}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Services
            </h3>

            <div className="space-y-4">

              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block text-gray-300 transition hover:text-cyan-400"
                >
                  {service}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-4">
                <MapPin className="text-cyan-400" />
                <span>
                  Riyadh, Saudi Arabia
                </span>
              </div>

              <div className="flex gap-4">
                <Phone className="text-cyan-400" />
                <span>+966 54 306 2495</span>
              </div>

              <div className="flex gap-4">
                <Mail className="text-cyan-400" />
                <span>info@orexa.com</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-gray-400">
              © 2026 OREXA. All Rights Reserved.
            </p>

            <div className="flex gap-8 text-sm text-gray-400">

              <Link href="/privacy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}