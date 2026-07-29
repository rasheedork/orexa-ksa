"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed Al-Harbi",
    company: "Saudi Technology Group",
    review:
      "OREXA delivered our office fit-out with exceptional quality and professionalism. The project was completed on time and exceeded our expectations.",
  },
  {
    name: "Mohammed Al-Qahtani",
    company: "Business Tower Riyadh",
    review:
      "The design team created a modern workspace that improved both productivity and employee satisfaction.",
  },
  {
    name: "Faisal Al-Otaibi",
    company: "Corporate Office",
    review:
      "Excellent communication, premium workmanship, and a very professional team from start to finish.",
  },
  {
    name: "Abdullah Al-Dossary",
    company: "Financial Services Company",
    review:
      "Their attention to detail and commitment to quality made our renovation project a complete success.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-center font-semibold uppercase tracking-widest text-blue-600">
          Testimonials
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          className="mt-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="mx-auto max-w-4xl rounded-3xl bg-white p-12 text-center shadow-xl">

                <div className="mb-6 text-5xl text-yellow-500">
                  ★★★★★
                </div>

                <p className="text-xl leading-9 text-gray-700">
                  "{item.review}"
                </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {item.company}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}