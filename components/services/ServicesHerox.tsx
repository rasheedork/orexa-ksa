"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Cog,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Electrical Material Solutions",
    shortTitle: "Electrical",
    description:
      "High-quality electrical materials for power distribution, lighting, cabling, low-current systems, and life-safety applications.",
    image: "/images/services/electrical-materials.jpg",
    icon: Zap,
    items: [
      "Lighting Systems",
      "Cables & Wires",
      "Wiring Devices",
      "Audio Visual Equipment",
      "Low-Current Systems",
      "Emergency & Safety Systems",
    ],
  },
  {
    number: "02",
    title: "Fit-Out Material Solutions",
    shortTitle: "Fit-Out",
    description:
      "Complete interior material solutions for modern commercial, residential, hospitality, and industrial environments.",
    image: "/images/services/fitout-materials.jpg",
    icon: Building2,
    items: [
      "Flooring Materials",
      "Partition Systems",
      "Ceiling Materials",
      "Furniture & Fittings",
      "Surface Finishes",
      "Sustainable Materials",
    ],
  },
  {
    number: "03",
    title: "Mechanical Material Solutions",
    shortTitle: "Mechanical",
    description:
      "Reliable mechanical materials supporting HVAC, piping, plumbing, sanitary, fire protection, and industrial applications.",
    image: "/images/services/mechanical-materials.jpg",
    icon: Cog,
    items: [
      "HVAC Systems",
      "Piping & Fittings",
      "Plumbing Materials",
      "Sanitary Fixtures",
      "Valves & Accessories",
      "Fire Protection & Safety",
    ],
  },
];

export default function ServicesHero() {
  return (
    <main className="bg-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-slate-950">

        {/* Background Image */}
        <Image
          src="/images/hero/office-hero-04.jpg"
          alt="Orexa engineering material solutions"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />

        {/* Decorative Glow */}
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Engineering Material Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-blue-400"> Services</span>
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-white/95 md:text-3xl lg:text-4xl">
              Complete Engineering Material Solutions Under One Roof
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
              Orexa-KSA is a premier provider of engineering material
              solutions catering to commercial, industrial, residential,
              infrastructure, and government sectors.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
              We deliver premium MEP and fit-out materials sourced from
              reliable international suppliers, ensuring prompt delivery,
              dependable quality, and dedicated technical support.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Request an RFQ
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore Services
                <ChevronRight size={19} />
              </Link>

            </div>

          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="relative bg-white py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-end">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                What We Provide
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Engineering Materials
                <span className="block text-blue-600">
                  Built Around Your Project
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-3xl text-lg leading-8 text-slate-600"
            >
              From individual materials to complete project requirements,
              Orexa provides dependable engineering products through an
              international sourcing network. Our solutions are designed to
              support contractors, consultants, project owners, facility
              managers, and government organizations across Saudi Arabia.
            </motion.p>

          </div>

        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section
        id="services"
        className="bg-slate-50 py-20 md:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our Core Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Three Specialized
              <span className="text-blue-600"> Solutions</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Reliable materials, professional sourcing, and project-focused
              support across the key engineering disciplines.
            </p>

          </div>


          {/* Service Cards */}
          <div className="grid gap-8 lg:grid-cols-3">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                      {service.number}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-0 left-6 translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-blue-600 text-white shadow-xl">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                  </div>


                  {/* Content */}
                  <div className="px-7 pb-8 pt-12">

                    <h3 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <div className="mt-4 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />

                    <p className="mt-5 min-h-[96px] text-base leading-7 text-slate-600">
                      {service.description}
                    </p>


                    {/* Products */}
                    <div className="mt-7 border-t border-slate-100 pt-6">

                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Key Solutions
                      </p>

                      <div className="grid grid-cols-1 gap-3">

                        {service.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 text-sm font-medium text-slate-700"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                              <ChevronRight size={13} />
                            </span>

                            {item}
                          </div>
                        ))}

                      </div>

                    </div>


                    {/* Link */}
                    <Link
                      href="/contact"
                      className="group/link mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
                    >
                      Request Information

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
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
          WHY OREXA
      ========================================================== */}
      <section className="bg-white py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Why Orexa
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                More Than a
                <span className="text-blue-600"> Material Supplier</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine international sourcing, product knowledge,
                logistics coordination, and responsive customer service to
                support your project from enquiry through delivery.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
              >
                About Orexa
                <ArrowRight size={18} />
              </Link>

            </motion.div>


            {/* Right */}
            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  title: "Reliable Sourcing",
                  text: "Materials sourced through trusted international suppliers and vendor networks.",
                },
                {
                  title: "Quality Focus",
                  text: "Products selected to meet project specifications and applicable standards.",
                },
                {
                  title: "Prompt Delivery",
                  text: "Efficient procurement and logistics coordination to support project schedules.",
                },
                {
                  title: "Technical Support",
                  text: "Dedicated assistance to help clients identify suitable materials and solutions.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/40"
                >

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    0{index + 1}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Start Your Project
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Looking for Reliable Engineering Materials?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Send us your BOQ, specifications, quantities, and delivery
            requirements. Our team will review your requirements and provide
            a suitable material solution.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              Request an RFQ
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              View Products
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}