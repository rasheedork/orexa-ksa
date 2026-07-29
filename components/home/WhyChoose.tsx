import {
  Building2,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Turnkey Solutions",
    description:
      "Complete office fit-out from planning and design to execution and handover.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Professional project management ensuring every project is delivered on schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "High-quality materials and workmanship that meet international standards.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Engineers, designers and skilled technicians with years of industry experience.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-blue-600 font-semibold uppercase tracking-widest">
          WHY OREXA
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Why Choose OREXA KSA
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          We combine innovative design, technical expertise and quality
          craftsmanship to create inspiring workspaces across Saudi Arabia.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}