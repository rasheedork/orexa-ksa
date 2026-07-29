"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function ContactLocation() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf8] py-24"
      style={{
      backgroundImage: "url('/images/assets/world-map.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundSize: "90%",
      }}
    >

      {/* Orange Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-orange-500 lg:block" />

      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-8">

            <div>
              <h2 className="mb-8 text-4xl font-light tracking-wide text-[#0B2D48]">
                Head Office
              </h2>
            </div>

            <div className="space-y-7">

              <div className="flex items-start gap-5">

                <MapPin
                  className="mt-1 text-orange-500"
                  size={26}
                />

                <div>
                  <h4 className="font-semibold text-[#0B2D48]">
                    Riyadh, Saudi Arabia
                  </h4>

                  <p className="mt-2 text-lg text-slate-600">
                    14322 Al-Sulay District
                    <br />
                    Riyadh, Kingdom of Saudi Arabia
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <Phone
                  size={24}
                  className="text-orange-500"
                />

                <span className="text-lg text-slate-700">
                  +966 54 306 2495
                </span>

              </div>

              <div className="flex items-center gap-5">

                <Mail
                  size={24}
                  className="text-orange-500"
                />

                <span className="text-lg text-slate-700">
                  info@orexa-ksa.com
                </span>

              </div>

              <div className="flex items-center gap-5">

                <Globe
                  size={24}
                  className="text-orange-500"
                />

                <span className="text-lg text-slate-700">
                  www.orexa-ksa.com
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="text-center lg:text-left">

            <Image
              src="/images/orexa-logo.svg"
              alt="OREXA"
              width={240}
              height={90}
              className="mx-auto mb-8 lg:mx-0"
            />

            <h3 className="text-5xl font-light tracking-widest text-[#0B2D48]">
              OREXA
            </h3>

            <p className="mt-5 text-2xl font-light leading-relaxed tracking-wide text-[#0B2D48]">
              SYSTEMS &
              <br />
              MATERIAL
              <br />
              SOLUTIONS
            </p>

          </div>

        </div>

      </div>

      {/* WORLD MAP */}

      <div className="pointer-events-none relative mt-20">

        <Image
          src="/images/world-map.svg"
          alt="World Map"
          width={1800}
          height={800}
          className="w-full opacity-80"
        />

        {/* Saudi Location */}

        <div className="absolute left-[61%] top-[32%]">

          <div className="absolute h-10 w-10 animate-ping rounded-full bg-red-500/40" />

          <MapPin
            size={70}
            className="relative text-red-600 drop-shadow-xl"
            fill="currentColor"
          />

        </div>

      </div>

    </section>
  );
}