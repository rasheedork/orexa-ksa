"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  ChevronRight,
  Zap,
  Cog,
  PanelsTopLeft,
  Printer,
  CheckCircle2,
  FileText,
  Truck,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

type Category =
  | "All"
  | "Mechanical"
  | "Electrical"
  | "Fit-Out"
  | "Thermal Paper";

type Product = {
  category: Exclude<Category, "All">;
  number: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  icon: typeof Cog;
};

const products: Product[] = [
  /* =========================================================
     MECHANICAL
  ========================================================== */

  {
    category: "Mechanical",
    number: "01",
    title: "HVAC Systems",
    description:
      "Reliable HVAC components and accessories for commercial, industrial, infrastructure, and building projects.",
    image: "/images/services/hvac.jpg",
    icon: Cog,
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
    category: "Mechanical",
    number: "02",
    title: "Piping Solutions",
    description:
      "Complete piping materials and accessories for water supply, drainage, HVAC, industrial, and infrastructure applications.",
    image: "/images/services/piping.jpg",
    icon: Cog,
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
    category: "Mechanical",
    number: "03",
    title: "Sanitary Fixtures",
    description:
      "Sanitary and plumbing products for commercial, residential, hospitality, and institutional projects.",
    image: "/images/services/sanitary.jpg",
    icon: Cog,
    items: [
      "Sanitary Fixtures",
      "Water Mixers",
      "Kitchen Sinks & Accessories",
      "Bathroom Accessories",
      "Plumbing Valves & Accessories",
    ],
  },

  {
    category: "Mechanical",
    number: "04",
    title: "Life & Safety Equipment",
    description:
      "Fire protection and personal safety equipment supporting safer project and operational environments.",
    image: "/images/services/fire-safety.jpg",
    icon: ShieldCheck,
    items: [
      "Fire Extinguishers",
      "Firefighting Gas & Suppression Systems",
      "Fire Cabinets",
      "Fire Alarms",
      "Protective Overalls",
      "Head Protection",
      "Eye Protection",
      "Chemical Protection",
      "Safety Cabinets",
    ],
  },

  /* =========================================================
     ELECTRICAL
  ========================================================== */

  {
    category: "Electrical",
    number: "05",
    title: "Lighting Solutions",
    description:
      "Professional lighting products for indoor, outdoor, commercial, industrial, and specialized applications.",
    image: "/images/services/lighting.jpg",
    icon: Zap,
    items: [
      "Ballasts",
      "Emergency Lighting",
      "Flashlights",
      "Hand & Portable Lamps",
      "Hazardous Location Fixtures",
      "Indoor Fixtures",
      "Indoor HID Fixtures",
      "Indoor LED Lighting Fixtures",
      "Work Site Lighting",
      "Lamps",
      "Light Bulbs",
      "Outdoor Area Fixtures",
      "Outdoor LED Lighting Fixtures",
      "Task Lights",
      "Track & Recessed Lighting Fixtures",
    ],
  },

  {
    category: "Electrical",
    number: "06",
    title: "Audio Visual Equipment",
    description:
      "Audio visual and communication equipment for meeting rooms, offices, training facilities, and commercial environments.",
    image: "/images/services/audio-visual.jpg",
    icon: Zap,
    items: [
      "Projectors",
      "Projection Screens",
      "Speakers",
      "Microphones",
      "Amplifiers",
      "Video Conferencing Systems",
    ],
  },

  {
    category: "Electrical",
    number: "07",
    title: "Cables & Wires",
    description:
      "Electrical, power, telecommunications, and cable-related materials for modern building and infrastructure systems.",
    image: "/images/services/cables.jpg",
    icon: Zap,
    items: [
      "Power Cables & Wires",
      "Telecommunication Cables & Wires",
      "Copper & Aluminum Rods",
      "Polymers",
    ],
  },

  {
    category: "Electrical",
    number: "08",
    title: "Wiring Devices",
    description:
      "Reliable wiring accessories and electrical devices for residential, commercial, industrial, and project applications.",
    image: "/images/services/wiring-devices.jpg",
    icon: Zap,
    items: [
      "Sockets",
      "Grid Wiring",
      "Switches",
      "Plugs & Fuses",
      "Weatherproof Switches",
      "Weatherproof Sockets",
      "Switches & Sockets",
    ],
  },

  /* =========================================================
     FIT-OUT
  ========================================================== */

  {
    category: "Fit-Out",
    number: "09",
    title: "Flooring Materials",
    description:
      "High-quality flooring systems combining durability, aesthetics, performance, and practical installation requirements.",
    image: "/images/services/flooring.jpg",
    icon: PanelsTopLeft,
    items: [
      "Carpets",
      "Vinyl",
      "Ceramic Tiles",
      "Porcelain Tiles",
      "Natural Stone",
      "Laminate",
      "Engineered Wood",
      "Solid Wood",
      "Concrete",
      "Terrazzo",
    ],
  },

  {
    category: "Fit-Out",
    number: "10",
    title: "Partition Materials",
    description:
      "Flexible partition systems for modern offices, commercial buildings, hospitality, and interior environments.",
    image: "/images/services/partitions.jpg",
    icon: PanelsTopLeft,
    items: [
      "Drywall",
      "Demountable Partitions",
      "Glass Partitions",
      "Operable Walls",
      "Folding Partitions",
    ],
  },

  {
    category: "Fit-Out",
    number: "11",
    title: "Furniture & Fittings",
    description:
      "Functional furniture and interior fittings for offices, commercial spaces, hospitality, and project environments.",
    image: "/images/services/furniture.jpg",
    icon: PanelsTopLeft,
    items: [
      "Chairs",
      "Desks",
      "Tables",
      "Cabinets",
      "Shelves",
      "Storage Units",
      "Decorative Items",
    ],
  },

  {
    category: "Fit-Out",
    number: "12",
    title: "Ceiling Materials",
    description:
      "Ceiling systems designed to support modern architectural, acoustic, aesthetic, and functional requirements.",
    image: "/images/services/ceilings.jpg",
    icon: PanelsTopLeft,
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
    category: "Fit-Out",
    number: "13",
    title: "Surface Finishes",
    description:
      "Decorative and protective finishes designed to enhance the appearance and performance of interior spaces.",
    image: "/images/services/surface-finishes.jpg",
    icon: PanelsTopLeft,
    items: [
      "Paints",
      "Coatings",
      "Wallpaper",
      "Wall Coverings",
      "Decorative Finishes",
    ],
  },

  {
    category: "Fit-Out",
    number: "14",
    title: "Sustainable Materials",
    description:
      "Material options supporting environmentally responsible construction and modern sustainable design requirements.",
    image: "/images/services/sustainable.jpg",
    icon: PanelsTopLeft,
    items: [
      "Recycled Content Materials",
      "Low-Emitting Materials",
      "Energy-Efficient Products",
    ],
  },

  /* =========================================================
     THERMAL PAPER
  ========================================================== */

  {
    category: "Thermal Paper",
    number: "15",
    title: "80mm Thermal Paper Rolls",
    description:
      "Reliable thermal receipt rolls suitable for POS machines used in retail, hospitality, supermarkets, and high-volume operations.",
    image: "/images/services/thermal-paper.jpg",
    icon: Printer,
    items: [
      "80mm / 3 1/8 inch Width",
      "Multiple GSM Options",
      "Different Core Sizes",
      "Multiple Roll Lengths",
      "Customized Packing",
    ],
  },

  {
    category: "Thermal Paper",
    number: "16",
    title: "57/58mm Thermal Paper Rolls",
    description:
      "Compact thermal paper rolls for handheld POS terminals, compact printers, kiosks, and mobile devices.",
    image: "/images/services/thermal-paper.jpg",
    icon: Printer,
    items: [
      "57mm / 58mm Width",
      "Multiple GSM Options",
      "Different Core Sizes",
      "Multiple Roll Lengths",
      "Customized Packing",
    ],
  },

  {
    category: "Thermal Paper",
    number: "17",
    title: "Custom Configurations",
    description:
      "Customized thermal paper solutions designed according to customer specifications, branding, and packaging requirements.",
    image: "/images/services/thermal-paper.jpg",
    icon: Printer,
    items: [
      "Logo Printing",
      "Custom Packaging",
      "Carton Labeling",
      "Custom Specifications",
      "MOQ-Based Production",
      "Lead-Time Planning",
    ],
  },

  {
    category: "Thermal Paper",
    number: "18",
    title: "Bulk Supply",
    description:
      "High-volume thermal paper supply for retail chains, hospitality groups, supermarkets, and multi-branch operations.",
    image: "/images/services/thermal-paper.jpg",
    icon: Printer,
    items: [
      "Bulk Volumes",
      "Multi-Branch Supply",
      "FOB Supply",
      "CIF Supply",
      "Local Delivery",
      "RFQ-Based Supply",
    ],
  },
];

