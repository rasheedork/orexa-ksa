"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Fan,
  Flame,
  Droplets,
  ShieldCheck,
  FileText,
  Truck,
  Award,
  BadgeDollarSign,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "HVAC Systems",
    description:
      "Reliable HVAC components and accessories for commercial, industrial, infrastructure, and building projects.",
    icon: Fan,
    image: "/images/hero/office-hero-03.jpg",
    items: [
      "Exhaust Fans",
      "Refrigerant Copper Pipes & Accessories",
      "Belts",
      "Air Outlets",
      "Mechanical Bearings",
      "Compressors",
      "Air Filters",
      "EC Motors",
      "Refrigerant Gas",
      "Air Duct & Fan Accessories",
    ],
  },
  {
    number: "02",
    title: "Piping Solutions",
    description:
      "Complete piping products and accessories for water, drainage, industrial, infrastructure, and building applications.",
    icon: Droplets,
    image: "/images/hero/office-hero-04.jpg",
    items: [
      "PPR Pipes & Fittings",
      "Copper Pipes & Fittings",
      "UPVC / CPVC Pipes & Fittings",
      "PVC Pipes & Fittings",
      "Carbon Steel Pipes & Fittings",
      "HDPE Pipes & Fittings",
      "Ductile Iron Pipes",
      "GRP Pipes",
      "Water Valves",
      "Pipe Supports",
      "Manhole & Chamber Covers",
    ],
  },
  {
    number: "03",
    title: "Sanitary Fixtures",
    description:
      "Quality sanitary and plumbing products designed for commercial, residential, hospitality, and institutional projects.",
    icon: Droplets,
    image: "/images/hero/office-hero-05.jpg",
    items: [
      "Sanitary Fixtures",
      "Water Mixers",
      "Kitchen Sinks & Accessories",
      "Bathroom Accessories",
      "Plumbing Valves & Accessories",
    ],
  },
  {
    number: "04",
    title: "Life & Safety Equipment",
    description:
      "Fire protection and personal safety equipment supporting safe and compliant project environments.",
    icon: ShieldCheck,
    image: "/images/hero/office-hero-02.jpg",
    items: [
      "Fire Extinguishers",
      "Firefighting Gas & Suppression Systems",
      "Fire Cabinets",
      "Fire Alarm Systems",
      "Protective Overalls",
      "Head Protection",
      "Eye Protection",
      "Chemical Protection",
      "Safety Cabinets",
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Quality Products",
    text: "Reliable engineering materials sourced through trusted suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Solutions",
    text: "Products selected according to project specifications and applicable standards.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost Effective",
    text: "Competitive sourcing focused on long-term project value.",
  },
  {
    icon: Truck,
    title: "Prompt Delivery",
    text: "Efficient procurement and logistics to support project schedules.",
  },
];

export default function MechanicalServices() {
  return (
    <main className="bg-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950">

        <Image
          src="/images/hero/office-hero-04.jpg"
          alt="Orexa Mechanical Material Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />

        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-28 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            {/* Breadcrumb */}
            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <ChevronRight size={15} />

              <Link href="/services" className="hover:text-white">
                Our Services
              </Link>

              <ChevronRight size={15} />

              <span className="text-blue-400">
                Mechanical Material Solutions
              </span>
            </div>

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Engineering Material Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Mechanical
              <span className="block text-blue-400">
                Material Solutions
              </span>
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-blue-500" />

            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">
              Mechanical Material Solutions provides high-quality HVAC,
              piping, sanitary fixtures, and life & safety equipment for
              commercial, industrial, infrastructure, and government projects.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
              We deliver reliable, certified, and cost-effective engineering
              materials supported by dependable sourcing, efficient logistics,
              and professional technical support.
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
                href="#mechanical-products"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore Products
                <ChevronRight size={19} />
              </Link>

            </div>

          </motion.div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Mechanical Division
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Reliable Mechanical Materials
                <span className="block text-blue-600">
                  For Every Project
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Orexa supplies a comprehensive range of mechanical engineering
                materials for building services, infrastructure, industrial
                facilities, commercial developments, and government projects.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Our product portfolio covers HVAC systems, piping networks,
                sanitary fixtures, plumbing accessories, fire protection, and
                personal safety equipment.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Trusted international sourcing",
                  "Project-specific material support",
                  "Competitive and transparent pricing",
                  "Reliable delivery across Saudi Arabia",
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

              <div className="relative h-[420px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/office-hero-03.jpg"
                  alt="Mechanical engineering materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
                    Orexa-KSA
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    Mechanical Engineering Solutions
                  </p>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Fan size={24} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Solutions
                    </p>

                    <p className="font-bold text-slate-900">
                      HVAC • Piping • Safety
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
        id="mechanical-products"
        className="bg-slate-50 py-20 md:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our Product Range
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Mechanical
              <span className="text-blue-600"> Solutions</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A comprehensive range of mechanical materials selected to meet
              project requirements across Saudi Arabia.
            </p>

          </div>


          <div className="grid gap-8 lg:grid-cols-2">

            {categories.map((category, index) => {

              const Icon = category.icon;

              return (
                <motion.article
                  key={category.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Category Image */}
                  <div className="relative h-56 overflow-hidden">

                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg">
                      {category.number}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-blue-300">
                          Mechanical Division
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

                            <span>{item}</span>
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
          BENEFITS
      ========================================================== */}
      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              The Orexa Advantage
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Why Choose Our
              <span className="text-blue-600"> Mechanical Solutions?</span>
            </h2>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {

              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">

        <Image
          src="/images/hero/office-hero-04.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <FileText size={30} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Request for Quotation
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Need Mechanical Materials for Your Project?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Send us your BOQ, specifications, required quantities, delivery
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


          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-9 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
          >
            Request an RFQ
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>


      {/* =========================================================
          PROJECT TYPES
      ========================================================== */}
      <section className="border-b border-slate-200 bg-white py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Commercial Projects",
              "Industrial Projects",
              "Infrastructure Projects",
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