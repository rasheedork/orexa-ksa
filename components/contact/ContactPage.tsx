"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  Upload,
  Wrench,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // We will connect this form to your email/API later.
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#031326]">

        <div className="absolute inset-0">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[80px] border-blue-600/10" />

          <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border-[70px] border-blue-500/10" />

          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">

          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-white/60">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <span className="text-blue-400">
              Contact
            </span>

          </div>


          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              Engineering Material Solutions

            </div>


            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Let&apos;s Build Your

              <span className="block text-blue-500">
                Project Together
              </span>

            </h1>


            <div className="mt-7 h-1 w-20 rounded-full bg-blue-500" />


            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">

              Contact OREXA-KSA for engineering materials,
              project requirements, product enquiries, and
              competitive RFQs for commercial, industrial,
              infrastructure, residential, and government projects.

            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT CARDS
      ========================================================== */}

      <section className="relative z-20 -mt-10 px-6">

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}

          <a
            href="tel:+966000000000"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-200"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

              <Phone size={22} />

            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Call Us
            </p>

            <p className="mt-2 font-bold text-slate-900">
              +966 54 306 2495
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Sales & RFQ enquiries
            </p>

          </a>


          {/* Email */}

          <a
            href="mailto:info@orexa-ksa.com"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-200"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

              <Mail size={22} />

            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Email
            </p>

            <p className="mt-2 break-all font-bold text-slate-900">
              info@orexa-ksa.com
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Send your requirements
            </p>

          </a>


          {/* Location */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

              <MapPin size={22} />

            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Location
            </p>

            <p className="mt-2 font-bold text-slate-900">
              Saudi Arabia
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Serving projects across KSA
            </p>

          </div>


          {/* Hours */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

              <Clock3 size={22} />

            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Business Hours
            </p>

            <p className="mt-2 font-bold text-slate-900">
              Sunday – Thursday
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Please contact us for assistance
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          MAIN CONTACT / RFQ
      ========================================================== */}

      <section className="py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Request for Quotation
              </p>


              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071b3a] md:text-5xl">

                Tell Us What

                <span className="block text-blue-600">
                  You Need
                </span>

              </h2>


              <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />


              <p className="mt-6 text-lg leading-8 text-slate-600">

                Send your project requirements to our team.
                Whether you need mechanical, electrical,
                fit-out, or specialty materials, we can help
                identify suitable products and supply options.

              </p>


              {/* RFQ Requirements */}

              <div className="mt-10 rounded-2xl bg-slate-50 p-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">

                    <FileText size={20} />

                  </div>

                  <h3 className="font-bold text-[#071b3a]">
                    For RFQs, Please Include
                  </h3>

                </div>


                <div className="mt-6 space-y-4">

                  {[
                    "BOQ / Item List + Specifications",
                    "Required Quantities",
                    "Delivery Location",
                    "Required Delivery Timeline",
                    "Approved Vendor List, if applicable",
                    "Certificates / Compliance Requirements",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <span className="text-sm leading-6 text-slate-600">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* Service links */}

              <div className="mt-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                  Material Solutions
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  <Link
                    href="/services/mechanical"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    Mechanical
                  </Link>

                  <Link
                    href="/services/electrical"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    Electrical
                  </Link>

                  <Link
                    href="/services/fit-out"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    Fit-Out
                  </Link>

                </div>

              </div>

            </div>


            {/* RIGHT - FORM */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-9">

              {submitted ? (

                <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">

                    <CheckCircle2 size={42} />

                  </div>

                  <h3 className="mt-7 text-3xl font-bold text-[#071b3a]">
                    Thank You
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">

                    Your enquiry has been prepared successfully.
                    Our team will review your requirements and
                    contact you regarding your RFQ.

                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Send Another Enquiry
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div>

                    <h3 className="text-2xl font-bold text-[#071b3a]">
                      Request a Quote
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Complete the form and send us your requirements.
                    </p>

                  </div>


                  {/* Name + Company */}

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Your Name *
                      </label>

                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Company Name *
                      </label>

                      <input
                        required
                        type="text"
                        name="company"
                        placeholder="Company name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>

                  </div>


                  {/* Email + Phone */}

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email *
                      </label>

                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone / WhatsApp *
                      </label>

                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+966..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>

                  </div>


                  {/* Service */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Material Category *
                    </label>

                    <select
                      required
                      name="category"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >

                      <option value="" disabled>
                        Select material category
                      </option>

                      <option value="mechanical">
                        Mechanical Material Solutions
                      </option>

                      <option value="electrical">
                        Electrical Material Solutions
                      </option>

                      <option value="fitout">
                        Fit-Out Material Solutions
                      </option>

                      <option value="thermal-paper">
                        Thermal Paper Rolls
                      </option>

                      <option value="other">
                        Other / General Enquiry
                      </option>

                    </select>

                  </div>


                  {/* Project */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Project / Delivery Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      placeholder="City / Project location"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  {/* Quantity */}

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Estimated Quantity
                      </label>

                      <input
                        type="text"
                        name="quantity"
                        placeholder="e.g. 5,000 rolls"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Required Timeline
                      </label>

                      <input
                        type="text"
                        name="timeline"
                        placeholder="e.g. 2 weeks"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>

                  </div>


                  {/* Message */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Requirements / Message *
                    </label>

                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Please provide item specifications, quantities, delivery requirements, approved brands, certificates, or any other relevant information..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  {/* Upload */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      BOQ / Specification File
                    </label>

                    <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50/40">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">

                        <Upload size={20} />

                      </div>

                      <div>

                        <p className="text-sm font-semibold text-slate-700">
                          Upload your BOQ or specifications
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          PDF, Excel, Word or image files
                        </p>

                      </div>

                      <input
                        type="file"
                        name="attachment"
                        className="hidden"
                        accept=".pdf,.xlsx,.xls,.doc,.docx,.jpg,.jpeg,.png"
                      />

                    </label>

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >

                    Send RFQ

                    <Send
                      size={19}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>


                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting this form, you agree to be contacted by
                    OREXA-KSA regarding your enquiry.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY CONTACT OREXA
      ========================================================== */}

      <section className="bg-slate-50 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Why OREXA
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#071b3a] md:text-4xl">
              More Than Material Supply
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                <Wrench size={23} />

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#071b3a]">
                Technical Support
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Support with product selection, specifications,
                material requirements, and project enquiries.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                <Building2 size={23} />

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#071b3a]">
                Project Focused
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Material solutions supporting commercial,
                industrial, infrastructure, residential, and
                government projects.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                <TruckIcon />

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#071b3a]">
                Reliable Supply
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Efficient sourcing and logistics focused on
                reliable delivery and project timelines.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MAP / LOCATION
      ========================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2">

            <div className="flex min-h-[400px] items-center p-8 md:p-12">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">

                  <MapPin size={27} />

                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                  OREXA-KSA
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#071b3a]">
                  Serving Projects Across Saudi Arabia
                </h2>

                <p className="mt-5 leading-8 text-slate-600">

                  OREXA supports customers across Saudi Arabia
                  with engineering material sourcing, supply,
                  logistics, and project support.

                </p>


                <div className="mt-7 space-y-4">

                  <div className="flex items-center gap-3 text-sm text-slate-700">

                    <MapPin
                      size={19}
                      className="text-blue-600"
                    />

                    Saudi Arabia

                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700">

                    <Mail
                      size={19}
                      className="text-blue-600"
                    />

                    info@orexa-ksa.com

                  </div>

                </div>

              </div>

            </div>


            {/* Map placeholder */}

            <div className="relative min-h-[400px] overflow-hidden bg-[#e8eef5]">

              <div className="absolute inset-0 opacity-40">

                <div className="absolute left-[10%] top-[20%] h-px w-[80%] rotate-12 bg-slate-400" />

                <div className="absolute left-[15%] top-[50%] h-px w-[75%] -rotate-12 bg-slate-400" />

                <div className="absolute left-[30%] top-[10%] h-[90%] w-px rotate-[20deg] bg-slate-400" />

                <div className="absolute left-[65%] top-[5%] h-[100%] w-px -rotate-[25deg] bg-slate-400" />

              </div>


              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30">

                    <MapPin size={28} />

                  </div>

                  <p className="mt-4 font-bold text-[#071b3a]">
                    OREXA-KSA
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Saudi Arabia
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="bg-blue-600 py-14">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 md:flex-row lg:px-8">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Ready to Start?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Send your project requirements to OREXA.
            </h2>

          </div>


          <a
            href="mailto:info@orexa-ksa.com"
            className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-600 shadow-lg transition hover:bg-slate-100"
          >

            Email OREXA

            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />

          </a>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   SIMPLE TRUCK ICON
========================================================= */

function TruckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}