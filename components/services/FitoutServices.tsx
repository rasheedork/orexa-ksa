"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Layers3,
  PanelsTopLeft,
  Armchair,
  LayoutPanelTop,
  Paintbrush,
  Leaf,
  CheckCircle2,
  ShieldCheck,
  Award,
  BadgeDollarSign,
  Truck,
  FileText,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Flooring Materials",
    description:
      "Premium flooring solutions designed for durability, performance, comfort, and modern interior environments.",
    icon: Layers3,
    image: "/images/hero/office-hero-05.jpg",
    items: [
      "Carpets",
      "Vinyl Flooring",
      "Ceramic Tiles",
      "Porcelain Tiles",
      "Natural Stone",
      "Laminate Flooring",
      "Engineered Wood",
      "Solid Wood",
      "Concrete",
      "Terrazzo",
    ],
  },
  {
    number: "02",
    title: "Partition Materials",
    description:
      "Flexible partition systems that help create efficient, modern, and adaptable commercial and office environments.",
    icon: PanelsTopLeft,
    image: "/images/hero/office-hero-03.jpg",
    items: [
      "Drywall Systems",
      "Demountable Partitions",
      "Glass Partitions",
      "Operable Walls",
      "Folding Partitions",
    ],
  },
  {
    number: "03",
    title: "Furniture & Fittings",
    description:
      "Functional and contemporary furniture solutions for offices, commercial spaces, hospitality environments, and projects.",
    icon: Armchair,
    image: "/images/hero/office-hero-01.jpg",
    items: [
      "Office Chairs",
      "Desks",
      "Tables",
      "Cabinets",
      "Shelves",
      "Storage Units",
      "Decorative Items",
    ],
  },
  {
    number: "04",
    title: "Ceiling Materials",
    description:
      "Modern ceiling systems combining acoustic performance, aesthetics, durability, and practical installation requirements.",
    icon: LayoutPanelTop,
    image: "/images/hero/office-hero-04.jpg",
    items: [
      "Suspended Ceilings",
      "Plasterboard",
      "Acoustic Panels",
      "Metal Ceiling Tiles",
      "Wood Panels",
      "Stretch Ceilings",
    ],
  },
  {
    number: "05",
    title: "Surface Finishes",
    description:
      "Decorative and protective surface finishes that enhance the appearance, durability, and character of interior spaces.",
    icon: Paintbrush,
    image: "/images/hero/office-hero-02.jpg",
    items: [
      "Interior Paints",
      "Protective Coatings",
      "Wallpaper",
      "Wall Coverings",
      "Decorative Finishes",
    ],
  },
  {
    number: "06",
    title: "Sustainable Materials",
    description:
      "Environmentally responsible material options supporting modern sustainable design and green building objectives.",
    icon: Leaf,
    image: "/images/hero/office-hero-05.jpg",
    items: [
      "Recycled Content Materials",
      "Low-Emitting Materials",
      "Energy-Efficient Products",
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Quality Materials",
    text: "High-quality interior materials sourced through reliable international suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "Project Ready",
    text: "Products selected according to project specifications, design requirements, and performance criteria.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost Effective",
    text: "Competitive material sourcing focused on quality, durability, and long-term value.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    text: "Professional procurement and logistics support to help maintain project schedules.",
  },
];

