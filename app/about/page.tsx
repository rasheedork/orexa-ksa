import Image from "next/image";

export const metadata = {
  title: "About OREXA | Engineering Material Solutions in Saudi Arabia",
  description:
    "Learn about OREXA, a trusted supplier of engineering materials, industrial products, and construction solutions across Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <Image
          src="/images/about/about-orexa.jpg"
          alt="About OREXA"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
              ABOUT OREXA
            </p>

            <h1 className="text-5xl font-bold lg:text-7xl">
              Engineering Material Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative h-[650px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/about/about-orexa.jpg"
              alt="OREXA Engineering"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              About Orexa
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Trusted Engineering Material Supplier in Saudi Arabia
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Orexa is a leading provider of engineering material solutions,
              serving a diverse range of industries across Saudi Arabia.
              We specialize in supplying high-quality materials and
              components that support construction, industrial,
              commercial and government projects.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Through strategic partnerships with reputable global and
              regional manufacturers, Orexa ensures every product
              complies with stringent quality standards and industry
              specifications. Our efficient supply chain and reliable
              logistics network enable timely deliveries that help keep
              our clients' projects on schedule.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Our commitment extends beyond supplying materials.
              We work closely with clients to provide tailored solutions
              that maximise performance, durability and long-term value.
              By combining dependable products with professional service,
              Orexa supports sustainable and successful project outcomes
              throughout the Kingdom.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-cyan-600">
                  500+
                </h3>

                <p className="mt-2 text-slate-600">
                  Projects Supported
                </p>
              </div>

              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-cyan-600">
                  15+
                </h3>

                <p className="mt-2 text-slate-600">
                  Years of Experience
                </p>
              </div>

              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-cyan-600">
                  120+
                </h3>

                <p className="mt-2 text-slate-600">
                  Corporate Clients
                </p>
              </div>

              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-cyan-600">
                  98%
                </h3>

                <p className="mt-2 text-slate-600">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}