const categoryButtons: Category[] = [
  "All",
  "Mechanical",
  "Electrical",
  "Fit-Out",
  "Thermal Paper",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {

      const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchMatch =
        searchTerm.trim() === "" ||
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.items.some((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[600px] overflow-hidden bg-slate-950">

        <Image
          src="/images/hero/office-hero-03.jpg"
          alt="OREXA Engineering Products"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-28 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="mb-7 flex items-center gap-2 text-sm text-white/60">

              <Link
                href="/"
                className="hover:text-white"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <span className="text-blue-400">
                Products
              </span>

            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              Engineering Materials Catalogue

            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Products &

              <span className="block text-blue-400">
                Material Solutions
              </span>

            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-blue-500" />

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">

              Explore OREXA&apos;s range of mechanical, electrical,
              fit-out, and thermal paper products sourced for
              commercial, industrial, infrastructure, residential,
              and government projects.

            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >

              Request Product Information

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            OREXA Product Network
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

            Materials for

            <span className="text-blue-600">
              {" "}Every Project
            </span>

          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">

            From HVAC and piping systems to electrical materials,
            interior fit-out products, and thermal paper rolls,
            OREXA provides project-ready material sourcing solutions
            tailored to customer requirements.

          </p>

        </div>

      </section>


      {/* =====================================================
          SEARCH & FILTER
      ====================================================== */}

      <section className="sticky top-20 z-30 border-y border-slate-200 bg-white/95 py-5 backdrop-blur-xl">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}

            <div className="relative w-full lg:max-w-sm">

              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Category buttons */}

            <div className="flex gap-2 overflow-x-auto pb-1">

              {categoryButtons.map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}

      <section className="bg-slate-50 py-16 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Product Catalogue
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {activeCategory === "All"
                  ? "All Products"
                  : `${activeCategory} Products`}
              </h2>

            </div>

            <div className="hidden text-sm text-slate-500 sm:block">
              {filteredProducts.length} categories
            </div>

          </div>


          {filteredProducts.length > 0 ? (

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

              {filteredProducts.map((product, index) => {

                const Icon = product.icon;

                return (

                  <motion.article
                    key={product.number}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* Image */}

                    <div className="relative h-52 overflow-hidden">

                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />


                      {/* Number */}

                      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg">
                        {product.number}
                      </div>


                      {/* Category */}

                      <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                        {product.category}
                      </div>


                      {/* Title */}

                      <div className="absolute bottom-5 left-5 right-5">

                        <h3 className="text-2xl font-bold text-white">
                          {product.title}
                        </h3>

                      </div>

                    </div>


                    {/* Content */}

                    <div className="p-6">

                      <p className="min-h-[72px] text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>


                      <div className="mt-6 border-t border-slate-100 pt-5">

                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                          Available Products
                        </p>

                        <div className="space-y-2.5">

                          {product.items.slice(0, 6).map((item) => (

                            <div
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-slate-700"
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


                        {product.items.length > 6 && (

                          <p className="mt-3 text-xs font-semibold text-blue-600">

                            + {product.items.length - 6} more products

                          </p>

                        )}

                      </div>


                      <Link
                        href="/contact"
                        className="group/link mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-600 hover:text-white"
                      >

                        Request Product Information

                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover/link:translate-x-1"
                        />

                      </Link>

                    </div>

                  </motion.article>

                );

              })}

            </div>

          ) : (

            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">

              <Search
                size={40}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No products found
              </h3>

              <p className="mt-2 text-slate-500">
                Try another product name or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white"
              >
                View All Products
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          WHY OREXA
      ====================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Why OREXA
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">

              More Than

              <span className="text-blue-600">
                {" "}Product Supply
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              We combine product sourcing, supplier relationships,
              project requirements, and logistics support to provide
              practical material solutions.

            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: "Quality Focus",
                text: "Materials sourced through reliable supplier networks.",
              },
              {
                icon: PackageCheck,
                title: "Project Ready",
                text: "Products selected according to project requirements.",
              },
              {
                icon: Truck,
                title: "Reliable Supply",
                text: "Professional procurement and delivery coordination.",
              },
              {
                icon: FileText,
                title: "RFQ Support",
                text: "Support for BOQs, specifications, quantities, and delivery requirements.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          RFQ
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-20">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <FileText size={29} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Request for Quotation
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">

            Can&apos;t Find the Product

            <span className="block">
              You Need?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">

            Send us your BOQ, item list, specifications, required
            quantities, delivery location, and timeline. Our team can
            review your requirement and source suitable materials.

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
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900"
            >

              Explore Services

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}