export default function FitoutServices() {
  return (
    <main className="bg-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-slate-950">

        <Image
          src="/images/hero/office-hero-05.jpg"
          alt="Orexa Fit-Out Material Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            {/* Breadcrumb */}
            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-white/60">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <Link
                href="/services"
                className="transition hover:text-white"
              >
                Our Services
              </Link>

              <ChevronRight size={15} />

              <span className="text-blue-400">
                Fit-Out Material Solutions
              </span>

            </div>

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              Interior & Fit-Out Solutions

            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Fit-Out

              <span className="block text-blue-400">
                Material Solutions
              </span>

            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-blue-500" />

            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">

              Orexa delivers a complete range of high-quality interior
              finishing materials for commercial, residential, and industrial
              projects.

            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">

              We supply flooring systems, partition solutions, ceilings,
              furniture, surface finishes, and sustainable materials designed
              for durability, performance, and modern design requirements.

            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-500"
              >
                Request an RFQ

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#fitout-products"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore Products

                <ChevronRight size={19} />
              </Link>

            </div>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Fit-Out Division
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">

                Complete Interior Materials

                <span className="block text-blue-600">
                  For Modern Spaces
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Orexa KSA provides end-to-end fit-out material solutions
                covering interior construction and finishing requirements
                for commercial, residential, industrial, hospitality,
                office, and institutional projects.

              </p>

              <p className="mt-5 text-base leading-7 text-slate-500">

                From premium flooring and modular partitions to ceilings,
                furniture, decorative finishes, and eco-friendly materials,
                we help contractors, designers, and project owners create
                functional and visually appealing spaces.

              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Complete interior material sourcing",
                  "Project-specific product selection",
                  "Reliable international suppliers",
                  "Professional procurement support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>


            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="relative h-[440px] overflow-hidden rounded-3xl">

                <Image
                  src="/images/hero/office-hero-05.jpg"
                  alt="Interior fit-out materials and office design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">

                  <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
                    Orexa-KSA
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                    Complete Fit-Out Material Solutions
                  </p>

                </div>

              </div>


              {/* Floating card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Layers3 size={24} />
                  </div>

                  <div>

                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Fit-Out
                    </p>

                    <p className="font-bold text-slate-900">
                      Flooring • Furniture • Ceilings
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PRODUCT CATEGORIES
      ========================================================== */}
      <section
        id="fitout-products"
        className="bg-slate-50 py-20 md:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our Product Range
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">

              Fit-Out

              <span className="text-blue-600">
                {" "}Solutions
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              A complete portfolio of interior materials supporting
              contemporary design, construction, renovation, and
              fit-out projects.

            </p>

          </div>


          {/* Category Cards */}
          <div className="grid gap-8 lg:grid-cols-2">

            {categories.map((category, index) => {

              const Icon = category.icon;

              return (

                <motion.article
                  key={category.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg">
                      {category.number}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                      <div>

                        <p className="text-sm font-medium uppercase tracking-wider text-blue-300">
                          Fit-Out Division
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                          {category.title}
                        </h3>

                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md sm:flex">

                        <Icon size={22} />

                      </div>

                    </div>

                  </div>


                  {/* Content */}
                  <div className="p-7 md:p-8">

                    <p className="leading-7 text-slate-600">
                      {category.description}
                    </p>

                    <div className="mt-7 border-t border-slate-100 pt-6">

                      <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Products & Materials
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">

                        {category.items.map((item) => (

                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >

                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                              <CheckCircle2 size={12} />
                            </span>

                            <span>
                              {item}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>


                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600"
                    >

                      Request Information

                      <ArrowRight size={18} />

                    </Link>

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY OREXA
      ========================================================== */}
      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              The Orexa Advantage
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

              Why Choose Our

              <span className="text-blue-600">
                {" "}Fit-Out Solutions?
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              We combine reliable sourcing, quality materials, project
              support, and efficient logistics to help deliver successful
              interior projects.

            </p>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {

              const Icon = benefit.icon;

              return (

                <motion.div
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/40"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {benefit.text}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          RFQ SECTION
      ========================================================== */}
      

      {/* =========================================================
          PROJECT TYPES       <section className="border-b border-slate-200 bg-white py-12">

      ========================================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-20 md:py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Commercial Projects",
              "Residential Projects",
              "Industrial Projects",
              "Government Projects",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center justify-center gap-3 text-sm font-semibold text-slate-700"
              >

                <CheckCircle2
                  size={20}
                  className="text-blue-600"
                />

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}