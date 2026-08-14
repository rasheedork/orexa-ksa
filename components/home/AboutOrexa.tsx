"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Users,
  Award,
  Building2,
  Factory,
  Landmark,
  Home,
  Settings,
  PackageCheck,
  Handshake,
  Target,
  FileCheck2,
} from "lucide-react";

const industries = [
  {
    title: "Construction",
    description:
      "Engineering materials and components supporting building, infrastructure, and construction projects.",
    icon: Building2,
  },
  {
    title: "Industrial",
    description:
      "Reliable material solutions for industrial facilities, plants, workshops, and operational environments.",
    icon: Factory,
  },
  {
    title: "Government",
    description:
      "Professional sourcing and supply solutions supporting government projects and institutional requirements.",
    icon: Landmark,
  },
  {
    title: "Commercial & Residential",
    description:
      "MEP, fit-out, furniture, and finishing materials for commercial and residential developments.",
    icon: Home,
  },
];

const strengths = [
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    text: "We work with reputable suppliers and focus on materials that meet applicable quality and industry requirements.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    text: "Strong supplier relationships enable us to source dependable products for different project requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    text: "Efficient procurement and distribution help us support project schedules and operational timelines.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "We develop practical material solutions around each client's project requirements and expectations.",
  },
];

const capabilities = [
  "Mechanical Material Solutions",
  "Electrical Material Solutions",
  "Fit-Out Material Solutions",
  "Industrial Materials",
  "Project-Based Procurement",
  "Material Sourcing & Supply",
];

export default function AboutOrexa() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">

        <Image
          src="/images/hero/office-hero-04.jpg"
          alt="OREXA Engineering Material Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/30" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-28 lg:px-8">

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

              <span>/</span>

              <span className="text-blue-400">
                About Us
              </span>

            </div>

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              Engineering Material Solutions

            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              About

              <span className="text-blue-400">
                {" "}OREXA
              </span>

            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-blue-500" />

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">

              Reliable engineering materials, professional sourcing,
              and dependable supply solutions supporting projects
              across Saudi Arabia.

            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
              >

                Explore Our Services

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
              >

                Request an RFQ

              </Link>

            </div>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =====================================================
          ABOUT OREXA
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                About OREXA
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">

                Engineering Materials

                <span className="block text-blue-600">
                  You Can Depend On
                </span>

              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">

                Orexa is a leading provider of engineering material
                solutions, serving a diverse range of industries. We
                specialize in supplying high-quality materials and
                components that are essential to the construction,
                industrial, commercial, and government sectors.

              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">

                Through strategic partnerships with reputable vendors,
                Orexa ensures that products are sourced according to
                stringent quality standards and industry requirements.

              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">

                Our commitment to excellence extends beyond sourcing.
                We prioritize efficient logistics and reliable
                distribution to deliver materials promptly, supporting
                our clients&apos; operational timelines and project
                requirements.

              </p>

            </motion.div>


            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="relative h-[500px] overflow-hidden rounded-3xl">

                <Image
                  src="/images/hero/office-hero-04.jpg"
                  alt="OREXA material solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                    OREXA-KSA
                  </p>

                  <p className="mt-2 max-w-md text-2xl font-bold text-white md:text-3xl">
                    Engineering Material Solutions Provider
                  </p>

                </div>

              </div>


              {/* Floating card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:block">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <PackageCheck size={24} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Our Focus
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Quality • Reliability • Value
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="bg-slate-50 py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

              Complete Material

              <span className="text-blue-600">
                {" "}Supply Solutions
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              Orexa supports clients throughout the material sourcing
              and supply process, from identifying suitable products
              to coordinating procurement and delivery.

            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">

                    <CheckCircle2 size={21} />

                  </div>

                  <h3 className="font-semibold text-slate-800">
                    {item}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR STRENGTHS
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Heading */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Our Strengths
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">

                Built Around

                <span className="block text-blue-600">
                  Reliability
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Our approach is built around dependable products,
                responsible sourcing, efficient logistics, and
                professional customer service.

              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <Target
                  size={25}
                  className="shrink-0 text-blue-600"
                />

                <p className="text-sm font-medium leading-6 text-slate-700">

                  Our goal is simple: provide dependable material
                  solutions that help our clients deliver successful
                  projects.

                </p>

              </div>

            </div>


            {/* Strength Cards */}
            <div className="grid gap-5 sm:grid-cols-2">

              {strengths.map((strength, index) => {

                const Icon = strength.icon;

                return (

                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {strength.text}
                    </p>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section className="bg-slate-950 py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Industries We Serve
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">

              Supporting Diverse

              <span className="text-blue-400">
                {" "}Project Sectors
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">

              Our engineering material solutions are designed to
              support a broad range of commercial, industrial,
              residential, infrastructure, and government projects.

            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry, index) => {

              const Icon = industry.icon;

              return (

                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">

                    <Icon size={23} />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {industry.description}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUALITY & SUPPLY
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="relative h-[430px] overflow-hidden rounded-3xl">

              <Image
                src="/images/hero/office-hero-03.jpg"
                alt="OREXA quality and supply solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                  OREXA Network
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  Reliable Sourcing & Distribution
                </p>

              </div>

            </div>


            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Quality & Supply Chain
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

                From Reliable

                <span className="block text-blue-600">
                  Suppliers to Your Project
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Through strategic partnerships with reputable vendors,
                Orexa works to provide quality materials aligned with
                project specifications and industry requirements.

              </p>

              <div className="mt-8 space-y-5">

                {[
                  {
                    icon: Award,
                    title: "Reputable Suppliers",
                    text: "We establish supplier relationships to support dependable product sourcing.",
                  },
                  {
                    icon: FileCheck2,
                    title: "Quality Requirements",
                    text: "Materials are selected with project specifications, standards, and compliance requirements in mind.",
                  },
                  {
                    icon: Truck,
                    title: "Efficient Distribution",
                    text: "Our logistics approach focuses on timely and reliable material delivery.",
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
          CUSTOMER FOCUS
      ====================================================== */}
      <section className="bg-blue-600 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl">

            <Users size={30} />

          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
            Customer Focus
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">

            Your Project Requirements

            <span className="block">
              Come First
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50">

            Driven by a strong focus on customer satisfaction, Orexa
            offers tailored solutions designed to enhance performance,
            durability, and long-term value.

          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100">

            We are dedicated to supporting our clients&apos; projects
            with dependable materials and professional service that
            contribute to sustainable and successful outcomes.

          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:bg-slate-100"
          >

            Talk to Our Team

            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

        </div>

      </section>


      {/* =====================================================
          RFQ CTA
      ====================================================== */}


    </main>
  );
}