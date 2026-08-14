"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Package,
  Printer,
  Truck,
  Settings2,
  FileText,
  Boxes,
  Globe2,
} from "lucide-react";

const products = [
  {
    number: "01",
    title: "80mm Rolls",
    subtitle: "3 1/8 inch",
    description:
      "The most common POS receipt width for retail, supermarkets, restaurants, hospitality, and other high-volume point-of-sale applications.",
    image: "/images/products/thermal-paper/80mm-rolls.jpg",
    icon: Printer,
    specifications: [
      "80mm roll width",
      "Multiple GSM options",
      "Different core sizes",
      "Multiple roll lengths",
      "Customized packing",
    ],
  },
  {
    number: "02",
    title: "57/58mm Rolls",
    subtitle: "2 1/4 inch",
    description:
      "Compact thermal paper rolls designed for handheld POS terminals, compact printers, kiosks, mobile devices, and other space-conscious applications.",
    image: "/images/products/thermal-paper/58mm-rolls.jpg",
    icon: Printer,
    specifications: [
      "57mm / 58mm width",
      "Multiple GSM options",
      "Different core sizes",
      "Multiple roll lengths",
      "Customized packing",
    ],
  },
  {
    number: "03",
    title: "Custom Configurations",
    subtitle: "Made to Your Requirements",
    description:
      "Customized thermal paper solutions including logo printing, packaging formats, carton labeling, and specifications based on customer requirements.",
    image: "/images/products/thermal-paper/custom-rolls.jpg",
    icon: Settings2,
    specifications: [
      "Logo printing",
      "Custom packaging",
      "Carton labeling",
      "Custom specifications",
      "MOQ-based production",
      "Lead-time planning",
    ],
  },
  {
    number: "04",
    title: "Supply Capability",
    subtitle: "High-Volume Supply",
    description:
      "Bulk thermal paper supply for retail chains, hospitality groups, supermarkets, and organizations operating multiple branches.",
    image: "/images/products/thermal-paper/bulk-supply.jpg",
    icon: Truck,
    specifications: [
      "Bulk volumes",
      "Multi-branch operations",
      "FOB supply",
      "CIF supply",
      "Local delivery",
      "RFQ-based supply",
    ],
  },
];

const applications = [
  "Supermarkets",
  "Retail Stores",
  "Restaurants",
  "Hotels",
  "Cafés",
  "Pharmacies",
  "Kiosks",
  "Fuel Stations",
  "Banks",
  "Delivery Operations",
  "Hospitality",
  "Multi-Branch Businesses",
];

