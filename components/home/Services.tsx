"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  href: string;
  images: string[];
}

const services: Service[] = [
  {
    title: "Office Fit-Out",
    href: "/services/office-fitout",
    images: [
      "/images/services/office-fitout-01.jpg",
      "/images/services/office-fitout-02.jpg",
      "/images/services/office-fitout-03.jpg",
      "/images/services/office-fitout-04.jpg",
      "/images/services/office-fitout-05.jpg",
      "/images/services/office-fitout-06.jpg",
    ],
  },
  {
    title: "Office Renovation",
    href: "/services/office-renovation",
    images: [
      "/images/services/office-renovation-01.jpg",
      "/images/services/office-renovation-02.jpg",
      "/images/services/office-renovation-03.jpg",
      "/images/services/office-renovation-04.jpg",
      "/images/services/office-renovation-05.jpg",
    ],
  },
  {
    title: "Office Furniture",
    href: "/services/office-furniture",
    images: [
      "/images/services/office-furniture-01.jpg",
      "/images/services/office-furniture-02.jpg",
      "/images/services/office-furniture-03.jpg",
      "/images/services/office-furniture-04.jpg",
      "/images/services/office-furniture-05.jpg",
    ],
  },
  {
    title: "Glass Partitions",
    href: "/services/glass-partition",
    images: [
      "/images/services/glass-partition-01.jpg",
      "/images/services/glass-partition-02.jpg",
      "/images/services/glass-partition-03.jpg",
      "/images/services/glass-partition-04.jpg",
      "/images/services/glass-partition-05.jpg",
      "/images/services/glass-partition-06.jpg",
    ],
  },
  {
    title: "Gypsum Ceiling",
    href: "/services/gypsum-ceiling",
    images: [
      "/images/services/gypsum-ceiling-01.jpg",
      "/images/services/gypsum-ceiling-02.jpg",
      "/images/services/gypsum-ceiling-03.jpg",
      "/images/services/gypsum-ceiling-04.jpg",
    ],
  },
  {
    title: "Flooring",
    href: "/services/flooring",
    images: [
      "/images/services/flooring-01.jpg",
      "/images/services/flooring-02.jpg",
      "/images/services/flooring-03.jpg",
      "/images/services/flooring-04.jpg",
      "/images/services/flooring-05.jpg",
      "/images/services/flooring-06.jpg",
    ],
  },
];

export default function Services() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => prev + 1);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-semibold uppercase tracking-widest text-blue-600">
          OUR SERVICES
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Complete Office Solutions
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          From concept and design to construction and furnishing, OREXA
          delivers complete turnkey office fit-out solutions.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const currentImage =
              service.images[imageIndex % service.images.length];

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-2xl shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{service.title}</h3>

                  <p className="mt-3 text-gray-600">
                    Premium quality workmanship with modern commercial office
                    standards.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}