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
    }, 15000); // 15 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
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
            alt="OREXA - Engineering Material Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          {/* Eyebrow */}
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
            Engineering Material Solutions
          </span>

          {/* Main Heading */}
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Reliable Materials.
            <span className="block text-blue-400">
              Engineering Excellence.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-200 md:text-lg md:leading-8">
            Orexa delivers premium Mechanical, Electrical, Fit-Out, and
            Industrial materials for commercial, industrial, residential,
            infrastructure, and government projects across Saudi Arabia.
          </p>

          {/* Supporting Text */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
            Trusted sourcing, certified products, efficient logistics, and
            dependable project support — from procurement to delivery.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/30"
            >
              Request an RFQ
            </button>

            <button
              type="button"
              className="rounded-xl border border-white/70 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              Explore Our Solutions
            </button>

          </div>

          {/* Service Highlights */}
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/90">
            <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
              Mechanical
            </span>

            <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
              Electrical
            </span>

            <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
              Fit-Out
            </span>

            <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
              Industrial
            </span>
          </div>

        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "scale-125 bg-blue-500"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-xs text-white/70 md:flex">
        <span>Scroll to explore</span>
        <div className="h-8 w-px bg-white/40" />
      </div>
    </section>
  );
}