"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 500,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    number: 15,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 120,
    suffix: "+",
    title: "Corporate Clients",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-blue-700 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.title} className="text-center">
            <h2 className="text-5xl font-bold">
              {inView ? (
                <CountUp
                  end={item.number}
                  duration={2.5}
                />
              ) : (
                0
              )}
              {item.suffix}
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}