export default function ThermalPaperPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-slate-950">

        <Image
          src="/images/products/thermal-paper/thermal-paper-hero.jpg"
          alt="Thermal paper rolls for POS machines"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-28 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            {/* Breadcrumb */}

            <div className="mb-7 flex items-center gap-2 text-sm text-white/60">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <Link
                href="/products"
                className="transition hover:text-white"
              >
                Products
              </Link>

              <ChevronRight size={15} />

              <span className="text-blue-400">
                Thermal Paper
              </span>

            </div>


            {/* Label */}

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              POS Consumables & Supply Solutions

            </div>


            {/* Heading */}

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Thermal Paper Rolls

              <span className="block text-blue-400">
                for POS Machines
              </span>

            </h1>


            <div className="mt-6 h-1 w-20 rounded-full bg-blue-500" />


            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">

              Reliable printing. Consistent quality.
              High-volume supply options for retail,
              hospitality, commercial, and multi-branch operations.

            </p>


            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
              >

                Request a Quote

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
              >

                View Products

              </a>

            </div>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            OREXA Thermal Paper Solutions
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

            Reliable POS Printing

            <span className="text-blue-600">
              {" "}for Your Business
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            OREXA provides thermal paper rolls for point-of-sale
            machines and compact printing systems. Our supply options
            support different roll widths, GSM specifications, core
            sizes, roll lengths, packaging requirements, and order
            volumes.

          </p>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section
        id="products"
        className="bg-slate-50 py-20 md:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our Supply Options
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

              Thermal Paper

              <span className="text-blue-600">
                {" "}Products
              </span>

            </h2>

          </div>


          <div className="mt-14 grid gap-7 md:grid-cols-2">

            {products.map((product, index) => {

              const Icon = product.icon;

              return (

                <motion.article
                  key={product.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}

                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg">
                      {product.number}
                    </div>

                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-white backdrop-blur-md">
                      <Icon size={20} />
                    </div>

                    <div className="absolute bottom-5 left-6">

                      <p className="text-sm font-medium text-blue-300">
                        {product.subtitle}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        {product.title}
                      </h3>

                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-7">

                    <p className="leading-7 text-slate-600">
                      {product.description}
                    </p>


                    <div className="mt-7 border-t border-slate-100 pt-6">

                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Options & Specifications
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">

                        {product.specifications.map((item) => (

                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >

                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-blue-600"
                            />

                            <span>
                              {item}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>


                    <Link
                      href="/contact"
                      className="group/link mt-7 flex items-center justify-between rounded-xl bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-white"
                    >

                      Request Pricing

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover/link:translate-x-1"
                      />

                    </Link>

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIFICATIONS
      ====================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Image */}

            <div className="relative h-[500px] overflow-hidden rounded-3xl">

              <Image
                src="/images/products/thermal-paper/thermal-paper-detail.jpg"
                alt="Thermal paper POS rolls"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                  Flexible Specifications
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  Configured to Your Requirements
                </p>

              </div>

            </div>


            {/* Content */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Product Configuration
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

                Specify What

                <span className="block text-blue-600">
                  Your Operation Needs
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Thermal paper rolls can be supplied according to
                required dimensions, printing specifications,
                packaging formats, and order volumes.

              </p>


              <div className="mt-8 space-y-5">

                {[
                  {
                    icon: Package,
                    title: "GSM",
                    text: "Select the required paper weight and quality according to the intended application.",
                  },
                  {
                    icon: Settings2,
                    title: "Core Size",
                    text: "Different core configurations can be supplied according to printer requirements.",
                  },
                  {
                    icon: Boxes,
                    title: "Roll Length",
                    text: "Roll lengths can be configured according to machine specifications and operational needs.",
                  },
                  {
                    icon: Package,
                    title: "Packing",
                    text: "Individual, box, carton, or customized packaging formats can be considered.",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="flex gap-4"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                        <Icon size={21} />

                      </div>

                      <div>

                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ====================================================== */}

      <section className="bg-slate-950 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Applications
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">

              Suitable for

              <span className="text-blue-400">
                {" "}Multiple Industries
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">

              Our POS thermal paper supply options are suitable for
              businesses with regular or high-volume receipt printing
              requirements.

            </p>

          </div>


          <div className="mt-12 flex flex-wrap justify-center gap-3">

            {applications.map((application) => (

              <div
                key={application}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm"
              >

                <span className="mr-2 text-blue-400">
                  ✓
                </span>

                {application}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SUPPLY CAPABILITY
      ====================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-blue-600">

            <div className="grid lg:grid-cols-2">

              <div className="p-8 md:p-12 lg:p-16">

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
                  Supply Capability
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">

                  High-Volume

                  <span className="block">
                    Supply Options
                  </span>

                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-50">

                  OREXA can support bulk requirements for chains,
                  multi-branch operations, retailers, hospitality
                  groups, and other organizations requiring regular
                  POS consumables.

                </p>


                <div className="mt-8 space-y-4">

                  {[
                    "Bulk volume requirements",
                    "Multi-branch operations",
                    "FOB options",
                    "CIF options",
                    "Local delivery options",
                    "RFQ-based supply",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-white"
                    >

                      <CheckCircle2 size={19} />

                      {item}

                    </div>

                  ))}

                </div>

              </div>


              <div className="relative min-h-[400px]">

                <Image
                  src="/images/products/thermal-paper/bulk-supply.jpg"
                  alt="Bulk thermal paper supply"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/20" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RFQ
      ====================================================== */}

      <section className="bg-slate-950 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <FileText size={29} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Request for Quotation
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">

            Need a Thermal Paper

            <span className="block text-blue-400">
              Supply Quote?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">

            Send us your required roll size, GSM, core size,
            roll length, quantity, packaging requirements,
            delivery location, and required timeline.

          </p>


          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >

              Request an RFQ

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >

              Back to Products

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}