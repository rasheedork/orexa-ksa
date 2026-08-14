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
  ShieldCheck,
  Store,
  ShoppingCart,
  Utensils,
  Hotel,
  Coffee,
  Pill,
  Fuel,
  Building2,
  Bike,
  Network,
} from "lucide-react";

const products = [
  {
    number: "01",
    title: "80mm (3 1/8\") Rolls",
    description:
      "The most common POS receipt width for retail, supermarkets, restaurants, hospitality, and other high-volume point-of-sale applications.",
    image: "/images/products/thermal-paper/80mm-rolls.jpg",
    icon: Printer,
    items: [
      "Multiple GSM options",
      "Different core sizes",
      "Multiple roll lengths",
      "Customized packing",
    ],
  },
  {
    number: "02",
    title: "57/58mm (2 1/4\") Rolls",
    description:
      "Compact thermal paper rolls designed for handheld POS terminals, compact printers, kiosks, and mobile point-of-sale devices.",
    image: "/images/products/thermal-paper/58mm-rolls.jpg",
    icon: Printer,
    items: [
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
    description:
      "Customized thermal paper solutions including logo printing, packaging formats, carton labeling, and specifications based on customer requirements.",
    image: "/images/products/thermal-paper/custom-rolls.jpg",
    icon: Settings2,
    items: [
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
    description:
      "Bulk thermal paper supply for retail chains, hospitality groups, supermarkets, and organizations operating multiple branches.",
    image: "/images/products/thermal-paper/bulk-supply.jpg",
    icon: Truck,
    items: [
      "Bulk volumes",
      "Multi-branch supply",
      "FOB options",
      "CIF options",
      "Local delivery",
      "RFQ-based supply",
    ],
  },
];

const applications = [
  {
    title: "Supermarkets",
    icon: ShoppingCart,
  },
  {
    title: "Retail Stores",
    icon: Store,
  },
  {
    title: "Restaurants",
    icon: Utensils,
  },
  {
    title: "Hotels",
    icon: Hotel,
  },
  {
    title: "Cafés",
    icon: Coffee,
  },
  {
    title: "Pharmacies",
    icon: Pill,
  },
  {
    title: "Kiosks",
    icon: Printer,
  },
  {
    title: "Fuel Stations",
    icon: Fuel,
  },
  {
    title: "Banks",
    icon: Building2,
  },
  {
    title: "Delivery",
    icon: Bike,
  },
  {
    title: "Multi-Branch",
    icon: Network,
  },
];

const specifications = [
  {
    title: "GSM",
    description:
      "Multiple GSM options available according to application and customer requirements.",
    icon: FileText,
  },
  {
    title: "Core Size",
    description:
      "Different core sizes compatible with various POS machines and printers.",
    icon: Package,
  },
  {
    title: "Roll Length",
    description:
      "Multiple roll lengths configured according to operational requirements.",
    icon: Boxes,
  },
  {
    title: "Packing",
    description:
      "Customized packing options to match your handling and storage requirements.",
    icon: Package,
  },
  {
    title: "Quality",
    description:
      "Consistent quality for clear printing, smooth feeding, and reliable operation.",
    icon: ShieldCheck,
  },
];

export default function ThermalPaperPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#031326]">

        <Image
          src="/images/products/thermal-paper/thermal-paper-hero.jpg"
          alt="Thermal paper rolls and POS machine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#031326]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031326] via-[#031326]/85 to-[#031326]/30" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            {/* Breadcrumb */}

            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/65">

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
                Thermal Paper Rolls
              </span>

            </div>

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

              POS Consumables & Supply Solutions

            </div>

            {/* Heading */}

            <h1 className="mt-7 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Thermal Paper Rolls

              <span className="block text-blue-500">
                for POS Machines
              </span>

            </h1>

            <div className="mt-7 h-1 w-20 rounded-full bg-blue-500" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">

              Reliable printing. Consistent quality.
              <span className="block">
                High-volume supply options.
              </span>

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >

                Request an RFQ

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

              <a
                href="#thermal-products"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
              >

                View Products

                <ChevronRight size={18} />

              </a>

            </div>

            {/* Hero features */}

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">

              {[
                "Consistent Quality",
                "Smooth Printing",
                "Custom Options",
                "Bulk Supply",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-white/90"
                >

                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Our Thermal Paper Solutions
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071b3a] md:text-5xl">

            Built for Performance.

            <span className="text-blue-600">
              {" "}Designed for Your Business.
            </span>

          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">

            OREXA-KSA provides reliable thermal paper rolls for
            point-of-sale systems across retail, hospitality,
            commercial, and multi-branch operations. Our supply
            options can be configured around your machine and
            operational requirements.

          </p>

        </div>

      </section>


      {/* =========================================================
          PRODUCT CARDS
      ========================================================== */}

      <section
        id="thermal-products"
        className="bg-slate-50 py-20 md:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Product image */}

                  <div className="relative h-56 overflow-hidden bg-slate-100">

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg">
                      {product.number}
                    </div>

                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-blue-600 shadow-lg backdrop-blur">
                      <Icon size={19} />
                    </div>

                  </div>


                  {/* Product content */}

                  <div className="flex min-h-[390px] flex-col p-6">

                    <h3 className="text-xl font-bold leading-tight text-[#071b3a]">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <div className="my-5 h-px bg-slate-100" />

                    <div className="space-y-3">

                      {product.items.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >

                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />

                          <span>
                            {item}
                          </span>

                        </div>

                      ))}

                    </div>

                    <Link
                      href="/contact"
                      className="group/btn mt-auto flex items-center justify-between pt-7 text-sm font-bold text-blue-600"
                    >

                      Request Quote

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />

                    </Link>

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          SPECIFICATIONS
      ========================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-3xl bg-blue-50 px-6 py-12 md:px-10 lg:px-12">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Product Specifications
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#071b3a]">
                Configure Your Thermal Paper Supply
              </h2>

            </div>


            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

              {specifications.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="text-center"
                  >

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-sm">

                      <Icon size={27} />

                    </div>

                    <h3 className="mt-5 font-bold text-[#071b3a]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          APPLICATIONS
      ========================================================== */}

      <section className="bg-white pb-20 md:pb-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Widely Used In
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#071b3a]">
              Industries We Support
            </h2>

          </div>


          <div className="mt-10 flex flex-wrap justify-center gap-5">

            {applications.map((application) => {

              const Icon = application.icon;

              return (

                <div
                  key={application.title}
                  className="flex min-w-[110px] flex-col items-center gap-3 px-3 text-center"
                >

                  <div className="flex h-12 w-12 items-center justify-center text-blue-600">

                    <Icon size={29} strokeWidth={1.7} />

                  </div>

                  <span className="text-xs font-semibold text-slate-700">
                    {application.title}
                  </span>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          BULK SUPPLY
      ========================================================== */}

      <section className="bg-[#031326]">

        <div className="mx-auto max-w-7xl">

          <div className="grid lg:grid-cols-2">

            <div className="relative min-h-[380px] lg:min-h-[450px]">

              <Image
                src="/images/products/thermal-paper/bulk-supply.jpg"
                alt="Bulk thermal paper supply warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#031326]/20" />

            </div>


            <div className="flex items-center p-8 md:p-12 lg:p-16">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                  High-Volume Supply Capability
                </p>

                <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">

                  Reliable Supply

                  <span className="block text-blue-400">
                    for Your Business
                  </span>

                </h2>

                <div className="mt-5 h-1 w-16 bg-blue-500" />

                <p className="mt-6 leading-8 text-slate-300">

                  We support businesses with regular and
                  high-volume thermal paper requirements.
                  Our supply capability is designed to support
                  consistency, availability, and timely delivery.

                </p>


                <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">

                  {[
                    "Bulk Volumes",
                    "Multi-Branch",
                    "FOB / CIF",
                    "Local Delivery",
                    "RFQ Based",
                    "Custom Supply",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium text-white"
                    >

                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-blue-400"
                      />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RFQ CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-blue-600 py-12 md:py-14">

        <div className="absolute inset-0 opacity-10">

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white" />

          <div className="absolute -bottom-32 right-40 h-96 w-96 rounded-full border-[30px] border-white" />

        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-8">

          <div className="flex items-center gap-5">

            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white sm:flex">

              <FileText size={28} />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Need Thermal Paper Rolls for Your POS Machines?
              </h2>

              <p className="mt-2 text-sm text-blue-100 md:text-base">
                Send us your requirements and our team will prepare the best quotation for you.
              </p>

            </div>

          </div>


          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-600 shadow-xl transition hover:bg-slate-100"
          >

            Request an RFQ

            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

        </div>

      </section>

    </main>
  );
}