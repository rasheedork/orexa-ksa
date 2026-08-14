"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Zap,
  Cog,
  PanelsTopLeft,
} from "lucide-react";

const serviceLinks = [
  {
    title: "Mechanical Material Solutions",
    description: "HVAC, piping, sanitary & safety",
    href: "/services/mechanical",
    icon: Cog,
  },
  {
    title: "Electrical Material Solutions",
    description: "Lighting, cables, AV & wiring",
    href: "/services/electrical",
    icon: Zap,
  },
  {
    title: "Fit-Out Material Solutions",
    description: "Flooring, partitions & furniture",
    href: "/services/fitout",
    icon: PanelsTopLeft,
  },
];

const mainLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          className="group flex items-center"
          onClick={() => setMobileOpen(false)}
        >

          {/* Replace this text with Image logo later if required */}
          <div className="leading-none">

            <div className="text-2xl font-extrabold tracking-tight text-slate-900">
              OREXA
              <span className="text-blue-600">-KSA</span>
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Engineering Material Solutions
            </div>

          </div>

        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden items-center gap-7 md:flex">

          {/* Home */}
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Home
          </Link>


          {/* About */}
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            About Us
          </Link>


          {/* =================================================
              SERVICES DROPDOWN
          ================================================== */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Services

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />

            </button>


            {/* Dropdown */}
            <div
              className={`absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">

                {/* Dropdown Header */}
                <div className="border-b border-slate-100 px-4 py-4">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Our Services
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Engineering material solutions for your projects
                  </p>

                </div>


                {/* Service Links */}
                <div className="p-2">

                  {serviceLinks.map((service) => {

                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-blue-50"
                      >

                        {/* Icon */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={21} />
                        </div>


                        {/* Text */}
                        <div className="min-w-0 flex-1">

                          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                            {service.title}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {service.description}
                          </p>

                        </div>


                        <ArrowRight
                          size={16}
                          className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600"
                        />

                      </Link>
                    );

                  })}

                </div>


                {/* View All Services */}
                <div className="border-t border-slate-100 p-2">

                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-600 hover:text-white"
                  >

                    View All Services

                    <ArrowRight size={16} />

                  </Link>

                </div>

              </div>

            </div>

          </div>


          {/* Projects */}
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Projects
          </Link>


          {/* Products */}
          <Link
            href="/products"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Products
          </Link>


          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Contact
          </Link>

        </nav>


        {/* =====================================================
            DESKTOP RFQ BUTTON
        ====================================================== */}
        <div className="hidden md:block">

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30"
          >

            Request RFQ

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
        >

          {mobileOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}

        </button>

      </div>


      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}
      <div
        className={`border-t border-slate-100 bg-white md:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >

        <div className="mx-auto max-w-7xl px-6 py-5">

          {/* Main Links */}
          <div className="space-y-1">

            {mainLinks.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {link.title}
              </Link>

            ))}

          </div>


          {/* Mobile Services */}
          <div className="mt-2 border-t border-slate-100 pt-2">

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700"
            >

              <span>Services</span>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />

            </button>


            {servicesOpen && (
              <div className="mt-1 space-y-1 pl-3">

                {serviceLinks.map((service) => {

                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setServicesOpen(false);
                        setMobileOpen(false);
                      }}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-blue-50"
                    >

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Icon size={18} />
                      </div>

                      <div>

                        <p className="text-sm font-medium text-slate-800">
                          {service.title}
                        </p>

                        <p className="text-xs text-slate-500">
                          {service.description}
                        </p>

                      </div>

                    </Link>
                  );

                })}


                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-blue-600"
                >
                  View All Services
                  <ArrowRight size={16} />
                </Link>

              </div>
            )}

          </div>


          {/* Mobile RFQ */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white"
          >

            Request an RFQ

            <ArrowRight size={17} />

          </Link>

        </div>

      </div>

    </header>
  );
}