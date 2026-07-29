"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroImages = [
  "/images/hero/office-hero-01.jpg",
  "/images/hero/office-hero-02.jpg",
  "/images/hero/office-hero-03.jpg",
  "/images/hero/office-hero-04.jpg",
  "/images/hero/office-hero-05.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 30000); // 30 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroImages[current]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="OREXA KSA"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
           Engineering Systems & Material Solutions
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Transforming
            <span className="text-blue-400"> Workspaces </span>
            Into Inspiring Offices
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Supplying premium Mechanical • Electrical • Fit-Out and Industrial Materials for Commercial • Industrial • Infrastructure and Government Projects
            across Saudi Arabia.
            Office Fit-Out • Renovation • Furniture • Interior Design • MEP
            

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
              Request RFQ
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black">
              Explore Products
            </button>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-blue-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}