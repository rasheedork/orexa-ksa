"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed Al-Harbi",
    company: "Saudi Technology Group",
    image: "/images/testimonials/client-01.jpg",
    review:
      "OREXA transformed our office into a premium modern workspace. The quality, execution and professionalism exceeded our expectations.",
  },
  {
    name: "Mohammed Al-Qahtani",
    company: "Business Tower",
    image: "/images/testimonials/client-02.jpg",
    review:
      "Excellent communication from start to finish. Every milestone was delivered on time with outstanding quality.",
  },
  {
    name: "Faisal Al-Otaibi",
    company: "Corporate Office",
    image: "/images/testimonials/client-03.jpg",
    review:
      "Professional engineers, premium materials and excellent workmanship. Highly recommended.",
  },
];


export default function Testimonials() {
  return (
     
    <section className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-br
        from-slate-900
        via-blue-900
        to-slate-950
        ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="mx-auto max-w-5xl">
                <div
                    className="
                    relative
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-white/30
                    bg-white/20
                    backdrop-blur-xl
                    shadow-2xl
                    p-12
                    ">
                        <div className="absolute -top-12 -right-10 text-[180px] text-white/10 font-black">
“
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                            src={item.image}
                            alt={item.name}
                            width={110}
                            height={110}
                            className="
                            rounded-full
                            border-4
                            border-white
                            object-cover
                            shadow-xl
                            "
                            />
                            

                            <h3 className="mt-6 text-3xl font-bold">
                            {item.name}
                            </h3>

                            <p className="text-gray-600">
                            {item.company}
                            </p>

                            <div className="mt-4 text-yellow-400 text-3xl">
                            ★★★★★
                            </div>

                            <p className="mt-8 text-center text-xl leading-9 text-gray-700">
                            "{item.review}"
                            </p>

                            </div>

                            </div>

                            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}